import { Integration } from './types';

export const securityIntegrations: Integration[] = [
  {
    id: 'auth0',
    name: 'Auth0',
    description: 'Enterprise identity and access management',
    logo: 'https://cdn.auth0.com/website/bob/press/logo-light.svg',
    docsUrl: '/docs/integrations/auth0',
    category: 'security',
    status: 'active',
    certifications: ['Auth0 Advanced Partner']
  },
  {
    id: 'okta',
    name: 'Okta',
    description: 'Identity and authentication platform',
    logo: 'https://www.okta.com/sites/default/files/Okta_Logo_White.svg',
    docsUrl: '/docs/integrations/okta',
    category: 'security',
    status: 'active',
    certifications: ['Okta Integration Network Partner']
  },
  {
    id: 'azure-ad',
    name: 'Azure Active Directory',
    description: 'Microsoft enterprise identity service',
    logo: 'https://azure.microsoft.com/images/azure-ad-logo.svg',
    docsUrl: '/docs/integrations/azure-ad',
    category: 'security',
    status: 'active',
    certifications: ['Microsoft Identity Partner']
  }
];