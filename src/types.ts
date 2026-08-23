export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  degree: string;
  score: string;
  period: string;
  details?: string[];
  current?: boolean;
}

export interface WorkExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'AI & ML' | 'Hackathon';
  featured: boolean;
  description: string;
  problemStatement?: string;
  keyFeatures: string[];
  architecture?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics?: { label: string; value: string }[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 1-100
    tag?: string;
    featured?: boolean;
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  position: string;
  projectOrDomain?: string;
  year: string;
  prize?: string;
  badgeType: 'gold' | 'silver' | 'bronze' | 'special';
  description: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badge: string;
  link?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  college: string;
  cgpa: string;
  status: string;
  socials: {
    linkedin: string;
    github: string;
    leetcode: string;
    email: string;
    phone: string;
  };
}
