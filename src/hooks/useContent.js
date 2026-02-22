/**
 * useContent Hook
 * Custom React hook for loading and accessing page content
 * Usage: const content = useContent('home');
 */

import { useState, useEffect } from 'react';
import { loadContent, getTranslation } from '../utils/contentLoader';

export const useContent = (pageName, language = 'en') => {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const loadedContent = await loadContent(pageName, language);
        setContent(loadedContent);
        setError(null);
      } catch (err) {
        console.error(`Error loading content for ${pageName}:`, err);
        setError(err);
        setContent({});
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [pageName, language]);

  /**
   * Get translation by key path
   * @param {string} key - Dot-separated key (e.g., 'hero.title')
   * @returns {string|object}
   */
  const t = (key) => {
    return getTranslation(content, key);
  };

  return {
    content,
    loading,
    error,
    t, // Shorthand for getTranslation
  };
};
