import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaTripadvisor, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
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
    { to: '/booking', label: t('navigation.booking') },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaTripadvisor />, href: 'https://tripadvisor.com', label: 'TripAdvisor' },
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, text: 'info@villa50shadesofgrey.com', href: 'mailto:info@villa50shadesofgrey.com' },
    { icon: <FaPhone />, text: '+385 123 456 789', href: 'tel:+385123456789' },
    { icon: <FaWhatsapp />, text: 'WhatsApp', href: 'https://wa.me/385123456789' },
    { icon: <FaMapMarkerAlt />, text: 'Štinjan, Istarska županija, Croatia', href: 'https://maps.google.com/?q=Štinjan,+Istarska+županija,+Croatia' },
  ];

  return (
    <footer className="bg-grey3 dark:bg-grey42 text-primary dark:text-grey8 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="text-primary dark:text-grey8 font-serif">
                <span className="text-xl font-medium">{t('header.logo.part1')}</span>
                <span className="ml-2 text-xl font-bold">{t('header.logo.part2')}</span>
              </div>
            </Link>
            <p className="text-sm text-grey30 dark:text-grey15 mb-6">
              Luxury villa with private pool in Štinjan, Croatia. Perfect for family vacations and group getaways.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-grey30 dark:text-grey15 hover:text-accent transition-colors"
                  aria-label={link.label}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 text-primary dark:text-grey8">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 6).map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-sm text-grey30 dark:text-grey15 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 text-primary dark:text-grey8">More</h3>
            <ul className="space-y-2">
              {footerLinks.slice(6).map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-sm text-grey30 dark:text-grey15 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-grey30 dark:text-grey15 hover:text-accent transition-colors"
                >
                  {t('footer.privacy_policy')}
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-sm text-grey30 dark:text-grey15 hover:text-accent transition-colors"
                >
                  {t('footer.terms_of_service')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-medium mb-4 text-primary dark:text-grey8">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-3 mt-1">{item.icon}</span>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-grey30 dark:text-grey15 hover:text-accent transition-colors"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-grey10 dark:border-grey36 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-grey30 dark:text-grey15 mb-4 md:mb-0">
            {t('footer.copyright').replace('2025', currentYear)}
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy-policy"
              className="text-xs text-grey30 dark:text-grey15 hover:text-accent transition-colors"
            >
              {t('footer.privacy_policy')}
            </Link>
            <Link
              to="/terms-of-service"
              className="text-xs text-grey30 dark:text-grey15 hover:text-accent transition-colors"
            >
              {t('footer.terms_of_service')}
            </Link>
            <Link
              to="/sitemap"
              className="text-xs text-grey30 dark:text-grey15 hover:text-accent transition-colors"
            >
              {t('footer.sitemap')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;