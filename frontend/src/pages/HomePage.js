import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Task Manager</h1>
        <p>Organize your tasks efficiently and boost your productivity</p>
        
        {user ? (
          <Link to="/dashboard" className="btn-primary">
            Go to Dashboard
          </Link>
        ) : (
          <div className="auth-buttons">
            <Link to="/login" className="btn-primary">
              Login
            </Link>
            <Link to="/register" className="btn-secondary">
              Register
            </Link>
          </div>
        )}
      </div>

      <div className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Create Tasks</h3>
            <p>Add tasks with titles, descriptions, due dates, and priorities</p>
          </div>
          <div className="feature-card">
            <h3>Track Progress</h3>
            <p>Update task status from pending to in-progress to completed</p>
          </div>
          <div className="feature-card">
            <h3>Organize</h3>
            <p>Categorize tasks by priority and due dates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;