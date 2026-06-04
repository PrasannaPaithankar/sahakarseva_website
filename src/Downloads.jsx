import React from 'react';
import { downloadsData as documents } from './data/downloadsData';

export default function Downloads() {
  return (
    <div className="mx-auto max-w-screen-xl py-12 px-4 min-h-[60vh]">
      <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center text-gray-900">Downloads</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Access important forms, guidelines, and templates related to society management and accounting.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow border border-gray-100 flex flex-col justify-between items-start">
            <div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded mb-4 inline-block">{doc.type}</span>
              <h3 className="text-xl font-semibold mb-4">{doc.name}</h3>
            </div>
            <a href={doc.link} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors w-full mt-4 text-center">
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

