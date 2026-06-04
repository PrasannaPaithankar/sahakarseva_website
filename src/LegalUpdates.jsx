import React from 'react';
import { legalUpdatesData as updates } from './data/legalUpdatesData';

export default function LegalUpdates() {
  return (
    <div className="mx-auto max-w-screen-xl py-12 px-4 min-h-[60vh]">
      <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center text-gray-900">Legal Updates</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Stay informed with the latest legal, regulatory, and tax updates relevant to your housing society and business.
      </p>

      <div className="space-y-6 max-w-4xl mx-auto">
        {updates.map((update, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{update.title}</h2>
              <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{update.date}</span>
            </div>
            <p className="text-gray-700 mb-4">{update.summary}</p>
            <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">Read more &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  );
}

