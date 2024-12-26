// file: multiLineKeyPostProcessor.js
export const multiLineKeyPostProcessor = {
    type: 'postProcessor',
    name: 'multiLineKeyPostProcessor',
    process(value, originalKey, options, translator) {
      // If the translation was found, `value` is the actual translation.
      // If NOT found, i18n returns the key itself.
      const wasKeyNotFound = value === originalKey;
  
      if (wasKeyNotFound) {
        // Normalize the key by removing excess whitespace/newlines
        const normalizedKey = originalKey.replace(/\s+/g, ' ').trim();
  
        // If normalized key is different, let's re-try the translation
        if (normalizedKey !== originalKey) {
          const secondAttempt = translator.translate(normalizedKey, options);
  
          // If the second attempt is different from the normalizedKey,
          // that means the translation was found. Return that.
          if (secondAttempt !== normalizedKey) {
            return secondAttempt;
          }
        }
      }
  
      // Otherwise, just return the original `value`
      return value;
    },
  };
  