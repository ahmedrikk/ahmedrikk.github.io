import { useState, useEffect, useCallback, useRef } from 'react'
import { motion } from 'motion/react'
import {
  Mail, ExternalLink, Briefcase, Award,
  Users, Globe, Bot, Zap, FolderGit2, Sparkles, Linkedin, Github,
  Youtube, ArrowUp, MapPin, Calendar,
  Heart, Film, Clapperboard,
  Terminal, FileText, BookOpen
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

/* ─── Typewriter Hook ─── */

function useTypewriterRotation(roles: readonly string[], {
  typeSpeed = 80,
  deleteSpeed = 60,
  pauseAfterType = 2000,
  pauseAfterDelete = 300
} = {}) {
  const [displayText, setDisplayText] = useState(roles[0] || '')
  const [roleIndex, setRoleIndex] = useState(0)
  const rolesRef = useRef(roles)
  rolesRef.current = roles

  useEffect(() => {
    if (roles.length === 0) return
    let cancelled = false
    let timeoutId: ReturnType<typeof setTimeout>

    let currentIndex = 0
    let currentText = roles[0] || ''
    let isDeleting = false

    const run = () => {
      if (cancelled) return
      const role = rolesRef.current[currentIndex]

      if (!isDeleting) {
        if (currentText.length < role.length) {
          currentText = role.slice(0, currentText.length + 1)
          setDisplayText(currentText)
          timeoutId = setTimeout(run, typeSpeed)
        } else {
          timeoutId = setTimeout(() => {
            isDeleting = true
            run()
          }, pauseAfterType)
        }
      } else {
        if (currentText.length > 0) {
          currentText = currentText.slice(0, -1)
          setDisplayText(currentText)
          timeoutId = setTimeout(run, deleteSpeed)
        } else {
          currentIndex = (currentIndex + 1) % rolesRef.current.length
          setRoleIndex(currentIndex)
          isDeleting = false
          timeoutId = setTimeout(run, pauseAfterDelete)
        }
      }
    }

    run()

    return () => {
      cancelled = true
      clearTimeout(timeoutId)
    }
  }, [roles.length, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete])

  return { displayText, roleIndex }
}

/* ─── Left Sidebar ─── */

const SIDEBAR_SECTIONS = [
  { id: 'competencies', label: 'Competencies' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'sharing', label: 'Sharing' },
  { id: 'education', label: 'Education' },
  { id: 'publications', label: 'Publications' },
  { id: 'certifications', label: 'Certs' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const

function LeftSidebar() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = SIDEBAR_SECTIONS.map(s => s.id)
    const elements = ids
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <aside className={`hidden lg:flex flex-col fixed left-0 top-0 h-screen w-60 border-r border-border bg-background z-40 transition-all duration-500 ${
      visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6 pointer-events-none'
    }`}>
      <div className="flex flex-col h-full px-8 py-10">
        {/* Brand */}
        <div className="mb-10">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="text-2xl font-display font-bold text-foreground hover:text-gold transition-colors">
            RIK
          </a>
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
            Filmmaker, AI Builder,<br />Content Strategist
          </p>
        </div>

        {/* Nav */}
        <nav className="flex-1 flex flex-col gap-1">
          {SIDEBAR_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                activeId === section.id
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        {/* Social */}
        <div className="flex items-center gap-3 pt-6 border-t border-border">
          <a href="https://linkedin.com/in/ahmedrikk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="https://github.com/ahmedrikk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://youtube.com/@ahmedrikk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
            <Youtube className="w-4 h-4" />
          </a>
          <a href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=AgYOBH4AAAAJ&citation_for_view=AgYOBH4AAAAJ:u-x6o8ySG0sC" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
            <BookOpen className="w-4 h-4" />
          </a>
          <a href="mailto:ahmed.athar.rik@gmail.com" className="text-muted-foreground hover:text-gold transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </aside>
  )
}

/* ─── Hero Section ─── */

function HeroSection() {
  const [hydrated, setHydrated] = useState(false)
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    setHydrated(true)
  }, [])

  const { displayText: roleText, roleIndex } = useTypewriterRotation(t.greetingRoles)

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 py-20 overflow-hidden">
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

      <div className="relative z-10 flex flex-col items-start gap-10 max-w-3xl mx-auto w-full">
        {/* Headshot — centered on top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="shrink-0"
        >
          <div className="relative w-40 h-40 md:w-52 md:h-52">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4A017]/30 to-[#D4A017]/10 rotate-3 scale-105" />
            <img
              src="/rik-headshot.webp"
              alt="Ahmed Bin Athar (RIK)"
              className="relative w-full h-full object-cover rounded-full border-2 border-[#D4A017]/30 shadow-2xl shadow-[#D4A017]/10"
              width={208}
              height={208}
            />
          </div>
        </motion.div>

        {/* Text content — centered */}
        <div className="flex-1 min-w-0">
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
            <span className="text-gradient-theme">
              {hydrated ? roleText : t.greetingRoles[0]}
            </span>
            {hydrated && (
              <span
                className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 rounded-sm translate-y-[2px]"
                style={{ animation: 'blink 1s step-end infinite' }}
              />
            )}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {t.pillLabels.map((label, i) => (
              <span
                key={label}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
                  hydrated && i === roleIndex
                    ? 'border border-[#D4A017] bg-[#D4A017]/15 text-foreground scale-105'
                    : 'border border-[#D4A017]/30 bg-background/80 text-muted-foreground'
                }`}
              >
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="space-y-4 text-muted-foreground text-lg max-w-2xl mb-10"
          >
            <p>{t.story.context}</p>
            <p>{t.story.why}</p>
            <div className="text-foreground font-medium space-y-1">
              {t.story.seeking.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
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
      </div>
    </section>
  )
}

/* ─── Core Competencies ─── */

function CompetenciesSection() {
  return (
    <section id="competencies" className="py-16">
      <AnimatedSection>
        <SectionTitle>{t.coreCompetencies.title}</SectionTitle>
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
  const jobs = [
    t.experience.meta,
    t.experience.otakuWorld,
    t.experience.cotton,
    t.experience.rikovations,
    t.experience.concordia,
    t.experience.independentFilmmaker,
  ]

  return (
    <section id="experience" className="py-16">
      <AnimatedSection>
        <SectionTitle>{t.experience.title}</SectionTitle>
      </AnimatedSection>
      <div className="space-y-12">
        {jobs.map((job, i) => (
          <AnimatedSection key={job.company + job.period} delay={i * 0.1}>
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-theme flex items-center justify-center text-white font-display font-bold text-sm">
                    {job.company.charAt(0)}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{job.company}</h3>
                </div>
                <span className="text-sm text-muted-foreground">{job.location}</span>
              </div>
              <p className="text-primary font-medium mb-1">{(job as any).role || (job as any).subtitle || ''}</p>
              <p className="text-sm text-muted-foreground mb-4">{job.period}</p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                {job.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{h}</span>
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
  return (
    <section id="projects" className="py-16">
      <AnimatedSection>
        <SectionTitle>{t.projects.title}</SectionTitle>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {t.projects.items.map((project, i) => {
          const href = ('linkUrl' in project && project.linkUrl) || (project.link ? `https://${project.link}` : null)
          const isCode = project.link?.includes('github') || false
          const linkLabel = ('linkUrl' in project && project.linkUrl)
            ? t.projects.viewPrototype
            : isCode
            ? t.projects.viewCode
            : t.projects.viewPrototype

          return (
            <AnimatedSection key={project.title} delay={i * 0.08}>
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display font-semibold text-foreground">{project.title}</h3>
                  {project.badge && (
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                      project.badge === 'Live Production' || project.badge === 'Live' || project.badge === 'Active'
                        ? 'bg-success/10 text-success border border-success/30'
                        : project.badge === 'Award-Winning Film'
                        ? 'bg-gold/10 text-gold border border-gold/20'
                        : 'border border-border text-muted-foreground'
                    }`}>
                      {project.badge === 'Live Production' || project.badge === 'Live' ? <Zap className="w-3 h-3" /> : null}
                      {project.badge === 'Award-Winning Film' ? <Film className="w-3 h-3" /> : null}
                      {project.badge === 'In Development' ? <Clapperboard className="w-3 h-3" /> : null}
                      {project.badge === 'Active' ? <Users className="w-3 h-3" /> : null}
                      {project.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {'stars' in project && project.stars && (
                  <div className="flex items-center gap-1.5 mb-3 text-sm text-gold">
                    <span className="font-semibold">{project.stars}</span>
                    <span className="text-muted-foreground text-xs">members</span>
                  </div>
                )}
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:text-gold transition-colors"
                  >
                    {linkLabel}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </AnimatedSection>
          )
        })}
      </div>
    </section>
  )
}

/* ─── Sharing / Social Proof ─── */

function SharingSection() {
  const typeIcon = (type: string) => {
    switch (type) {
      case 'film': return <Film className="w-4 h-4 text-gold" />
      case 'award': return <Award className="w-4 h-4 text-gold" />
      case 'project': return <Zap className="w-4 h-4 text-gold" />
      case 'publication': return <FileText className="w-4 h-4 text-gold" />
      case 'work': return <Briefcase className="w-4 h-4 text-gold" />
      default: return <Sparkles className="w-4 h-4 text-gold" />
    }
  }

  return (
    <section id="sharing" className="py-16">
      <AnimatedSection>
        <SectionTitle>{t.sharing.title}</SectionTitle>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.sharing.cards.map((card, i) => (
          <AnimatedSection key={card.title} delay={i * 0.06}>
            <div className="h-full p-5 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                {typeIcon(card.type)}
                <h3 className="font-display font-semibold text-foreground">{card.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{card.body}</p>
              {((card as any).stat1 || (card as any).stat2) && (
                <div className="flex gap-4 mb-4">
                  {(card as any).stat1 && (
                    <div>
                      <span className="text-lg font-bold text-foreground">{(card as any).stat1}</span>
                      <span className="text-xs text-muted-foreground ml-1">{(card as any).label1}</span>
                    </div>
                  )}
                  {(card as any).stat2 && (
                    <div>
                      <span className="text-lg font-bold text-foreground">{(card as any).stat2}</span>
                      <span className="text-xs text-muted-foreground ml-1">{(card as any).label2}</span>
                    </div>
                  )}
                </div>
              )}
              {'cta' in card && 'url' in card && card.cta && card.url && (
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
    <section id="education" className="py-16">
      <AnimatedSection>
        <SectionTitle>{t.education.title}</SectionTitle>
      </AnimatedSection>
      <div className="space-y-6">
        {t.education.items.map((edu, i) => (
          <AnimatedSection key={edu.org} delay={i * 0.1}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 p-5 rounded-2xl bg-card border border-border">
              <div>
                <h3 className="font-display font-semibold text-foreground">{edu.org}</h3>
                <p className="text-primary font-medium">{edu.title}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.desc}
                </p>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground whitespace-nowrap">
                <Calendar className="w-3.5 h-3.5" />
                {edu.year}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}

/* ─── Publications ─── */

function PublicationsSection() {
  return (
    <section id="publications" className="py-16">
      <AnimatedSection>
        <SectionTitle>{t.publications.title}</SectionTitle>
      </AnimatedSection>
      <div className="space-y-4">
        {t.publications.items.map((pub, i) => (
          <AnimatedSection key={pub.title} delay={i * 0.08}>
            <div className="p-5 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <FileText className="w-4 h-4 text-gold" />
                <span className="text-xs text-muted-foreground font-medium">{pub.year}</span>
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm mb-1">{pub.title}</h3>
              <p className="text-xs text-muted-foreground mb-2">{pub.org}</p>
              {'note' in pub && pub.note && <p className="text-xs text-muted-foreground/70 mb-2">{pub.note}</p>}
              {'url' in pub && pub.url && (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:text-gold transition-colors"
                >
                  View paper
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

/* ─── Certifications ─── */

function CertificationsSection() {
  return (
    <section id="certifications" className="py-16">
      <AnimatedSection>
        <SectionTitle>{t.certifications.title}</SectionTitle>
      </AnimatedSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {t.certifications.items.map((cert, i) => (
          <AnimatedSection key={cert.title} delay={i * 0.06}>
            <div className="p-5 rounded-2xl bg-card border border-border hover:border-gold/30 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-xs text-muted-foreground font-medium">{cert.year}</span>
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm mb-1">{cert.title}</h3>
              <p className="text-xs text-muted-foreground">{cert.org}</p>
              {cert.url && cert.url !== '#' && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:text-gold transition-colors mt-2"
                >
                  Verify
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

/* ─── Skills ─── */

function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <AnimatedSection>
        <SectionTitle>{t.skills.title}</SectionTitle>
      </AnimatedSection>

      {/* Languages */}
      <AnimatedSection delay={0.05}>
        <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
          <Globe className="w-4 h-4 text-gold" />
          {t.skills.languages}
        </h3>
        <div className="flex flex-wrap gap-3 mb-10">
          <div className="px-4 py-2 rounded-xl bg-card border border-border">
            <span className="font-medium text-foreground text-sm">{t.skills.english}</span>
            <span className="text-muted-foreground text-sm ml-2">— {t.skills.professional}</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-card border border-border">
            <span className="font-medium text-foreground text-sm">{t.skills.urdu}</span>
            <span className="text-muted-foreground text-sm ml-2">— {t.skills.native}</span>
          </div>
        </div>
      </AnimatedSection>

      {/* Soft Skills */}
      <AnimatedSection delay={0.1}>
        <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
          <Heart className="w-4 h-4 text-gold" />
          {t.skills.soft}
        </h3>
        <div className="flex flex-wrap gap-2 mb-10">
          {t.skills.softSkills.map((skill) => (
            <span key={skill} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
              {skill}
            </span>
          ))}
        </div>
      </AnimatedSection>

      {/* Tech Stack */}
      <AnimatedSection delay={0.15}>
        <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
          <Terminal className="w-4 h-4 text-gold" />
          {t.techStack.title}
        </h3>
        <div className="space-y-6">
          {t.techStack.categories.map((category) => (
            <div key={category.name}>
              <h4 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                {category.name}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tool) => (
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
    <section id="contact" className="py-20">
      <AnimatedSection>
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight">
            {t.cta.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">{t.cta.desc}</p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
            <a
              href={`mailto:${t.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-theme-r text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              <Mail className="w-4 h-4" />
              {t.cta.contact}
            </a>
            <span className="text-sm text-muted-foreground py-3">{t.email}</span>
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
    <footer className="max-w-3xl mx-auto px-6 md:px-12 py-8 border-t border-border">
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
      <LeftSidebar />
      <main className="lg:ml-60">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <HeroSection />
        </div>
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <CompetenciesSection />
          <ExperienceSection />
          <ProjectsSection />
          <SharingSection />
          <EducationSection />
          <PublicationsSection />
          <CertificationsSection />
          <SkillsSection />
          <ContactSection />
        </div>
        <Footer />
        <BackToTop />
      </main>
    </div>
  )
}
