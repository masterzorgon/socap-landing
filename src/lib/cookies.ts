// Cookie management utilities
export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export interface CookieConsent {
  accepted: boolean;
  timestamp: number;
  preferences: CookiePreferences;
}

const COOKIE_CONSENT_KEY = 'cookie-consent';
const COOKIE_PREFERENCES_KEY = 'cookie-preferences';

export const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

export function setCookie(
  name: string,
  value: string,
  options: {
    days?: number;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
  } = {}
): void {
  if (typeof document === 'undefined') return;

  const {
    days = 365,
    path = '/',
    domain,
    secure = true,
    sameSite = 'Lax'
  } = options;

  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

  let cookieString = `${name}=${value}; expires=${expires.toUTCString()}; path=${path}`;
  
  if (domain) cookieString += `; domain=${domain}`;
  if (secure) cookieString += '; secure';
  if (sameSite) cookieString += `; samesite=${sameSite}`;

  document.cookie = cookieString;
}

export function deleteCookie(name: string, path = '/'): void {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
}

export function getCookieConsent(): CookieConsent | null {
  const consent = getCookie(COOKIE_CONSENT_KEY);
  if (!consent) return null;
  
  try {
    return JSON.parse(consent);
  } catch {
    return null;
  }
}

export function setCookieConsent(consent: CookieConsent): void {
  setCookie(COOKIE_CONSENT_KEY, JSON.stringify(consent), { days: 365 });
}

export function getCookiePreferences(): CookiePreferences {
  const preferences = getCookie(COOKIE_PREFERENCES_KEY);
  if (!preferences) return defaultPreferences;
  
  try {
    return { ...defaultPreferences, ...JSON.parse(preferences) };
  } catch {
    return defaultPreferences;
  }
}

export function setCookiePreferences(preferences: CookiePreferences): void {
  setCookie(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences), { days: 365 });
}

export function hasConsent(): boolean {
  const consent = getCookieConsent();
  return consent?.accepted || false;
}

export function isCategoryAllowed(category: keyof CookiePreferences): boolean {
  const preferences = getCookiePreferences();
  return preferences[category];
}

export function initializeCookies(): void {
  const preferences = getCookiePreferences();
  
  // Set necessary cookies (always allowed)
  if (preferences.necessary) {
    // Add any necessary cookies here
  }
  
  // Set analytics cookies
  if (preferences.analytics) {
    // Initialize analytics (Google Analytics, etc.)
    initializeAnalytics();
  }
  
  // Set marketing cookies
  if (preferences.marketing) {
    // Initialize marketing tools (Facebook Pixel, etc.)
    initializeMarketing();
  }
  
  // Set functional cookies
  if (preferences.functional) {
    // Initialize functional features
    initializeFunctional();
  }
}

// Analytics initialization
function initializeAnalytics(): void {
  // Add Google Analytics or other analytics code here
  console.log('Analytics cookies enabled');
}

// Marketing initialization
function initializeMarketing(): void {
  // Add Facebook Pixel or other marketing tools here
  console.log('Marketing cookies enabled');
}

// Functional initialization
function initializeFunctional(): void {
  // Add functional features here
  console.log('Functional cookies enabled');
}

// Clear all non-necessary cookies
export function clearNonNecessaryCookies(): void {
  const preferences = getCookiePreferences();
  
  if (!preferences.analytics) {
    // Clear analytics cookies
    deleteCookie('_ga');
    deleteCookie('_gid');
    deleteCookie('_gat');
  }
  
  if (!preferences.marketing) {
    // Clear marketing cookies
    deleteCookie('_fbp');
    deleteCookie('_fbc');
  }
  
  if (!preferences.functional) {
    // Clear functional cookies
    // Add any functional cookies to clear
  }
} 

// Add this new function to handle cookie rejection
export function rejectCookies(): void {
  // Set a rejection flag
  setCookie('cookie-rejected', 'true', { days: 1 });
  
  // Clear any existing consent
  deleteCookie(COOKIE_CONSENT_KEY);
  deleteCookie(COOKIE_PREFERENCES_KEY);
  
  // Clear all non-necessary cookies
  clearNonNecessaryCookies();
}

// Check if cookies were rejected
export function wereCookiesRejected(): boolean {
  return getCookie('cookie-rejected') === 'true';
}

// Clear rejection flag
export function clearRejectionFlag(): void {
  deleteCookie('cookie-rejected');
} 