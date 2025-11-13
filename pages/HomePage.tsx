import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-white text-center">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img 
                src="https://images.unsplash.com/photo-1536481046830-9b11bb07e8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMG1vdW50YWluJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2MTgyNjY5N3ww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="La Trinidad landscape" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-20 container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">Discover La Trinidad</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
                    Experience the strawberry capital of the Philippines. Explore breathtaking mountain landscapes, vibrant flower gardens, and rich cultural heritage in the heart of Benguet.
                </p>
                <button 
                    onClick={() => navigate('/tourist-spots')}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 animate-fade-in-up"
                >
                    Explore Tourist Spots
                </button>
            </div>
        </section>
    );
};

export default HomePage;
