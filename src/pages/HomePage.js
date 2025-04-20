import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSwimmingPool, FaBed, FaBath, FaMapMarkerAlt } from 'react-icons/fa';
import { FluidContainer, FluidSection, FluidButton } from '../components/ui';

const HomePage = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Villa exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero dark:bg-gradient-dark opacity-80"></div>
        </div>
        
        <FluidContainer className="relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={fadeIn} 
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary dark:text-grey3 mb-4"
            >
              {t('home.hero_title')}
            </motion.h1>
            
            <motion.p 
              variants={fadeIn} 
              className="text-xl md:text-2xl text-grey30 dark:text-grey8 mb-8"
            >
              {t('home.hero_subtitle')}
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/booking">
                <FluidButton size="lg" variant="primary">
                  {t('common.book_now')}
                </FluidButton>
              </Link>
              
              <Link to="/gallery">
                <FluidButton size="lg" variant="outline">
                  {t('common.learn_more')}
                </FluidButton>
              </Link>
            </motion.div>
          </motion.div>
        </FluidContainer>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5
            }}
          >
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-primary dark:text-grey8"
            >
              <path d="M7 13l5 5 5-5"></path>
              <path d="M7 7l5 5 5-5"></path>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <FluidSection className="py-20 bg-white dark:bg-grey42">
        <FluidContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-grey3 mb-6">
                {t('home.welcome_title')}
              </h2>
              
              <p className="text-lg text-grey30 dark:text-grey8 mb-8">
                {t('home.welcome_text')}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <FaSwimmingPool className="text-accent mt-1 mr-3 text-xl" />
                  <div>
                    <h3 className="font-medium text-primary dark:text-grey5 mb-1">{t('home.pool')}</h3>
                    <p className="text-sm text-grey30 dark:text-grey10">{t('home.pool_text')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaBed className="text-accent mt-1 mr-3 text-xl" />
                  <div>
                    <h3 className="font-medium text-primary dark:text-grey5 mb-1">{t('home.bedrooms')}</h3>
                    <p className="text-sm text-grey30 dark:text-grey10">{t('home.bedrooms_text')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaBath className="text-accent mt-1 mr-3 text-xl" />
                  <div>
                    <h3 className="font-medium text-primary dark:text-grey5 mb-1">{t('home.bathrooms')}</h3>
                    <p className="text-sm text-grey30 dark:text-grey10">{t('home.bathrooms_text')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-accent mt-1 mr-3 text-xl" />
                  <div>
                    <h3 className="font-medium text-primary dark:text-grey5 mb-1">{t('home.location_title')}</h3>
                    <p className="text-sm text-grey30 dark:text-grey10">{t('home.location_text')}</p>
                  </div>
                </div>
              </div>
              
              <Link to="/about">
                <FluidButton variant="primary">
                  {t('common.learn_more')}
                </FluidButton>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-lg overflow-hidden shadow-xl h-[500px]"
            >
              <img 
                src="/images/interior/luxury-villa-interior.jpg" 
                alt="Villa interior" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </FluidContainer>
      </FluidSection>

      {/* Gallery Preview Section */}
      <FluidSection className="py-20 bg-grey3 dark:bg-grey40">
        <FluidContainer>
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-grey3 mb-4"
            >
              {t('home.gallery_title')}
            </motion.h2>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Gallery Item 1 */}
            <motion.div
              variants={fadeIn}
              className="relative rounded-lg overflow-hidden shadow-lg group h-80"
            >
              <img 
                src="/images/Pool/luxury-villa-pool.jpg" 
                alt={t('home.gallery_captions.pool')} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-medium">{t('home.gallery_captions.pool')}</h3>
              </div>
            </motion.div>
            
            {/* Gallery Item 2 */}
            <motion.div
              variants={fadeIn}
              className="relative rounded-lg overflow-hidden shadow-lg group h-80"
            >
              <img 
                src="/images/interior/villa-living-room.jpg" 
                alt={t('home.gallery_captions.interior')} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-medium">{t('home.gallery_captions.interior')}</h3>
              </div>
            </motion.div>
            
            {/* Gallery Item 3 */}
            <motion.div
              variants={fadeIn}
              className="relative rounded-lg overflow-hidden shadow-lg group h-80"
            >
              <img 
                src="/images/bedroom/master-bedroom-villa.jpg" 
                alt={t('home.gallery_captions.bedroom')} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-medium">{t('home.gallery_captions.bedroom')}</h3>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="text-center mt-12">
            <Link to="/gallery">
              <FluidButton variant="outline">
                {t('common.view_all')}
              </FluidButton>
            </Link>
          </div>
        </FluidContainer>
      </FluidSection>

      {/* CTA Section */}
      <FluidSection className="py-20 bg-gradient-primary dark:bg-gradient-dark text-white">
        <FluidContainer>
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-serif font-bold mb-6"
            >
              {t('home.cta_title')}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg mb-8 text-grey5"
            >
              {t('home.cta_text')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/booking">
                <FluidButton variant="light" size="lg">
                  {t('common.book_now')}
                </FluidButton>
              </Link>
            </motion.div>
          </div>
        </FluidContainer>
      </FluidSection>
    </>
  );
};

export default HomePage;