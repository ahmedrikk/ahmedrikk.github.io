import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Zap, Server, Cpu, GitBranch } from 'lucide-react'
import { AnimatedSection } from './App'

export default function PixelPulse() {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 md:px-12 lg:px-20 py-24">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </Link>

      <header className="max-w-3xl mb-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-success/10 text-success text-xs font-medium border border-success/30">
            Live
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
          A Serverless AI Pipeline for Gaming News
        </h1>
        <p className="text-xl text-muted-foreground">
          React + Groq LLM + Supabase Edge Functions
        </p>
        <a
          href="https://github.com/ahmedrikk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-gradient-theme-r text-white font-medium hover:opacity-90 transition-opacity"
        >
          <Zap className="w-4 h-4" />
          View code on GitHub
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </header>

      <div className="max-w-3xl space-y-16">
        <AnimatedSection>
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-gold" />
              The Problem
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Gaming news moves fast. By the time a human writer crafts a headline and summary,
                the story has already circulated through Discord servers and Reddit threads. Traditional
                news aggregation is either too slow (manual curation) or too low-quality (raw RSS feeds
                with no context).
              </p>
              <p>
                The challenge was building a pipeline that could ingest from 11+ sources, understand
                what matters, and deliver concise, readable summaries at speed — without requiring
                a team of writers working around the clock.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Server className="w-5 h-5 text-gold" />
              Architecture
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Ingestion layer:</strong> 11+ RSS feeds from
                major gaming outlets (IGN, Polygon, Kotaku, and others) are polled at regular intervals.
                New articles are parsed, deduplicated, and queued for processing.
              </p>
              <p>
                <strong className="text-foreground">AI processing:</strong> Raw article text is
                fed through Groq's LLM API (Llama 3) to generate 280-character summaries optimized
                for social sharing. The model is instructed to preserve factual accuracy while
                writing in an engaging, conversational tone.
              </p>
              <p>
                <strong className="text-foreground">Gamification:</strong> Users earn XP and progress
                through a battle-pass-style system by reading articles, sharing content, and engaging
                with the community. This drives retention without requiring push notifications or
                email marketing.
              </p>
              <p>
                <strong className="text-foreground">Stack:</strong> React + TypeScript frontend,
                Tailwind CSS for styling, Supabase Edge Functions for serverless backend operations,
                Groq LLM for text generation.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-gold" />
              Tech Decisions
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Why Groq over OpenAI/Claude?</strong> Speed and
                cost. Groq's inference API delivers sub-100ms responses for summarization tasks,
                making it feasible to process a high volume of articles in real time without
                building a complex queuing system.
              </p>
              <p>
                <strong className="text-foreground">Why Supabase Edge Functions?</strong> Serverless
                functions colocated with the database eliminate network latency between processing
                and storage. The free tier handles the current volume without cost, and the
                PostgreSQL backend provides a solid foundation for the gamification system.
              </p>
              <p>
                <strong className="text-foreground">Why 280 characters?</strong> Twitter's original
                character limit turned out to be an excellent constraint for summary quality. It
                forces the model to make editorial judgments about what actually matters in a story.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
              What I Learned
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">→</span>
                <span>Speed is a feature. Users will tolerate lower polish if the information arrives fast enough.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">→</span>
                <span>Character limits are better prompt engineering than complex instructions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">→</span>
                <span>Gamification works when it rewards behavior users already want to do, not when it manipulates them into new habits.</span>
              </li>
            </ul>
          </section>
        </AnimatedSection>
      </div>

      <div className="max-w-3xl mt-20 pt-10 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Built by Ahmed Bin Athar (RIK). Code on{' '}
          <a href="https://github.com/ahmedrikk" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold transition-colors">
            GitHub
          </a>
        </p>
      </div>
    </div>
  )
}
