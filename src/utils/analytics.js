/**
 * Centralized analytics tracker for TorqHive
 * Supports Google Analytics 4 (gtag), Google Tag Manager (dataLayer), and Microsoft Clarity custom events.
 */

export function initAnalytics() {
  if (typeof window === 'undefined') return;

  // Initialize dataLayer queue
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
  }

  // Load GA4 if ID is provided via env or window
  const gaId = import.meta.env.VITE_GA_ID || window.__GA_ID__;
  if (gaId && !document.getElementById('ga-script')) {
    const s = document.createElement('script');
    s.id = 'ga-script';
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(s);
    window.gtag('config', gaId, { send_page_view: true });
  }

  // Load Clarity if ID is provided via env or window
  const clarityId = import.meta.env.VITE_CLARITY_ID || window.__CLARITY_ID__;
  if (clarityId && !document.getElementById('clarity-script')) {
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.id='clarity-script';t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", clarityId);
  }
}

export function trackEvent(eventName, params = {}) {
  try {
    // 1. Google Analytics 4 (gtag)
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }

    // 2. Google Tag Manager (dataLayer)
    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params,
        timestamp: new Date().toISOString(),
      });
    }

    // 3. Microsoft Clarity custom event
    if (typeof window !== 'undefined' && typeof window.clarity === 'function') {
      window.clarity('event', eventName);
    }

    if (import.meta.env.DEV) {
      console.log(`[Analytics] Tracked ${eventName}:`, params);
    }
  } catch (err) {
    console.warn('[Analytics] Failed to track event:', err);
  }
}

/**
 * Track WhatsApp outbound click
 * @param {Object} opts
 * @param {string} opts.location - where the click occurred (e.g. 'pdp_hero', 'pdp_quick', 'fab', 'footer', 'header', 'card')
 * @param {string} [opts.productId] - optional product SKU/ID
 * @param {string} [opts.productTitle] - optional product name
 */
export function trackWhatsAppClick({ location, productId = '', productTitle = '' } = {}) {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: productId ? `${productId} (${location})` : location,
    button_location: location,
    product_id: productId,
    product_title: productTitle,
    value: 1,
  });
}

/**
 * Track B2B Inquiry form submission
 */
export function trackInquirySubmit({ productId = '', company = '', destination = '' } = {}) {
  trackEvent('generate_lead', {
    event_category: 'conversion',
    event_label: productId || 'general_inquiry',
    product_id: productId,
    company_name: company,
    destination_country: destination,
    value: 10,
  });
}

/**
 * Track Catalog or Spec Document download/view
 */
export function trackDocumentView({ docName = '', docType = 'spec' } = {}) {
  trackEvent('document_view', {
    event_category: 'engagement',
    document_name: docName,
    document_type: docType,
  });
}
