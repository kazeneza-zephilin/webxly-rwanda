# URL Configuration for GitHub Pages

## Clean URLs (No .html Extension)

This project implements clean URLs that work on GitHub Pages without requiring server-side configuration.

### How It Works

1. **404.html**: GitHub Pages automatically serves this file when a URL doesn't exist. It redirects clean URLs (like `/contact`) to their `.html` counterparts (`/contact.html`).

2. **url-handler.js**: Automatically removes `.html` extensions from the browser's address bar and updates all internal links to use clean URLs.

### Supported Clean URLs

- `/` - Homepage (index.html)
- `/contact` - Contact page (contact.html)
- `/project-details` - Project details page (project-details.html)

### Usage

All internal links in the HTML will automatically work with or without `.html` extensions:

```html
<!-- Both formats work -->
<a href="contact">Contact Us</a>
<a href="contact.html">Contact Us</a>
```

The JavaScript will handle the conversion automatically.

### For Other Hosting Providers

If you're hosting on Apache (cPanel, shared hosting, etc.), use the included `.htaccess` file instead. It provides true URL rewriting at the server level.

### GitHub Pages Deployment

When pushing to GitHub:
```bash
git add .
git commit -m "Update with clean URLs"
git push origin main
```

The site will be accessible at: `https://kazeneza-zephilin.github.io/webxly-rwanda/`

Users can navigate to:
- `https://kazeneza-zephilin.github.io/webxly-rwanda/contact`
- `https://kazeneza-zephilin.github.io/webxly-rwanda/project-details?project=1`

Without needing `.html` in the URL!
