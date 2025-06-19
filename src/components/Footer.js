import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <p>&copy; {currentYear} Your Name. All rights reserved.</p>
      <p>Built with <span className="highlight-text">React</span> and custom <span className="highlight-text">CSS</span></p>
    </footer>
  );
};

export default Footer;
