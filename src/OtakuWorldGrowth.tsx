import { Link } from 'react-router-dom'
import { ArrowLeft, TrendingUp, BarChart3, Users, Target } from 'lucide-react'
import { AnimatedSection } from './App'

export default function OtakuWorldGrowth() {
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
            Case Study
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
          40% Traffic Growth Through Content Systems
        </h1>
        <p className="text-xl text-muted-foreground">
          How systematic operations beat individual heroics
        </p>
      </header>

      <div className="max-w-3xl space-y-16">
        <AnimatedSection>
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-gold" />
              Situation
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                When I joined My Otaku World, the site was growing but unpredictably. Traffic
                spiked when a writer happened to catch a trend, then flatlined for weeks. The
                editorial team was talented but reactive — there was no system for planning,
                producing, and distributing content at scale.
              </p>
              <p>
                The company had 2,000+ content assets across gaming and anime verticals, but no
                centralized management system. Writers duplicated effort. Editors lost track of
                what was in production. SEO was an afterthought applied after publishing.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-gold" />
              What We Built
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Editorial calendar system:</strong> Moved from
                ad-hoc publishing to a structured 30-day rolling calendar. Each piece was mapped
                to a keyword cluster, a distribution channel, and a success metric before writing
                began.
              </p>
              <p>
                <strong className="text-foreground">Content pipeline:</strong> Built a 4-stage
                workflow — pitch → draft → edit → publish → distribute. Each stage had clear
                owners, deadlines, and quality gates. Writers knew exactly what was expected.
                Editors had a dashboard showing everything in flight.
              </p>
              <p>
                <strong className="text-foreground">AI-assisted production:</strong> Integrated
                Claude, ChatGPT, and MidJourney into the workflow for research, outline generation,
                and image creation. Not to replace writers — to accelerate the parts that slow
                humans down (research, formatting, first drafts).
              </p>
              <p>
                <strong className="text-foreground">Asset management:</strong> Implemented a
                tagging and categorization system for the 2,000+ existing assets, enabling
                repurposing, updating, and cross-linking at scale.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-gold" />
              Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-5 rounded-2xl bg-card border border-border text-center">
                <div className="text-3xl font-display font-bold text-gold mb-1">40%</div>
                <div className="text-sm text-muted-foreground">Organic traffic growth</div>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-border text-center">
                <div className="text-3xl font-display font-bold text-gold mb-1">30%</div>
                <div className="text-sm text-muted-foreground">Engagement increase MoM</div>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-border text-center">
                <div className="text-3xl font-display font-bold text-gold mb-1">30%</div>
                <div className="text-sm text-muted-foreground">Publishing output increase</div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              All of this was achieved without adding headcount. The same team, working with better
              systems, produced measurably better results. The key was not working harder — it was
              removing the friction that made hard work necessary.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <section>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-gold" />
              Lessons
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">→</span>
                <span>Systems scale. Talent doesn't. The best writer in the world can't out-produce a mediocre writer with a great system.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">→</span>
                <span>AI tools are most effective when integrated into workflows, not treated as replacement workers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">→</span>
                <span>Visibility beats velocity. A slow, visible pipeline outperforms a fast, opaque one because teams can optimize what they can see.</span>
              </li>
            </ul>
          </section>
        </AnimatedSection>
      </div>

      <div className="max-w-3xl mt-20 pt-10 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Case study by Ahmed Bin Athar (RIK). Work performed at My Otaku World, October 2023 – November 2025.
        </p>
      </div>
    </div>
  )
}
