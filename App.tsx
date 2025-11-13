import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import DataConsentBanner from './components/DataConsentBanner';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TouristSpotsPage from './pages/TouristSpotsPage';
import EmergencyPage from './pages/EmergencyPage';
import NormsPage from './pages/NormsPage';
import BlogPage from './pages/BlogPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tourist-spots" element={<TouristSpotsPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/norms" element={<NormsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
        <DataConsentBanner />
      </div>
    </HashRouter>
  );
};

export default App;