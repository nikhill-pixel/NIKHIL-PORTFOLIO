import React from 'react';
import { Home, User, Lightbulb, Briefcase, Mail } from 'lucide-react';

const NavItem = ({ icon, text, sectionId, scrollToSection, activeSection }) => {
  return (
    <button
      onClick={() => scrollToSection(sectionId)}
      className={`nav-item ${activeSection === sectionId ? 'active' : ''}`}
    >
      {icon}
      <span className="nav-item-text">{text}</span>
    </button>
  );
};

const Header = ({ scrollToSection, activeSection, toggleMobileMenu }) => {
  return (
    <header className="main-header">
      <div className="header-logo">
        Nikhil Agarwal
      </div>
      <nav className="main-nav">
        <NavItem icon={<Home size={20} />} text="Home" sectionId="home" scrollToSection={scrollToSection} activeSection={activeSection} />
        <NavItem icon={<User size={20} />} text="About" sectionId="about" scrollToSection={scrollToSection} activeSection={activeSection} />
        <NavItem icon={<Lightbulb size={20} />} text="Skills" sectionId="skills" scrollToSection={scrollToSection} activeSection={activeSection} />
        <NavItem icon={<Briefcase size={20} />} text="Projects" sectionId="projects" scrollToSection={scrollToSection} activeSection={activeSection} />
        <NavItem icon={<Mail size={20} />} text="Contact" sectionId="contact" scrollToSection={scrollToSection} activeSection={activeSection} />
      </nav>
      <div className="mobile-menu-toggle">
        <button className="menu-button" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
