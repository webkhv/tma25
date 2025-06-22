import { getRequestConfig } from 'next-intl/server';

// Move locale configuration directly here for next-intl compatibility
export const defaultLocale = 'en';
export const timeZone = 'Europe/Amsterdam';
export const locales = [defaultLocale, 'ru'] as const;
export const localesMap = [
  { key: 'en', title: 'English' },
  { key: 'ru', title: 'Русский' },
];

export type Locale = (typeof locales)[number];

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