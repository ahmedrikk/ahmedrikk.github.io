/**
 * API configuration for split deployment:
 * - Frontend: GitHub Pages (ahmedrikk.github.io)
 * - Backend: Vercel Edge Functions (configured via VITE_API_BASE_URL)
 *
 * For local dev: VITE_API_BASE_URL=http://localhost:3000 (or leave empty for same-origin)
 * For production: VITE_API_BASE_URL=https://your-vercel-app.vercel.app
 */

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export function apiPath(path: string): string {
  // Ensure path starts with /
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${API_BASE_URL}${normalized}`
}
