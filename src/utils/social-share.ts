export const shareToTwitter = (url: string, text?: string) => {
    const twitterUrl = new URL('https://twitter.com/intent/tweet');

    // Add the URL to share
    twitterUrl.searchParams.set('url', url);

    // Add text if provided
    if (text) {
        twitterUrl.searchParams.set('text', text);
    }

    // Open Twitter share dialog in a new window
    window.open(twitterUrl.toString(), '_blank', 'width=600,height=400');
};

export const shareToTwitterWithTitle = (url: string, title: string) => {
    const shareText = `Check out this article: ${title}`;
    shareToTwitter(url, shareText);
}; 