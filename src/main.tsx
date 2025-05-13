
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Add the import for HelmetProvider
import { HelmetProvider } from 'react-helmet-async';

console.log("React version:", React.version);
console.log("Initializing application...");

// Create root and render with strict mode for better debugging
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Failed to find the root element");
} else {
  console.log("Root element found, mounting React application");
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
  console.log("React application mounted");
}

