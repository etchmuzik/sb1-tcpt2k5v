import { Integration } from './types';

export const crmIntegrations: Integration[] = [
  {
    id: 'salesforce',
    name: 'Salesforce',
    description: 'Complete CRM integration with bi-directional sync',
    logo: 'https://www.salesforce.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg',
    docsUrl: '/docs/integrations/salesforce',
    category: 'crm',
    status: 'active',
    features: [
      'Real-time data synchronization',
      'Custom object mapping',
      'Automated workflow triggers',
      'Advanced reporting integration'
    ],
    certifications: ['ISVforce Certified', 'AppExchange Partner']
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    description: 'Integrated marketing and CRM solution',
    logo: 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Logo-White.svg',
    docsUrl: '/docs/integrations/hubspot',
    category: 'crm',
    status: 'active',
    features: [
      'Contact and company sync',
      'Deal pipeline integration',
      'Marketing automation',
      'Analytics integration'
    ],
    certifications: ['Solutions Partner', 'App Partner']
  },
  {
    id: 'zoho',
    name: 'Zoho CRM',
    description: 'Comprehensive CRM integration',
    logo: 'https://www.zoho.com/branding/images/zoho-logo-white.svg',
    docsUrl: '/docs/integrations/zoho',
    category: 'crm',
    status: 'active',
    features: [
      'Lead and contact management',
      'Sales automation',
      'Custom module support',
      'Workflow automation'
    ],
    certifications: ['Zoho Partner', 'Developer Partner']
  }
];