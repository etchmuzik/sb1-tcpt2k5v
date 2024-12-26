import { 
  Blocks, 
  Puzzle, 
  Zap, 
  Shield, 
  Headphones, 
  Settings 
} from 'lucide-react';

export const menuData = [
  {
    id: 'features',
    title: 'Core Features',
    icon: Blocks,
    items: [
      {
        id: 'ai-calling',
        title: 'AI Calling',
        description: 'Automated call handling',
        href: '/features/ai-calling',
        status: 'active',
        price: '500'
      },
      {
        id: 'lead-scoring',
        title: 'Lead Scoring',
        description: 'Intelligent lead prioritization',
        href: '/features/lead-scoring',
        status: 'active',
        price: '300'
      },
      {
        id: 'voice-analytics',
        title: 'Voice Analytics',
        description: 'Call insights & metrics',
        href: '/features/analytics',
        status: 'beta'
      }
    ]
  },
  {
    id: 'integrations',
    title: 'Integrations',
    icon: Puzzle,
    items: [
      {
        id: 'crm',
        title: 'CRM Systems',
        description: 'Connect your data',
        href: '/integrations/crm',
        status: 'active'
      },
      {
        id: 'calendar',
        title: 'Calendar',
        description: 'Scheduling automation',
        href: '/integrations/calendar',
        status: 'active'
      },
      {
        id: 'zapier',
        title: 'Zapier',
        description: 'Custom workflows',
        href: '/integrations/zapier',
        status: 'coming'
      }
    ]
  },
  {
    id: 'services',
    title: 'Services',
    icon: Zap,
    items: [
      {
        id: 'implementation',
        title: 'Implementation',
        description: 'Setup & onboarding',
        href: '/services/implementation',
        price: '2,500'
      },
      {
        id: 'training',
        title: 'Training',
        description: 'Team enablement',
        href: '/services/training',
        price: '1,500'
      },
      {
        id: 'consulting',
        title: 'Consulting',
        description: 'Expert guidance',
        href: '/services/consulting',
        price: '5,000'
      }
    ]
  },
  {
    id: 'security',
    title: 'Security',
    icon: Shield,
    items: [
      {
        id: 'encryption',
        title: 'Encryption',
        description: 'Data protection',
        href: '/security/encryption',
        status: 'active'
      },
      {
        id: 'compliance',
        title: 'Compliance',
        description: 'Industry standards',
        href: '/security/compliance',
        status: 'active'
      }
    ]
  },
  {
    id: 'support',
    title: 'Support',
    icon: Headphones,
    items: [
      {
        id: 'documentation',
        title: 'Documentation',
        description: 'Guides & tutorials',
        href: '/docs'
      },
      {
        id: 'chat',
        title: 'Live Chat',
        description: 'Real-time help',
        href: '/support/chat',
        status: 'active'
      }
    ]
  },
  {
    id: 'admin',
    title: 'Administration',
    icon: Settings,
    items: [
      {
        id: 'team',
        title: 'Team Management',
        description: 'User controls',
        href: '/admin/team'
      },
      {
        id: 'billing',
        title: 'Billing',
        description: 'Subscription & invoices',
        href: '/admin/billing'
      }
    ]
  }
];