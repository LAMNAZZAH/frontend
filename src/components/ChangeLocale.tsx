'use client';
import React from 'react';
import { switchLocaleAction } from '../actions/switch-locale';
import { useTranslation } from '../i18n/client';

export default function ChangeLocale() {
  const { i18n, t } = useTranslation('common');

  return (
    <div>
      <select onChange={e => switchLocaleAction(e.target.value)} value={i18n.resolvedLanguage}>
        <option value="en">🇺🇸 {t('languages.english')}</option>
        <option value="fr">fr {t('languages.french')}</option>
        <option value="ar">ar {t('languages.arabic')}</option>
      </select>
    </div>
  );
}
