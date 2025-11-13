import React from 'react';
import { STATS } from '../constants';
import AnimatedElement from '../components/AnimatedElement';

const AboutPage: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About La Trinidad</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              La Trinidad is a municipality in the province of Benguet, Philippines. Known as the "Strawberry Capital of the Philippines," it offers a unique blend of agricultural beauty, cool mountain climate, and rich cultural heritage.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {STATS.map((stat, index) => (
            <AnimatedElement key={index} delay={index * 100}>
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow h-full">
                <i className={`${stat.icon} text-3xl text-emerald-500 mb-3`}></i>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</p>
                <p className="text-xl font-bold text-gray-800 mt-1">{stat.value}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedElement delay={200}>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Heritage</h3>
              <p className="text-gray-600 mb-4">La Trinidad has a rich history dating back to the pre-colonial era. The municipality was named after Doña Trinidad de Leon, wife of the former Spanish Governor-General Narciso Claveria.</p>
              <p className="text-gray-600">Today, it serves as the capital of Benguet and continues to preserve its cultural traditions while embracing modern development.</p>
            </div>
          </AnimatedElement>
          <AnimatedElement delay={300}>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Visit?</h3>
              <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start"><i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i><span>Experience strawberry and vegetable farming firsthand</span></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i><span>Enjoy the cool mountain climate year-round</span></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i><span>Explore vibrant flower gardens and agricultural terraces</span></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-emerald-500 mt-1 mr-3"></i><span>Immerse in local Ibaloi and Kankanaey culture</span></li>
              </ul>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
