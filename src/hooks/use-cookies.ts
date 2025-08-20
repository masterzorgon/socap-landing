'use client';

import { useState, useEffect } from 'react';
import { 
  getCookieConsent, 
  getCookiePreferences, 
  setCookiePreferences,
  clearNonNecessaryCookies,
  initializeCookies,
  type CookiePreferences 
} from '@/lib/cookies';

export function useCookies() {
  const [consent, setConsent] = useState(getCookieConsent());
  const [preferences, setPreferences] = useState<CookiePreferences>(getCookiePreferences());
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (consent?.accepted && !isInitialized) {
      initializeCookies();
      setIsInitialized(true);
    }
  }, [consent, isInitialized]);

  const updatePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences);
    setCookiePreferences(newPreferences);
    clearNonNecessaryCookies();
    
    // Re-initialize cookies with new preferences
    if (consent?.accepted) {
      initializeCookies();
    }
  };

  const hasConsent = () => consent?.accepted || false;

  const isCategoryAllowed = (category: keyof CookiePreferences) => {
    return preferences[category];
  };

  return {
    consent,
    preferences,
    hasConsent,
    isCategoryAllowed,
    updatePreferences,
    isInitialized,
  };
} 