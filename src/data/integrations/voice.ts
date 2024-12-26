import { Integration } from './types';

export const voiceIntegrations: Integration[] = [
  {
    id: 'twilio',
    name: 'Twilio',
    description: 'Enterprise voice and SMS capabilities',
    logo: 'https://www.twilio.com/assets/icons/twilio-logo-white.svg',
    docsUrl: '/docs/integrations/twilio',
    category: 'voice',
    status: 'active',
    features: [
      'Programmable voice',
      'SMS integration',
      'Call recording',
      'Advanced routing'
    ],
    certifications: ['Twilio Build Partner']
  },
  {
    id: 'nexmo',
    name: 'Vonage (Nexmo)',
    description: 'Global communications platform',
    logo: 'https://www.vonage.com/assets/images/logos/vonage-logo-white.svg',
    docsUrl: '/docs/integrations/nexmo',
    category: 'voice',
    status: 'active',
    features: [
      'Voice APIs',
      'SMS capabilities',
      'Number insight',
      'Verification services'
    ],
    certifications: ['Vonage API Partner']
  }
];