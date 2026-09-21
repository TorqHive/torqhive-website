import { useEffect } from 'react';

// Restore the previous page head when leaving the blog, including missing-article noindex.
export default function useBlogMetadata({ title, description, path, image, type = 'website', missing = false }) {
  useEffect(() => {
    const previousTitle = document.title;
    const restore = [];
    const setAttribute = (selector, tag, attributes, key, value) => {
      let element = document.head.querySelector(selector);
      const existed = Boolean(element);
      if (!element) {
        element = document.createElement(tag);
        for (const [name, content] of Object.entries(attributes)) element.setAttribute(name, content);
        document.head.appendChild(element);
      }
      const previous = element.getAttribute(key);
      element.setAttribute(key, value);
      restore.push(() => {
        if (!existed) element.remove();
        else if (previous === null) element.removeAttribute(key);
        else element.setAttribute(key, previous);
      });
    };
    const meta = (attribute, name, value) => setAttribute(`meta[${attribute}="${name}"]`, 'meta', { [attribute]: name }, 'content', value);
    const url = `https://torqhive.com${path}`;
    document.title = title;
    meta('name', 'description', description);
    meta('name', 'robots', missing ? 'noindex, follow' : 'index, follow');
    setAttribute('link[rel="canonical"]', 'link', { rel: 'canonical' }, 'href', url);
    meta('property', 'og:type', type);
    for (const [key, value] of Object.entries({ title, description, url, ...(image ? { image: `https://torqhive.com${image}` } : {}) })) {
      meta('property', `og:${key}`, value);
      meta('name', `twitter:${key}`, value);
    }
    return () => { document.title = previousTitle; restore.reverse().forEach(undo => undo()); };
  }, [title, description, path, image, type, missing]);
}
