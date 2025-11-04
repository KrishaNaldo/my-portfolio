// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Gallery from './Pages/Gallery/Gallery';
import About from './Pages/About/About';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>  {/* Add this */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;