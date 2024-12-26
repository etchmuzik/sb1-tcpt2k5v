import { Integration } from './types';

export const aiIntegrations: Integration[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    description: 'Advanced language models and AI capabilities',
    logo: 'https://openai.com/brand/logo-white.svg',
    docsUrl: '/docs/integrations/openai',
    category: 'ai',
    status: 'active',
    certifications: ['OpenAI API Partner']
  },
  {
    id: 'azure-cognitive',
    name: 'Azure Cognitive Services',
    description: 'Microsoft AI and machine learning services',
    logo: 'https://azure.microsoft.com/images/cognitive-services-logo.svg',
    docsUrl: '/docs/integrations/azure-cognitive',
    category: 'ai',
    status: 'active',
    certifications: ['Microsoft AI Partner']
  },
  {
    id: 'ibm-watson',
    name: 'IBM Watson',
    description: 'Enterprise AI and machine learning platform',
    logo: 'https://www.ibm.com/brand/watson-logo-white.svg',
    docsUrl: '/docs/integrations/ibm-watson',
    category: 'ai',
    status: 'active',
    certifications: ['IBM Watson Partner']
  }
];