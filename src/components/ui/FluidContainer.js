import React from 'react';

const FluidContainer = ({ children, className = '', ...props }) => {
  return (
    <div className={`container mx-auto px-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default FluidContainer;