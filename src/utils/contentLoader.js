/**
 * Content Loader Utility
 * Dynamically loads content based on language and page
 * Usage: const content = await loadContent('home', 'en');
 */

const contentCache = {};

/**
 * Load content JSON file for a specific language
 * @param {string} pageName - Name of the page (e.g., 'home', 'about')
 * @param {string} language - Language code (e.g., 'en', 'ru')
 * @returns {Promise<object>} Content object
 */
export const loadContent = async (pageName, language) => {
  const cacheKey = `${pageName}-${language}`;

  // Return from cache if available
  if (contentCache[cacheKey]) {
    return contentCache[cacheKey];
  }

  try {
    const content = await import(
      `../content/locales/${language}/${pageName}.json`
    );
    contentCache[cacheKey] = content.default || content;
    return contentCache[cacheKey];
  } catch (error) {
    console.error(
      `Failed to load content for page: ${pageName}, language: ${language}`,
      error
    );
    // Return empty object as fallback
    return {};
  }
};

/**
 * Get translation key from content object
 * @param {object} content - Content object
 * @param {string} key - Dot-separated key path (e.g., 'hero.title')
 * @returns {string|object} Translation value
 */
export const getTranslation = (content, key) => {
  const keys = key.split('.');
  let value = content;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if not found
    }
  }

  return value;
};

/**
 * Clear content cache
 */
export const clearContentCache = () => {
  Object.keys(contentCache).forEach(key => {
    delete contentCache[key];
  });
};
