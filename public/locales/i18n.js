// file: i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { localStorageGetItem } from 'src/utils/storage-available';
import { defaultLang } from './config-lang';

import translationEn from './langs/en.json';
import translationFr from './langs/fr.json';
import translationVi from './langs/vi.json';
import translationCn from './langs/cn.json';
import translationAr from './langs/ar.json';

// *** 1) Import the custom post-processor
import { multiLineKeyPostProcessor } from './multiLineKeyPostProcessor';

// ----------------------------------------------------------------------

const lng = localStorageGetItem('i18nextLng', defaultLang.value);

i18n
  // *** 2) Use the custom post-processor
  .use(multiLineKeyPostProcessor)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: translationEn },
      fr: { translations: translationFr },
      vi: { translations: translationVi },
      cn: { translations: translationCn },
      ar: { translations: translationAr },
    },
    lng,
    fallbackLng: 'en',
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false, // Treat keys as flat strings
    interpolation: {
      escapeValue: false, // React already escapes strings
    },
    // *** 3) Name your custom post-processor in "postProcess"
    //         This means i18n will call "multiLineKeyPostProcessor" after translations
    //         are fetched or marked as missing.
    postProcess: ['multiLineKeyPostProcessor'],

    // *** OPTIONAL: If you also want to remove extra spaces from actual translations
    // parseMissingKeyHandler: (key) => key.replace(/\s+/g, ' ').trim(),
    // (Though the new custom post-processor largely makes this redundant)
  });

// Optionally define a fallback processor for post-lookup normalization
// if you want to also normalize the returned strings themselves
/*
i18n.services.processor.add('normalizeWhitespace', (value) => {
  if (typeof value === 'string') {
    return value.replace(/\s+/g, ' ').trim();
  }
  return value;
});
*/

export default i18n;
