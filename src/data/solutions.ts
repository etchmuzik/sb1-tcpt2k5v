import { Phone, Brain, BarChart3, Puzzle, Shield, Zap } from 'lucide-react';

export const serviceFeatures = [
  {
    icon: Phone,
    title: 'AI Calling',
    description: 'Automated call handling with natural language processing',
    tier: 'starter',
    specs: [
      'Up to 1000 minutes/month',
      '99.9% uptime SLA',
      'Real-time transcription',
      'Multi-language support'
    ]
  },
  {
    icon: Brain,
    title: 'Smart Lead Scoring',
    description: 'AI-powered lead qualification and prioritization',
    tier: 'professional',
    specs: [
      'Custom scoring models',
      'Behavioral analytics',
      'Integration with CRM',
      'Automated lead routing'
    ]
  }
];

export const integrations = [
  {
    name: 'Salesforce',
    description: 'Bi-directional sync with complete CRM integration',
    logo: 'https://www.salesforce.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg',
    docsUrl: '/docs/integrations/salesforce',
    certifications: ['ISVforce Certified', 'AppExchange Partner']
  },
  {
    name: 'HubSpot',
    description: 'Seamless integration with HubSpot CRM and marketing tools',
    logo: 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Logo-White.svg',
    docsUrl: '/docs/integrations/hubspot',
    certifications: ['App Partner', 'Solutions Partner']
  }
];