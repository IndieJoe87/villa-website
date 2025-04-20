import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle, theme } from './styles';
import './i18n';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';

// UI Components
import { ScrollProgress, BackToTop } from './components/ui';

// Core Components
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';

// Lazy-loaded page components for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const AmenitiesPage = lazy(() => import('./pages/AmenitiesPage'));
const LocationPage = lazy(() => import('./pages/LocationPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const LocalAreaPage = lazy(() => import('./pages/LocalAreaPage'));
const SpecialOffersPage = lazy(() => import('./pages/SpecialOffersPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));

// Loading component for suspense fallback with animation
const Loading = () => (
  <div className="loading flex items-center justify-center h-screen w-full bg-white dark:bg-gray-900">
    <div className="animate-pulse flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-accent rounded-full border-t-transparent animate-spin mb-4"></div>
      <h2 className="text-xl font-semibold text-primary">Loading...</h2>
    </div>
  </div>
);

function App() {
  const { t } = useTranslation();
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        {/* Scroll progress indicator */}
        <ScrollProgress 
          gradient="linear-gradient(to right, #C0C0C0, #E8E8E8)" 
          height="4px"
          glow="rgba(192, 192, 192, 0.5)"
        />
        
        {/* Back to top button */}
        <BackToTop 
          color="accent"
          glow="rgba(192, 192, 192, 0.5)"
        />
        
        <Suspense fallback={<Loading />}>
          <Header />
          <Breadcrumbs />
          <main className="min-h-screen">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/amenities" element={<AmenitiesPage />} />
                <Route path="/location" element={<LocationPage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/local-area" element={<LocalAreaPage />} />
                <Route path="/special-offers" element={<SpecialOffersPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;