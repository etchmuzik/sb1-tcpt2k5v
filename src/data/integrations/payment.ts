import { Integration } from './types';

export const paymentIntegrations: Integration[] = [
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Global payment processing solution',
    logo: 'https://stripe.com/img/v3/home/social.png',
    docsUrl: '/docs/integrations/stripe',
    category: 'payment',
    status: 'active',
    features: [
      'Payment processing',
      'Subscription management',
      'Invoice generation',
      'Payment analytics'
    ],
    certifications: ['Stripe Verified Partner']
  },
  {
    id: 'paypal',
    name: 'PayPal',
    description: 'Complete payment solution',
    logo: 'https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg',
    docsUrl: '/docs/integrations/paypal',
    category: 'payment',
    status: 'active',
    features: [
      'Express checkout',
      'Subscription payments',
      'Invoicing',
      'Dispute resolution'
    ],
    certifications: ['PayPal Partner']
  }
];