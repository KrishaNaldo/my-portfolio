import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="nav-content">
          <h2 className="logo">Krisha Naldo</h2>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/gallery" className="nav-link">Gallery</Link>
            <Link to="/nutrition" className="nav-link">Nutrition</Link>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Krisha Naldo</h1>
          <p className="hero-subtitle">Front-End Developer</p>
          <p className="hero-description">
            I build modern web applications with clean code and great user experiences
          </p>
          <button className="cta-button" onClick={scrollToProjects}>
            View My Work
          </button>
        </div>
      </section>

      <section className="about-section">
        <div className="section-content">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'm a passionate web developer with experience in building responsive and 
            user-friendly applications. I love turning complex problems into simple, 
            beautiful solutions.
          </p>
          
          <h3 className="subsection-title">Skills</h3>
          <div className="skills-grid">
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">React.js</div>
            <div className="skill-card">HTML/CSS</div>
            <div className="skill-card">Node.js</div>
            <div className="skill-card">Git</div>
            <div className="skill-card">REST APIs</div>
            <div className="skill-card">Responsive Design</div>
            <div className="skill-card">MongoDB</div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-content">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3 className="project-title">E-Commerce Platform</h3>
              <p className="project-description">
                A full-stack e-commerce application with payment integration
              </p>
              <p className="project-tech">React, Node.js, MongoDB</p>
              <button className="project-button">View Project</button>
            </div>
            <div className="project-card">
              <h3 className="project-title">Task Management App</h3>
              <p className="project-description">
                Collaborative task manager with real-time updates
              </p>
              <p className="project-tech">React, Firebase, CSS</p>
              <button className="project-button">View Project</button>
            </div>
            <div className="project-card">
              <h3 className="project-title">Weather Dashboard</h3>
              <p className="project-description">
                Weather forecast app with location-based data
              </p>
              <p className="project-tech">React, API Integration, CSS</p>
              <button className="project-button">View Project</button>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="section-content">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-text">
            I'm always open to new opportunities and collaborations
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email:</strong> naldokrisha22@gmail.com
            </div>
            <div className="contact-item">
              <strong>LinkedIn:</strong> linkedin.com/in/yourprofile
            </div>
            <div className="contact-item">
              <strong>GitHub:</strong> github.com/yourusername
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Krisha Naldo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;