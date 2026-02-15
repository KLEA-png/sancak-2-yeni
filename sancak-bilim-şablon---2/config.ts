/// <reference types="vite/client" />

/**
 * Application Configuration
 * Handles environment-based variables with fallbacks.
 */

// Function to safely get the API URL
const getApiUrl = (): string => {
  // Access Vite environment variable
  // Note: ensure your .env files start variables with VITE_
  const envUrl = import.meta.env.VITE_API_URL;

  if (!envUrl) {
    // Only warn in development or if strict production checks aren't enabled
    if (import.meta.env.DEV) {
        console.warn('VITE_API_URL is not defined in .env file. Using fallback: http://localhost:5000');
    }
    return 'http://localhost:5000';
  }

  return envUrl;
};

export const API_URL = getApiUrl();