import { Book, MessageCircle, Code, Shield, Settings, HelpCircle } from 'lucide-react';

export interface HelpCategory {
  id: string;
  title: string;
  description: string;
  icon: typeof Book;
  articles: number;
}

export const helpCategories: HelpCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Learn the basics of Beyond AI',
    icon: Book,
    articles: 12
  },
  {
    id: 'integrations',
    title: 'Integrations',
    description: 'Connect with your favorite tools',
    icon: Code,
    articles: 8
  },
  {
    id: 'security',
    title: 'Security',
    description: 'Security features and compliance',
    icon: Shield,
    articles: 6
  },
  {
    id: 'account',
    title: 'Account Settings',
    description: 'Manage your account and billing',
    icon: Settings,
    articles: 10
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and solutions',
    icon: HelpCircle,
    articles: 15
  },
  {
    id: 'support',
    title: 'Support',
    description: 'Get help from our team',
    icon: MessageCircle,
    articles: 5
  }
];