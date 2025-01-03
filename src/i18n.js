import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import FooterFollowsDE from '@components/Footer/FooterFollows/index.de.json';
import FooterFollowsEN from '@components/Footer/FooterFollows/index.en.json';
import SubscribeEN from '@components/Subscribe/index.en.json';
import SubscribeDE from '@components/Subscribe/index.de.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: { ...FooterFollowsEN, ...SubscribeEN } },
      de: { translation: { ...FooterFollowsDE, ...SubscribeDE } },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language if translation is missing
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      // Detect language based on the browser's settings
      order: ['navigator', 'querystring', 'cookie', 'localStorage'],
      caches: ['cookie'],
    },
  });

export default i18n;
