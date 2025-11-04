import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nutrition.css';

const Nutrition = () => {
  const [activeTab, setActiveTab] = useState('meals');

  const meals = [
    { name: 'Breakfast', calories: 400, protein: '25g', carbs: '45g' },
    { name: 'Lunch', calories: 600, protein: '35g', carbs: '60g' },
    { name: 'Dinner', calories: 550, protein: '40g', carbs: '50g' },
    { name: 'Snacks', calories: 200, protein: '10g', carbs: '25g' },
  ];

  const tips = [
    'Drink at least 8 glasses of water daily',
    'Include protein in every meal',
    'Eat plenty of vegetables and fruits',
    'Limit processed foods and sugar',
    'Plan your meals ahead of time',
  ];

  return (
    <div className="nutrition-container">
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

      <div className="nutrition-header">
        <h1>Nutrition Guide</h1>
        <p>Track your daily nutrition and healthy eating habits</p>
      </div>

      <div className="nutrition-content">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'meals' ? 'active' : ''}`}
            onClick={() => setActiveTab('meals')}
          >
            Daily Meals
          </button>
          <button 
            className={`tab ${activeTab === 'tips' ? 'active' : ''}`}
            onClick={() => setActiveTab('tips')}
          >
            Nutrition Tips
          </button>
        </div>

        {activeTab === 'meals' && (
          <div className="meals-section">
            <h2>Daily Meal Plan</h2>
            <div className="meals-grid">
              {meals.map((meal, index) => (
                <div key={index} className="meal-card">
                  <h3>{meal.name}</h3>
                  <div className="meal-info">
                    <p><strong>Calories:</strong> {meal.calories}</p>
                    <p><strong>Protein:</strong> {meal.protein}</p>
                    <p><strong>Carbs:</strong> {meal.carbs}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="total-calories">
              <h3>Total Daily Calories: 1,750</h3>
            </div>
          </div>
        )}

        {activeTab === 'tips' && (
          <div className="tips-section">
            <h2>Healthy Eating Tips</h2>
            <ul className="tips-list">
              {tips.map((tip, index) => (
                <li key={index} className="tip-item">{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <footer className="footer">
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Nutrition;