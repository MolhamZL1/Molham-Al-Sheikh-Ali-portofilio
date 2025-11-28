export interface UserInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  email: string;
  phone: string;
  telegram: string;
  location: string;
  profileImage: string;
  resumeUrl: string;
  skillCategories: SkillCategory[];
  social: {
    github: string;
    linkedin: string;
    instagram: string;
    facebook: string;
  };
  projects: Project[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  myRole: string;
  technologies: string[];
  features: string[];
  screenshots: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  category: string;
  duration: string;
  teamSize: string;
}