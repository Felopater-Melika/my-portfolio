export const personalInfo = {
  name: 'Felopater Melika',
  location: 'Nashville, TN',
  email: 'Felopater.codes@gmail.com',
  phone: '+1 (615) 581-7035',
  github: 'https://github.com/Felopater-Melika',
  linkedin: 'https://www.linkedin.com/in/felopater-melika/',
  website: 'https://felopater.codes',
};

export const workExperience = [
  {
    company: 'Cliniq',
    location: 'Remote',
    position: 'Founder & Full-Stack Engineer',
    period: 'Oct 2025 – Present',
    achievements: [
      'Building AI assistant for medication safety: photo → OCR → drug lookup + interaction checks → clear patient-friendly guidance.',
      'Designed full pipeline with OCR, embeddings, LLM reasoning, and structured output validation.',
      'Building early user testing loops with clinicians and patients.',
    ],
  },
  {
    company: 'Wesley Financial Group',
    location: 'Franklin, TN',
    position: 'Applications Developer',
    period: 'Aug 2025 – Present',
    achievements: [
      'Building internal ops tools and Salesforce automations to replace manual workflows.',
      'Cut turnaround time from days → hours by digitizing onboarding & document handling.',
      'Ship MVP features quickly inside regulated business environment.',
    ],
  },
  {
    company: 'NASA / KBR',
    location: 'Houston, TX',
    position: 'Software Engineering Intern',
    period: 'Jun 2024 – Nov 2024',
    achievements: [
      'Built microservices and visualization tooling for wildfire-tracking UAV system (ODIN).',
      'Processed geospatial & environmental data, integrated ML-generated flight paths.',
      'Implemented 3D visualization with Cesium.js for autonomous wildfire monitoring.',
    ],
  },
  {
    company: 'Independent Builder / Consultant',
    location: 'Remote',
    position: 'Full-Stack Engineer',
    period: 'May 2020 – Present',
    achievements: [
      'Delivered software for 5+ paying clients (commerce, lending, internal tools).',
      'Built dashboards, automation workflows, custom Shopify + LLM/OCR features.',
      'Took products from idea → build → deploy with ongoing iteration.',
    ],
  },
];

export const education = [
  {
    institution: 'Middle Tennessee State University',
    location: 'Murfreesboro, TN',
    degree: 'B.B.A. Information Systems',
    period: 'Graduating Dec 2025',
    achievements: ['Minor in Business Administration'],
  },
];

export const skills = {
  languages: [
    'TypeScript',
    'JavaScript',
    'Rust',
    'SQL',
    'Python (for ML/OCR pipelines)',
  ],
  frontend: ['Next.js', 'React', 'Tailwind', 'Expo / React Native', 'Astro'],
  backend: ['Node.js', 'NestJS', 'Express', 'Rust (Axum)', 'Microservices'],
  databases: ['PostgreSQL', 'Redis'],
  infrastructure: ['Docker', 'AWS', 'Linux', 'Nix', 'CI/CD'],
  ai: ['OCR', 'RAG', 'Embeddings', 'LLM Apps', 'Prompt Engineering'],
  tools: ['Git', 'Shopify Liquid', 'Twilio Voice', 'Cesium.js'],
  softSkills: [
    'Product Thinking',
    'Rapid Iteration',
    'Client Delivery',
    'Technical Communication',
    'Leadership',
    'Mentoring',
  ],
};

export const projects = [
  {
    title: 'Cliniq',
    github: 'https://github.com/Felopater-Melika/Cliniq', // Update if private
    description: [
      'AI medication intelligence app: OCR → drug recognition → interaction analysis → safe instructions.',
      'LLM-chain architecture w/ structured validation + medical dataset referencing.',
      'Focus: patient safety, accuracy, explainability.',
    ],
  },
  {
    title: 'EchoURL',
    github: 'https://github.com/Felopater-Melika/EchoURL',
    description: [
      'Distributed URL shortener in Rust.',
      'Rust (Axum), SeaORM, Redis, Kafka — event-driven microservices, caching, analytics.',
    ],
  },
  {
    title: 'BlueBill',
    github: 'https://github.com/Felopater-Melika/HackMT',
    description: [
      'Medical bill price transparency & negotiation support tool.',
      'Next.js, TypeScript, real CPT/code search + fair pricing lookup.',
    ],
  },
  {
    title: 'Astral Chat',
    github: 'https://github.com/Felopater-Melika/astral-chat',
    description: [
      'Real-time chat + mobile client.',
      'Nest.js, Prisma, Expo, secure auth, cross-platform messaging.',
    ],
  },
  {
    title: 'MediQ',
    github: 'https://github.com/einargs/tnhimss-bill',
    description: [
      'AI assistant for clinicians to search + reason over patient info.',
      'React + TypeScript, AI chat interface for rapid medical context access.',
    ],
  },
  {
    title: 'BlueBuddy / ElderBytes',
    github: 'https://github.com/Felopater-Melika/bluebuddy',
    description: [
      'AI companion + monitoring for seniors — voice check-ins, memory support, med reminders.',
      'Next.js, Prisma, LLM pipelines.',
    ],
  },
];

export const awards = [
  {
    name: 'HackMT',
    issuer: 'MTSU',
    date: '2025',
    position: "Hacker's Choice Award",
  },
  { name: 'HackMT', issuer: 'HackMT', date: '2024', position: '1st Place' },
  {
    name: 'TNHIMSS Healthcare Innovation',
    issuer: 'TNHIMSS',
    date: '2023',
    position: '1st Place',
  },
  {
    name: 'VandyHacks Sponsored Award',
    issuer: 'CareYaya',
    date: '2023',
    position: 'Winner',
  },
];

export const certifications = [
  {
    name: 'Dale Carnegie Certification of Excellence',
    issuer: 'Dale Carnegie',
    date: '2024',
  },
];

export const volunteer = [
  {
    organization: 'Local & Regional Nonprofits',
    role: 'Developer / IT Volunteer',
    description:
      'Built and advised on software for community orgs, including web + internal tools.',
  },
  {
    organization: 'University CS Club',
    role: 'Treasury Officer',
    description:
      'Helped organize activities and support student developer community.',
  },
];
