import { Integration } from './types';

export const calendarIntegrations: Integration[] = [
  {
    id: 'google-calendar',
    name: 'Google Calendar',
    description: 'Seamless calendar integration and scheduling',
    logo: 'https://www.gstatic.com/calendar/images/calendar_logo_white.svg',
    docsUrl: '/docs/integrations/google-calendar',
    category: 'calendar',
    status: 'active',
    features: [
      'Automated event creation',
      'Real-time availability sync',
      'Meeting reminders',
      'Multi-calendar support'
    ],
    certifications: ['Google Workspace Partner']
  },
  {
    id: 'outlook',
    name: 'Microsoft Outlook',
    description: 'Enterprise calendar management',
    logo: 'https://www.microsoft.com/en-us/microsoft-365/outlook/outlook-logo.svg',
    docsUrl: '/docs/integrations/outlook',
    category: 'calendar',
    status: 'active',
    features: [
      'Exchange server integration',
      'Meeting scheduling',
      'Resource booking',
      'Teams integration'
    ],
    certifications: ['Microsoft Partner']
  }
];