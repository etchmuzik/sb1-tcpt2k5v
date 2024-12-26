import { Phone, Brain, BarChart3, Shield } from 'lucide-react';

export const coreFeatures = [
  {
    icon: Phone,
    title: 'AI Calling',
    description: 'Advanced AI-powered calling system with natural language processing',
    benefits: [
      'Reduce operational costs by 60%',
      'Handle multiple calls simultaneously',
      'Natural conversation flow',
      '24/7 availability'
    ],
    specs: {
      capacity: 'Up to 10,000 calls/day',
      performance: '< 100ms response time',
      availability: '99.99% uptime'
    }
  },
  {
    icon: Brain,
    title: 'Smart Lead Scoring',
    description: 'AI-driven lead qualification and prioritization system',
    benefits: [
      'Increase conversion rates by 40%',
      'Automated lead qualification',
      'Real-time scoring updates',
      'Custom scoring models'
    ],
    specs: {
      capacity: 'Unlimited leads/month',
      performance: 'Real-time processing',
      availability: '99.9% uptime'
    }
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics and reporting platform',
    benefits: [
      'Real-time performance tracking',
      'Custom report generation',
      'Advanced data visualization',
      'Predictive analytics'
    ],
    specs: {
      capacity: 'Unlimited data points',
      performance: 'Sub-second queries',
      availability: '99.9% uptime'
    }
  },
  {
    icon: Shield,
    title: 'Security Suite',
    description: 'Enterprise-grade security and compliance features',
    benefits: [
      'End-to-end encryption',
      'GDPR compliance',
      'Regular security audits',
      'Access control'
    ],
    specs: {
      capacity: 'Unlimited users',
      performance: 'Real-time monitoring',
      availability: '99.999% uptime'
    }
  }
];