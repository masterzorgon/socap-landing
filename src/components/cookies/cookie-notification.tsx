'use client';

import { useEffect } from 'react';
import { useToast } from '@/components/toast-provider';

interface CookieNotificationProps {
    showRejectionNotification: boolean;
    onNotificationShown: () => void;
}

export function CookieNotification({
    showRejectionNotification,
    onNotificationShown
}: CookieNotificationProps) {
    const { showToast } = useToast();

    useEffect(() => {
        if (showRejectionNotification) {
            showToast("Cookies Required", "error");
            onNotificationShown();
        }
    }, [showRejectionNotification, showToast, onNotificationShown]);

    return null;
} 