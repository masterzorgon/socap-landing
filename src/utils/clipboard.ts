export const copyToClipboard = async (
  text: string, 
  showToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning') => void
) => {
  try {
    await navigator.clipboard.writeText(text);
    showToast("URL copied to clipboard!", "success");
  } catch (err) {
    console.error('Failed to copy to clipboard:', err);
    showToast("Failed to copy URL to clipboard", "error");
  }
};