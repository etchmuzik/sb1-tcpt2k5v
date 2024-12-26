import { Plan } from './types';

export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses',
    price: 4999,
    yearlyPrice: 47990, // ~20% discount
    currency: 'AED',
    features: [
      'Up to 10,000 minutes/month',
      'Basic analytics',
      'Email support',
      'Standard API access',
      'Up to 15 team members',
      'Core integrations',
      'Basic security features'
    ],
    priceId: 'price_starter'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing teams',
    price: 12999,
    yearlyPrice: 124790,
    currency: 'AED',
    features: [
      'Up to 50,000 minutes/month',
      'Advanced analytics',
      'Priority support',
      'Full API access',
      'Up to 100 team members',
      'Premium integrations',
      'Dedicated account manager',
      'Custom workflows',
      'Advanced security'
    ],
    priceId: 'price_professional'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations',
    price: null, // Contact sales
    yearlyPrice: null,
    currency: 'AED',
    features: [
      'Unlimited minutes',
      'Custom AI models',
      '24/7 dedicated support',
      'Enterprise security',
      'Unlimited team members',
      'Custom development',
      'On-premise deployment',
      'SLA guarantees',
      'Compliance packages',
      'Custom integrations',
      'Advanced API features',
      'Priority feature access'
    ],
    priceId: 'price_enterprise'
  }
];