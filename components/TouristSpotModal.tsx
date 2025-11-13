import React, { useEffect, useState } from 'react';
import type { TouristSpot } from '../types';
import { submitReview } from '../services/apiService';
import StarRating from './StarRating';

interface TouristSpotModalProps {
  spot: TouristSpot;
  onClose: () => void;
  onReviewSubmitted: (updatedSpot: TouristSpot) => void;
}

const StarRatingInput: React.FC<{ rating: number; setRating: (rating: number) => void; disabled: boolean }> = ({ rating, setRating, disabled }) => (
    <div className="flex text-3xl text-gray-300">
        {[1, 2, 3, 4, 5].map(star => (
            <button
                type="button"
                key={star}
                className={`transition-colors duration-150 ${rating >= star ? 'text-yellow-400' : 'hover:text-yellow-300'} disabled:text-gray-300 disabled:cursor-not-allowed`}
                onClick={() => setRating(star)}
                disabled={disabled}
                aria-label={`Rate ${star} star`}
            >
                <i className="fas fa-star"></i>
            </button>
        ))}
    </div>
);


const TouristSpotModal: React.FC<TouristSpotModalProps> = ({ spot, onClose, onReviewSubmitted }) => {
  const [activeTab, setActiveTab] = useState('details');

  // Review form state
  const [reviewName, setReviewName] = useState('');
  const [reviewEmail, setReviewEmail] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewComment, setReviewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewRating === 0 || !reviewName.trim() || !reviewEmail.trim()) {
      setSubmitError('Please provide your name, email, and a star rating.');
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      if (!spot._id) throw new Error("Spot ID is missing.");
      const updatedSpot = await submitReview(spot._id, {
        name: reviewName,
        email: reviewEmail,
        rating: reviewRating,
        comment: reviewComment,
      });
      onReviewSubmitted(updatedSpot);
      setSubmitSuccess(true);
      // Reset form
      setReviewName('');
      setReviewEmail('');
      setReviewRating(0);
      setReviewComment('');
      setTimeout(() => setSubmitSuccess(false), 3000); // Hide success message after 3 seconds
    } catch (error: any) {
      setSubmitError(error.message || 'Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  const emergencyIcon = (type: 'Hospital' | 'Police') => {
      return type === 'Hospital' ? 'fa-hospital' : 'fa-shield-alt';
  }

  const tabClass = (tabName: string) => 
    `px-1 py-4 border-b-2 font-medium text-sm transition-colors duration-200 ${
      activeTab === tabName 
        ? 'border-emerald-500 text-emerald-600' 
        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
    }`;
  
  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col relative overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 bg-white/50 hover:bg-white/80 rounded-full w-8 h-8 flex items-center justify-center z-20"
          aria-label="Close modal"
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="flex-shrink-0 h-56 md:h-72 w-full overflow-hidden">
             <img src={spot.image} alt={spot.alt} className="w-full h-full object-cover" />
        </div>
        
        <div className="p-6 md:p-8 flex flex-col flex-grow overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{spot.name}</h2>
          <div className="flex items-center gap-4 mb-4">
            <p className="text-md text-gray-500">{spot.location}</p>
            <div className="flex items-center gap-2">
                <StarRating rating={spot.averageRating || 0} />
                <span className="text-sm text-gray-600">{spot.averageRating?.toFixed(1) || 'N/A'} ({spot.reviews?.length || 0} reviews)</span>
            </div>
          </div>
          
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button className={tabClass('details')} onClick={() => setActiveTab('details')}>
                Details
              </button>
               <button className={tabClass('reviews')} onClick={() => setActiveTab('reviews')}>
                Reviews ({spot.reviews?.length || 0})
              </button>
              <button className={tabClass('map')} onClick={() => setActiveTab('map')}>
                Map
              </button>
            </nav>
          </div>

          <div className="flex-grow mt-6 overflow-hidden">
            {activeTab === 'details' && (
              <div className="h-full overflow-y-auto pr-4 -mr-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm">
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <i className="fas fa-clock text-xl text-emerald-600"></i>
                        <div>
                            <h4 className="font-semibold text-gray-700">Opening Hours</h4>
                            <p className="text-gray-600">{spot.openingHours}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <i className="fas fa-calendar-alt text-xl text-emerald-600"></i>
                        <div>
                            <h4 className="font-semibold text-gray-700">Best Time to Visit</h4>
                            <p className="text-gray-600">{spot.bestTimeToVisit}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <i className="fas fa-exclamation-triangle text-xl text-red-500"></i>
                        <div>
                            <h4 className="font-semibold text-gray-700">Emergency</h4>
                            <p className="text-gray-600">Dial 911</p>
                        </div>
                    </div>
                </div>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-3">Overview</h3>
                        <p className="text-gray-600 leading-relaxed">{spot.description}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-3">History</h3>
                        <p className="text-gray-600 leading-relaxed">{spot.history}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-3">Nearby Services</h3>
                        <ul className="space-y-2">
                            {spot.nearbyEmergency.map((service, index) => (
                                <li key={index} className="flex items-center text-gray-600 text-sm">
                                    <i className={`fas ${emergencyIcon(service.type)} w-5 text-center mr-3 text-red-500`}></i>
                                    <span className="font-semibold">{service.name} ({service.type})</span>
                                    <span className="ml-auto text-gray-500">{service.distance}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-3">Gallery</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {spot.gallery.map((imgUrl, index) => (
                                <div key={index} className="rounded-lg overflow-hidden aspect-w-1 aspect-h-1">
                                    <img src={imgUrl} alt={`${spot.name} gallery image ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
                <div className="md:border-r md:pr-8 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex-shrink-0">Leave a Review</h3>
                  <form onSubmit={handleReviewSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                        <label htmlFor="review-name" className="block text-sm font-medium text-gray-700">Your Name</label>
                        <input type="text" id="review-name" value={reviewName} onChange={e => setReviewName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" disabled={isSubmitting} />
                        </div>
                        <div>
                        <label htmlFor="review-email" className="block text-sm font-medium text-gray-700">Your Email</label>
                        <input type="email" id="review-email" value={reviewEmail} onChange={e => setReviewEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" disabled={isSubmitting} />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Rating</label>
                        <StarRatingInput rating={reviewRating} setRating={setReviewRating} disabled={isSubmitting} />
                    </div>
                     <div>
                      <label htmlFor="review-comment" className="block text-sm font-medium text-gray-700">Comment (Optional)</label>
                      <textarea id="review-comment" value={reviewComment} onChange={e => setReviewComment(e.target.value)} rows={3} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" disabled={isSubmitting}></textarea>
                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting} className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:bg-gray-400 disabled:cursor-not-allowed">
                            {isSubmitting ? 'Submitting...' : 'Submit Review'}
                        </button>
                    </div>
                    {submitError && <p className="text-sm text-red-600">{submitError}</p>}
                    {submitSuccess && <p className="text-sm text-green-600">Thank you! Your review has been submitted.</p>}
                  </form>
                </div>
                <div className="h-full overflow-y-auto flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex-shrink-0">What Others Are Saying</h3>
                    {spot.reviews && spot.reviews.length > 0 ? (
                        <div className="space-y-6 pr-4 -mr-4">
                            {[...spot.reviews].reverse().map(review => (
                                <div key={review._id} className="border-b border-gray-200 pb-4">
                                    <div className="flex items-center mb-1">
                                        <h4 className="font-semibold text-gray-800">{review.name}</h4>
                                        <StarRating rating={review.rating} className="ml-4 text-sm" />
                                    </div>
                                    <p className="text-xs text-gray-500 mb-2">Reviewed on {new Date(review.createdAt!).toLocaleDateString()}</p>
                                    <p className="text-gray-600 text-sm">{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-500 py-10">
                            <i className="fas fa-comment-slash text-3xl mb-3"></i>
                            <p>No reviews yet. Be the first to share your experience!</p>
                        </div>
                    )}
                </div>
              </div>
            )}
            {activeTab === 'map' && (
              <div className="h-full w-full rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src={spot.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${spot.name}`}
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotModal;