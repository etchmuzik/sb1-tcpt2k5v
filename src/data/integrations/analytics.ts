import { Integration } from './types';

export const analyticsIntegrations: Integration[] = [
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    description: 'Advanced web analytics and user behavior tracking',
    logo: 'https://www.google.com/analytics/static/images/analytics-logo.png',
    docsUrl: '/docs/integrations/google-analytics',
    category: 'analytics',
    status: 'active',
    certifications: ['Google Analytics Certified']
  },
  {
    id: 'mixpanel',
    name: 'Mixpanel',
    description: 'Product analytics and user insights platform',
    logo: 'https://mixpanel.com/wp-content/themes/mp/images/mixpanel-logo-white.svg',
    docsUrl: '/docs/integrations/mixpanel',
    category: 'analytics',
    status: 'active',
    certifications: ['Mixpanel Technology Partner']
  },
  {
    id: 'segment',
    name: 'Segment',
    description: 'Customer data platform and analytics integration',
    logo: 'https://segment.com/static/images/segment-logo-white.svg',
    docsUrl: '/docs/integrations/segment',
    category: 'analytics',
    status: 'active',
    certifications: ['Segment Certified Partner']
  }
];