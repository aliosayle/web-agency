import { useEffect } from 'react';

const defaultSEO = {
  siteName: 'Basecamp Studio',
  siteUrl: 'https://basecamp.studio',
  defaultTitle: 'Basecamp Studio | Web Design That Converts',
  defaultDescription: 'Professional web design for startups and small businesses. We build conversion-focused websites that turn visitors into customers. Starting from $300.',
};

export default function SEO({ 
  title, 
  description, 
  keywords,
  canonical,
  type = 'website',
  image = '/og-image.jpg'
}) {
  const fullTitle = title 
    ? `${title} | ${defaultSEO.siteName}` 
    : defaultSEO.defaultTitle;
  
  const fullDescription = description || defaultSEO.defaultDescription;
  const fullCanonical = canonical 
    ? `${defaultSEO.siteUrl}${canonical}` 
    : defaultSEO.siteUrl;
  const fullImage = image.startsWith('http') 
    ? image 
    : `${defaultSEO.siteUrl}${image}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper function to update or create meta tag
    const updateMeta = (attribute, value, content) => {
      let meta = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, value);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper for link tags
    const updateLink = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Update meta tags
    updateMeta('name', 'title', fullTitle);
    updateMeta('name', 'description', fullDescription);
    
    if (keywords) {
      updateMeta('name', 'keywords', keywords);
    }

    // Open Graph
    updateMeta('property', 'og:title', fullTitle);
    updateMeta('property', 'og:description', fullDescription);
    updateMeta('property', 'og:url', fullCanonical);
    updateMeta('property', 'og:type', type);
    updateMeta('property', 'og:image', fullImage);

    // Twitter
    updateMeta('name', 'twitter:title', fullTitle);
    updateMeta('name', 'twitter:description', fullDescription);
    updateMeta('name', 'twitter:url', fullCanonical);
    updateMeta('name', 'twitter:image', fullImage);

    // Canonical URL
    updateLink('canonical', fullCanonical);

  }, [fullTitle, fullDescription, fullCanonical, fullImage, type, keywords]);

  return null;
}
