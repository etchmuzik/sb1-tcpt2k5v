export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  views: number;
}

export const popularArticles: Article[] = [
  {
    id: 'quickstart',
    title: 'Quick Start Guide',
    excerpt: 'Get up and running with Beyond AI in minutes',
    category: 'getting-started',
    views: 15420
  },
  {
    id: 'api-integration',
    title: 'API Integration Guide',
    excerpt: 'Learn how to integrate our API into your application',
    category: 'integrations',
    views: 12350
  },
  {
    id: 'billing',
    title: 'Billing and Subscriptions',
    excerpt: 'Understand our billing system and subscription plans',
    category: 'account',
    views: 9840
  },
  {
    id: 'security-best-practices',
    title: 'Security Best Practices',
    excerpt: 'Keep your account and data secure',
    category: 'security',
    views: 8760
  }
];