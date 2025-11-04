import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { id: 1, title: 'Project Screenshot 1', src: '/images/1.png' },
    { id: 2, title: 'Project Screenshot 2', src: '/images/2.png' },
    { id: 3, title: 'Project Screenshot 3', src: '/images/3.png' },
    { id: 4, title: 'Project Screenshot 4', src: '/images/4.png' },
    { id: 5, title: 'Project Screenshot 5', src: '/images/5.png' },
    { id: 6, title: 'Project Screenshot 6', src: '/images/6.png' },
  ];

  return (
    <div className="gallery-container">
      <nav className="navbar">
        <div className="nav-content">
          <h2 className="logo">Gallery</h2>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/gallery" className="nav-link">Gallery</Link>
            <Link to="/about" className="nav-link">About</Link>
          </div>
        </div>
      </nav>

      <div className="gallery-header">
        <h1>Project Gallery</h1>
        <p>A collection of my work and projects</p>
      </div>

      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img 
              src={image.src} 
              alt={image.title}
              className="gallery-image"
            />
            <p className="image-title">{image.title}</p>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Gallery;