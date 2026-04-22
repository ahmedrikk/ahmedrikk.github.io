import { useState, useEffect, useCallback } from 'react'
import { motion } from 'motion/react'
import {
  Mail, ExternalLink, Briefcase, Award,
  Users, Globe, Bot, Zap, FolderGit2, Sparkles, Linkedin, Github,
  Youtube, ChevronRight, ArrowUp, MapPin, Calendar,
  Heart, TrendingUp, Film, Clapperboard,
  Terminal
} from 'lucide-react'
import { translations, seo, type Translations } from './i18n'
import { useHomeSeo } from './articles/use-article-seo'

const t: Translations = translations.en

/* ─── Utilities ─── */

function useInView(threshold = 0.1) {
  const [ref, setRef] = useState<HTMLElement | null>(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    if (!ref) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, threshold])
  return { ref: setRef, isInView }
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, isInView } = useInView(0.08)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function Badge({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'gold' | 'live' | 'outline' }) {
  const base = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium'
  const styles = {
    default: 'bg-muted text-muted-foreground',
    gold: 'bg-gold/10 text-gold border border-gold/20',
    live: 'bg-success/10 text-success border border-success/30',
    outline: 'border border-border text-muted-foreground',
  }
  return <span className={`${base} ${styles[variant]}`}>{children}</span>
}

function StatBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-gold/10 text-gold text-xs font-semibold border border-gold/20">
      {children}
    </span>
  )
}

function SectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 tracking-tight"
    >
      {children}
    </h2>
  )
}

/* ─── Hero Section ─── */

function HeroSection() {
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 pb-16 overflow-hidden">
      {/* Ambient background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(43 76% 47% / 0.15), transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(25 80% 50% / 0.12), transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gold font-medium text-lg mb-4"
        >
          {t.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6"
        >
          Award-winning filmmaker and{' '}
          <span className="text-gradient-theme">AI builder</span>{' '}
          who makes complex things feel human
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {t.pillLabels.map((label) => (
            <Badge key={label} variant="gold">
              {label === 'QuranAI (live)' && <Zap className="w-3 h-3" />}
              {label === '15+ festival selections' && <Film className="w-3 h-3" />}
              {label === '120K+ views' && <TrendingUp className="w-3 h-3" />}
              {label}
            </Badge>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="space-y-4 text-muted-foreground text-lg max-w-2xl mb-10"
        >
          <p>
            At Meta Reality Labs I evaluate 500+ AI-generated creative assets weekly,
            maintaining 85%+ quality scores through 2 promotions in 8 weeks.
          </p>
          <p>
            Before that: 50+ client campaigns at Rikovations. A gaming media platform
            grown 40% at My Otaku World. A RAG app serving communities that have
            nowhere else to go. Four short films on international stages.
          </p>
          <p className="text-foreground font-medium">This still feels like day one.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap gap-3"
        >
          {t.story.nav.map((nav) => (
            <button
              key={nav.label}
              onClick={() => scrollTo(nav.href.replace('#', ''))}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                (nav as any).highlight
                  ? 'bg-gradient-theme-r text-white hover:opacity-90 shadow-lg shadow-primary/20'
                  : 'bg-card border border-border text-foreground hover:border-primary/50 hover:bg-primary/5'
              }`}
            >
              {nav.icon === 'briefcase' && <Briefcase className="w-4 h-4" />}
              {nav.icon === 'folder' && <FolderGit2 className="w-4 h-4" />}
              {nav.icon === 'mail' && <Mail className="w-4 h-4" />}
              {nav.icon === 'bot' && <Bot className="w-4 h-4" />}
              {nav.label}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Core Competencies ─── */

function CompetenciesSection() {
  return (
    <section id="competencies" className="px-6 md:px-12 lg:px-20 py-16">
      <AnimatedSection>
        <SectionTitle>Core Competencies</SectionTitle>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.coreCompetencies.items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.08}>
            <div className="group p-5 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors">
              <h3 className="font-display font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}

/* ─── Work Experience ─── */

function ExperienceSection() {
  return (
    <section id="experience" className="px-6 md:px-12 lg:px-20 py-16">
      <AnimatedSection>
        <SectionTitle>Work Experience</SectionTitle>
      </AnimatedSection>
      <div className="space-y-8">
        {t.experience.items.map((job, i) => (
          <AnimatedSection key={job.company + job.period} delay={i * 0.1}>
            <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground">{job.company}</h3>
                  <p className="text-primary font-medium">{job.title}</p>
                  {(job as any).industry && (
                    <p className="text-xs text-muted-foreground mt-0.5">{(job as any).industry}</p>
                  )}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground whitespace-nowrap">
                  <Calendar className="w-3.5 h-3.5" />
                  {job.period}
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                <MapPin className="w-3.5 h-3.5" />
                {job.location}
              </div>
              <ul className="space-y-2">
                {job.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}

/* ─── Projects ─── */

function ProjectsSection() {
  const statusIcon = (status: string) => {
    if (status === 'Live Production' || status === 'Live') return <Zap className="w-3 h-3" />
    if (status === 'Award-Winning Film') return <Film className="w-3 h-3" />
    if (status === 'In Development') return <Clapperboard className="w-3 h-3" />
    if (status === 'Active / Community') return <Users className="w-3 h-3" />
    return <Briefcase className="w-3 h-3" />
  }

  const statusVariant = (status: string): Parameters<typeof Badge>[0]['variant'] => {
    if (status === 'Live Production' || status === 'Live' || status === 'Active / Community') return 'live'
    if (status === 'Award-Winning Film') return 'gold'
    return 'outline'
  }

  return (
    <section id="projects" className="px-6 md:px-12 lg:px-20 py-16">
      <AnimatedSection>
        <SectionTitle>Projects</SectionTitle>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {t.projects.items.map((project, i) => (
          <AnimatedSection key={project.name} delay={i * 0.08}>
            <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-display font-semibold text-foreground">{project.name}</h3>
                <Badge variant={statusVariant(project.status)}>
                  {statusIcon(project.status)}
                  {project.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stats.map((stat) => (
                  <StatBadge key={stat}>{stat}</StatBadge>
                ))}
              </div>
              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:text-gold transition-colors"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}

/* ─── Sharing / Social Proof ─── */

function SharingSection() {
  return (
    <section id="sharing" className="px-6 md:px-12 lg:px-20 py-16">
      <AnimatedSection>
        <SectionTitle>Sharing</SectionTitle>
        <p className="text-muted-foreground mb-8 -mt-4">{t.sharing.subtitle}</p>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.sharing.cards.map((card, i) => (
          <AnimatedSection key={card.title} delay={i * 0.06}>
            <div className="h-full p-5 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors">
              <h3 className="font-display font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{card.body}</p>
              {card.cta && card.url && (
                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:text-gold transition-colors"
                >
                  {card.cta}
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}

/* ─── Education ─── */

function EducationSection() {
  return (
    <section id="education" className="px-6 md:px-12 lg:px-20 py-16">
      <AnimatedSection>
        <SectionTitle>Education</SectionTitle>
      </AnimatedSection>
      <div className="space-y-6">
        {t.education.items.map((edu, i) => (
          <AnimatedSection key={edu.school} delay={i * 0.1}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 p-5 rounded-2xl bg-card border border-border">
              <div>
                <h3 className="font-display font-semibold text-foreground">{edu.school}</h3>
                <p className="text-primary font-medium">{edu.degree}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.location}
                </p>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground whitespace-nowrap">
                <Calendar className="w-3.5 h-3.5" />
                {edu.dates}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}

/* ─── Certifications ─── */

function CertificationsSection() {
  return (
    <section id="certifications" className="px-6 md:px-12 lg:px-20 py-16">
      <AnimatedSection>
        <SectionTitle>Certifications</SectionTitle>
      </AnimatedSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.certifications.items.map((cert, i) => (
          <AnimatedSection key={cert.name} delay={i * 0.06}>
            <div className="p-5 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-xs text-muted-foreground font-medium">{cert.year}</span>
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm mb-1">{cert.name}</h3>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}

/* ─── Skills ─── */

function SkillsSection() {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-20 py-16">
      <AnimatedSection>
        <SectionTitle>Skills</SectionTitle>
      </AnimatedSection>

      {/* Languages */}
      <AnimatedSection delay={0.05}>
        <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
          <Globe className="w-4 h-4 text-gold" />
          Languages
        </h3>
        <div className="flex flex-wrap gap-3 mb-10">
          {t.skills.languages.map((lang) => (
            <div key={lang.name} className="px-4 py-2 rounded-xl bg-card border border-border">
              <span className="font-medium text-foreground text-sm">{lang.name}</span>
              <span className="text-muted-foreground text-sm ml-2">— {lang.level}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Soft Skills */}
      <AnimatedSection delay={0.1}>
        <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
          <Heart className="w-4 h-4 text-gold" />
          Soft Skills
        </h3>
        <div className="flex flex-wrap gap-2 mb-10">
          {t.skills.soft.map((skill) => (
            <Badge key={skill} variant="default">
              {skill}
            </Badge>
          ))}
        </div>
      </AnimatedSection>

      {/* Tech Stack */}
      <AnimatedSection delay={0.15}>
        <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
          <Terminal className="w-4 h-4 text-gold" />
          Tech Stack
        </h3>
        <div className="space-y-6">
          {Object.entries(t.skills.tech).map(([category, tools]) => (
            <div key={category}>
              <h4 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  )
}

/* ─── Contact ─── */

function ContactSection() {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-20 py-20">
      <AnimatedSection>
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">{t.contact.subtitle}</p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
            <a
              href={`mailto:${t.contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-theme-r text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              <Mail className="w-4 h-4" />
              {t.contact.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            {t.contact.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-foreground hover:border-gold/30 hover:text-gold transition-colors"
              >
                {link.label === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                {link.label === 'GitHub' && <Github className="w-4 h-4" />}
                {link.label === 'YouTube' && <Youtube className="w-4 h-4" />}
                {link.label}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}

/* ─── Footer ─── */

function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-8 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">{t.contact.footer}</p>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com/in/ahmed-rik" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="https://github.com/ahmedrikk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://youtube.com/@juicyorangefilms" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ─── Back to top ─── */

function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 left-6 z-40 p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-gold hover:border-gold/30 transition-all shadow-lg ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  )
}

/* ─── Main App ─── */

export default function App() {
  useHomeSeo({
    lang: 'en',
    title: seo.en.title,
    description: seo.en.description,
  })

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <CompetenciesSection />
      <ExperienceSection />
      <ProjectsSection />
      <SharingSection />
      <EducationSection />
      <CertificationsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  )
}
