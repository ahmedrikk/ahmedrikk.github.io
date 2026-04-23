export const seo = {
  en: {
    title: 'Ahmed Bin Athar (RIK) — Filmmaker, AI Builder, Content Strategist',
    description:
      'Chicago-based filmmaker and AI builder. 15+ international festival selections. RAG apps in production. Content systems that grow platforms 40%. Currently at Meta Reality Labs.',
  },
};

export type Lang = 'en';

const _en = {
  greeting: 'making complex things feel human',
  greetingRoles: [
    'Award-winning Filmmaker',
    'AI Content Producer',
    'Creative Strategist',
    'Community Builder',
    'Technical Storyteller',
    'Video Producer',
  ],
  pillLabels: ['Filmmaker', 'AI Builder', 'Content Strategist'],
  email: 'ahmedrikk@gmail.com',

  story: {
    context: 'At Meta Reality Labs I evaluate 500+ AI-generated assets weekly.',
    reflections: [
      'Maintaining 85%+ quality scores.',
      '2 promotions. 8 weeks.',
    ],
    hookParagraphs: [
      ['This still feels like day one.'],
      ['Bigger platforms. Harder stories.', 'End-to-end.'],
    ],
    why: 'Before that: 50+ client campaigns at Rikovations. A gaming media platform grown 40% at My Otaku World. A RAG app serving communities that have nowhere else to go. Four short films on international stages.',
    seeking: [
      'The thread connecting all of it:',
      'Making complex things feel human.',
      "Ready for what's next.",
    ],
    nav: [
      { icon: 'briefcase', label: 'My path', href: '#experience' },
      { icon: 'folder', label: 'What I build', href: '#projects' },
      { icon: 'mail', label: "Let's talk", href: '#contact' },
      { icon: 'bot', label: 'Ask RIK', href: '#chat', highlight: true },
    ],
    skipButton: 'Skip intro',
  },

  coreCompetencies: {
    title: 'Core Competencies',
    items: [
      {
        title: 'AI Content Production',
        desc: 'Prompt engineering, LLM evaluation, multimodal quality, AI workflow automation',
      },
      {
        title: 'Creative Strategy & Storytelling',
        desc: 'Campaign concepting, scriptwriting, brand voice, visual narrative, editorial direction',
      },
      {
        title: 'Content Systems at Scale',
        desc: 'Editorial workflows, production pipelines, 2,000+ asset management, output optimization',
      },
      {
        title: 'Video Production & Post',
        desc: 'Directing, cinematography, Adobe Premiere Pro, DaVinci Resolve, color grading, broadcast delivery',
      },
      {
        title: 'Community Building & User Ops',
        desc: 'Discord management, harm reduction frameworks, user retention, DAU growth, peer counseling',
      },
      {
        title: 'Social Media & Platform Strategy',
        desc: 'TikTok, Instagram Reels, YouTube, LinkedIn, X — organic growth, discovery optimization',
      },
    ],
  },

  experience: {
    title: 'Work Experience',

    meta: {
      company: 'Meta Reality Labs',
      subtitle: 'via TekSystems',
      location: 'Remote',
      role: 'AI Content and Creative Quality Specialist (Contract)',
      period: 'November 2025 – Present',
      highlights: [
        'Evaluated 500+ AI-generated creative assets weekly across Meta AI platforms, maintaining 85%+ quality scores by applying structured narrative, cultural, and brand alignment rubrics to multimodal outputs (video, image, text).',
        "Earned 2 promotions in 8 weeks — Trainee → Production → Jr. Team Lead — by consistently exceeding Meta's internal annotation quality benchmarks.",
        'Identified and documented recurring failure patterns in AI-generated content including cultural misrepresentation, hallucinated context, and demographic bias, contributing structured findings to improve production team standards.',
        "Built repeatable quality evaluation frameworks for LLM-generated creative content using Meta's internal tooling: Halo SRT, Metamate, and meta.ai dogfooding environments.",
      ],
    },

    otakuWorld: {
      company: 'My Otaku World',
      location: 'Remote',
      role: 'Senior Content and Marketing Manager',
      period: 'October 2023 – November 2025',
      highlights: [
        'Grew organic traffic 40% in 12 months by designing and executing an integrated SEO and editorial strategy tracked via Google Analytics (GA4) and Ahrefs across gaming and anime verticals.',
        'Increased audience engagement 30% month-over-month by producing platform-native short-form video and social content optimized for YouTube, Instagram Reels, and TikTok discovery algorithms.',
        'Managed 2,000+ digital content assets across simultaneous verticals, building editorial calendars and production workflows that increased publishing output 30% without additional headcount.',
        'Reduced per-asset production time 40% by integrating Claude, ChatGPT, and MidJourney into the editorial pipeline for drafting, ideation, and image generation at scale.',
      ],
    },

    abbvie: {
      company: 'AbbVie',
      location: 'Chicago, IL',
      role: 'Technical Support Specialist',
      period: 'October 2022 – September 2023',
      highlights: [
        "Provided IT and technical support across security, compliance, and infrastructure for one of the world's largest pharmaceutical companies, resolving 100+ support tickets monthly with a first-contact resolution rate above 90%.",
        "Enforced security and compliance protocols across enterprise systems, ensuring all support activity met AbbVie's internal IT governance standards and regulatory requirements.",
        'Collaborated cross-functionally with security, IT, and business teams to triage, escalate, and resolve technical issues across a large-scale enterprise environment.',
      ],
    },

    cotton: {
      company: 'Cotton Connection',
      location: 'Chicago, IL',
      role: 'Digital Marketing Manager',
      period: 'March 2022 – September 2022',
      highlights: [
        'Increased eCommerce sales 15% and web traffic 20% in 6 months by producing and optimizing paid and organic campaigns across Meta Ads, Google, and social channels.',
        'Tracked all campaign performance via UTM parameters and Google Analytics, delivering weekly performance reports that informed creative and budget decisions.',
      ],
    },

    rikovations: {
      company: 'Rikovations Pvt. Ltd.',
      location: 'Remote — Global Accounts',
      role: 'Marketing Manager / Creative Director',
      period: 'March 2019 – March 2022',
      highlights: [
        'Drove 45% average revenue growth across a portfolio of 50+ client accounts by leading campaign strategy, creative direction, and delivery across technology, consumer electronics, and professional services verticals.',
        'Onboarded 15+ new clients and reduced ramp time 30% by building standardized brand playbooks, creative brief templates, and client onboarding documentation.',
        'Managed a team of 4 designers, writers, and coordinators across a $50K annual production budget, delivering 100% of projects on deadline over 3 years.',
        'Produced 50+ campaigns including advertisements, product launch videos, cinematic brand visuals, and social content across digital and broadcast channels.',
      ],
    },

    concordia: {
      company: 'Concordia University Chicago',
      location: 'Chicago, IL',
      role: 'AV and Technical Support Specialist',
      period: 'October 2019 – August 2022',
      highlights: [
        'Managed video installations, classroom AV, and live event media across a multi-building academic campus, supporting 100+ faculty and staff users.',
        'Coordinated broadcast-quality AV production for faculty events, lecture recordings, grant application videos, and campus communications on deadline.',
        'Collaborated with academic departments to translate faculty needs into practical video deliverables, maintaining a 95%+ satisfaction rating on post-event surveys.',
      ],
    },

    independentFilmmaker: {
      company: 'Independent Filmmaker',
      location: 'Chicago, IL (and internationally)',
      role: 'Director / Writer / Editor',
      period: '2018 – Present',
      highlights: [
        'Directed and edited 4 short films earning 15+ international festival selections, broadcast distribution on Can 9 TV with 3 repeat airings, and 120K+ cumulative views across YouTube and social platforms.',
        'Received Honorable Mention at Cine Pobre International Film Festival 2024 for Rekhta, an experimental short using black-and-white and color contrast as narrative metaphor.',
        'Won 2nd place at the Mandi Theater 10-Minute Play Contest 2025 for Just Ten Minutes, and received 2 Mandi Theater trophies for writing and direction.',
        'Developed Bulleyah, a 117-page feature screenplay recovering the erased queer identity of 18th-century Sufi poet Bulleh Shah — 5 years in active development.',
        'Built AI-assisted production workflows using MidJourney, Stable Diffusion, ComfyUI, Runway, and Higgsfield to prototype cinematic visuals for the Bulleyah proof-of-concept pitch reel.',
      ],
    },
  },

  projects: {
    title: 'Projects',
    githubLink: 'github.com/ahmedrikk',
    viewCode: 'View code',
    viewPrototype: 'View live',

    items: [
      {
        title: 'QuranAI / AIQuran',
        badge: 'Live Production',
        badgeBuilding: '',
        desc: 'RAG-powered conversational app for exploring Quranic text. Built to serve LGBTQ+ Muslims navigating identity within religious frameworks — a population with no institutional support and high risk of harm from LLM misinformation.',
        tech: ['Claude API', 'RAG Architecture', 'Vector Database', 'Prompt Engineering', 'PWA'],
        link: 'aiquran.live',
      },
      {
        title: 'Pixel Pulse',
        badge: 'Live',
        badgeBuilding: '',
        desc: 'Full-stack AI gaming news aggregator. Fetches from 11+ RSS feeds (IGN, Polygon, Kotaku), processes through Groq LLM (Llama 3) to generate 280-character summaries. XP/battle pass gamification system.',
        tech: ['React', 'TypeScript', 'Tailwind', 'Supabase Edge Functions', 'Groq LLM'],
        link: 'github.com/ahmedrikk',
      },
      {
        title: 'Mann Ki Hastam',
        badge: 'Award-Winning Film',
        badgeBuilding: '',
        desc: 'Surrealist experimental short film exploring identity. Directed, shot, and edited end-to-end. 15+ international festival selections. Broadcast on Can 9 TV with 3 repeat airings. 120K+ cumulative views.',
        tech: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Surrealist Cinematography'],
        link: 'youtube.com/watch?v=lCIYJGsT94E',
        linkUrl: 'https://www.youtube.com/watch?v=lCIYJGsT94E',
      },
      {
        title: 'Rekhta',
        badge: 'Award-Winning Film',
        badgeBuilding: '',
        desc: 'Experimental short using black-and-white and color contrast as narrative metaphor for liberation and constraint. Honorable Mention, Cine Pobre International Film Festival 2024.',
        tech: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Color Theory'],
        link: 'youtube.com/watch?v=1EOnXWCjLlc',
        linkUrl: 'https://www.youtube.com/watch?v=1EOnXWCjLlc',
      },
      {
        title: 'Bulleyah',
        badge: 'In Development',
        badgeBuilding: 'In Development',
        desc: '117-page feature screenplay recovering the erased queer identity of 18th-century Sufi poet Bulleh Shah. Five years in development. Refuses to translate South Asian queer experience for Western consumption.',
        tech: ['Screenwriting', 'Archival Research', 'Decolonial Aesthetics'],
        link: '',
      },
      {
        title: 'Pakistani LGBTQ+ Community',
        badge: 'Active',
        badgeBuilding: '',
        desc: 'Founded and scaled a harm reduction community for queer Pakistanis navigating criminalized environments. PrEP access guidance, HIV prevention education, mental health support.',
        tech: ['Community Operations', 'Harm Reduction', 'Discord', 'Peer Counseling'],
        link: '',
        stars: '55',
      },
    ],
  },

  sharing: {
    title: 'Sharing',

    cards: [
      {
        type: 'film',
        title: 'Mann Ki Hastam (2021)',
        body: '15+ international festival selections. Broadcast on Can 9 TV with 3 repeat airings. 120K+ cumulative views.',
        url: 'https://www.youtube.com/watch?v=lCIYJGsT94E',
        cta: 'Watch on YouTube',
        stat1: '15+',
        label1: 'Festivals',
        stat2: '120K+',
        label2: 'Views',
      },
      {
        type: 'film',
        title: 'Rekhta (2024)',
        body: 'Honorable Mention, Cine Pobre International Film Festival 2024. Experimental short on liberation.',
        url: 'https://www.youtube.com/watch?v=1EOnXWCjLlc',
        cta: 'Watch on YouTube',
      },
      {
        type: 'award',
        title: 'Just Ten Minutes (2025)',
        body: '2nd place, Mandi Theater 10-Minute Play Contest 2025. Two Mandi Theater trophies for writing and direction.',
      },
      {
        type: 'project',
        title: 'QuranAI — Live RAG App',
        body: 'Built a production RAG app with the Claude API serving communities with no institutional support. Live at aiquran.live.',
        url: 'https://aiquran.live',
        cta: 'View live',
      },
      {
        type: 'publication',
        title: 'IEEE Publication (2018)',
        body: 'Analysis of SAR Images Speckle Reduction Techniques. Peer-reviewed, indexed on IEEE Xplore.',
        url: 'https://ieeexplore.ieee.org/document/8346335',
        cta: 'View paper',
      },
      {
        type: 'publication',
        title: 'Published Novel (2018)',
        body: 'The Blood Moon — published by Daastan Publication House. Fiction.',
      },
      {
        type: 'work',
        title: 'Meta Reality Labs',
        body: '2 promotions in 8 weeks. Trainee → Production → Jr. Team Lead. 85%+ quality scores throughout.',
      },
    ],
  },

  education: {
    title: 'Education',
    items: [
      {
        year: '2021 – 2023',
        org: 'Concordia University Chicago',
        title: 'Master of Business Administration',
        desc: 'Marketing and Advertising',
      },
      {
        year: '2020 – 2021',
        org: 'Indus Valley School of Art and Architecture',
        title: 'Diploma, Film and Video Studies',
        desc: 'Karachi, Pakistan',
      },
      {
        year: '2013 – 2017',
        org: 'COMSATS University',
        title: 'Bachelor of Science, Computer Science',
        desc: 'Islamabad, Pakistan',
      },
    ],
  },

  publications: {
    title: 'Publications',
    items: [
      {
        year: '2018',
        title: 'Analysis of SAR Images Speckle Reduction Techniques',
        org: 'IEEE Xplore — Conference Publication',
        url: 'https://ieeexplore.ieee.org/abstract/document/8346335',
      },
      {
        year: '2019',
        title: 'A Study of SAR Despeckling Methods',
        org: 'KJCIS Vol. 2, Issue 1 — HEC-recognized journal',
        note: 'M. Haris, M. Ashraf, F. Ahsan, A. Athar, M. Malik',
        url: 'https://doi.org/10.51153/kjcis.v2i1.16',
      },
      {
        year: '2018',
        title: 'The Blood Moon',
        org: 'Daastan Publication House — Novel',
      },
    ],
  },

  certifications: {
    title: 'Certifications',
    items: [
      {
        year: '2024',
        title: 'Google AI Essentials',
        org: 'Google',
        url: 'https://grow.google/certificates/',
      },
      {
        year: '2024',
        title: 'Google Prompting Essentials',
        org: 'Google',
        url: 'https://grow.google/certificates/',
      },
      {
        year: '2024',
        title: 'Digital Video Editor Certification',
        org: 'Industry Certification',
        url: '#',
      },
      {
        year: '2024',
        title: 'DaVinci Resolve Certified',
        org: 'Blackmagic Design',
        url: 'https://www.blackmagicdesign.com/products/davinciresolve/training',
      },
    ],
  },

  skills: {
    title: 'Skills',
    languages: 'Languages',
    urdu: 'Urdu',
    english: 'English',
    native: 'Native',
    professional: 'Professional',
    soft: 'Soft Skills',
    softSkills: [
      'Visual Storytelling',
      'Systems Thinking',
      'Creative Direction',
      'Deadline Discipline',
      'Client Relations',
      'Community Building',
      'Cross-Cultural Communication',
      'Bias for Action',
      'E2E Ownership',
    ],
  },

  techStack: {
    title: 'Tech Stack',
    categories: [
      {
        name: 'AI / Generative',
        items: ['Claude API', 'ChatGPT', 'MidJourney', 'Stable Diffusion', 'ComfyUI', 'Runway', 'Higgsfield', 'ElevenLabs', 'HeyGen'],
      },
      {
        name: 'Video Production',
        items: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Final Cut Pro', 'After Effects', 'CapCut', 'Descript'],
      },
      {
        name: 'Development',
        items: ['Python', 'JavaScript', 'TypeScript', 'React', 'Supabase', 'RAG Architecture', 'REST APIs', 'Git'],
      },
      {
        name: 'Marketing & Analytics',
        items: ['Google Analytics (GA4)', 'Ahrefs', 'SEMrush', 'Meta Ads', 'Mailchimp', 'SEO', 'WordPress'],
      },
      {
        name: 'Design',
        items: ['Adobe Photoshop', 'Figma', 'Canva', 'Adobe Illustrator'],
      },
      {
        name: 'AI Workflows',
        items: ['Prompt Engineering', 'LLM Evaluation', 'RLHF Concepts', 'Groq API', 'OpenAI API'],
      },
    ],
  },

  cta: {
    title: "Let's make something.",
    desc: 'Open to roles in AI content production, creative strategy, and technical storytelling. Chicago or remote.',
    contact: 'Get in touch',
  },

  contact: {
    links: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/ahmed-rik' },
      { label: 'GitHub', url: 'https://github.com/ahmedrikk' },
      { label: 'YouTube', url: 'https://youtube.com/@juicyorangefilms' },
    ],
    footer: '© 2026 Ahmed Bin Athar (RIK)',
  },

  chat: {
    greeting: "Hi, I'm @ahmedrikk. Ask me anything.",
    title: 'Ask RIK',
    subtitle: 'AI version of Ahmed. Ask me anything.',
    placeholder: 'Ask me anything...',
    offline: 'You appear to be offline. Check your connection and try again.',
    error: 'Something went wrong. Please try again.',
    contactCtaTitle: 'Want to go deeper?',
    prompts: [
      { icon: 'briefcase', label: 'What have you built?', query: 'What have you built?' },
      { icon: 'rocket', label: 'Tell me about your films', query: 'Tell me about your films' },
      { icon: 'help', label: "What's QuranAI?", query: "What's QuranAI?" },
      { icon: 'mail', label: 'What are you looking for?', query: 'What are you looking for?' },
    ],
    voice: {
      connecting: 'Connecting...',
      listening: 'Listening...',
      thinking: 'Thinking...',
      searching: 'Searching knowledge base...',
      speaking: 'Speaking...',
      connection: 'Connection issue. Tap to retry.',
      start: 'Start voice chat',
      switchToText: 'Switch to text',
      stop: 'End session',
      'no-speech': 'No speech detected. Tap to try again.',
      'network-error': 'Network error. Please check your connection.',
      'permission-denied': 'Microphone access denied. Please allow microphone access in your browser settings.',
    },
  },

  ui: {
    typingIndicator: 'RIK is thinking...',
  },
} as const;

export const translations = {
  en: _en,
} as const;

export type Translations = typeof _en;
