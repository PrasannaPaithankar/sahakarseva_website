import React from 'react';
import { teamData } from './data/teamData';

export default function Team() {
  return (
    <div className="mx-auto max-w-screen-xl py-12 px-4">
      <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center text-gray-900">Team</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-100 pb-2">Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.founders.map((member, index) => (
             <div key={index} className="p-6 text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border border-gray-200 shadow-sm" />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-700 text-base text-justify">{member.description}</p>
             </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-100 pb-2">Board of Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.managementBoard.map((member, index) => (
            <div key={index} className="p-6 flex items-center gap-4">
              <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full object-cover border border-gray-200" />
              <div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-gray-100 pb-2">Program Co-ordinators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamData.programCoordinators.map((member, index) => (
            <div key={index} className="p-6 flex items-center gap-4">
               <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full object-cover border border-gray-200" />
               <div>
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
               </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

