import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';

const HomePage = () => {
  const { user } = useAuth();
  const {t} = useTranslation();
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>{t('home.welcomeMessage')}</h1>
        <p>{t('home.getStarted')}</p>
        
        {user ? (
          <Link to="/dashboard" className="btn-primary">
            {t('home.button.dashbord')}
          </Link>
        ) : (
          <div className="auth-buttons">
            <Link to="/login" className="btn-primary">
              {t('home.button.login')}
            </Link>
            <Link to="/register" className="btn-secondary">
              {t('home.button.register')}
            </Link>
          </div>
        )}
      </div>

      <div className="features-section">
        <h2>{t('home.content.feature.title')}</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>{t('home.content.feature.createTask.title')}</h3>
            <p>{t('home.content.feature.createTask.description')}</p>
          </div>
          <div className="feature-card">
            <h3>{t('home.content.feature.trackProgress.title')}</h3>
            <p>{t('home.content.feature.trackProgress.description')}</p>
          </div>
          <div className="feature-card">
            <h3>{t('home.content.feature.organize.title')}</h3>
            <p>{t('home.content.feature.organize.description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;