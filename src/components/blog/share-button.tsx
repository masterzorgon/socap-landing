'use client';

import { Button } from '../button';
import { ShareIcon } from '@heroicons/react/16/solid';
import { shareToTwitterWithTitle } from '@/utils/social-share';

interface ShareButtonProps {
    title: string;
    className?: string;
}

export function ShareButton({ title, className }: ShareButtonProps) {
    const handleShare = () => {
        const currentUrl = window.location.href;
        shareToTwitterWithTitle(currentUrl, title);
    };

    return (
        <Button
            variant="outline"
            className={`gap-x-2 ${className || ''}`}
            onClick={handleShare}
        >
            <ShareIcon className="size-4" />
            Share this post
        </Button>
    );
} 