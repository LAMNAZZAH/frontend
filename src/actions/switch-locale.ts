'use server';

import { LANGUAGE_COOKIE } from '../i18n/settings';
import { cookies } from 'next/headers';

export async function switchLocaleAction(value: string) {
  const cookieStore = await cookies();
  cookieStore.set(LANGUAGE_COOKIE, value);

  return {
    status: 'success',
  };
}
