import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Custom Post-Processor for Normalizing Multiline Keys
const multiLineKeyPostProcessor = {
  type: 'postProcessor',
  name: 'multiLineKeyPostProcessor',
  process(value, originalKey, options, translator) {
    console.debug('Type of originalKey:', typeof originalKey);
    console.debug('Value of originalKey:', originalKey);
    console.log('WHATEVER THIS IS', Object.prototype.toString.call(originalKey));

    let normalizedKey = '';

    // Handle if originalKey is an array
    if (Object.prototype.toString.call(originalKey) === '[object Array]') {
      console.debug('Processing array as originalKey:', originalKey);
      normalizedKey = originalKey
        .map((item) => {
          // Normalize each item individually
          if (typeof item === 'string') {
            return item.replace(/\\s+/g, ' ').trim(); // Normalize and trim strings
          }
          // Convert non-string items to strings
          return JSON.stringify(item).replace(/\\s+/g, ' ').trim();
        })
        .reduce((acc, item) => acc + item, ''); // Concatenate all normalized items


        normalizedKey .replace(/\s+/g, ' ')
        .trim()
        console.log("NORMALIZED KEY: " + normalizedKey)
    }
    // Handle if originalKey is an object
    else if (Object.prototype.toString.call(originalKey) === '[object Object]') {
      console.debug('Processing object as originalKey:', originalKey);
      // Join object values into a single string
      normalizedKey = Object.values(originalKey)
        .join(' ')
        .replace(/\\s+/g, ' ') // Normalize whitespace
        .trim();
    }
    // Handle if originalKey is already a string
    else if (typeof originalKey === 'string') {
      console.debug('Processing string as originalKey:', originalKey);
      normalizedKey = originalKey.replace(/\\s+/g, ' ').trim();
    } else {
      console.warn('Unrecognized type for originalKey:', originalKey);
      return value; // Fallback if the type is unrecognized
    }

    console.debug('Normalized Key:', normalizedKey);

    // Attempt to re-translate with the normalized key
    if (value === originalKey && normalizedKey) {
      const secondAttempt = translator.translate(normalizedKey, options);
      if (secondAttempt !== normalizedKey) {
        return secondAttempt; // Return translation if found
      }
    }

    // Return the original value if all else fails
    return value;
  },
};


// Initialize i18next
i18n
  .use(Backend) // Use the backend to load translation files
  .use(LanguageDetector) // Detect the user's language
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .use(multiLineKeyPostProcessor) // Register the custom post-processor
  .init({
    fallbackLng: 'en', // Fallback language if the user's language is not available
    debug: true, // Enable debug mode to see what's going on
    backend: {
      loadPath: '/locales/langs/{{lng}}/translation.json', // Path to translation files
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie'], // Cache the user's language preference in cookies
    },
    interpolation: {
      escapeValue: false, // React already escapes values, so no need to escape
    },
    postProcess: ['multiLineKeyPostProcessor'], // Add the custom post-processor
    missingKeyHandler: (lng, ns, key) => {
      console.warn(`Missing translation key: "${key}" in language: ${lng}`); // Log missing keys
    },
  });

export default i18n;
