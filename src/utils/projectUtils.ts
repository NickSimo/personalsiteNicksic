import slugify from 'slugify';
import { saveProjectContent, saveExperienceContent } from './contentManager';
import { BlogPost, Project } from '../types';

export const createNewProject = async (formData: {
  type: 'project' | 'experience';
  title: string;
  description: string;
  content: string;
  technologies: string;
  role?: string;
  duration?: string;
  date: string;
}) => {
  const id = slugify(formData.title, { lower: true, strict: true });
  
  if (formData.type === 'project') {
    const projectData: BlogPost = {
      id,
      title: formData.title,
      excerpt: formData.description,
      date: formData.date,
      content: formData.content,
      tags: formData.technologies.split(',').map(tech => tech.trim())
    };

    saveProjectContent(id, projectData);
  } else {
    const experienceData: Project = {
      id,
      title: formData.title,
      description: formData.description,
      technologies: formData.technologies.split(',').map(tech => tech.trim()),
      role: formData.role || '',
      duration: formData.duration || ''
    };

    saveExperienceContent(id, experienceData);
  }

  return id;
};

export const updateProject = async (
  id: string,
  formData: {
    type: 'project' | 'experience';
    title: string;
    description: string;
    content: string;
    technologies: string;
    role?: string;
    duration?: string;
    date: string;
  }
) => {
  if (formData.type === 'project') {
    const projectData: BlogPost = {
      id,
      title: formData.title,
      excerpt: formData.description,
      date: formData.date,
      content: formData.content,
      tags: formData.technologies.split(',').map(tech => tech.trim())
    };

    saveProjectContent(id, projectData);
  } else {
    const experienceData: Project = {
      id,
      title: formData.title,
      description: formData.description,
      technologies: formData.technologies.split(',').map(tech => tech.trim()),
      role: formData.role || '',
      duration: formData.duration || ''
    };

    saveExperienceContent(id, experienceData);
  }
};