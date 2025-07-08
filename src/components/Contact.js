import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react'; 

const Contact = () => {
  const email = "nikhilagarwal24242424@gmail.com";
  const linkedin = "https://www.linkedin.com/in/nikhil2212"; 
  const github = "https://github.com/nikhill-pixel";

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In <span className="highlight-text">Touch</span></h2>

      <div className="contact-content-container">
        <p className="contact-intro-text">
          I'm always open to new opportunities, collaborations, and discussions. Feel free to reach out!
        </p>

        <a
          href={`mailto:${email}`}
          className="contact-button email-button"
          aria-label={`Send an email to ${email}`}
        >
          <Mail size={24} className="icon-margin-right" /> {email}
        </a>

        <div className="social-links-container">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={36} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="GitHub Profile"
            >
              <Github size={36} />
            </a>
          )}
          {}
        </div>
      </div>
    </section>
  );
};

export default Contact;
