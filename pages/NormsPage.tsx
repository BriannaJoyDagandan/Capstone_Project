import React from 'react';
import { LOCAL_NORMS } from '../constants';
import AnimatedElement from '../components/AnimatedElement';

const NormsPage: React.FC = () => {
  return (
    <section id="norms" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Local Norms & Customs</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Make your visit enjoyable by following local customs. Respect for the community and environment ensures La Trinidad remains beautiful.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LOCAL_NORMS.map((norm, index) => (
            <AnimatedElement key={index} delay={index * 100}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-100 text-emerald-600 rounded-full w-12 h-12 flex items-center justify-center text-xl mr-4">
                    <i className={norm.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{norm.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{norm.description}</p>
                <ul className="space-y-2 text-sm">
                  {norm.points.map((point, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <i className="fas fa-check text-emerald-500 mt-1 mr-3"></i>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedElement>
          ))}
        </div>
        
        <AnimatedElement delay={300}>
          <div className="mt-16 bg-emerald-50 border-l-4 border-emerald-500 text-emerald-900 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Important Reminders</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold">Best Time to Visit</h4>
                <p className="text-sm">December to February is peak season for strawberries. March to May offers pleasant weather. The rainy season is June to October.</p>
              </div>
              <div>
                <h4 className="font-semibold">Getting Around</h4>
                <p className="text-sm">Jeepneys and tricycles are common. You can also rent a car. La Trinidad is about 10-15 minutes from Baguio City.</p>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default NormsPage;
