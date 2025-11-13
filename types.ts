export interface NavLinkItem {
  name: string;
  path: string;
}

export interface Stat {
  icon: string;
  label: string;
  value: string;
}

export interface Review {
  _id?: string;
  name: string;
  email: string;
  rating: number;
  comment?: string;
  createdAt?: string;
}

export interface TouristSpot {
  _id?: string;
  image: string;
  alt: string;
  name: string;
  description: string;
  location: string;
  history: string;
  gallery: string[];
  openingHours: string;
  bestTimeToVisit: string;
  nearbyEmergency: {
    type: 'Hospital' | 'Police';
    name: string;
    distance: string;
  }[];
  mapEmbedUrl: string;
  reviews: Review[];
  averageRating?: number;
}

export interface EmergencyContact {
  icon: string;
  type: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
}

export interface Hotline {
    label: string;
    number: string;
    href: string;
}

export interface Norm {
  icon: string;
  title: string;
  description: string;
  points: string[];
}

export interface BlogPost {
  image: string;
  alt: string;
  badge: string;
  readTime: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

export enum MessageAuthor {
  USER = 'user',
  BOT = 'bot',
}

export interface ChatMessage {
  author: MessageAuthor;
  text: string;
}