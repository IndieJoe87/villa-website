import React from 'react';

const FluidSection = ({ children, className = '', ...props }) => {
  return (
    <section className={`${className}`} {...props}>
      {children}
    </section>
  );
};

export default FluidSection;