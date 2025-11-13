import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DataConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentStatus = localStorage.getItem('dataConsentStatus');
    if (!consentStatus) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
  }, []);

  const handleConsent = (consent: 'accepted' | 'declined') => {
    localStorage.setItem('dataConsentStatus', consent);
    setIsVisible(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-6 md:p-8 text-center animate-slide-up">
        <div className="mb-4">
            <i className="fas fa-cookie-bite text-4xl text-emerald-500"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Your Privacy Matters</h2>
        <p className="text-sm text-gray-600 mb-6">
          We use anonymized data from your interactions to improve our services and identify popular attractions. This helps us make the website better for everyone. By clicking "Accept", you agree to our data practices. Learn more in our{' '}
          <Link to="/privacy-policy" className="font-semibold text-emerald-600 hover:underline">
            Privacy Policy
          </Link>.
        </p>
        <div className="flex flex-col sm:flex-row-reverse items-center justify-center gap-3">
          <button
            onClick={() => handleConsent('accepted')}
            className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-emerald-600 border border-transparent rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Accept
          </button>
          <button
            onClick={() => handleConsent('declined')}
            className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataConsentBanner;