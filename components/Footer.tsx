import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="footer-col">
            <div className="flex items-center gap-3 mb-4">
              <i className="fas fa-mountain text-3xl text-emerald-400"></i>
              <span className="text-xl font-bold">Visit La Trinidad</span>
            </div>
            <p className="text-gray-400 text-sm">
              Discover the strawberry capital of the Philippines. Experience mountain beauty, rich culture, and warm hospitality.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-facebook fa-lg"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-instagram fa-lg"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-twitter fa-lg"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/tourist-spots" className="text-gray-400 hover:text-white transition-colors text-sm">Tourist Spots</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3"><i className="fas fa-map-marker-alt mt-1 text-emerald-400"></i> <span className="text-gray-400">La Trinidad, Benguet, Philippines</span></li>
              <li className="flex items-center gap-3"><i className="fas fa-phone text-emerald-400"></i> <a href="tel:+639123456789" className="text-gray-400 hover:text-white transition-colors">+63 912 345 6789</a></li>
              <li className="flex items-center gap-3"><i className="fas fa-envelope text-emerald-400"></i> <a href="mailto:info@visitlatrinidad.ph" className="text-gray-400 hover:text-white transition-colors">info@visitlatrinidad.ph</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Travel Guide (PDF)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accommodation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Transportation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Events Calendar</a></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Visit La Trinidad. Made with ❤️ for promoting sustainable tourism.</p>
          <p className="mt-2 text-xs">Disclaimer: This is a tourism information website. For official government information, please visit the official La Trinidad municipal website.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;