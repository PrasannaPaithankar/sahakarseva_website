<%@ WebHandler Language="C#" Class="ContactHandler" %>
<%@ Assembly Name="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>

using System;
using System.Web;
using System.IO;
using System.Net.Mail;
using System.Net;
using System.Configuration;
using System.Web.Script.Serialization;
using System.Collections.Generic;

public class ContactHandler : IHttpHandler
{
    public void ProcessRequest(HttpContext context)
    {
        // Allow CORS for development (if needed)
        context.Response.AddHeader("Access-Control-Allow-Origin", "*");
        context.Response.AddHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
        context.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type");

        // Handle preflight requests
        if (context.Request.HttpMethod == "OPTIONS")
        {
            context.Response.StatusCode = 200;
            context.Response.End();
            return;
        }

        context.Response.ContentType = "application/json";

        try
        {
            if (context.Request.HttpMethod != "POST")
            {
                context.Response.StatusCode = 405;
                context.Response.Write("{\"error\": \"Method not allowed\"}");
                return;
            }

            // Read JSON body
            string jsonBody = new StreamReader(context.Request.InputStream).ReadToEnd();
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            var data = serializer.Deserialize<Dictionary<string, string>>(jsonBody);

            if (data == null)
            {
                context.Response.StatusCode = 400;
                context.Response.Write("{\"error\": \"Invalid JSON\"}");
                return;
            }

            // Extract form fields
            string firstName = data.ContainsKey("first-name") ? data["first-name"] : "";
            string lastName = data.ContainsKey("last-name") ? data["last-name"] : "";
            string email = data.ContainsKey("email") ? data["email"] : "";
            string message = data.ContainsKey("message") ? data["message"] : "";

            // Build Email Content
            string emailBody = string.Format(@"
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> {0} {1}</p>
                <p><strong>Email:</strong> {2}</p>
                <p><strong>Message:</strong></p>
                <p>{3}</p>
            ", firstName, lastName, email, message.Replace("\n", "<br>"));

            // Get SMTP settings from Web.config
            string smtpServer = ConfigurationManager.AppSettings["SmtpServer"];
            int smtpPort = Convert.ToInt32(ConfigurationManager.AppSettings["SmtpPort"] ?? "587");
            string smtpUser = ConfigurationManager.AppSettings["SmtpUser"];
            string smtpPass = ConfigurationManager.AppSettings["SmtpPass"];
            string targetEmail = ConfigurationManager.AppSettings["TargetEmail"] ?? "admin@sahakarseva.com";
            bool enableSsl = Convert.ToBoolean(ConfigurationManager.AppSettings["SmtpEnableSsl"] ?? "true");

            using (MailMessage mail = new MailMessage())
            {
                mail.From = new MailAddress(smtpUser, "Website Contact Form");
                mail.To.Add(targetEmail);
                mail.Subject = "New Website Contact Inquiry from " + firstName;
                mail.Body = emailBody;
                mail.IsBodyHtml = true;

                // ReplyTo allows you to reply directly to the customer's email
                mail.ReplyToList.Add(new MailAddress(email));

                using (SmtpClient smtp = new SmtpClient(smtpServer, smtpPort))
                {
                    smtp.Credentials = new NetworkCredential(smtpUser, smtpPass);
                    smtp.EnableSsl = enableSsl;
                    smtp.Send(mail);
                }
            }

            context.Response.StatusCode = 200;
            context.Response.Write("{\"success\": true}");
        }
        catch (Exception ex)
        {
            // Log error locally and return 500
            context.Response.StatusCode = 500;
            context.Response.Write("{\"error\": \"An error occurred while sending the email.\", \"details\": \"" + ex.Message + "\"}");
        }
    }

    public bool IsReusable
    {
        get { return false; }
    }
}
