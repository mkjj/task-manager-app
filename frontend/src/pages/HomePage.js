import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

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