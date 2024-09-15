import React from 'react';

const Overlay = ({ isVisible, onClick }) => {
  return (
    isVisible ? (
      <div 
        onClick={onClick} 
        className="fixed inset-0 bg-black opacity-50 backdrop-blur-md"
      />
    ) : null
  );
};

export default Overlay;
