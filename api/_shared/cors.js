// ---------------------------------------------------------------------------
// CORS helper for split deployment (frontend on GitHub Pages, backend on Vercel)
// ---------------------------------------------------------------------------

const ALLOWED_ORIGINS = [
  'https://ahmedrikk.github.io',
  'http://localhost:5173',
  'http://localhost:3000',
]

export function getCorsHeaders(request) {
  const origin = request.headers.get('origin') || ''
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]

  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Prompt-Version, X-Prompt-Auth, X-Trace-Source',
    'Access-Control-Max-Age': '86400',
  }
}

export function corsResponse(body, init = {}, request) {
  const headers = {
    ...getCorsHeaders(request),
    'Content-Type': 'application/json',
    ...(init.headers || {}),
  }

  return new Response(body, { ...init, headers })
}

export function handleOptions(request) {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: getCorsHeaders(request),
    })
  }
  return null
}
