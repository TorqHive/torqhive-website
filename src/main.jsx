import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { initAnalytics } from './utils/analytics';

// Initialize GA4 / Clarity data layer
initAnalytics();

createRoot(document.getElementById('root')).render(<App />);
