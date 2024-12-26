import { LucideIcon, Cpu, Users, Zap, Phone, Book, HelpCircle } from 'lucide-react';

export interface MenuItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
  children?: MenuItem[];
  badge?: 'new' | 'beta' | 'soon';
}

export const mainMenuItems: MenuItem[] = [
  {
    label: 'Product',
    href: '#',
    icon: Cpu,
    children: [
      {
        label: 'Features',
        href: '/features',
        description: 'Explore our AI-powered features',
        children: [
          { label: 'AI Calling', href: '/features/ai-calling' },
          { label: 'Lead Scoring', href: '/features/lead-scoring' },
          { label: 'Analytics', href: '/features/analytics' }
        ]
      },
      {
        label: 'Solutions',
        href: '/solutions',
        description: 'Industry-specific solutions',
        children: [
          { label: 'Sales Teams', href: '/solutions/sales' },
          { label: 'Customer Service', href: '/solutions/service' },
          { label: 'Enterprise', href: '/solutions/enterprise' }
        ]
      },
      {
        label: 'Integrations',
        href: '/integrations',
        description: 'Connect with your tools',
        badge: 'new'
      }
    ]
  },
  {
    label: 'Company',
    href: '#',
    icon: Users,
    children: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers', badge: 'new' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' }
    ]
  },
  {
    label: 'Resources',
    href: '#',
    icon: Book,
    children: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api', badge: 'beta' },
      { label: 'Guides', href: '/guides' },
      { label: 'Case Studies', href: '/case-studies' }
    ]
  },
  {
    label: 'Support',
    href: '#',
    icon: HelpCircle,
    children: [
      { label: 'Help Center', href: '/help' },
      { label: 'API Status', href: '/api-status' },
      { label: 'Contact Support', href: '/support' }
    ]
  }
];

export const ctaButtons = [
  {
    label: 'Book Demo',
    href: '/demo',
    variant: 'outline',
    icon: Phone
  },
  {
    label: 'Get Started',
    href: '/signup',
    variant: 'primary',
    icon: Zap
  }
];