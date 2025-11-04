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

  const projects = [
    {
      title: 'Cat-Website',
      description: 'Purrfect Cats is an interactive, modern web application dedicated to cat lovers and pet owners.',
      tech: 'React and CSS',
      liveLink: 'https://your-ecommerce-project.com', 
      githubLink: 'https://github.com/KrishaNaldo/krisu.git' 
    },
    {
      title: 'Trail-Ink Hub ',
      description: 'A printing service website that allows users to customize and order printed materials online.',
      tech: 'React,CSS,Django,Python',
      liveLink: 'https://drive.google.com/file/d/1Vc2s0OjS_ezIR3u1pXkcSI_iWiDZfm_I/view?usp=sharing', 
      githubLink: 'https://github.com/NathanJargon/TRAILINK.git' 
    },
    {
      title: 'Mental Health Website',
      description: 'A calming web application designed to support individuals experiencing anxiety, depression, and insomnia.',
      tech: 'React,CSS',
      liveLink: 'https://your-weather-app.com', 
      githubLink: 'https://github.com/KrishaNaldo/cat-website.git' 
    }
  ];

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="nav-content">
          <h2 className="logo">KN</h2>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/gallery" className="nav-link">Gallery</Link>
            <Link to="/about" className="nav-link">About</Link>
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
            <div className="skill-card">Django</div>
            <div className="skill-card">Figma</div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-content">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-tech">{project.tech}</p>
                <div className="project-buttons">
                  <button 
                    className="project-button primary"
                    onClick={() => window.open(project.liveLink, '_blank')}
                  >
                    Live Demo
                  </button>
                  <button 
                    className="project-button secondary"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            ))}
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
         <strong>Email:</strong>{' '}
       <a href="mailto:naldokrisha22@gmail.com">naldokrisha22@gmail.com</a>
        </div>
        <div className="contact-item">
       <strong>LinkedIn:</strong>{' '}
           <a 
           href="https://www.linkedin.com/in/krisha-naldo-80820133a" 
           target="_blank" 
          rel="noopener noreferrer"
              >
          www.linkedin.com/in/krisha-naldo-80820133a
       </a>
      </div>
           <div className="contact-item">
       <strong>GitHub:</strong>{' '}
    <a 
      href="https://github.com/KrishaNaldo" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      github.com/KrishaNaldo
    </a>
  </div>
</div>
      </div>
      </section>

      <footer className="footer">
        <p>© 2025 Krisha Naldo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;