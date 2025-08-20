'use client';

import { useState, useEffect } from 'react';
import { CookieConsent } from './cookie-consent';
import { CookieNotification } from './cookie-notification';
import { getCookieConsent, wereCookiesRejected, clearRejectionFlag } from '@/lib/cookies';

export function CookieManager() {
  const [hasConsent, setHasConsent] = useState(false);
  const [showRejectionNotification, setShowRejectionNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing consent
    const consent = getCookieConsent();
    const rejected = wereCookiesRejected();
    
    if (consent?.accepted) {
      setHasConsent(true);
    } else if (rejected) {
      setShowRejectionNotification(true);
    }
    
    setIsLoading(false);
  }, []);

  const handleConsentGiven = () => {
    setHasConsent(true);
    clearRejectionFlag();
  };

  const handleRejection = () => {
    setShowRejectionNotification(true);
  };

  if (isLoading) {
    return null;
  }

  return (
    <>
      {/* Blur overlay when no consent */}
      {!hasConsent && (
        <div className="fixed inset-0 z-30 bg-black/40 bg-opacity-20 backdrop-blur-xs" />
      )}
      
      {/* Cookie consent component */}
      <CookieConsent 
        onConsent={handleConsentGiven}
        onRejection={handleRejection}
      />
      
      {/* Rejection notification */}
      <CookieNotification 
        showRejectionNotification={showRejectionNotification}
        onNotificationShown={() => setShowRejectionNotification(false)}
      />
    </>
  );
} 