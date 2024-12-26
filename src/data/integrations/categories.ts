import { IntegrationCategory } from './types';

export interface CategoryInfo {
  id: IntegrationCategory;
  title: string;
  description: string;
  icon: string;
}

export const categories: CategoryInfo[] = [
  {
    id: 'crm',
    title: 'CRM Platforms',
    description: 'Seamlessly sync your customer data and sales workflows',
    icon: '🔄'
  },
  {
    id: 'calendar',
    title: 'Calendar & Scheduling',
    description: 'Automate meeting scheduling and calendar management',
    icon: '📅'
  },
  {
    id: 'voice',
    title: 'Voice & SMS',
    description: 'Enterprise communication solutions',
    icon: '📞'
  },
  {
    id: 'payment',
    title: 'Payment Processing',
    description: 'Secure payment and billing solutions',
    icon: '💳'
  },
  {
    id: 'storage',
    title: 'Cloud Storage',
    description: 'Document management and file sharing',
    icon: '☁️'
  },
  {
    id: 'collaboration',
    title: 'Team Collaboration',
    description: 'Enhanced team communication tools',
    icon: '👥'
  },
  {
    id: 'marketing',
    title: 'Marketing Automation',
    description: 'Power your marketing campaigns with AI',
    icon: '📢'
  }
];