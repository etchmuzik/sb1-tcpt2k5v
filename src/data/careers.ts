import { Code, Users, Globe, Zap } from 'lucide-react';

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string;
  requirements: string[];
}

export interface Benefit {
  icon: typeof Code;
  title: string;
  description: string;
}

export const openPositions: JobPosition[] = [
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our AI team to build next-generation communication solutions.',
    requirements: [
      '5+ years of experience in ML/AI',
      'Strong Python and TensorFlow/PyTorch skills',
      'Experience with NLP and speech processing'
    ]
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    department: 'Product',
    location: 'Dubai',
    type: 'Full-time',
    description: 'Lead the development of our AI products from conception to launch.',
    requirements: [
      '3+ years of product management experience',
      'Strong technical background',
      'Experience with AI/ML products'
    ]
  },
  {
    id: 'frontend-engineer',
    title: 'Frontend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build beautiful and performant user interfaces for our AI platform.',
    requirements: [
      '3+ years of React experience',
      'Strong TypeScript skills',
      'Experience with modern frontend tools'
    ]
  }
];

export const benefits: Benefit[] = [
  {
    icon: Globe,
    title: 'Remote Work',
    description: 'Work from anywhere in the world'
  },
  {
    icon: Zap,
    title: 'Latest Tech',
    description: 'Work with cutting-edge AI technologies'
  },
  {
    icon: Users,
    title: 'Great Team',
    description: 'Join a diverse and talented team'
  },
  {
    icon: Code,
    title: 'Open Source',
    description: 'Contribute to open source projects'
  }
];