import { getRequestConfig } from 'next-intl/server';

import { defaultLocale, locales } from './config';
import type { Locale } from './types';

const i18nRequestConfig = getRequestConfig(async ({ locale }) => {
  // Use the locale parameter provided by next-intl instead of calling getLocale()
  const currentLocale = locale as Locale;

  return {
    locale: currentLocale,
    messages:
      currentLocale === defaultLocale || !locales.includes(currentLocale)
        ? (await import(`@public/locales/${defaultLocale}.json`)).default
        : (await import(`@public/locales/${currentLocale}.json`)).default,
  };
});

export default i18nRequestConfig;