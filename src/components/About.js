import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About <span className="highlight-text">Me</span></h2>

      <div className="about-content-container">
        <div className="about-image-wrapper">
          <img
            src="/NIKHIL_PROFILE_PICTURE_1.jpg"
            alt="About Me"
            className="about-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/300x300/555555/FFFFFF?text=Image+Error";
            }}
          />
        </div>

        <div className="about-text-content">
          <p className="about-paragraph">
            Hello! I'm <span className="highlight-text">Nikhil</span>, a software developer with a strong foundation in front-end and back-end technologies. My journey in the tech world began with a fascination for how applications come to life and solve real-world problems.
          </p>
          <p className="about-paragraph">
            I specialize in <span className="highlight-text">MERN stack</span> for crafting engaging user interfaces and have experience with various modern web development tools. I'm passionate about creating clean, efficient, and scalable code.
          </p>
          <p className="about-paragraph">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities. I'm always eager to learn and grow, and I thrive in collaborative environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
