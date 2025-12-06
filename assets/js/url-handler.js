// Handle clean URLs without .html extension
(function() {
  'use strict';

  // Check if running on GitHub Pages or production
  const isGitHubPages = window.location.hostname.includes('github.io');
  const isProduction = window.location.protocol === 'https:';
  
  // Only apply clean URLs on GitHub Pages or production
  if (isGitHubPages || isProduction) {
    // Remove .html extension from URL if present
    if (window.location.pathname.endsWith('.html')) {
      const cleanPath = window.location.pathname.replace(/\.html$/, '');
      const newUrl = window.location.origin + cleanPath + window.location.search + window.location.hash;
      window.history.replaceState({}, '', newUrl);
    }

    // Handle navigation to clean URLs
    document.addEventListener('DOMContentLoaded', function() {
      // Get all internal links
      const links = document.querySelectorAll('a[href]');
      
      links.forEach(link => {
        const href = link.getAttribute('href');
        
        // Only process internal links that end with .html
        if (href && href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('//')) {
          // Remove .html extension
          link.setAttribute('href', href.replace(/\.html$/, ''));
        }
      });
    });
  } else {
    // Local development - keep .html extensions
    console.log('Running locally - .html extensions will be preserved');
  }
})();
