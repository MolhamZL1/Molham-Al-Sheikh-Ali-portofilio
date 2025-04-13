export interface UserInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  resumeUrl: string;
  skills: string[];
  social: {
    github: string;
    linkedin: string;
    instagram: string;
    facebook: string;
    telegram: string;
  };
  projects: Project[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
}