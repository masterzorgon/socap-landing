'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/button';
import {
    getCookiePreferences,
    setCookiePreferences,
    defaultPreferences,
    clearNonNecessaryCookies,
    type CookiePreferences
} from '@/lib/cookies';

export function CookiePreferences() {
    const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
    const [hasChanges, setHasChanges] = useState(false);

    useEffect(() => {
        setPreferences(getCookiePreferences());
    }, []);

    const handlePreferenceChange = (category: keyof CookiePreferences) => {
        if (category === 'necessary') return;

        const newPreferences = {
            ...preferences,
            [category]: !preferences[category],
        };

        setPreferences(newPreferences);
        setHasChanges(true);
    };

    const handleSave = () => {
        setCookiePreferences(preferences);
        clearNonNecessaryCookies();
        setHasChanges(false);
    };

    const handleReset = () => {
        setPreferences(defaultPreferences);
        setHasChanges(true);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Cookie Preferences
                </h1>
                <p className="text-gray-600">
                    Manage your cookie preferences to control how we use cookies on our website.
                </p>
            </div>

            <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">Necessary Cookies</h3>
                            <p className="text-gray-600 mt-2">
                                These cookies are essential for the website to function properly. They enable basic functions like page navigation,
                                access to secure areas, and form submissions. The website cannot function properly without these cookies.
                            </p>
                            <div className="mt-3 text-sm text-gray-500">
                                <strong>Examples:</strong> Authentication, security, session management
                            </div>
                        </div>
                        <div className="ml-6">
                            <input
                                type="checkbox"
                                checked={preferences.necessary}
                                disabled
                                className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Analytics Cookies */}
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">Analytics Cookies</h3>
                            <p className="text-gray-600 mt-2">
                                These cookies help us understand how visitors interact with our website by collecting and reporting
                                information anonymously. This helps us improve our website and services.
                            </p>
                            <div className="mt-3 text-sm text-gray-500">
                                <strong>Examples:</strong> Google Analytics, page views, user behavior
                            </div>
                        </div>
                        <div className="ml-6">
                            <input
                                type="checkbox"
                                checked={preferences.analytics}
                                onChange={() => handlePreferenceChange('analytics')}
                                className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Marketing Cookies */}
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">Marketing Cookies</h3>
                            <p className="text-gray-600 mt-2">
                                These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                                They may also be used to limit the number of times you see an advertisement.
                            </p>
                            <div className="mt-3 text-sm text-gray-500">
                                <strong>Examples:</strong> Facebook Pixel, advertising networks, retargeting
                            </div>
                        </div>
                        <div className="ml-6">
                            <input
                                type="checkbox"
                                checked={preferences.marketing}
                                onChange={() => handlePreferenceChange('marketing')}
                                className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Functional Cookies */}
                <div className="p-6 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900">Functional Cookies</h3>
                            <p className="text-gray-600 mt-2">
                                These cookies enable enhanced functionality and personalization, such as remembering your preferences,
                                language settings, and other choices you make while using our website.
                            </p>
                            <div className="mt-3 text-sm text-gray-500">
                                <strong>Examples:</strong> Language preferences, theme settings, form data
                            </div>
                        </div>
                        <div className="ml-6">
                            <input
                                type="checkbox"
                                checked={preferences.functional}
                                onChange={() => handlePreferenceChange('functional')}
                                className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <Button
                    variant="outline"
                    onClick={handleReset}
                    className="w-full sm:w-auto"
                >
                    Reset to Default
                </Button>
                <Button
                    onClick={handleSave}
                    disabled={!hasChanges}
                    className="w-full sm:w-auto"
                >
                    Save Preferences
                </Button>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">How to manage cookies in your browser</h4>
                <p className="text-sm text-blue-800">
                    You can also control cookies through your browser settings. Most browsers allow you to block or delete cookies,
                    or set preferences for when cookies can be set. Check your browser's help section for instructions.
                </p>
            </div>
        </div>
    );
}