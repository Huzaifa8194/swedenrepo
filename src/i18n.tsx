// import i18n from 'i18next'
// import Backend from 'i18next-http-backend'
// import LanguageDetector from 'i18next-browser-languagedetector'
// import {initReactI18next} from 'react-i18next'

// const fallbackLanguage = 'en'

// export const projectToken = "XXXXXXXXXXXXXX"; // YOUR PROJECT TOKEN
// export const apiKey = "XXXXXXXXXXXXXX"; // YOUR API KEY
// export const cdnBaseUrl = "https://cdn.simplelocalize.io";
// export const environment = "_latest"; // or "_production"

// const loadPath = `${cdnBaseUrl}/${projectToken}/${environment}/{{lng}}`;
// const endpoint = `https://api.simplelocalize.io/api/v1/translations`;
// const missingKeysPushInterval = 10_000; // 10 seconds

// let missingKeysRequests: any[] = [];

// const missingKeyHandler = (
//     languages: readonly string[],
//     namespace: string,
//     key: string,
//     fallbackValue: string) => {
//     missingKeysRequests.push({
//         key,
//         //namespace: namespace, // uncomment if you use namespaces
//         language: fallbackLanguage,
//         text: fallbackValue
//     });
// };


// const pushMissingKeys = () => {
//     if (missingKeysRequests.length > 0) {
//         console.log(`[SimpleLocalize] Pushing missing keys: ${missingKeysRequests.length}`);
//         const requestBody = {
//             content: missingKeysRequests
//         }
//         fetch(endpoint, {
//             method: 'POST',
//             mode: 'cors',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-SimpleLocalize-Token': apiKey
//             },
//             body: JSON.stringify(requestBody),
//         })
//         missingKeysRequests = [];
//     }
// }

// // @refresh reset
// setInterval(() => pushMissingKeys(), missingKeysPushInterval)

// i18n
//     .use(Backend)
//     .use(LanguageDetector)
//     .use(initReactI18next)
//     .init({
//         fallbackLng: fallbackLanguage,
//         backend: {
//             loadPath: loadPath,
//         },
//         detection: {
//             order: ['querystring', 'cookie'],
//             lookupQuerystring: 'hl',
//             lookupCookie: 'language',
//             caches: ['cookie']
//         },
//         saveMissing: true,
//         missingKeyHandler
//     })

// export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Use the backend to load translation files
  .use(LanguageDetector) // Detect the user's language
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // Fallback language if the user's language is not available
    debug: true, // Enable debug mode to see what's going on
    backend: {
      loadPath: '/locales/langs/{{lng}}/translation.json', // Updated path to be relative
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie'], // Cache the user's language preference in cookies
    },
    interpolation: {
      escapeValue: false, // React already escapes values, so no need to escape
    },
  });

export default i18n;
