import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Film, Clapperboard, Palette, Award } from 'lucide-react'
import { AnimatedSection } from './App'

export default function MannKiHastam() {
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
          <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium border border-gold/20">
            Award-Winning Film
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
          What 15 Festival Selections Actually Looks Like
        </h1>
        <p className="text-xl text-muted-foreground">
          Making a surrealist film about identity with almost nothing
        </p>
        <a
          href="https://www.youtube.com/watch?v=lCIYJGsT94E"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-gradient-theme-r text-white font-medium hover:opacity-90 transition-opacity"
        >
          <Film className="w-4 h-4" />
          Watch on YouTube
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </header>

      <div className="max-w-3xl space-y-16">
        <AnimatedSection>
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clapperboard className="w-5 h-5 text-gold" />
              Concept
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mann Ki Hastam is a surrealist experimental short film about identity — specifically,
                the experience of navigating multiple, sometimes contradictory identities in a world
                that demands you choose one. The title translates roughly to "I am what my heart is,"
                a line from classical Urdu poetry that captures the film's central tension between
                external labels and internal truth.
              </p>
              <p>
                The film was shot with minimal equipment: a DSLR, two lenses, and available light.
                There was no crew beyond myself and a sound recordist. The budget was under $500,
                most of which went to location permits and travel.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Palette className="w-5 h-5 text-gold" />
              Production
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Visual language:</strong> The film alternates
                between highly stylized, dreamlike sequences and raw, documentary-style footage.
                This was not a post-production decision — it was baked into the shot list. Each
                scene was designed to feel like a memory: partially true, partially invented, always
                emotional before it is rational.
              </p>
              <p>
                <strong className="text-foreground">Sound design:</strong> Rather than scoring the
                film traditionally, I worked with a sound designer to build an auditory landscape
                from field recordings, archival audio, and original compositions. The result is
                less a soundtrack than an environment.
              </p>
              <p>
                <strong className="text-foreground">Post-production:</strong> Edited in Adobe Premiere
                Pro, color graded in DaVinci Resolve. The grade was critical — the surreal sequences
                needed to feel otherworldly without looking like a filter. Each shot was hand-graded
                to maintain tonal consistency across very different lighting conditions.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-gold" />
              Festival Strategy
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Submitting to festivals is a project management problem disguised as a creative one.
                I researched 200+ festivals, narrowed to 40 that had programmed similar work in the
                past 3 years, and submitted in strategic waves.
              </p>
              <p>
                The key insight: festivals program films, but they also program filmmakers. A consistent
                submission strategy — professional press kit, clear artist statement, responsive
                communication — matters as much as the film itself.
              </p>
              <p>
                15+ selections later, the film was broadcast on Can 9 TV with 3 repeat airings and has
                accumulated over 120,000 views across platforms.
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
                <span>Constraint breeds creativity. The $500 budget forced decisions that improved the film.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">→</span>
                <span>Festivals are a marketing exercise. Treat them like product launches.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">→</span>
                <span>Surrealism is not randomness. Every "weird" choice was motivated by emotional logic.</span>
              </li>
            </ul>
          </section>
        </AnimatedSection>
      </div>

      <div className="max-w-3xl mt-20 pt-10 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Directed by Ahmed Bin Athar (RIK). Watch on{' '}
          <a href="https://www.youtube.com/watch?v=lCIYJGsT94E" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-gold transition-colors">
            YouTube
          </a>
        </p>
      </div>
    </div>
  )
}
