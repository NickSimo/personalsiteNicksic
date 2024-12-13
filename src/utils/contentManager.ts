import { BlogPost, Project } from '../types';

const STORAGE_KEYS = {
  PROJECTS: 'portfolio_projects',
  EXPERIENCE: 'portfolio_experience'
};

// Helper to get data from localStorage
const getStorageData = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

// Helper to save data to localStorage
const setStorageData = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getProjectContent = (id: string): BlogPost | null => {
  const projects = getStorageData(STORAGE_KEYS.PROJECTS);
  return projects.find((p: BlogPost) => p.id === id) || null;
};

export const saveProjectContent = (id: string, content: BlogPost): void => {
  const projects = getStorageData(STORAGE_KEYS.PROJECTS);
  const existingIndex = projects.findIndex((p: BlogPost) => p.id === id);
  
  if (existingIndex >= 0) {
    projects[existingIndex] = { ...content, id };
  } else {
    projects.push({ ...content, id });
  }
  
  setStorageData(STORAGE_KEYS.PROJECTS, projects);
};

export const getAllProjects = (): BlogPost[] => {
  return getStorageData(STORAGE_KEYS.PROJECTS);
};

export const deleteProject = (id: string): void => {
  const projects = getStorageData(STORAGE_KEYS.PROJECTS);
  const filtered = projects.filter((p: BlogPost) => p.id !== id);
  setStorageData(STORAGE_KEYS.PROJECTS, filtered);
};

export const getExperienceContent = (id: string): Project | null => {
  const experiences = getStorageData(STORAGE_KEYS.EXPERIENCE);
  return experiences.find((e: Project) => e.id === id) || null;
};

export const saveExperienceContent = (id: string, content: Project): void => {
  const experiences = getStorageData(STORAGE_KEYS.EXPERIENCE);
  const existingIndex = experiences.findIndex((e: Project) => e.id === id);
  
  if (existingIndex >= 0) {
    experiences[existingIndex] = { ...content, id };
  } else {
    experiences.push({ ...content, id });
  }
  
  setStorageData(STORAGE_KEYS.EXPERIENCE, experiences);
};

export const getAllExperience = (): Project[] => {
  return getStorageData(STORAGE_KEYS.EXPERIENCE);
};

export const deleteExperience = (id: string): void => {
  const experiences = getStorageData(STORAGE_KEYS.EXPERIENCE);
  const filtered = experiences.filter((e: Project) => e.id !== id);
  setStorageData(STORAGE_KEYS.EXPERIENCE, filtered);
};

// Initialize with sample data if empty
const initializeStorage = () => {
  if (!localStorage.getItem(STORAGE_KEYS.PROJECTS)) {
    setStorageData(STORAGE_KEYS.PROJECTS, [
      {
        id: 'real-time-chat',
        title: 'Building a Real-time Chat Application',
        excerpt: 'A deep dive into creating a scalable real-time chat system using Node.js and WebSockets',
        date: '2024-03-15',
        content: `# Building a Real-time Chat Application...`,
        tags: ['Node.js', 'WebSocket', 'MongoDB', 'Redis', 'System Design']
      },
      // Add other sample projects
    ]);
  }

  if (!localStorage.getItem(STORAGE_KEYS.EXPERIENCE)) {
    setStorageData(STORAGE_KEYS.EXPERIENCE, [
      {
        id: 'ecommerce-backend',
        title: 'E-Commerce Backend',
        description: 'Developed a scalable microservices architecture using Node.js and MongoDB',
        technologies: ['Node.js', 'Express', 'MongoDB', 'Docker', 'Redis'],
        role: 'Lead Backend Developer',
        duration: '2022 - 2023'
      },
      // Add other sample experiences
    ]);
  }
};

initializeStorage();