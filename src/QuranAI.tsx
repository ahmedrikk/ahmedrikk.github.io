import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Zap, Brain, Database, Shield } from 'lucide-react'
import { AnimatedSection } from './App'

export default function QuranAI() {
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
            Live Production
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
          Building a RAG App for a Community With No Institutional Support
        </h1>
        <p className="text-xl text-muted-foreground">
          Claude API + Vector Database + Production PWA
        </p>
        <a
          href="https://aiquran.live"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-gradient-theme-r text-white font-medium hover:opacity-90 transition-opacity"
        >
          <Zap className="w-4 h-4" />
          View live at aiquran.live
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </header>

      <div className="max-w-3xl space-y-16">
        <AnimatedSection>
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-gold" />
              The Problem
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                LGBTQ+ Muslims navigating identity within religious frameworks face a unique challenge:
                they have no institutional support for questions that sit at the intersection of faith
                and identity. Traditional religious authorities often reject them outright. Mainstream
                LGBTQ+ resources rarely understand the theological nuance.
              </p>
              <p>
                Existing AI chatbots are dangerous in this space. General-purpose LLMs hallucinate
                Quranic verses, invent hadith, and can cause real harm to vulnerable users seeking
                guidance. The risk of misinformation is not theoretical — it is existential for people
                living in criminalized environments.
              </p>
              <p>
                The goal was not to replace religious scholarship, but to create a tool that helps
                people explore primary sources with accuracy, context, and safety.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Database className="w-5 h-5 text-gold" />
              Technical Architecture
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">RAG Pipeline:</strong> QuranAI uses a retrieval-augmented
                generation architecture. Quranic text and authenticated tafsir (exegesis) are embedded
                into a vector database. When a user asks a question, the system retrieves the most
                relevant verses and scholarly interpretations before generating a response.
              </p>
              <p>
                <strong className="text-foreground">Claude API:</strong> The generation layer uses
                Anthropic's Claude, chosen for its strong performance on nuanced, culturally sensitive
                prompts and its larger context window for handling longer theological passages.
              </p>
              <p>
                <strong className="text-foreground">Vector Database:</strong> Embeddings are stored
                in a vector database with semantic search capabilities, enabling users to ask questions
                in natural language rather than requiring exact verse references.
              </p>
              <p>
                <strong className="text-foreground">PWA:</strong> Built as a progressive web app so
                users on restricted networks or low-end devices can access it without app store friction.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-gold" />
              Safety & Accuracy
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The hardest part was not the technical architecture — it was figuring out what
                "accuracy" means when the source material has been interpreted differently for
                1,400 years.
              </p>
              <p>
                Every response includes source citations to specific verses and scholarly works.
                The system is designed to surface multiple interpretive traditions where they exist,
                rather than presenting a single authoritative answer. When a question falls outside
                the retrieved knowledge base, the model is instructed to say so rather than hallucinate.
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
                <span>Building for marginalized communities requires safety thinking from day one, not as an afterthought.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">→</span>
                <span>RAG is not a silver bullet — retrieval quality matters more than generation quality in sensitive domains.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">→</span>
                <span>Cultural context is a system design problem, not a prompt engineering problem.</span>
              </li>
            </ul>
          </section>
        </AnimatedSection>
      </div>

      <div className="max-w-3xl mt-20 pt-10 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Built by Ahmed Bin Athar (RIK). Live at{' '}
          <a href="https://aiquran.live" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold transition-colors">
            aiquran.live
          </a>
        </p>
      </div>
    </div>
  )
}
