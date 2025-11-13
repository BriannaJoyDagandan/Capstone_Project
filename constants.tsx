import type { NavLinkItem, Stat, EmergencyContact, Hotline, Norm, BlogPost } from './types';

export const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Tourist Spots', path: '/tourist-spots' },
  { name: 'Emergency', path: '/emergency' },
  { name: 'Local Norms', path: '/norms' },
  { name: 'Blog', path: '/blog' },
];

export const STATS: Stat[] = [
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Benguet Province' },
    { icon: 'fas fa-users', label: 'Population', value: '137,000+' },
    { icon: 'fas fa-calendar', label: 'Founded', value: '1846' },
    { icon: 'fas fa-award', label: 'Known For', value: 'Strawberries' },
];

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
    {
        icon: 'fas fa-hospital',
        type: 'Hospital',
        name: 'Benguet General Hospital',
        address: 'Km. 5, La Trinidad, Benguet',
        phone: '(074) 422-2331',
        hours: '24/7',
    },
    {
        icon: 'fas fa-hospital',
        type: 'Hospital',
        name: 'La Trinidad Medicare Community Hospital',
        address: 'Poblacion, La Trinidad, Benguet',
        phone: '(074) 619-0045',
        hours: '24/7',
    },
    {
        icon: 'fas fa-shield-alt',
        type: 'Police',
        name: 'La Trinidad Municipal Police Station',
        address: 'Km. 5, La Trinidad, Benguet',
        phone: '(074) 422-2075 / 911',
        hours: '24/7',
    },
    {
        icon: 'fas fa-fire-extinguisher',
        type: 'Fire Station',
        name: 'Bureau of Fire Protection - La Trinidad',
        address: 'Wangal, La Trinidad, Benguet',
        phone: '(074) 422-2474 / 911',
        hours: '24/7',
    },
];

export const EMERGENCY_HOTLINES: Hotline[] = [
    { label: 'National Emergency Hotline', number: '911', href: 'tel:911' },
    { label: 'Philippine National Police', number: '117', href: 'tel:117' },
    { label: 'Red Cross Benguet', number: '(074) 442-4422', href: 'tel:(074)442-4422' },
    { label: 'NDRRMC Hotline', number: '911-1406', href: 'tel:911-1406' },
];

export const LOCAL_NORMS: Norm[] = [
    {
        icon: 'fas fa-heart',
        title: 'Respect Local Culture',
        description: 'The people of La Trinidad are proud of their Ibaloi and Kankanaey heritage. Show respect for local customs, traditions, and sacred sites.',
        points: ['Ask permission before taking photos of people', 'Dress modestly when visiting communities', 'Learn basic greetings in Ilocano or local dialects'],
    },
    {
        icon: 'fas fa-leaf',
        title: 'Environmental Responsibility',
        description: 'Help preserve the natural beauty of La Trinidad by being an eco-conscious traveler.',
        points: ['Don\'t litter - bring your trash with you', 'Stay on marked trails when hiking', 'Don\'t pick flowers or plants without permission'],
    },
    {
        icon: 'fas fa-users',
        title: 'Community Etiquette',
        description: 'La Trinidad is a close-knit community. Be courteous and friendly with locals.',
        points: ['Greet people with a smile and \'Magandang araw\'', 'Support local businesses and buy from farmers', 'Be patient - things move at a relaxed pace here'],
    },
    {
        icon: 'fas fa-camera',
        title: 'Photography Guidelines',
        description: 'Capture memories responsibly while respecting privacy and property.',
        points: ['Always ask permission before photographing people or private property', 'Don\'t use drones without proper permits', 'Share your photos and tag La Trinidad to promote tourism'],
    },
    {
        icon: 'fas fa-shield-alt',
        title: 'Safety Practices',
        description: 'Stay safe while enjoying your visit to the mountains.',
        points: ['Bring warm clothing - temperatures can drop significantly', 'Stay hydrated and protect yourself from sun exposure', 'Inform someone of your itinerary when hiking'],
    },
    {
        icon: 'fas fa-hands-helping',
        title: 'Responsible Tourism',
        description: 'Be a responsible visitor and contribute positively to the local economy.',
        points: ['Pay fair prices for goods and services', 'Hire local guides for tours and treks', 'Learn about and respect indigenous land rights'],
    },
];

export const BLOG_POSTS: BlogPost[] = [
    {
        image: 'https://images.unsplash.com/photo-1734313237467-1f93eb3abbe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwZmFybXxlbnwxfHx8fDE3NjE3NDQ5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Strawberry Picking Guide',
        badge: 'Guide',
        readTime: '5 min read',
        title: 'The Ultimate Guide to Strawberry Picking in La Trinidad',
        description: 'Everything you need to know about visiting the famous strawberry farms, from the best time to visit to what to bring.',
        author: 'Maria Santos',
        date: 'October 15, 2025',
    },
    {
        image: 'https://images.unsplash.com/photo-1531932594968-e5e5e9dee95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHZhbGxleXxlbnwxfHx8fDE3NjE3ODk0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Mount Kalugong Hiking',
        badge: 'Adventure',
        readTime: '7 min read',
        title: 'Hiking Mount Kalugong: A Beginner\'s Adventure',
        description: 'My first experience climbing Mount Kalugong and why it\'s perfect for beginner hikers looking for stunning views.',
        author: 'Juan Reyes',
        date: 'October 10, 2025',
    },
    {
        image: 'https://images.unsplash.com/photo-1605895370326-e96b9d52e3f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBnYXJkZW58ZW58MXx8fHwxNzYxNzY0MjQ5fDA&ixlib.rb-4.1.0&q=80&w=1080',
        alt: 'Flower Gardens',
        badge: 'Photography',
        readTime: '6 min read',
        title: 'Exploring the Flower Gardens: A Photographer\'s Paradise',
        description: 'Discover the best spots for photography in La Trinidad\'s colorful flower gardens and when to visit for the best blooms.',
        author: 'Ana Cruz',
        date: 'October 5, 2025',
    },
    {
        image: 'https://images.unsplash.com/photo-1572402123736-c79526db405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMG1hcmtldHxlbnwxfHx8fDE3NjE4MjEyODV8MA&ixlib.rb-4.1.0&q=80&w=1080',
        alt: 'Local Foods',
        badge: 'Food',
        readTime: '4 min read',
        title: 'Local Flavors: Must-Try Foods in La Trinidad',
        description: 'From fresh vegetables to unique Cordilleran dishes, here\'s what to eat when visiting La Trinidad.',
        author: 'Pedro Garcia',
        date: 'September 28, 2025',
    },
    {
        image: 'https://images.unsplash.com/photo-1536481046830-9b11bb07e8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMG1vdW50YWluJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2MTgyNjY5N3ww&ixlib.rb-4.1.0&q=80&w=1080',
        alt: 'Weekend Itinerary',
        badge: 'Travel Tips',
        readTime: '8 min read',
        title: 'Weekend Itinerary: 2 Days in La Trinidad',
        description: 'Make the most of your weekend with this carefully planned itinerary covering the best attractions and experiences.',
        author: 'Lisa Mendoza',
        date: 'September 20, 2025',
    },
    {
        image: 'https://images.unsplash.com/photo-1536481046830-9b11bb07e8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMG1vdW50YWluJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2MTgyNjY5N3ww&ixlib.rb-4.1.0&q=80&w=1080',
        alt: 'Ibaloi Culture',
        badge: 'Culture',
        readTime: '10 min read',
        title: 'Understanding Ibaloi Culture and Traditions',
        description: 'Learn about the indigenous Ibaloi people, their customs, and how their culture shapes La Trinidad today.',
        author: 'Dr. Carmen Flores',
        date: 'September 15, 2025',
    },
];