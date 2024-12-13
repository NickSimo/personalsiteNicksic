import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'backend-developer-linksMT',
    title: 'Backend Developer',
    company: 'Links Management and Technology (LinksMT)',
    location: 'Full Remote / Milan',
    period: 'Sep 2022 - Dec 2024',
    description: 'Backend development with focus on microservices architecture and full-stack capabilities.',
    highlights: [
      'Backend Development: Contributed to backend development, leading to growth into a fullstack role',
      'Autonomous Work: Managed complex tasks independently',
      'Team Collaboration: Effectively collaborated within teams and supported junior developers',
      'Adaptability: Gained experience in diverse projects and technologies'
    ],
    projects: [
      {
        name: 'Open Data Puglia',
        period: '05/08/2022 - 18/11/2022',
        description: 'Provided services for system evolution and maintenance of the Open Data platform for the Puglia Region.',
        technologies: ['Java', 'Spring Boot']
      },
      {
        name: 'SQNPI',
        period: '23/11/2022 - 19/05/2023',
        description: 'Re-engineered the information system for National Integrated Production Quality System.',
        technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Oracle', 'React 17', 'TypeScript', 'Docker', 'Kubernetes', 'PL/SQL']
      },
      {
        name: 'Ciclomotori',
        period: '22/05/2023 - 22/12/2023',
        description: 'Re-engineered online services for the Ministry of Transport using microservices architecture.',
        technologies: ['Spring Boot', 'Kafka', 'React', 'Docker', 'Kubernetes']
      },
      {
        name: 'Albo Pretorio',
        period: '08/01/2024 - 29/05/2024',
        description: 'Re-engineered the Public Notice Board system for the Puglia Region.',
        technologies: ['Java', 'Spring Boot']
      },
      {
        name: 'Puglia Salute',
        period: '29/05/2024 - 31/12/2024',
        description: 'Developed and maintained the Puglia Salute web portal and app for healthcare services.',
        technologies: ['Liferay 7.4 CE', 'PostgreSQL', 'ElasticSearch 7.17', 'Camunda 7', 'PWA']
      }
    ]
  },
  {
    id: 'senior-java-developer-addvalue',
    title: 'Senior Java Developer',
    company: 'Add Value',
    location: 'Verona',
    period: 'Oct 2016 - Sep 2022',
    description: 'Senior Java development role focusing on Spring Boot microservices and automated testing.',
    highlights: [
      'Developed Spring Batch programs and REST web services',
      'Led backend development in a microservices-based multi-module application',
      'Managed deployments using Jenkins and Electric Flow',
      'Conducted code reviews and managed pull requests',
      'Delivered seminars on Automated Testing and TDD at universities',
      'Provided internal training on testing frameworks and methodologies'
    ],
    keyAchievements: [
      'Presented Automated Testing and TDD seminaries at University of Verona and University of Marche (2021-2022)',
      'Conducted 12-hour internal training on JUnit, Mockito, and Test Driven Development',
      'Led a team of 6 developers in microservices architecture development'
    ],
    technologies: [
      'Java 8',
      'Spring Boot',
      'Spring Batch',
      'REST APIs',
      'Jenkins',
      'Electric Flow',
      'JUnit',
      'Mockito',
      'Agile',
      'Scrum'
    ]
  }
];