import React from 'react';
import { EMERGENCY_CONTACTS, EMERGENCY_HOTLINES } from '../constants';
import AnimatedElement from '../components/AnimatedElement';

const EmergencyPage: React.FC = () => {
  return (
    <section id="emergency" className="py-20 md:py-32 bg-red-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-800">Emergency Services</h2>
            <p className="mt-4 text-lg text-red-700 max-w-3xl mx-auto">
              Important emergency contact information for hospitals, police stations, and other essential services in La Trinidad.
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement delay={100}>
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-12 flex items-center shadow-md">
            <i className="fas fa-exclamation-triangle text-2xl mr-4"></i>
            <p>In case of emergency, dial <span className="font-bold text-lg">911</span> for immediate assistance. Save these numbers in your phone before traveling.</p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {EMERGENCY_CONTACTS.map((contact, index) => (
            <AnimatedElement key={index} delay={index * 100}>
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-5 h-full">
                <div className="bg-red-500 text-white rounded-full w-16 h-16 flex-shrink-0 flex items-center justify-center text-2xl mt-1">
                  <i className={contact.icon}></i>
                </div>
                <div className="flex-grow">
                  <div className="text-sm font-semibold text-red-600 uppercase tracking-wide">{contact.type}</div>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">{contact.name}</h3>
                  <div className="mt-3 text-sm text-gray-600 space-y-2">
                    <p className="flex items-start"><i className="fas fa-map-marker-alt w-4 text-center mr-2 mt-1 text-gray-400"></i><span>{contact.address}</span></p>
                    <p className="flex items-center"><i className="fas fa-phone w-4 text-center mr-2 text-gray-400"></i> <a href={`tel:${contact.phone}`} className="hover:text-red-600">{contact.phone}</a></p>
                    <p className="flex items-center"><i className="fas fa-clock w-4 text-center mr-2 text-gray-400"></i><span>{contact.hours}</span></p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={300}>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Emergency Hotlines</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {EMERGENCY_HOTLINES.map((hotline, index) => (
                <div key={index} className="text-center border border-gray-200 p-4 rounded-lg">
                  <p className="text-gray-500">{hotline.label}</p>
                  <a href={hotline.href} className="text-2xl font-bold text-red-600 hover:underline">{hotline.number}</a>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-md">
              <p><strong>Tip:</strong> Learn basic Ilocano or Filipino phrases for emergencies. Most locals speak English, but basic phrases can be helpful.</p>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default EmergencyPage;