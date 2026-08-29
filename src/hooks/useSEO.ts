import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Site-wide constants. The production domain is confirmed from the
// project's own existing content (see PrivacyPolicy.tsx, which already
// names this domain as the portal's own address).
export const SITE_URL = 'https://kamalkhadka.vercel.app';
export const SITE_NAME = 'Kamal Khadka';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-portrait.jpg`;

interface SEOProps {
  title: string;
  description: string;
  /** Defaults to the site's existing hero portrait — do not pass a
   *  different image without an explicit, approved reason. */
  image?: string;
}

// Updates an existing tag's attribute in place. Every tag this hook
// touches already exists in index.html's static baseline, so this
// always finds and updates rather than creating a new element -- this
// is what prevents duplicate meta tags from accumulating as routes
// change, and is why the static baseline in index.html must keep all
// of these tags present (even with placeholder/default content).
function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/**
 * Sets document title, meta description, canonical URL, Open Graph and
 * Twitter/X Card metadata for the current route. Call once near the
 * top of each page component.
 *
 * Note on Open Graph/Twitter Card limitations: most social-media link-
 * preview crawlers (Facebook, LinkedIn, WhatsApp, X) do not execute
 * JavaScript, so this hook's updates are not visible to them -- they
 * only see whatever is already present in the static index.html at
 * request time. This hook correctly updates the document.title (useful
 * immediately, and read by Google's JS-executing crawler for search
 * indexing) and keeps the DOM's own meta tags accurate for any tool
 * that does run JS, but true per-page social-preview cards for non-JS
 * crawlers would require server-side rendering or prerendering, which
 * is out of scope here.
 */
export function useSEO({ title, description, image = DEFAULT_OG_IMAGE }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    const url = `${SITE_URL}${location.pathname}`;

    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', url);

    setMeta('meta[property="og:site_name"]', 'content', SITE_NAME);
    setMeta('meta[property="og:type"]', 'content', 'website');
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:image"]', 'content', image);

    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', image);
  }, [title, description, image, location.pathname]);
}