import React from 'react';
import { motion } from 'framer-motion';

const FluidButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  ...props
}) => {
  // Define variant styles
  const variants = {
    primary: 'bg-primary hover:bg-accent text-white dark:bg-accent dark:hover:bg-grey8 dark:text-grey42',
    secondary: 'bg-secondary hover:bg-primary text-white dark:bg-grey30 dark:hover:bg-grey20 dark:text-grey42',
    accent: 'bg-accent hover:bg-primary text-grey42 hover:text-white dark:bg-grey8 dark:hover:bg-grey15 dark:text-grey42',
    outline: 'bg-transparent border-2 border-primary hover:bg-primary text-primary hover:text-white dark:border-grey8 dark:text-grey8 dark:hover:bg-grey8 dark:hover:text-grey42',
    light: 'bg-white hover:bg-grey5 text-primary dark:bg-grey8 dark:hover:bg-grey15 dark:text-grey42',
    dark: 'bg-grey42 hover:bg-grey36 text-white dark:bg-grey36 dark:hover:bg-grey30',
  };

  // Define size styles
  const sizes = {
    sm: 'px-4 py-1 text-sm',
    md: 'px-6 py-2 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  // Combine all classes
  const buttonClasses = `
    inline-flex items-center justify-center
    rounded-md font-medium
    transition-colors duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default FluidButton;