import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          {t('app.title')}
        </Link>
        
        <div className="nav-links">
          {user ? (
            <>
              <Link to="/dashboard">{t('navigation.dashboard')}</Link>
              <Link to="/tasks" className="nav-link">
                {t('navigation.tasks')}
              </Link>
              <Link to="/profile" className="nav-link">
                {t('navigation.profile')}
              </Link>
              <span className="nav-user">
                {t('common.welcome')}, {user.name}
              </span>
              <button onClick={handleLogout} className="btn-logout">
                {t('auth.logout')}
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                {t('auth.login')}
              </Link>
              <Link to="/register" className="nav-link">
                {t('auth.register')}
              </Link>
            </>
          )}
          
          {/* Language Switcher - always visible */}
          <div className="nav-language">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;