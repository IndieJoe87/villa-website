import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaHome, FaChevronRight } from 'react-icons/fa';

const Breadcrumbs = () => {
  const location = useLocation();
  const { t } = useTranslation();
  
  // Don't show breadcrumbs on the home page
  if (location.pathname === '/') {
    return null;
  }

  // Split the path into segments
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  // Map path segments to readable names
  const getPathName = (path) => {
    switch (path) {
      case 'about':
        return t('navigation.about');
      case 'gallery':
        return t('navigation.gallery');
      case 'amenities':
        return t('navigation.amenities');
      case 'location':
        return t('navigation.location');
      case 'booking':
        return t('navigation.booking');
      case 'reviews':
        return t('navigation.reviews');
      case 'blog':
        return t('navigation.blog');
      case 'contact':
        return t('navigation.contact');
      case 'local-area':
        return t('navigation.local_area');
      case 'special-offers':
        return t('navigation.special_offers');
      default:
        return path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
    }
  };

  return (
    <div className="bg-grey3 dark:bg-grey42 py-3 mt-16">
      <div className="container mx-auto px-4">
        <nav className="flex items-center text-sm">
          <Link to="/" className="text-primary dark:text-grey8 hover:text-accent transition-colors flex items-center">
            <FaHome className="mr-1" />
            <span>{t('navigation.home')}</span>
          </Link>
          
          {pathSegments.map((segment, index) => {
            // Build the path up to this segment
            const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const isLast = index === pathSegments.length - 1;
            
            return (
              <React.Fragment key={path}>
                <FaChevronRight className="mx-2 text-grey20 dark:text-grey25" />
                {isLast ? (
                  <span className="text-accent font-medium">{getPathName(segment)}</span>
                ) : (
                  <Link 
                    to={path} 
                    className="text-primary dark:text-grey8 hover:text-accent transition-colors"
                  >
                    {getPathName(segment)}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;