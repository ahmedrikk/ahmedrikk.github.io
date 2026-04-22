# ahmedrikk.github.io

> Interactive portfolio for Ahmed Bin Athar (RIK) — filmmaker, AI builder, and content strategist. Built on the cv-santiago architecture.

[![Live Site](https://img.shields.io/badge/live-ahmedrikk.github.io-amber?style=flat-square)](https://ahmedrikk.github.io)
[![Built with Claude Code](https://img.shields.io/badge/built%20with-Claude%20Code-blueviolet?style=flat-square)](https://claude.ai/code)

---

## About

This is the interactive portfolio and CV for **Ahmed Bin Athar (RIK)**, a Chicago-based filmmaker, AI builder, and content strategist currently working at Meta Reality Labs.

**What's on the site:**
- **Hero** — Opening statement with tag badges and CTAs
- **Core Competencies** — AI Content Production, Creative Strategy, Content Systems, Video Production, Community Building, Platform Strategy
- **Work Experience** — Meta Reality Labs, My Otaku World, Rikovations, Concordia University Chicago, Cotton Connection
- **Projects** — QuranAI (live RAG app), Pixel Pulse (AI news aggregator), 4 short films with 15+ festival selections, Bulleyah screenplay
- **Sharing** — Social proof cards: festival wins, IEEE publication, novel, Meta promotions
- **Education** — MBA (Marketing), Film Diploma, BS (Computer Science)
- **Certifications** — Google AI Essentials, Google Prompting Essentials, DaVinci Resolve Certified, IEEE Publication
- **Skills** — Languages, soft skills, and tech stack (AI/Generative, Video Production, Development, Marketing, Design)
- **AI Chatbot "RIK"** — Text-based chatbot that responds in first person. Ask it anything about films, AI projects, or career goals.

**Case Studies:**
- `/quranai` — Building a RAG App for a Community With No Institutional Support
- `/pixel-pulse` — A Serverless AI Pipeline for Gaming News
- `/mann-ki-hastam` — What 15 Festival Selections Actually Looks Like
- `/otaku-world-growth` — 40% Traffic Growth Through Content Systems

---

## Tech Stack

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Claude](https://img.shields.io/badge/Claude_Sonnet-191919?style=flat&logo=anthropic&logoColor=white)

**Inherited from cv-santiago (preserved):**
- AI Chatbot with RAG pipeline (agentic hybrid search: pgvector + BM25)
- 6-layer prompt injection defense
- 71 automated evals framework
- LLMOps dashboard (`/ops`)
- Voice mode (OpenAI Realtime API)
- Langfuse tracing and observability

---

## Quick Start

```bash
git clone https://github.com/ahmedrikk/ahmedrikk.github.io.git
cd ahmedrikk.github.io
npm install
npm run dev
```

Open [localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

The `dist/` folder will contain the static site ready for GitHub Pages deployment.

### Environment Variables

```bash
# Core
ANTHROPIC_API_KEY=           # Claude API (chatbot)
OPENAI_API_KEY=              # Embeddings + Voice

# RAG
SUPABASE_URL=                # Supabase project URL
SUPABASE_SERVICE_ROLE_KEY=   # Supabase service key

# Observability
LANGFUSE_PUBLIC_KEY=         # Langfuse tracing
LANGFUSE_SECRET_KEY=         # Langfuse tracing

# Alerts & Dashboard
RESEND_API_KEY=              # Jailbreak email alerts
OPS_DASHBOARD_SECRET=        # Dashboard password (/ops)
```

---

## Project Structure

```
src/
├── App.tsx                  # Main portfolio — all 9 sections
├── FloatingChat.tsx         # Chat widget (text mode)
├── useVoiceMode.ts          # Voice mode hook (OpenAI Realtime)
├── VoiceOrb.tsx             # Voice UI (orb + transcript)
├── GlobalNav.tsx            # Navigation
├── main.tsx                 # React Router + lazy loading
├── i18n.ts                  # English-only translations
├── articles/
│   ├── registry.ts          # Case study routing config
│   ├── components.tsx       # Shared article components
│   └── json-ld.ts           # JSON-LD builder
├── ops/                     # LLMOps Dashboard
│   ├── OpsDashboard.tsx     # Shell + Overview tab
│   ├── OpsAuth.tsx          # Login screen
│   ├── types.ts             # Shared TypeScript interfaces
│   ├── hooks/               # useOpsApi, useTraces
│   ├── components/          # KpiCard, MetricChart, FilterBar, etc.
│   └── tabs/                # Conversations, Costs, Security, Evals, etc.
├── QuranAI.tsx              # Case study: RAG app
├── PixelPulse.tsx           # Case study: AI news pipeline
├── MannKiHastam.tsx         # Case study: Film festival journey
└── OtakuWorldGrowth.tsx     # Case study: Content systems growth

api/
├── chat.js                  # Main chatbot edge function
├── voice-token.js           # Voice ephemeral token + rate limit
├── voice-trace.js           # Voice session tracing
├── rag-search.js            # RAG for voice function calling
├── _shared/
│   ├── rag.js               # RAG pipeline (search, rerank, cost)
│   ├── prompt.js            # Prompt versioning (Langfuse)
│   └── ops-auth.js          # Dashboard auth helper
└── ops/                     # Dashboard API proxy layer
    ├── auth.js, stats.js, traces.js, trace/[id].js
    ├── evals.js, prompts.js, rag-stats.js

evals/
├── datasets/                # 10 JSON datasets (71 test cases)
├── assertions.ts            # Deterministic assertions
├── llm-judge.ts             # LLM-as-Judge (Haiku)
└── runner.ts                # Eval runner

scripts/                     # Build and maintenance scripts
tests/
├── ops-contract.test.ts     # Contract tests (67 assertions)
└── ops-dashboard.test.ts    # Dashboard API tests (102 assertions)

chatbot-prompt.txt           # System prompt for RIK chatbot
llms.txt                     # LLM-friendly resume summary
```

---

## Deployment

This site is deployed to **GitHub Pages** via GitHub Actions.

The workflow (`.github/workflows/pages.yml`):
1. Builds the React app on every push to `main`
2. Copies `index.html` to `404.html` for SPA routing support
3. Deploys the `dist/` folder to GitHub Pages

---

## License

MIT

---

## Let's Connect

[![Website](https://img.shields.io/badge/ahmedrikk.github.io-000?style=for-the-badge&logo=safari&logoColor=white)](https://ahmedrikk.github.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ahmed-rik)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ahmedrikk@gmail.com)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@juicyorangefilms)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ahmedrikk)
