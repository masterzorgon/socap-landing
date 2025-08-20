'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/button';
import { Link } from '@/components/link';
import { getCookieConsent } from '@/lib/cookies';

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = getCookieConsent();
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto p-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex-1">
                        <p className="text-sm text-gray-600">
                            We use cookies to enhance your experience. By continuing to use our site, you agree to our use of cookies.{' '}
                            <Link href="/cookies" className="text-blue-600 hover:text-blue-800 underline">
                                Learn more
                            </Link>
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Button
                            variant="outline"
                            onClick={() => setIsVisible(false)}
                            className="text-sm"
                        >
                            Dismiss
                        </Button>
                        <Link href="/cookies">
                            <Button className="text-sm">
                                Manage Cookies
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 