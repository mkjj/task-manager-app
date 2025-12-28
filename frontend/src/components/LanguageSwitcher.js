import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'; // Optional styling

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'zh-CN', name: 'Chinese', nativeName: '中文' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    // You can also send to backend if needed
    fetch('/api/language', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ language: lng })
    }).catch(err => console.error('Failed to update language on server:', err));
  };

  return (
    <div className="language-switcher">
      <div className="language-buttons">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`language-button ${i18n.language === lang.code ? 'active' : ''}`}
          >
            {lang.nativeName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;