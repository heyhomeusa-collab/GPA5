/**
 * The base URL for Vercel Blob storage assets.
 * Uses the environment variable if available, otherwise falls back to the hardcoded URL.
 */
export const BLOB_BASE_URL = import.meta.env.VITE_BLOB_BASE_URL || 'https://nd9jdgii4xmsnwcd.public.blob.vercel-storage.com';
