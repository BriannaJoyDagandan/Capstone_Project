import React, { useState, useEffect } from 'react';
import type { TouristSpot } from '../types';
import { fetchTouristSpots } from '../services/apiService';
import TouristSpotModal from '../components/TouristSpotModal';
import StarRating from '../components/StarRating';
import AnimatedElement from '../components/AnimatedElement';

const TouristSpotsPage: React.FC = () => {
  const [selectedSpot, setSelectedSpot] = useState<TouristSpot | null>(null);
  const [spots, setSpots] = useState<TouristSpot[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getSpots = async () => {
      try {
        const data = await fetchTouristSpots();
        setSpots(data);
      } catch (err) {
        setError('Failed to load tourist spots. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getSpots();
  }, []);

  const handleReviewSubmitted = (updatedSpot: TouristSpot) => {
    setSpots(prevSpots =>
      prevSpots.map(s => (s._id === updatedSpot._id ? updatedSpot : s))
    );
    setSelectedSpot(updatedSpot); // Keep modal open with updated data
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="text-center text-gray-600">
          <i className="fas fa-spinner fa-spin text-4xl text-emerald-500"></i>
          <p className="mt-4">Loading destinations...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center text-red-600 bg-red-100 p-6 rounded-lg">
          <i className="fas fa-exclamation-triangle text-4xl text-red-500"></i>
          <p className="mt-4 font-semibold">{error}</p>
        </div>
      );
    }
    
    if (spots.length === 0) {
      return (
        <div className="text-center text-gray-600">
          <i className="fas fa-map-signs text-4xl text-emerald-500"></i>
          <p className="mt-4">No tourist spots found. Please check back later.</p>
        </div>
      );
    }


    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {spots.map((spot, index) => (
          <AnimatedElement key={spot._id} delay={index * 100}>
            <div 
              className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedSpot(spot)}
            >
              <div className="relative h-56">
                <img src={spot.image} alt={spot.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">View Details</span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{spot.name}</h3>
                 <div className="flex items-center gap-2 mb-3">
                  <StarRating rating={spot.averageRating || 0} />
                  <span className="text-xs text-gray-500">
                    ({spot.reviews?.length || 0})
                  </span>
                </div>
                <p className="text-emerald-600 text-sm font-semibold mt-auto">{spot.location}</p>
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>
    );
  };


  return (
    <>
      <section id="gallery" className="py-20 md:py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tourist Spots</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Explore the beautiful attractions and destinations that make La Trinidad a unique tourist destination. Click on a spot to learn more.
              </p>
            </div>
          </AnimatedElement>
          {renderContent()}
        </div>
      </section>
      
      {selectedSpot && (
        <TouristSpotModal 
          spot={selectedSpot} 
          onClose={() => setSelectedSpot(null)}
          onReviewSubmitted={handleReviewSubmitted}
        />
      )}
    </>
  );
};

export default TouristSpotsPage;