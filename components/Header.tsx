import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const baseHeaderClass = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
  const scrolledHeaderClass = "bg-white/80 backdrop-blur-md shadow-md text-gray-800";
  const topHeaderClass = location.pathname === '/' ? "bg-transparent text-white" : "bg-white shadow-md text-gray-800";

  const headerClass = isScrolled || location.pathname !== '/' ? `${baseHeaderClass} ${scrolledHeaderClass}` : `${baseHeaderClass} ${topHeaderClass}`;

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-emerald-600 text-white'
        : 'hover:bg-emerald-100 hover:text-emerald-700'
    }`;
    
  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-emerald-600 text-white'
        : 'text-gray-700 hover:bg-gray-200'
    }`;


  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-3">
              <i className="fas fa-mountain text-3xl text-emerald-500"></i>
              <div>
                 <h1 className="text-xl font-bold tracking-tight">Visit La Trinidad</h1>
                 <p className="text-xs font-light">Benguet, Philippines</p>
              </div>
            </NavLink>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.name} to={link.path} className={navLinkClass}>
                  {link.name}
                </NavLink>
              ))}
            </div>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.name} to={link.path} className={mobileNavLinkClass}>
                {link.name}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
