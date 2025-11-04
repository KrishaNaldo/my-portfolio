import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { id: 1, title: 'Project Screenshot 1' },
    { id: 2, title: 'Project Screenshot 2' },
    { id: 3, title: 'Project Screenshot 3' },
    { id: 4, title: 'Project Screenshot 4' },
    { id: 5, title: 'Project Screenshot 5' },
    { id: 6, title: 'Project Screenshot 6' },
  ];

  return (
    <div className="gallery-container">
      <nav className="navbar">
        <div className="nav-content">
          <h2 className="logo">Your Name</h2>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/gallery" className="nav-link">Gallery</Link>
            <Link to="/nutrition" className="nav-link">Nutrition</Link>
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
            <div className="image-placeholder">
              <span>{image.title}</span>
            </div>
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
