import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Gallery from './Pages/Gallery/Gallery';
import Nutrition from './Pages/Nutrition/Nutrition';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/nutrition" element={<Nutrition />} />
      </Routes>
    </Router>
  );
}

export default App;