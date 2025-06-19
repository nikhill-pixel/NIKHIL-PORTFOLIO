import React, { useState, useEffect } from 'react';
    import './index.css'; // Main CSS file for styling
    import Header from './components/Header';
    import Hero from './components/Hero';
    import About from './components/About';
    import Skills from './components/Skills';
    import Projects from './components/Projects';
    import Contact from './components/Contact';
    import Footer from './components/Footer';

    function App() {
      const [activeSection, setActiveSection] = useState('home');
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

      const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(sectionId);
          setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
        }
      };

      useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observerOptions = {
          root: null,
          rootMargin: '-50% 0px -50% 0px',
          threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        }, observerOptions);

        sections.forEach(section => {
          observer.observe(section);
        });

        return () => {
          sections.forEach(section => {
            observer.unobserve(section);
          });
          observer.disconnect();
        };
      }, []);

      const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };

      return (
        <div className="App">
          <Header
            scrollToSection={scrollToSection}
            activeSection={activeSection}
            toggleMobileMenu={toggleMobileMenu}
          />

          {isMobileMenuOpen && (
            <div className="mobile-menu-overlay">
              <nav className="mobile-nav">
                <button className="close-menu-button" onClick={toggleMobileMenu}>
                  &times;
                </button>
                <button onClick={() => scrollToSection('home')} className="mobile-nav-item">Home</button>
                <button onClick={() => scrollToSection('about')} className="mobile-nav-item">About</button>
                <button onClick={() => scrollToSection('skills')} className="mobile-nav-item">Skills</button>
                <button onClick={() => scrollToSection('projects')} className="mobile-nav-item">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="mobile-nav-item">Contact</button>
              </nav>
            </div>
          )}

          <main style={{ paddingTop: '6rem' }}> {/* Adjust padding-top for header height */}
            <Hero scrollToSection={scrollToSection} />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </div>
      );
    }

    export default App;
    