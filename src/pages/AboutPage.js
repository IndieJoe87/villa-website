import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaDog, FaUmbrellaBeach } from 'react-icons/fa';
import { FluidContainer, FluidSection } from '../components/ui';

const AboutPage = () => {
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
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about-hero.jpg" 
            alt="Villa exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <FluidContainer className="relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeIn} 
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
            >
              {t('about.title')}
            </motion.h1>
            
            <motion.p 
              variants={fadeIn} 
              className="text-xl md:text-2xl text-grey5 max-w-3xl mx-auto"
            >
              {t('about.subtitle')}
            </motion.p>
          </motion.div>
        </FluidContainer>
      </section>

      {/* About Content Section */}
      <FluidSection className="py-20 bg-white dark:bg-grey42">
        <FluidContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <p className="text-lg text-grey30 dark:text-grey8 mb-8 leading-relaxed">
                {t('about.description')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-grey3 dark:bg-grey36 p-6 rounded-lg">
                  <FaUmbrellaBeach className="text-accent text-3xl mb-4" />
                  <h3 className="text-xl font-medium text-primary dark:text-grey5 mb-2">
                    {t('about.outdoor_terrace')}
                  </h3>
                  <p className="text-grey30 dark:text-grey10">
                    {t('about.outdoor_terrace_text')}
                  </p>
                </div>
                
                <div className="bg-grey3 dark:bg-grey36 p-6 rounded-lg">
                  <FaDog className="text-accent text-3xl mb-4" />
                  <h3 className="text-xl font-medium text-primary dark:text-grey5 mb-2">
                    {t('about.pet_friendly')}
                  </h3>
                  <p className="text-grey30 dark:text-grey10">
                    {t('about.pet_friendly_text')}
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg h-60">
                  <img 
                    src="/images/interior/luxury-villa-interior.jpg" 
                    alt={t('about.image_alt.interior')} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-40">
                  <img 
                    src="/images/Pool/villa-pool-view.jpg" 
                    alt={t('about.image_alt.pool')} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-lg overflow-hidden shadow-lg h-40">
                  <img 
                    src="/images/bedroom/luxury-bedroom-view.jpg" 
                    alt={t('about.image_alt.bedroom')} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg h-60">
                  <img 
                    src="/images/bathroom/luxury-villa-bathroom.jpg" 
                    alt={t('about.image_alt.bathroom')} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </FluidContainer>
      </FluidSection>

      {/* Host Section */}
      <FluidSection className="py-20 bg-grey3 dark:bg-grey40">
        <FluidContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-lg overflow-hidden shadow-xl h-[500px]"
            >
              <img 
                src="/images/host.jpg" 
                alt={t('about.host_name')} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-grey3 mb-6">
                {t('about.host_title')}
              </h2>
              
              <h3 className="text-2xl font-medium text-accent mb-4">
                {t('about.host_name')}
              </h3>
              
              <p className="text-lg text-grey30 dark:text-grey8 mb-8 leading-relaxed">
                {t('about.host_description')}
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-accent"></div>
                <p className="text-grey30 dark:text-grey8 italic">
                  "I look forward to welcoming you to Villa 50 SHADES OF GREY and ensuring your stay is perfect."
                </p>
              </div>
            </motion.div>
          </div>
        </FluidContainer>
      </FluidSection>
    </>
  );
};

export default AboutPage;