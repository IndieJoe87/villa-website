import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { ThemeToggle } from './ui';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { isDarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'hr', name: 'Hrvatski' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: t('navigation.home') },
    { to: '/about', label: t('navigation.about') },
    { to: '/gallery', label: t('navigation.gallery') },
    { to: '/amenities', label: t('navigation.amenities') },
    { to: '/location', label: t('navigation.location') },
    { to: '/local-area', label: t('navigation.local_area') },
    { to: '/special-offers', label: t('navigation.special_offers') },
    { to: '/reviews', label: t('navigation.reviews') },
    { to: '/blog', label: t('navigation.blog') },
    { to: '/contact', label: t('navigation.contact') },
  ];

  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-grey42/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-primary dark:text-grey8 font-serif">
            <span className="text-xl font-medium">{t('header.logo.part1')}</span>
            <span className="ml-2 text-xl font-bold">{t('header.logo.part2')}</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === link.to ? 'text-accent' : 'text-primary dark:text-grey8'}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Book Now Button */}
          <Link
            to="/booking"
            className="ml-4 px-6 py-2 bg-primary dark:bg-accent text-white dark:text-grey42 rounded-md hover:bg-accent dark:hover:bg-grey8 transition-colors font-medium text-sm"
          >
            {t('common.book_now')}
          </Link>

          {/* Language Selector */}
          <div className="relative ml-4">
            <button
              onClick={toggleLanguageMenu}
              className="flex items-center text-primary dark:text-grey8 hover:text-accent transition-colors"
              aria-label="Select language"
            >
              <FaGlobe className="text-lg" />
              <span className="ml-2 text-sm font-medium uppercase">{i18n.language}</span>
            </button>

            <AnimatePresence>
              {languageMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-40 bg-white dark:bg-grey42 rounded-md shadow-lg overflow-hidden z-50"
                >
                  <div className="py-1">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => changeLanguage(language.code)}
                        className={`w-full text-left px-4 py-2 text-sm ${i18n.language === language.code ? 'bg-grey5 dark:bg-grey36 text-primary dark:text-grey8 font-medium' : 'text-grey42 dark:text-grey8 hover:bg-grey3 dark:hover:bg-grey36'}`}
                      >
                        {language.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden space-x-4">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="text-primary dark:text-grey8 hover:text-accent transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-grey42 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === link.to ? 'text-accent' : 'text-primary dark:text-grey8'}`}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Book Now Button */}
                <Link
                  to="/booking"
                  className="px-6 py-2 bg-primary dark:bg-accent text-white dark:text-grey42 rounded-md hover:bg-accent dark:hover:bg-grey8 transition-colors font-medium text-sm text-center"
                >
                  {t('common.book_now')}
                </Link>

                {/* Language Options */}
                <div className="pt-4 border-t border-grey6 dark:border-grey36">
                  <p className="text-sm font-medium text-primary dark:text-grey8 mb-2">
                    Language
                  </p>
                  <div className="flex space-x-4">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => changeLanguage(language.code)}
                        className={`px-3 py-1 text-sm rounded-md ${i18n.language === language.code ? 'bg-primary dark:bg-accent text-white dark:text-grey42 font-medium' : 'text-primary dark:text-grey8 bg-grey3 dark:bg-grey36 hover:bg-grey5 dark:hover:bg-grey33'}`}
                      >
                        {language.code.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;