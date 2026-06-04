import React from "react";
import { eventsData as events } from "./data/eventsData";

export default function Home() {
    return (
        <div className="mx-auto max-w-screen-xl py-12 px-4">
            <div className="mb-4 flex justify-center items-center py-12">
                <img
                    alt="BM Sahakar Logo"
                    className="h-auto w-full max-w-xs object-contain"
                    src="/public/images/BM Logo.jpg"
                />
            </div>

            <section className="mb-16">
                <h2 className="text-4xl font-bold text-[#84056E] mb-6 border-b-2 border-gray-100 pb-2">
                    Who are we?
                </h2>
                <p className="text-gray-700 text-xl leading-relaxed mb-8">
                    BM Sahakar is a Maharashtra-based leading institute in providing
                    society services in Management, Accounting, and Administration, along
                    with Education and Training for aspirants who want to build a career
                    in the Housing Society sector.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-4xl font-bold text-[#84056E] mb-6 border-b-2 border-gray-100 pb-2">
                    Upcoming Events
                </h2>
                <div className="flex overflow-x-auto gap-6 pb-4 snap-x">
                    {events.map((evt) => (
                        <div key={evt.id} className="min-w-[300px] md:min-w-[350px] bg-white border border-gray-200 rounded-lg p-6 shadow-sm snap-center hover:shadow-md transition-shadow">
                            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">{evt.date}</span>
                            <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">{evt.title}</h3>
                            <p className="text-gray-600">{evt.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-4xl font-bold text-[#84056E] mb-6 border-b-2 border-gray-100 pb-2">
                    Services Offered
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 text-lg">
                    <ul className="list-inside space-y-3 text-gray-700">
                        <li>Advisory on SRA development</li>
                        <li>Housing development/redevelopment</li>
                        <li>Conveyance and deemed conveyancing of Co-operative Housing Societies</li>
                        <li>Vetting and drafting of all kinds of agreements</li>
                        <li>Training to society and committee members</li>
                        <li>Society elections</li>
                    </ul>
                    <ul className="list-inside space-y-3 text-gray-700">
                        <li>Educational Programs</li>
                        <li>Training Workshops</li>
                        <li>Consultancy Services</li>
                        <li>Society Account, Billing & Audit</li>
                        <li>Society Manger Services</li>
                        <li>Recovery Legal Process</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
