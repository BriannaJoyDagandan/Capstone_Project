import type { TouristSpot } from '../types';

export const fetchTouristSpots = async (): Promise<TouristSpot[]> => {
  const response = await fetch('/api/tourist-spots');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: TouristSpot[] = await response.json();
  return data;
};

export const submitReview = async (spotId: string, review: { name: string; email: string; rating: number; comment?: string }): Promise<TouristSpot> => {
  const response = await fetch(`/api/tourist-spots/${spotId}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred' }));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }
  
  const updatedSpot: TouristSpot = await response.json();
  return updatedSpot;
};