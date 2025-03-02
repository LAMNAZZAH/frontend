'use client';

import Link from 'next/link';
import { useTranslation } from '../i18n/client';
import ChangeLocale from '@/components/ChangeLocale';

export default function Home() {
  const { t } = useTranslation('home');
  return (
    <div>
      <h1>{t('greeting')}</h1>
      <ChangeLocale />
      <Link href="/about">About</Link>
    </div>
  );
}
