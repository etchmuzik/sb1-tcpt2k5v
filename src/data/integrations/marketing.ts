import { Integration } from './types';

export const marketingIntegrations: Integration[] = [
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    description: 'Email marketing automation',
    logo: 'https://mailchimp.com/release/plums/cxp/images/mailchimp-logo-white.svg',
    docsUrl: '/docs/integrations/mailchimp',
    category: 'marketing',
    status: 'active',
    features: [
      'Email campaigns',
      'Audience segmentation',
      'Marketing automation',
      'Analytics tracking'
    ],
    certifications: ['Mailchimp Partner']
  },
  {
    id: 'activecampaign',
    name: 'ActiveCampaign',
    description: 'Marketing automation platform',
    logo: 'https://www.activecampaign.com/assets/logo-ac-white.svg',
    docsUrl: '/docs/integrations/activecampaign',
    category: 'marketing',
    status: 'active',
    features: [
      'Email marketing',
      'CRM integration',
      'Automation workflows',
      'Lead scoring'
    ],
    certifications: ['Solution Partner']
  }
];