import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Task Manager
        </Link>
        
        <div className="nav-links">
          {user ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <span className="nav-user">Hello, {user.name}</span>
              <button onClick={handleLogout} className="btn-logout">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;