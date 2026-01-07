import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const {t} = useTranslation();
  return (
    <div className="not-found-page">
      <h1>404 - {t('errors.notFound')}</h1>
      <p>{t('errors.notFound')}</p>
      <Link to="/" className="btn-primary">
        {t('common.back')}
      </Link>
    </div>
  );
};

export default NotFoundPage;