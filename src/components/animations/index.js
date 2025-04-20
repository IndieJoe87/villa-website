import { motion } from 'framer-motion';

// Fade in animation
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

// Fade in up animation
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Fade in down animation
export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Fade in left animation
export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

// Fade in right animation
export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

// Scale up animation
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

// Scale down animation
export const scaleDown = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

// Stagger container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Stagger fast container
export const staggerFastContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Stagger slow container
export const staggerSlowContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

// Hover scale animation
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 }
};

// Tap scale animation
export const tapScale = {
  scale: 0.95,
  transition: { duration: 0.15 }
};

// Page transition variants
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  },
  out: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: 'easeIn'
    }
  }
};

// Animated components
export const AnimatedSection = ({ children, className, delay = 0, ...props }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.6, delay } }
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.section>
);

export const AnimatedDiv = ({ children, className, variants = fadeIn, delay = 0, ...props }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    variants={variants}
    transition={{ delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const AnimatedImage = ({ src, alt, className, ...props }) => (
  <motion.img
    src={src}
    alt={alt}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    className={className}
    {...props}
  />
);

export const AnimatedHeading = ({ children, className, variants = fadeInUp, ...props }) => (
  <motion.h2
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={variants}
    className={className}
    {...props}
  >
    {children}
  </motion.h2>
);

export const AnimatedParagraph = ({ children, className, variants = fadeInUp, delay = 0.2, ...props }) => (
  <motion.p
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={variants}
    transition={{ delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.p>
);

export const AnimatedList = ({ children, className, staggerDelay = 0.1, ...props }) => (
  <motion.ul
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay
        }
      }
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.ul>
);

export const AnimatedListItem = ({ children, className, ...props }) => (
  <motion.li
    variants={fadeInUp}
    className={className}
    {...props}
  >
    {children}
  </motion.li>
);

export const AnimatedButton = ({ children, className, whileHover = { scale: 1.05 }, whileTap = { scale: 0.95 }, ...props }) => (
  <motion.button
    whileHover={whileHover}
    whileTap={whileTap}
    className={className}
    {...props}
  >
    {children}
  </motion.button>
);