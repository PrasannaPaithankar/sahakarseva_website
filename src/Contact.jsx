import React, { useState } from "react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
      // REPLACE THIS URL WITH YOUR ACTUAL SERVER ENDPOINT
      const response = await fetch("/backend/contact.ashx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        try {
          const errData = await response.json();
          alert(`Failed to send message: ${errData.error || "Unknown error"}\nDetails: ${errData.details || "No details provided"}`);
        } catch {
          alert(`Failed to send message. Server responded with status: ${response.status} ${response.statusText}`);
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="px-4 py-10 lg:py-14">
      <div className="container mx-auto max-w-screen-xl text-center">
        <h1 className="mb-6 text-4xl lg:text-5xl font-bold text-gray-900">
          We're Here to Help
        </h1>
        <p className="mb-12 text-xl mx-auto max-w-3xl text-gray-600">
          Whether it's a question about our services, a request for
          technical assistance, or suggestions for improvement, our team is
          eager to hear from you.
        </p>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-start text-left">
          <div className="h-full min-h-[400px] rounded-xl overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5304.120566233392!2d72.84412707637271!3d19.1807891486723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7006236cbbd%3A0x798246ec21d7f8e7!2sRele%20Smruti%20Building!5e1!3m2!1sen!2sin!4v1766425989172!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px]"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  First Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last-name"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Your Message
              </label>
              <textarea
                rows={5}
                name="message"
                placeholder="Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all resize-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="mt-16 py-8">
          <p className="mb-4 text-gray-500 font-medium uppercase tracking-wider">
            or contact us at
          </p>
          <div className="flex flex-col justify-center gap-2">
            <a href="mailto:admin@sahakarseva.com" className="text-2xl font-bold text-blue-900 hover:text-blue-600 transition-colors">
              admin@sahakarseva.com
            </a>
            <a href="tel:+919930147179" className="text-2xl font-bold text-blue-900 hover:text-blue-600 transition-colors">
              +91 99301 47179
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
