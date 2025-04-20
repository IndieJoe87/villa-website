import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-grey5 dark:bg-grey36 focus:outline-none focus:ring-2 focus:ring-accent"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="w-6 h-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isDarkMode ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center text-primary"
        >
          <FaSun />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isDarkMode ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center text-grey8"
        >
          <FaMoon />
        </motion.div>
      </div>
    </button>
  );
};

export default ThemeToggle;