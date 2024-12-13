export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  duration: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  projects?: {
    name: string;
    period: string;
    description: string;
    technologies: string[];
  }[];
  keyAchievements?: string[];
  technologies?: string[];
}