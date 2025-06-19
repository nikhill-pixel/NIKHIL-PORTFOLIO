import React from 'react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero-section">
      <div className="profile-picture-container">
        <img
          src="/NIKHIL_PROFILE_PICTURE.jpg"
          alt="Your Profile"
          className="profile-picture"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/192x192/555555/FFFFFF?text=Image+Error";
          }}
        />
      </div>

      <h1 className="hero-title">
        Hi, I'm <span className="highlight-text">Nikhil</span>
      </h1>
      <p className="hero-subtitle">
        A passionate <span className="highlight-text">Software Developer</span> with expertise in building dynamic and responsive web applications.
      </p>

      <button
        onClick={() => scrollToSection('projects')}
        className="cta-button"
      >
        View My Work
      </button>
    </section>
  );
};

export default Hero;
