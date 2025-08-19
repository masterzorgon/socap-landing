// Import the copyToClipboard function
import { copyToClipboard } from './clipboard'; 

export const handleSectionClick = (
  sectionId: string, 
  router: any, 
  showToast: (message: string, type?: 'success' | 'error' | 'info' | 'warning') => void
) => {
  const url = `${window.location.origin}/support#${sectionId}`;
  
  // Copy URL to clipboard
  copyToClipboard(url, showToast);

  // Update the URL without page reload
  router.push(`/support#${sectionId}`);

  // Smooth scroll to the section
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};