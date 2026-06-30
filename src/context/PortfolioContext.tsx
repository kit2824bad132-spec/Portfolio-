import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ProjectData {
  id: number;
  iconName: string;
  title: string;
  subtitle: string;
  stack: string[];
  accent: 'red' | 'rose';
  description: string;
  points: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
}

export interface SkillGroupData {
  id: number;
  iconName: string;
  category: string;
  skills: string[];
  accent: 'red' | 'rose';
}

export interface CertData {
  id: number;
  title: string;
  issuer: string;
  color: 'red' | 'rose';
}

export interface MessageData {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
}

interface PortfolioContextType {
  projects: ProjectData[];
  setProjects: React.Dispatch<React.SetStateAction<ProjectData[]>>;
  skillGroups: SkillGroupData[];
  setSkillGroups: React.Dispatch<React.SetStateAction<SkillGroupData[]>>;
  certs: CertData[];
  setCerts: React.Dispatch<React.SetStateAction<CertData[]>>;
  messages: MessageData[];
  setMessages: React.Dispatch<React.SetStateAction<MessageData[]>>;
}

const defaultProjects: ProjectData[] = [
  {
    id: 1,
    iconName: 'Cpu',
    title: 'AgroIntel-AI',
    subtitle: 'AI Powered Plant Disease Detection System',
    stack: ['React', 'Node.js', 'FastAPI', 'PyTorch', 'ResNet-18'],
    accent: 'red',
    description: 'Microservices-based full-stack application for real-time plant disease detection using leaf images, powered by a ResNet-18 deep learning model.',
    points: [
      'Microservices architecture with async API communication',
      'ResNet-18 model via FastAPI for disease classification',
      'Responsive UI for image upload and result visualization',
      'Asynchronous frontend-backend communication for scalability',
    ],
    image: 'https://images.pexels.com/photos/1374294/pexels-photo-1374294.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://drive.google.com/file/d/1tHeEwJb72DP4Gv0TdJIPrDCRBv14oLKc/view?usp=sharing',
    githubUrl: 'https://github.com/kit2824bad132-spec',
  },
  {
    id: 2,
    iconName: 'Users',
    title: 'Split',
    subtitle: 'Group Payment & Expense Splitting Platform',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux'],
    accent: 'rose',
    description: 'Full-stack expense management platform enabling users to create groups, track expenses, and split payments with secure auth and modern UI.',
    points: [
      'Secure JWT authentication and session management',
      'Centralized state management with Redux',
      'Modern glassmorphism UI design',
      'Optimized MongoDB queries for performance',
    ],
    image: 'https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://drive.google.com/file/d/1DibE-zDwDhjnfLCKUms-_g9r3oZl7CE2/view?usp=drivesdk',
    githubUrl: 'https://github.com/kit2824bad132-spec',
  },
  {
    id: 3,
    iconName: 'ShoppingBag',
    title: 'Menswear E-Commerce',
    subtitle: 'Full-Featured Fashion Shopping Platform',
    stack: ['React', 'Vite', 'Context API', 'CSS3'],
    accent: 'red',
    description: 'Responsive e-commerce application with product browsing, advanced filtering, shopping cart, and checkout — built for performance and UX.',
    points: [
      'Product browsing with filtering and search',
      'Shopping cart with localStorage persistence',
      'Global state via React Context API',
      'Modular, reusable component architecture',
    ],
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: '',
    githubUrl: 'https://github.com/kit2824bad132-spec',
  },
];

const defaultSkills: SkillGroupData[] = [
  { id: 1, iconName: 'Code2', category: 'Programming Languages', skills: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'], accent: 'red' },
  { id: 2, iconName: 'Layout', category: 'Frontend', skills: ['HTML5', 'CSS3', 'React.js', 'Vite', 'Context API', 'Redux', 'Tailwind CSS'], accent: 'rose' },
  { id: 3, iconName: 'Server', category: 'Backend', skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Microservices', 'PyTorch'], accent: 'red' },
  { id: 4, iconName: 'Database', category: 'Database', skills: ['MongoDB', 'Mongoose', 'MongoDB Atlas'], accent: 'rose' },
  { id: 5, iconName: 'Wrench', category: 'Tools & Platforms', skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'DSA', 'OOP', 'Linux'], accent: 'red' },
];

const defaultCerts: CertData[] = [
  { id: 1, title: 'Artificial Intelligence', issuer: 'Coursera', color: 'red' },
  { id: 2, title: 'What is Data Science', issuer: 'Coursera', color: 'rose' },
  { id: 3, title: 'Introduction to MongoDB', issuer: 'MongoDB University', color: 'red' },
  { id: 4, title: 'HTML Fundamentals', issuer: 'Coursera', color: 'rose' },
  { id: 5, title: 'Full Stack Java Development', issuer: 'Industry', color: 'red' },
  { id: 6, title: 'Python Essentials 1', issuer: 'Cisco', color: 'rose' },
  { id: 7, title: 'Python Essentials 2', issuer: 'Cisco', color: 'red' },
  { id: 8, title: 'Certificate of Excellence', issuer: 'Academic', color: 'rose' },
];

const defaultMessages: MessageData[] = [
  { id: 1, name: 'Recruiter A', email: 'hr@company.com', message: 'Hi Sabari, interested in a full-stack role.', date: '2026-06-28' },
];

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<ProjectData[]>(() => {
    const saved = localStorage.getItem('portfolio-projects');
    return saved ? JSON.parse(saved) : defaultProjects;
  });

  const [skillGroups, setSkillGroups] = useState<SkillGroupData[]>(() => {
    const saved = localStorage.getItem('portfolio-skills');
    return saved ? JSON.parse(saved) : defaultSkills;
  });

  const [certs, setCerts] = useState<CertData[]>(() => {
    const saved = localStorage.getItem('portfolio-certs');
    return saved ? JSON.parse(saved) : defaultCerts;
  });

  const [messages, setMessages] = useState<MessageData[]>(() => {
    const saved = localStorage.getItem('portfolio-messages');
    return saved ? JSON.parse(saved) : defaultMessages;
  });

  useEffect(() => {
    localStorage.setItem('portfolio-projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('portfolio-skills', JSON.stringify(skillGroups));
  }, [skillGroups]);

  useEffect(() => {
    localStorage.setItem('portfolio-certs', JSON.stringify(certs));
  }, [certs]);

  useEffect(() => {
    localStorage.setItem('portfolio-messages', JSON.stringify(messages));
  }, [messages]);

  return (
    <PortfolioContext.Provider value={{
      projects, setProjects,
      skillGroups, setSkillGroups,
      certs, setCerts,
      messages, setMessages
    }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
