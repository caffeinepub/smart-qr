/**
 * Landing page configuration
 * Provides configurable values for the landing page components
 */

/**
 * Gets the embed URL for the Smart QR Login/Register app
 * This should be set via the VITE_SMART_QR_EMBED_URL environment variable
 * 
 * @returns The embed URL or null if not configured
 */
export function getEmbedUrl(): string | null {
  const embedUrl = import.meta.env.VITE_SMART_QR_EMBED_URL;
  
  if (!embedUrl || embedUrl.trim() === '') {
    return null;
  }
  
  return embedUrl.trim();
}
