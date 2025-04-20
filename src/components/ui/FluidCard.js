import React from 'react';
import { motion } from 'framer-motion';

const FluidCard = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  ...props
}) => {
  // Define variant styles
  const variants = {
    default: 'bg-white dark:bg-grey42 shadow-card',
    outline: 'bg-white dark:bg-grey42 border border-grey6 dark:border-grey36',
    flat: 'bg-grey3 dark:bg-grey36',
    transparent: 'bg-transparent',
  };

  // Combine all classes
  const cardClasses = `
    rounded-lg overflow-hidden
    ${variants[variant]}
    ${hover ? 'transition-all duration-300 hover:shadow-grey-hover' : ''}
    ${className}
  `;

  return (
    <motion.div
      className={cardClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FluidCard;