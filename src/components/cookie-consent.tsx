'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/button';
import {
    getCookieConsent,
    setCookieConsent,
    setCookiePreferences,
    defaultPreferences,
    type CookiePreferences
} from '@/lib/cookies';

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

    useEffect(() => {
        // Check if user has already given consent
        const consent = getCookieConsent();
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted: CookiePreferences = {
            necessary: true,
            analytics: true,
            marketing: true,
            functional: true,
        };

        setCookieConsent({
            accepted: true,
            timestamp: Date.now(),
            preferences: allAccepted,
        });

        setCookiePreferences(allAccepted);
        setIsVisible(false);
    };

    const handleAcceptNecessary = () => {
        setCookieConsent({
            accepted: true,
            timestamp: Date.now(),
            preferences: defaultPreferences,
        });

        setCookiePreferences(defaultPreferences);
        setIsVisible(false);
    };

    const handleSavePreferences = () => {
        setCookieConsent({
            accepted: true,
            timestamp: Date.now(),
            preferences,
        });

        setCookiePreferences(preferences);
        setIsVisible(false);
    };

    const handlePreferenceChange = (category: keyof CookiePreferences) => {
        if (category === 'necessary') return; // Necessary cookies can't be disabled

        setPreferences(prev => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto p-4 sm:p-6">
                {!showDetails ? (
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                We use cookies to enhance your experience
                            </h3>
                            <p className="text-sm text-gray-600">
                                We use cookies to analyze site traffic, personalize content, and provide social media features.
                                By continuing to use our site, you consent to our use of cookies.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <Button
                                variant="outline"
                                onClick={() => setShowDetails(true)}
                                className="w-full sm:w-auto"
                            >
                                Customize
                            </Button>
                            <Button
                                variant="outline"
                                onClick={handleAcceptNecessary}
                                className="w-full sm:w-auto"
                            >
                                Necessary Only
                            </Button>
                            <Button
                                onClick={handleAcceptAll}
                                className="w-full sm:w-auto"
                            >
                                Accept All
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Cookie Preferences
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                Choose which types of cookies you want to allow. You can change these settings at any time.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Necessary Cookies */}
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex-1">
                                    <h4 className="font-medium text-gray-900">Necessary Cookies</h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        These cookies are essential for the website to function properly and cannot be disabled.
                                    </p>
                                </div>
                                <div className="ml-4">
                                    <input
                                        type="checkbox"
                                        checked={preferences.necessary}
                                        disabled
                                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Analytics Cookies */}
                            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                <div className="flex-1">
                                    <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                                    </p>
                                </div>
                                <div className="ml-4">
                                    <input
                                        type="checkbox"
                                        checked={preferences.analytics}
                                        onChange={() => handlePreferenceChange('analytics')}
                                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Marketing Cookies */}
                            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                <div className="flex-1">
                                    <h4 className="font-medium text-gray-900">Marketing Cookies</h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                                    </p>
                                </div>
                                <div className="ml-4">
                                    <input
                                        type="checkbox"
                                        checked={preferences.marketing}
                                        onChange={() => handlePreferenceChange('marketing')}
                                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Functional Cookies */}
                            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                <div className="flex-1">
                                    <h4 className="font-medium text-gray-900">Functional Cookies</h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        These cookies enable enhanced functionality and personalization, such as remembering your preferences.
                                    </p>
                                </div>
                                <div className="ml-4">
                                    <input
                                        type="checkbox"
                                        checked={preferences.functional}
                                        onChange={() => handlePreferenceChange('functional')}
                                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                            <Button
                                variant="outline"
                                onClick={() => setShowDetails(false)}
                                className="w-full sm:w-auto"
                            >
                                Back
                            </Button>
                            <Button
                                onClick={handleSavePreferences}
                                className="w-full sm:w-auto"
                            >
                                Save Preferences
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}