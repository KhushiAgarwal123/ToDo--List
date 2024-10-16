import React from 'react';
import './Footer.css';

const Footer = () => {
  let footerStyle = {
    position: "relative",
    width: "100%",
    border: "2px solid red",
    bottom: "0",
  };

  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>khushi</p>
    </footer>
  );
};

export default Footer; // default export
