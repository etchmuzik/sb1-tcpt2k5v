import { PricingFeature } from './types';

export const features: PricingFeature[] = [
  {
    name: 'AI Calling',
    description: 'Monthly AI call minutes',
    starter: true,
    professional: true,
    enterprise: true
  },
  {
    name: 'Analytics',
    description: 'Performance tracking and insights',
    starter: true,
    professional: true,
    enterprise: true
  },
  {
    name: 'Custom AI Models',
    description: 'Train models on your data',
    starter: false,
    professional: true,
    enterprise: true
  },
  {
    name: 'API Access',
    description: 'Integration capabilities',
    starter: true,
    professional: true,
    enterprise: true
  },
  {
    name: 'Team Members',
    description: 'Number of seats included',
    starter: true,
    professional: true,
    enterprise: true
  },
  {
    name: 'Support',
    description: 'Customer support level',
    starter: false,
    professional: true,
    enterprise: true
  },
  {
    name: 'Custom Development',
    description: 'Custom features and integrations',
    starter: false,
    professional: false,
    enterprise: true
  },
  {
    name: 'Compliance Packages',
    description: 'Industry-specific compliance',
    starter: false,
    professional: false,
    enterprise: true
  }
];