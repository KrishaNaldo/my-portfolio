import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const education = [
    {
      degree: 'Bachelor of Science Information Technology',
      school: 'University of Science and Technnology of Southern Philippines',
      year: '2021 - 2025',
      description: 'Relevant coursework: Front-End Development, Web Design, UI/UX Principles'
    }
  ];

  const experience = [
    {
      position: 'Front-End Developer Intern (Intern)',
      company: 'Mines and Geosciences Bureau- Denr',
      period: 'February 2024 - May 2024',
      responsibilities: [
        'Developed responsive web applications using React.js',
        'Collaborated with design team to implement UI/UX improvements',
        'Optimized website performance and loading times'
      ]
    },
    {
      position: 'Committee of Budget and Finance (Staff)',
      company: 'University of Science and Technnology of Southern Philippines - SCITC',
      period: '2021-2022',
      responsibilities: [
        'Managed budget planning and financial reporting for student organization events',
      ]
    },
     {
      position: 'Google Developer Student Club Member (Member)',
      company: 'University of Science and Technnology of Southern Philippines - GDSC',
      period: '2021-2021',
      responsibilities: [
        'Participated in workshops and hackathons to enhance coding skills',
      ]
    },
         {
      position: 'University of Student Government (Deparment of Student Welfare and Services Staff)',
      company: 'University of Science and Technnology of Southern Philippines - GDSC',
      period: '2024-2025',
      responsibilities: [
        'Assisted in organizing student welfare programs and services',
      ]
    }
  ];

  const certifications = [
    'Certificate of Commendation - MGB DENR',
    'Certificate of Participation - Digital Solution Showcase 2024',
    'Cetificate of Participation - Google Developer Student Club USTP',
    'Dean`s Lister 2021-2022',
    'PAG-USWAG: Leaders of Tomorrow',
    'Outstanding Student Volunteer – DILAAB Awards',
    'Multiple leadership and volunteer commendations',
    'Wadhwani Foundation – Problem Solving & Innovation,Impactful Writing Skills',
    'Certificate of Completion – 486 hours OJT (DENR-MGB)'
  ];

const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = process.env.PUBLIC_URL + '/Resume_Krisha_Naldo.pdf';
  link.download = 'Krisha_Naldo_Resume.pdf';
  link.click();
};
  return (
    <div className="about-container">
      <nav className="navbar">
        <div className="nav-content">
          <h2 className="logo">Krisha Naldo</h2>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/gallery" className="nav-link">Gallery</Link>
            <Link to="/about" className="nav-link">About</Link>
          </div>
        </div>
      </nav>

      <div className="about-header">
        <h1>About Me</h1>
        <p>My journey as a Front-End Developer</p>
      </div>

      <div className="about-content">
        {/* Personal Statement */}
        <section className="personal-statement">
          <div className="content-wrapper">
            <h2>Hello! I'm Krisha Naldo</h2>
            <p>
              I'm a passionate front-end developer with a strong foundation in creating 
              beautiful, responsive, and user-friendly web applications. I love bringing 
              ideas to life through code and continuously learning new technologies to 
              stay ahead in the ever-evolving world of web development.
            </p>
            <p>
              When I'm not coding, you can find me exploring new design trends, 
              contributing to open-source projects, or learning about the latest 
              web technologies.
            </p>
            <button className="download-btn" onClick={handleDownloadResume}>
              Download Resume
            </button>
          </div>
        </section>

        {/* Education */}
        <section className="education-section">
          <div className="content-wrapper">
            <h2 className="section-title">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{edu.degree}</h3>
                  <p className="institution">{edu.school}</p>
                  <p className="period">{edu.year}</p>
                  <p className="description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="experience-section">
          <div className="content-wrapper">
            <h2 className="section-title">Experience</h2>
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{exp.position}</h3>
                  <p className="institution">{exp.company}</p>
                  <p className="period">{exp.period}</p>
                  <ul className="responsibilities">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="certifications-section">
          <div className="content-wrapper">
            <h2 className="section-title">Certifications</h2>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-icon">🏆</div>
                  <p>{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {}
        <section className="skills-section">
          <div className="content-wrapper">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-categories">
              <div className="skill-category">
                <h3>Front-End</h3>
                <div className="skill-tags">
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">React.js</span>
          
                </div>
              </div>
              <div className="skill-category">
                <h3>Frame-work</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Django</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Tools & Others</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">Bitbucket</span>
                  <span className="skill-tag">VS Code</span>
                  <span className="skill-tag">Figma</span>
                  <span className="skill-tag">Canva</span>
                  <span className="skill-tag">Excel</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <p>© 2024 Krisha Naldo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;