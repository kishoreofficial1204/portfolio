import {
  PersonalInfo,
  WorkExperienceItem,
  ProjectItem,
  SkillCategory,
  AchievementItem,
  CertificationItem,
  EducationItem,
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Kishore A',
  title: 'Full-Stack Software Engineer & AI Developer',
  tagline: 'Crafting scalable web applications, secure REST APIs, and generative AI solutions with clean architecture and performant code.',
  bio: 'Computer Science and Engineering undergraduate at Sri Krishna College of Technology (CGPA 8.21/10). Experienced in architecting robust MERN full-stack platforms, integrating generative AI (LLMs & RAG) workflows, developing resilient backend microservices, and competing in national-level hackathons (SIH & MSME). Passionate about high-throughput software systems and algorithmic problem solving.',
  email: '727824tucs206@skct.edu.in',
  phone: '+91 9363733198',
  location: 'Coimbatore, India',
  college: 'Sri Krishna College of Technology',
  cgpa: '8.21 / 10',
  status: 'Open to Software Engineering & AI Roles / Internships',
  socials: {
    linkedin: 'https://www.linkedin.com/in/kishore-a-483170325/',
    github: 'https://github.com/kishoreofficial1204',
    leetcode: 'https://leetcode.com/u/A_KISHORE/',
    email: 'mailto:727824tucs206@skct.edu.in',
    phone: 'tel:+919363733198',
  },
};

export const workExperience: WorkExperienceItem[] = [
  {
    id: 'blastorz-swe',
    company: 'Blastorz',
    companyUrl: 'https://www.blastorz.fun',
    role: 'Software Engineer (Freelance)',
    period: 'July 2026 – Present',
    location: 'Remote / India',
    description:
      'Engineered and enhanced client-facing full-stack web applications, architecting responsive frontend interfaces and high-performance backend microservices.',
    bullets: [
      'Developed & enhanced modern web applications by implementing scalable new features, resolving complex bugs, and optimizing data rendering cycles for optimal user experience.',
      'Built, documented, and integrated secure REST APIs and backend microservices to support high-throughput application features and seamless data flow.',
      'Collaborated closely with cross-functional development teams to analyze product requirements, author clean maintainable TypeScript/Node code, write unit tests, and deploy software releases.',
      'Enforced rigorous code reviews, automated linting workflows, and reliable API testing using Postman to maintain 99.9% service reliability.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'REST APIs', 'Postman', 'Git'],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'codestreak',
    title: 'CodeStreak',
    subtitle: 'Gamified Coding Practice & Progress Tracking Platform',
    category: 'Full Stack',
    featured: true,
    description:
      'A comprehensive full-stack coding platform engineered to help developers solve programming assignments, track daily progression, and sustain coding streaks via an engaging gamified reward system.',
    problemStatement:
      'Maintaining consistent coding habits is difficult for students without structured feedback loops and incentives. CodeStreak solves this with instant evaluation metrics, streak mechanics, and wallet-based reward distribution.',
    keyFeatures: [
      'Engineered interactive problem-solving workspace enabling real-time assignment discovery, code submissions, and execution progress tracking.',
      'Implemented robust JWT authentication, bcrypt password hashing, role-based access control (RBAC), and RESTful APIs with MongoDB/Mongoose.',
      'Built advanced gamification engine with daily streak trackers, reward points computation, achievement badges, real-time leaderboards, and wallet transaction logs.',
      'Designed interactive analytical dashboards using Chart.js to visualize user progression, topic mastery, and submission statistics.',
    ],
    architecture: [
      'Frontend: React 18 + Tailwind CSS + Axios + Chart.js dashboard widgets',
      'Backend: Node.js + Express.js REST API with MVC architecture',
      'Database: MongoDB with Mongoose schemas & indexing for rapid queries',
      'Security: JWT Bearer tokens, HTTP-only cookie support, Bcrypt salting, Input sanitization',
    ],
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Axios',
      'Chart.js',
    ],
    githubUrl: 'https://github.com/kishoreofficial1204/codestreak',
    liveUrl: '#',
    metrics: [
      { label: 'Security', value: 'JWT + Bcrypt' },
      { label: 'Architecture', value: 'MERN Stack' },
      { label: 'Features', value: 'Streaks & Wallet' },
    ],
    codeSnippet: {
      filename: 'streakController.js',
      language: 'javascript',
      code: `// Gamified Daily Streak Calculation & Reward Dispatcher
export const updateDailyStreak = async (userId, submissionStatus) => {
  const user = await User.findById(userId);
  const today = new Date().setHours(0, 0, 0, 0);
  const lastActive = new Date(user.lastSubmissionDate || 0).setHours(0, 0, 0, 0);
  const oneDay = 24 * 60 * 60 * 1000;

  if (submissionStatus === 'ACCEPTED') {
    if (today - lastActive === oneDay) {
      user.currentStreak += 1;
      user.rewardPoints += 50 * user.currentStreak;
    } else if (today - lastActive > oneDay) {
      user.currentStreak = 1;
      user.rewardPoints += 50;
    }
    user.longestStreak = Math.max(user.longestStreak, user.currentStreak);
    user.lastSubmissionDate = new Date();
    await user.save();
    return { streak: user.currentStreak, points: user.rewardPoints };
  }
};`,
    },
  },
  {
    id: 'gift-app',
    title: 'Gift Application',
    subtitle: 'Gift Provider & Enterprise Application Management Platform',
    category: 'Full Stack',
    featured: true,
    description:
      'A multi-tier platform built with the MERN stack providing end-to-end management for gift distribution workflows, assignment discovery, custom fulfillment tracking, and secure role-based portals.',
    problemStatement:
      'Coordinating multi-vendor gift deliveries with customized user allocations required an automated pipeline with authenticated role separation for both end-users and administrators.',
    keyFeatures: [
      'Engineered full-stack responsive web platform with role-based dashboard for administrators, vendors, and customers.',
      'Developed secure backend REST APIs leveraging Express.js, MongoDB/Mongoose, and JWT for granular authorization.',
      'Integrated live inventory discovery, assignment dispatching, tracking status lifecycles, and transaction history.',
      'Integrated reward mechanics and streak-based engagement points to incentivize recurring user platform engagement.',
    ],
    architecture: [
      'Client: React.js with modular component tree & responsive Tailwind layout',
      'API Gateway: Express routing with middleware-based authentication guards',
      'Data Store: MongoDB clustered database with relational object references',
    ],
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Axios',
      'Chart.js',
    ],
    githubUrl: 'https://github.com/kishoreofficial1204/Gift_Application',
    liveUrl: '#',
    metrics: [
      { label: 'Role Access', value: 'Multi-Tenant RBAC' },
      { label: 'State Sync', value: 'Real-time REST' },
      { label: 'UI Flow', value: 'Mobile-Responsive' },
    ],
  },
  {
    id: 'aether-ai',
    title: 'AETHER',
    subtitle: 'AI-Based Autonomous Hiring & Talent Management System',
    category: 'AI & ML',
    featured: true,
    description:
      'Grand Finalist project at Dev Hackathon. An intelligent AI-driven talent screening engine that automatically evaluates candidate resumes, conducts adaptive technical interviews, and matches skill profiles against job requirements using LLMs and Retrieval-Augmented Generation (RAG).',
    problemStatement:
      'Traditional hiring screening is slow, biased, and manually intensive. AETHER uses vector search and LLM contextual grounding to match candidates with zero latency.',
    keyFeatures: [
      'Autonomous semantic parsing of resumes against dynamic job requirement vectors.',
      'Context-aware LLM interview questioning using Retrieval-Augmented Generation (RAG) and Gemini API integration.',
      'Multi-dimensional candidate scoring matrix covering coding fundamentals, technical depth, and soft skills.',
      'Dev Hackathon Grand Finalist recognition for innovative automated evaluation pipeline.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'LLMs',
      'RAG',
      'Gemini API',
      'React.js',
      'Tailwind CSS',
      'PostgreSQL',
    ],
    githubUrl: 'https://github.com/kishoreofficial1204',
    liveUrl: '#',
    metrics: [
      { label: 'Hackathon', value: 'Grand Finalist' },
      { label: 'Core AI', value: 'RAG + Gemini API' },
      { label: 'Backend', value: 'FastAPI / Python' },
    ],
  },
  {
    id: 'hydes-nexus',
    title: 'Hydes Nexus & Hydes Nexus 2.0',
    subtitle: 'Smart System Innovation Platform (SIH & MSME Hackathon Top 20/50)',
    category: 'Hackathon',
    featured: true,
    description:
      'A high-performance collaborative management and intelligent IoT/software platform recognized in both Smart India Hackathon (SIH 2025 - Top 20 Teams) and MSME Hackathon 2025 (Top 50 Teams).',
    keyFeatures: [
      'Engineered unified real-time telemetry and resource tracking architecture.',
      'Selected into Top 20 teams in SIH 2025 Internal Hackathon at Sri Krishna College of Technology.',
      'Ranked Top 50 teams in MSME Hackathon 2025 for scalable industrial utility concept.',
      'Developed with fault-tolerant REST APIs, responsive dashboards, and optimized database queries.',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'AWS',
      'Tailwind CSS',
      'Git',
    ],
    githubUrl: 'https://github.com/kishoreofficial1204',
    liveUrl: '#',
    metrics: [
      { label: 'SIH 2025', value: 'Top 20 Teams' },
      { label: 'MSME 2025', value: 'Top 50 Teams' },
      { label: 'Innovation', value: 'National Finalist' },
    ],
  },
  {
    id: 'emos',
    title: 'Earth Material Operating System (EMOS)',
    subtitle: 'AI-Powered Material Intelligence Platform',
    category: 'AI & ML',
    featured: true,
    description:
      'An AI-powered circular material intelligence platform that analyzes product images, materials, and condition to recommend sustainable lifecycle pathways such as Repair, Reuse, Remanufacture, or Recycle.',
    problemStatement:
      'Determining the most ecological and cost-effective circular lifecycle pathway for end-of-use materials is historically complex. EMOS automates this decision matrix by integrating computer vision material inspections, multi-criteria decision analysis (MCDA), and RAG-based context parsing.',
    keyFeatures: [
      'Built an AI-powered platform that analyzes product images, materials, and condition to recommend sustainable lifecycle pathways such as Repair, Reuse, Remanufacture, or Recycle.',
      'Developed a circular lifecycle decision engine using multi-criteria analysis (MCDA) and RAG-based knowledge retrieval to provide evidence-backed recommendations.',
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'Google Gemini API',
      'RAG',
      'JWT',
      'bcrypt',
    ],
    githubUrl: 'https://github.com/kishoreofficial1204/Earth-Material-Operating-System',
    liveUrl: '#',
    metrics: [
      { label: 'Core AI', value: 'Gemini + RAG' },
      { label: 'Analysis', value: 'MCDA Engine' },
      { label: 'Architecture', value: 'React + Vite' },
    ],
    codeSnippet: {
      filename: 'lifecycleEngine.ts',
      language: 'typescript',
      code: `// Multi-Criteria Decision Analysis (MCDA) & Circular Economics Engine
export const evaluateLifecyclePathway = (material: string, conditionScore: number) => {
  const pathways = ['REPAIR', 'REUSE', 'REMANUFACTURE', 'RECYCLE'];
  
  if (conditionScore >= 0.85) {
    return { recommend: 'REUSE', confidence: 0.94, description: 'Direct resale or redistribution' };
  } else if (conditionScore >= 0.60) {
    return { recommend: 'REPAIR', confidence: 0.88, description: 'Minor structural restoration required' };
  } else if (conditionScore >= 0.35) {
    return { recommend: 'REMANUFACTURE', confidence: 0.82, description: 'Industrial disassemble & rebuild' };
  } else {
    return { recommend: 'RECYCLE', confidence: 0.98, description: 'Raw material reclaiming and smelting' };
  }
};`,
    },
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    iconName: 'Code',
    skills: [
      { name: 'Java', level: 90, tag: 'Core / OOP / ADJP', featured: true },
      { name: 'Python', level: 88, tag: 'Data Science / AI', featured: true },
      { name: 'JavaScript (ES6+)', level: 92, tag: 'Web / Full-Stack', featured: true },
      { name: 'TypeScript', level: 86, tag: 'Type-Safe Dev', featured: true },
      { name: 'C / C++', level: 82, tag: 'Data Structures / Algorithms' },
      { name: 'SQL', level: 88, tag: 'Relational Queries / DDL / DML' },
      { name: 'HTML5 & CSS3', level: 95, tag: 'Responsive Layouts' },
    ],
  },
  {
    id: 'frameworks',
    name: 'Frameworks & Libraries',
    iconName: 'Layers',
    skills: [
      { name: 'React.js', level: 92, tag: 'SPA / Hooks / State', featured: true },
      { name: 'Node.js', level: 88, tag: 'Event-Driven Runtime', featured: true },
      { name: 'Express.js', level: 90, tag: 'RESTful API Microservices', featured: true },
      { name: 'Spring Boot', level: 78, tag: 'Java Backend Services' },
      { name: 'FastAPI', level: 82, tag: 'Async Python Services' },
      { name: 'Tailwind CSS', level: 94, tag: 'Utility-First Styling', featured: true },
      { name: 'Mongoose', level: 88, tag: 'MongoDB ODM & Schemas' },
      { name: 'Axios', level: 92, tag: 'HTTP Client / Interceptors' },
    ],
  },
  {
    id: 'ai-ml',
    name: 'AI, LLMs & Generative Tech',
    iconName: 'Cpu',
    skills: [
      { name: 'LLMs & Prompt Engineering', level: 86, tag: 'System Prompts / Few-shot', featured: true },
      { name: 'Retrieval-Augmented Gen (RAG)', level: 84, tag: 'Context Grounding / Embeddings', featured: true },
      { name: 'Gemini API', level: 90, tag: 'Multimodal / Agents SDK', featured: true },
      { name: 'Python for Data Science', level: 85, tag: 'NPTEL Certified (2025)' },
    ],
  },
  {
    id: 'databases',
    name: 'Databases & Data Storage',
    iconName: 'Database',
    skills: [
      { name: 'MongoDB', level: 90, tag: 'NoSQL / Aggregation', featured: true },
      { name: 'MySQL', level: 88, tag: 'Relational / Indexing', featured: true },
      { name: 'PostgreSQL', level: 84, tag: 'ACID / Complex Queries' },
      { name: 'Oracle SQL', level: 80, tag: 'Enterprise Data' },
      { name: 'SQLite', level: 85, tag: 'Embedded Storage' },
    ],
  },
  {
    id: 'tools-cloud',
    name: 'Cloud, DevOps & Tools',
    iconName: 'Cloud',
    skills: [
      { name: 'AWS', level: 78, tag: 'Cloud Infrastructure' },
      { name: 'Git & GitHub', level: 92, tag: 'Version Control / CI/CD', featured: true },
      { name: 'Postman & Swagger', level: 90, tag: 'API Design & Testing', featured: true },
      { name: 'VirtualBox', level: 82, tag: 'Virtualization Environments' },
      { name: 'Kali Linux', level: 80, tag: 'Linux CLI & Security Tools' },
    ],
  },
  {
    id: 'testing-qa',
    name: 'Testing & Quality Assurance',
    iconName: 'ShieldCheck',
    skills: [
      { name: 'Selenium', level: 82, tag: 'Automated Browser Testing' },
      { name: 'JUnit & TestNG', level: 84, tag: 'Java Unit Testing Suites' },
      { name: 'API Testing', level: 88, tag: 'Contract & Functional Testing' },
      { name: 'Unit Testing', level: 86, tag: 'TDD & Mocking' },
    ],
  },
  {
    id: 'cs-foundations',
    name: 'Core Computer Science',
    iconName: 'Terminal',
    skills: [
      { name: 'Data Structures & Algorithms', level: 90, tag: 'LeetCode / Time Complexity', featured: true },
      { name: 'Object-Oriented Programming (OOP)', level: 92, tag: 'Design Patterns / Polymorphism', featured: true },
      { name: 'Database Management Systems (DBMS)', level: 88, tag: 'Normalization / Transactions' },
      { name: 'Operating Systems', level: 85, tag: 'Concurrency / Memory' },
      { name: 'Computer Networks', level: 84, tag: 'TCP/IP / HTTP Protocols' },
    ],
  },
];

export const achievements: AchievementItem[] = [
  {
    id: 'ach-dev-hackathon',
    title: 'Grand Finalist — Dev Hackathon',
    organization: 'National Level Dev Hackathon',
    position: 'Grand Finalist',
    projectOrDomain: 'AETHER (AI-Based Autonomous Hiring & Talent Management System)',
    year: '2025',
    badgeType: 'gold',
    description:
      'Selected as a Grand Finalist among top national teams for architecting AETHER, an innovative autonomous AI candidate evaluation and interview platform powered by LLMs and RAG.',
  },
  {
    id: 'ach-civil-showdown',
    title: '1st Place — Civil Showdown (Technical Skills)',
    organization: 'PSG College of Technology',
    position: '1st Place Winner',
    projectOrDomain: 'Technical Problem Solving & Rapid Algorithmic Challenge',
    year: '2024',
    prize: 'Cash Prize: Rs. 2,000',
    badgeType: 'gold',
    description:
      'Clinched 1st place in the rigorous technical skills and problem-solving competition held at PSG College of Technology.',
  },
  {
    id: 'ach-sih-2025',
    title: 'Top 20 Teams — Smart India Hackathon 2025',
    organization: 'SIH Internal Hackathon at SKCT',
    position: 'Top 20 Teams Finalist',
    projectOrDomain: 'Hydes Nexus 2.0',
    year: '2025',
    badgeType: 'silver',
    description:
      'Qualified in the Top 20 teams at Sri Krishna College of Technology internal hackathon for Smart India Hackathon (SIH 2025) with Hydes Nexus 2.0.',
  },
  {
    id: 'ach-msme-2025',
    title: 'Top 50 Teams — MSME Hackathon 2025',
    organization: 'MSME Internal Hackathon at SKCT',
    position: 'Top 50 Teams',
    projectOrDomain: 'Hydes Nexus',
    year: '2025',
    badgeType: 'bronze',
    description:
      'Recognized among the Top 50 teams at the MSME Hackathon 2025 internal evaluation for building innovative enterprise technology solutions.',
  },
];

export const education: EducationItem[] = [
  {
    id: 'skct-be',
    institution: 'Sri Krishna College of Technology (SKCT)',
    location: 'Coimbatore, India',
    degree: 'Bachelor of Engineering – Computer Science & Engineering',
    score: 'CGPA: 8.21 / 10 (As of 4th Semester)',
    period: '2024 – 2028',
    current: true,
    details: [
      'Focus areas: Data Structures & Algorithms, Database Systems, Computer Networks, Operating Systems, Web Engineering, and AI.',
      'Active participant in coding hackathons (SIH, MSME, Dev Hackathons) and technical symposiums.',
      'Consistently ranked with high academic performance and practical project execution.',
    ],
  },
  {
    id: 'svv-hsc',
    institution: 'Sri Vijay Vidyalaya Matriculation Higher Secondary School',
    location: 'Hosur, India',
    degree: 'Higher Secondary Certificate (Class 12)',
    score: '92.00%',
    period: '2023 – 2024',
    details: [
      'Excelled in Mathematics, Physics, Chemistry, and Computer Science with 92% aggregate.',
      'Recognized for academic distinction and foundation in computer fundamentals.',
    ],
  },
  {
    id: 'svm-sslc',
    institution: 'Sri Vivekananda Matriculation School',
    location: 'Vaniyambadi, India',
    degree: 'Secondary School Leaving Certificate (Class 10)',
    score: '88.60%',
    period: '2021 – 2022',
    details: [
      'Strong foundational grounding in mathematics and scientific disciplines with 88.60% score.',
    ],
  },
];

export const certifications: CertificationItem[] = [
  {
    id: 'cert-python-ds',
    title: 'Python for Data Science',
    issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
    year: '2025',
    badge: 'Data Science & Python',
  },
  {
    id: 'cert-soft-skills',
    title: 'SoftSkill Development',
    issuer: 'NPTEL (IIT / Ministry of Education)',
    year: '2024',
    badge: 'Professional Communication',
  },
  {
    id: 'cert-adjp-java',
    title: 'Advanced Diploma in Java Programming (ADJP)',
    issuer: 'CSC Computer Software College',
    year: '2024',
    badge: 'Advanced Java / OOP',
  },
  {
    id: 'cert-office-automation',
    title: 'Certificate in Office Automation (SUITS)',
    issuer: 'Bharathidasan University',
    year: '2019',
    badge: 'Digital Systems & Office',
  },
  {
    id: 'cert-computer-basics',
    title: 'Certificate in Computer Basics (SUITS)',
    issuer: 'Bharathidasan University',
    year: '2018',
    badge: 'Computer Foundations',
  },
];

export const terminalWelcomeCommands = [
  'help       - List all available terminal commands',
  'about      - Display overview and summary for Kishore A',
  'skills     - Inspect technical skills matrix across stacks',
  'projects   - View featured full-stack and AI software projects',
  'exp        - Show work experience at Blastorz (Freelance SWE)',
  'edu        - Display academic milestones and CGPA',
  'awards     - View hackathon wins (SIH, MSME, Dev Hackathon)',
  'cert       - List verified NPTEL and University certifications',
  'contact    - Get direct email, phone, location, and profiles',
  'cat resume - Print complete text resume',
  'clear      - Clean terminal viewport',
];
