import type { ComponentType } from 'react'

export interface ArticleSeo {
  title: string
  description: string
}

export interface ArticleConfig {
  id: string
  slug: string
  title: string
  seo: ArticleSeo
  type: 'case-study'
  component: () => Promise<{ default: ComponentType }>
  ragReady?: boolean
  /** Optional SEO metadata for backward compatibility with json-ld.ts */
  seoMeta?: Record<string, unknown>
  /** Optional hero image for backward compatibility */
  heroImage?: string
}

export const articleRegistry: ArticleConfig[] = [
  {
    id: 'quranai',
    slug: 'quranai',
    title: 'Building a RAG App for a Community With No Institutional Support',
    seo: {
      title: 'QuranAI: RAG App for Communities Without Institutional Support | RIK',
      description: 'Case study: building a RAG-powered conversational app for exploring Quranic text with Claude API, vector database, and production PWA.',
    },
    type: 'case-study',
    component: () => import('../QuranAI'),
  },
  {
    id: 'pixel-pulse',
    slug: 'pixel-pulse',
    title: 'A Serverless AI Pipeline for Gaming News',
    seo: {
      title: 'Pixel Pulse: Serverless AI Pipeline for Gaming News | RIK',
      description: 'Case study: full-stack AI gaming news aggregator with React, Groq LLM, and Supabase Edge Functions.',
    },
    type: 'case-study',
    component: () => import('../PixelPulse'),
  },
  {
    id: 'mann-ki-hastam',
    slug: 'mann-ki-hastam',
    title: 'What 15 Festival Selections Actually Looks Like',
    seo: {
      title: 'Mann Ki Hastam: 15+ Festival Selections | RIK',
      description: 'Case study: making a surrealist film about identity with almost nothing. 15+ international festival selections.',
    },
    type: 'case-study',
    component: () => import('../MannKiHastam'),
  },
  {
    id: 'otaku-world-growth',
    slug: 'otaku-world-growth',
    title: '40% Traffic Growth Through Content Systems',
    seo: {
      title: 'Otaku World: 40% Traffic Growth Through Content Systems | RIK',
      description: 'Case study: how systematic operations beat individual heroics. 40% traffic, 30% engagement, 30% output — all without new headcount.',
    },
    type: 'case-study',
    component: () => import('../OtakuWorldGrowth'),
  },
]

export function getAltPaths(): Record<string, string> {
  return {}
}

export function getPageTitles(): Record<string, string> {
  const map: Record<string, string> = {}
  for (const article of articleRegistry) {
    map[`/${article.slug}`] = article.title
  }
  return map
}

export function getSectionLabels(): Record<string, Record<string, string>> {
  return {}
}
