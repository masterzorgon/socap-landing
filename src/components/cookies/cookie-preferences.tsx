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
import { ChevronRightIcon, InformationCircleIcon } from '@heroicons/react/16/solid';

// Define the cookie categories configuration
const cookieCategories = [
    {
        key: 'necessary' as const,
        title: 'Necessary Cookies',
        description: 'These cookies are essential for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions. The website cannot function properly without these cookies.',
        examples: 'Authentication, security, session management',
        disabled: true,
        bgClass: 'bg-gray-50',
        borderClass: ''
    },
    {
        key: 'analytics' as const,
        title: 'Analytics Cookies',
        description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.',
        examples: 'Google Analytics, page views, user behavior',
        disabled: false,
        bgClass: '',
        borderClass: 'border border-gray-200'
    },
    {
        key: 'marketing' as const,
        title: 'Marketing Cookies',
        description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements. They may also be used to limit the number of times you see an advertisement.',
        examples: 'Facebook Pixel, advertising networks, retargeting',
        disabled: false,
        bgClass: '',
        borderClass: 'border border-gray-200'
    },
    {
        key: 'functional' as const,
        title: 'Functional Cookies',
        description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences, language settings, and other choices you make while using our website.',
        examples: 'Language preferences, theme settings, form data',
        disabled: false,
        bgClass: '',
        borderClass: 'border border-gray-200'
    }
];

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
            <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <span className="flex items-center gap-2 mb-2">
                    <InformationCircleIcon className="size-4" />
                    <h4 className="font-semibold text-slate-900">How to manage cookies in your browser</h4>
                </span>
                <p className="text-sm text-slate-600">
                    You can also control cookies through your browser settings. Most browsers allow you to block or delete cookies,
                    or set preferences for when cookies can be set. Check your browser's help section for instructions.
                </p>
            </div>

            <div className="space-y-6">
                {cookieCategories.map((category) => (
                    <div 
                        key={category.key}
                        className={`p-6 rounded-lg ${category.bgClass} ${category.borderClass}`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                                <p className="text-gray-600 mt-2">
                                    {category.description}
                                </p>
                                <div className="mt-3 text-sm text-gray-500">
                                    <strong>Examples:</strong> {category.examples}
                                </div>
                            </div>
                            <div className="ml-6">
                                <input
                                    type="checkbox"
                                    checked={preferences[category.key]}
                                    onChange={() => handlePreferenceChange(category.key)}
                                    disabled={category.disabled}
                                    className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary/50 cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 mb-16 border-t border-gray-200">
                <Button
                    variant="secondary"
                    onClick={handleReset}
                    disabled={!hasChanges}
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
        </div>
    );
}