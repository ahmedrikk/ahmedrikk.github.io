export const seo = {
  en: {
    title: 'Ahmed Bin Athar (RIK) — Filmmaker, AI Builder, Content Strategist',
    description:
      'Chicago-based filmmaker and AI builder. 15+ international festival selections. RAG apps in production. Content systems that grow platforms 40%. Currently at Meta Reality Labs.',
  },
};

export type Lang = 'en';

const _en = {
    greeting: "Hi, I'm @ahmedrikk",
    greetingRoles: ['Filmmaker', 'AI Builder', 'Content Strategist'],
    pillLabels: ['Filmmaker', 'AI Builder', 'QuranAI (live)', '15+ festival selections', '120K+ views'],
    email: 'ahmedrikk@gmail.com',
    role: '',
    story: {
      context: 'Award-winning filmmaker and AI builder who makes complex things feel human.',
      reflections: ['This still feels like day one.', ''],
      hookParagraphs: [
        ['At Meta Reality Labs I evaluate 500+ AI-generated creative assets weekly, maintaining 85%+ quality scores through 2 promotions in 8 weeks.'],
        ['Before that: 50+ client campaigns at Rikovations. A gaming media platform grown 40% at My Otaku World. A RAG app serving communities that have nowhere else to go. Four short films on international stages.'],
      ],
      why: 'I work at the intersection of creative production and technical systems — whether that is evaluating multimodal AI outputs at scale, building RAG apps for underserved communities, or directing films that have screened at 15+ international festivals.',
      seeking: [
        'Open to roles in AI content production, creative strategy, and technical storytelling.',
        'Chicago-based. Remote-friendly. Available now.',
      ],
      nav: [
        { icon: 'briefcase', label: 'My path', href: '#experience' },
        { icon: 'folder', label: 'What I build', href: '#projects' },
        { icon: 'mail', label: "Let's talk", href: '#contact' },
        { icon: 'bot', label: 'Ask RIK', href: '#chat', highlight: true },
      ],
      skills: [
        'AI Content Production',
        'Creative Strategy & Storytelling',
        'Content Systems at Scale',
        'Video Production & Post',
        'Community Building & User Ops',
        'Social Media & Platform Strategy',
      ],
      skipButton: 'Skip intro',
    },
    taglines: [] as readonly string[],
    location: 'Chicago, IL · Remote-friendly',
    roles: [
      'AI Content & Creative Quality Specialist',
      'Filmmaker & Creative Director',
      'AI Builder & Content Strategist',
    ],
    summary: {
      title: 'Professional Summary',
      p1: 'Creative technologist focused on',
      p1Highlight: 'AI content production, creative strategy, and technical storytelling',
      p1End:
        '. Currently evaluating AI-generated multimodal content at scale at Meta Reality Labs. Background spans Computer Science, Marketing (MBA), and Film Production.',
      p2: 'End-to-end ownership across',
      p2Highlight: 'concept → production → distribution → measurement',
      p2End: ', with deep fluency in both creative and technical workflows.',
      cards: [
        {
          title: 'Builder Mindset',
          desc: 'Shipped QuranAI (live RAG app), Pixel Pulse (AI news aggregator), and 4 short films with festival recognition',
        },
        {
          title: 'Growth Operator',
          desc: 'Grew organic traffic 40%, engagement 30% MoM, and publishing output 30% without additional headcount',
        },
        {
          title: 'Technical Fluency',
          desc: 'Claude API, RAG architecture, React + TypeScript, Supabase Edge Functions, Adobe Premiere Pro, DaVinci Resolve',
        },
      ],
    },
    coreCompetencies: {
      title: 'Core Competencies',
      items: [
        {
          title: 'AI Content Production',
          desc: 'Prompt engineering, LLM evaluation, multimodal quality assessment, AI workflow automation',
        },
        {
          title: 'Creative Strategy & Storytelling',
          desc: 'Campaign concepting, script writing, brand voice, visual narrative, editorial direction',
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
          desc: 'Discord management, harm reduction frameworks, user retention, DAU growth, sentiment analysis',
        },
        {
          title: 'Social Media & Platform Strategy',
          desc: 'TikTok, Instagram Reels, YouTube, LinkedIn, X — organic growth, discovery optimization',
        },
      ],
    },
    experience: {
      title: 'Work Experience',
      cta: 'View full résumé →',
      items: [
        {
          company: 'Meta Reality Labs (via TekSystems)',
          logo: '/logo-meta.png',
          location: 'Remote',
          title: 'AI Content and Creative Quality Specialist (Contract)',
          period: 'November 2025 – Present',
          points: [
            'Evaluating 500+ AI-generated creative assets weekly across Meta AI platforms',
            'Maintained 85%+ quality scores throughout tenure',
            'Earned 2 promotions in 8 weeks: Trainee → Production → Jr. Team Lead',
            'Applying narrative and editorial judgment to multimodal AI outputs (video, image, text)',
            'Identifying failure patterns in AI-generated content and documenting findings to improve production standards',
          ],
        },
        {
          company: 'My Otaku World',
          location: 'Remote',
          title: 'Senior Content and Marketing Manager',
          period: 'October 2023 – November 2025',
          industry: 'Digital Media / Gaming and Anime',
          points: [
            'Grew organic traffic 40% via integrated SEO, social, and editorial strategy',
            'Managed 2,000+ digital content assets across gaming and anime verticals',
            'Increased audience engagement 30% month-over-month',
            'Built editorial workflows that increased publishing output 30% without additional headcount',
            'Used Claude, ChatGPT, MidJourney aggressively to accelerate production',
            'Tools: Google Analytics (GA4), Ahrefs, SEMrush, WordPress',
          ],
        },
        {
          company: 'Rikovations Pvt. Ltd.',
          location: 'Remote (Global Accounts)',
          title: 'Marketing Manager / Creative Director',
          period: 'March 2019 – March 2022',
          industry: 'Creative and Media Agency',
          points: [
            'Led campaign delivery for 50+ client accounts across technology, consumer electronics, professional services',
            'Drove 45% average client revenue growth over 3 years',
            'Managed team of 4 (designers, writers, coordinators)',
            'Oversaw $50K annual production budget with zero missed deadlines',
            'Onboarded 15+ new clients, reduced ramp time 30% through brand playbooks',
            'Authored creative briefs, scripted narratives, directed talent for social, digital, and broadcast channels',
          ],
        },
        {
          company: 'Concordia University Chicago',
          location: 'Chicago, IL',
          title: 'AV and Technical Support Specialist',
          period: 'October 2019 – August 2022',
          points: [
            'Managed video installations, classroom AV, and event media across multi-building campus',
            'Coordinated broadcast-quality AV for faculty events, lecture recordings, grant application videos',
            'Collaborated with academic departments to translate faculty needs into practical video deliverables',
          ],
        },
        {
          company: 'Cotton Connection',
          location: 'Chicago, IL',
          title: 'Digital Marketing Manager',
          period: 'March 2022 – September 2022',
          points: [
            'Increased eCommerce sales 15% and web traffic 20% in 6 months',
            'Produced video and visual content for Meta, Google, and social campaigns',
            'UTM-tracked campaign performance via Google Analytics and Shopify',
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      items: [
        {
          name: 'QuranAI / AIQuran',
          status: 'Live Production',
          description:
            'RAG-powered conversational app for exploring Quranic text. Built to serve LGBTQ+ Muslims navigating identity within religious frameworks — a population with no institutional support and high risk of harm from LLM misinformation.',
          tags: ['Claude API', 'RAG Architecture', 'Vector Database', 'Prompt Engineering', 'PWA'],
          stats: ['Live', 'Freemium'],
          links: [
            { label: 'View live →', url: 'https://aiquran.live' },
          ],
        },
        {
          name: 'Pixel Pulse',
          status: 'Live',
          description:
            'Full-stack AI gaming news aggregator. Fetches from 11+ RSS feeds (IGN, Polygon, Kotaku), processes through Groq LLM to generate 280-character summaries. XP/battle pass gamification system.',
          tags: ['React', 'TypeScript', 'Tailwind', 'Supabase Edge Functions', 'Groq LLM', 'Llama 3'],
          stats: ['11+ RSS feeds', 'Real-time AI'],
          links: [
            { label: 'View code →', url: 'https://github.com/ahmedrikk' },
          ],
        },
        {
          name: 'Mann Ki Hastam',
          status: 'Award-Winning Film',
          description:
            'Surrealist experimental short film exploring identity. Directed, shot, and edited end-to-end. 15+ international festival selections. Broadcast on Can 9 TV with 3 repeat airings.',
          tags: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Surrealist Cinematography'],
          stats: ['15+ selections', 'Can 9 TV', '120K+ views'],
          links: [
            { label: 'Watch →', url: 'https://www.youtube.com/watch?v=lCIYJGsT94E' },
            { label: 'Case study →', url: '/mann-ki-hastam' },
          ],
        },
        {
          name: 'Rekhta',
          status: 'Award-Winning Film',
          description:
            'Experimental short using black-and-white and color contrast as narrative metaphor for liberation and constraint. Honorable Mention, Cine Pobre International Film Festival 2024.',
          tags: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Color Theory'],
          stats: ['Honorable Mention', 'Cine Pobre 2024'],
          links: [
            { label: 'Watch →', url: 'https://www.youtube.com/watch?v=1EOnXWCjLlc' },
          ],
        },
        {
          name: 'Bulleyah (Screenplay)',
          status: 'In Development',
          description:
            '117-page feature screenplay recovering the erased queer identity of 18th-century Sufi poet Bulleh Shah. Five years in development. Refuses to translate South Asian queer experience for Western consumption. Surrealism as epistemological tool.',
          tags: ['Screenwriting', 'Archival Research', 'Decolonial Aesthetics'],
          stats: ['117 pages', '5 years development'],
          links: [],
        },
        {
          name: 'AI Content Evaluation System (Meta)',
          status: 'Professional',
          description:
            'At Meta Reality Labs, built repeatable evaluation frameworks for AI-generated multimodal content — assessing narrative coherence, factual accuracy, cultural sensitivity, and brand alignment at scale. 500+ assets evaluated weekly.',
          tags: ['LLM Evaluation', 'Multimodal AI', 'Quality Rubrics', 'Meta AI Platforms'],
          stats: ['500+ assets/week', '85%+ accuracy', '2 promotions / 8 weeks'],
          links: [],
        },
        {
          name: 'Pakistani LGBTQ+ Community',
          status: 'Active / Community',
          platform: 'Discord',
          description:
            'Founded and scaled a harm reduction community for queer Pakistanis navigating criminalized environments. PrEP access guidance, HIV prevention education, mental health support. Built engagement systems and moderation frameworks from zero.',
          tags: ['Community Operations', 'Harm Reduction', 'Discord', 'Peer Counseling'],
          stats: ['55 vetted members', 'Launched Jan 2026'],
          links: [],
        },
      ],
    },
    sharing: {
      title: 'Sharing',
      subtitle: 'Traction, virality, and real-world impact.',
      cards: [
        {
          title: 'Mann Ki Hastam (2021)',
          body: '15+ international festival selections. Can 9 TV broadcast with 3 repeat airings. 120K+ cumulative views.',
          cta: 'Watch on YouTube →',
          url: 'https://www.youtube.com/watch?v=lCIYJGsT94E',
        },
        {
          title: 'Rekhta (2024)',
          body: 'Honorable Mention, Cine Pobre International Film Festival.',
          cta: 'Watch on YouTube →',
          url: 'https://www.youtube.com/watch?v=1EOnXWCjLlc',
        },
        {
          title: 'Just Ten Minutes (2025)',
          body: '2nd place, Mandi Theater 10-Minute Play Contest. Two Mandi Theater trophies for playwriting and direction.',
          cta: '',
          url: '',
        },
        {
          title: 'QuranAI',
          body: 'Built QuranAI — a RAG app with the Claude API serving communities with no institutional support.',
          cta: 'View live →',
          url: 'https://aiquran.live',
        },
        {
          title: 'IEEE Publication (2018)',
          body: 'Analysis of SAR Images Speckle Reduction Techniques. Peer-reviewed, indexed.',
          cta: 'View paper →',
          url: 'https://ieeexplore.ieee.org/document/8346335',
        },
        {
          title: 'The Blood Moon',
          body: 'Published novelist. Daastan Publication House, 2018.',
          cta: '',
          url: '',
        },
        {
          title: 'Meta Promotions',
          body: '2 promotions in 8 weeks at Meta Reality Labs. Trainee → Production → Jr. Team Lead. 85%+ quality scores throughout.',
          cta: '',
          url: '',
        },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          school: 'Concordia University Chicago',
          degree: 'Master of Business Administration, Marketing and Advertising',
          dates: '2021 – 2023',
          location: 'Chicago, IL',
        },
        {
          school: 'Indus Valley School of Art and Architecture',
          degree: 'Diploma, Film and Video Studies',
          dates: '2020 – 2021',
          location: 'Karachi, Pakistan',
        },
        {
          school: 'COMSATS University',
          degree: 'Bachelor of Science, Computer Science',
          dates: '2013 – 2017',
          location: 'Islamabad, Pakistan',
        },
      ],
    },
    certifications: {
      title: 'Certifications',
      items: [
        { year: '2024', name: 'Google AI Essentials', issuer: 'Google' },
        { year: '2024', name: 'Google Prompting Essentials', issuer: 'Google' },
        { year: '2024', name: 'Digital Video Editor Certification', issuer: 'Industry' },
        { year: '2024', name: 'DaVinci Resolve Certified', issuer: 'Blackmagic Design' },
        { year: '2018', name: 'IEEE Publication — SAR Despeckling', issuer: 'IEEE Xplore' },
        { year: '2018', name: 'KJCIS Journal Publication', issuer: 'KIET / HEC' },
      ],
    },
    skills: {
      title: 'Skills',
      languages: [
        { name: 'English', level: 'Professional proficiency' },
        { name: 'Urdu', level: 'Native' },
      ],
      soft: [
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
      tech: {
        'AI / Generative': [
          'Claude API', 'ChatGPT', 'Gemini', 'MidJourney', 'DALL-E',
          'Stable Diffusion', 'ComfyUI', 'Runway', 'Higgsfield',
          'Google Veo', 'HeyGen', 'ElevenLabs', 'Adobe Firefly', 'Pika',
        ],
        'Video Production': [
          'Adobe Premiere Pro', 'DaVinci Resolve', 'Final Cut Pro',
          'After Effects', 'CapCut', 'Descript', 'Color Grading',
        ],
        'Development': [
          'Python', 'JavaScript', 'TypeScript', 'React', 'Supabase',
          'RAG Architecture', 'Vector Databases', 'REST APIs', 'Git',
        ],
        'Marketing & Analytics': [
          'Google Analytics (GA4)', 'Ahrefs', 'SEMrush',
          'Meta Ads', 'TikTok Ads', 'Mailchimp', 'SEO', 'WordPress',
        ],
        'Design': [
          'Adobe Photoshop', 'Figma', 'Canva', 'Adobe Illustrator',
        ],
      },
    },
    contact: {
      title: "Let's make something.",
      subtitle: 'Open to roles in AI content production, creative strategy, and technical storytelling. Chicago-based. Remote-friendly. Available now.',
      email: 'ahmedrikk@gmail.com',
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
  es: _en,
} as const;

export type Translations = typeof _en;
