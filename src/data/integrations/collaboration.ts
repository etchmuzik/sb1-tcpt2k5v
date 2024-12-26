import { Integration } from './types';

export const collaborationIntegrations: Integration[] = [
  {
    id: 'slack',
    name: 'Slack',
    description: 'Team communication platform',
    logo: 'https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png',
    docsUrl: '/docs/integrations/slack',
    category: 'collaboration',
    status: 'active',
    features: [
      'Channel notifications',
      'Command integration',
      'File sharing',
      'Workflow automation'
    ],
    certifications: ['Slack App Directory Partner']
  },
  {
    id: 'teams',
    name: 'Microsoft Teams',
    description: 'Enterprise collaboration solution',
    logo: 'https://www.microsoft.com/en-us/microsoft-teams/teams-for-work',
    docsUrl: '/docs/integrations/teams',
    category: 'collaboration',
    status: 'active',
    features: [
      'Chat integration',
      'Meeting scheduling',
      'File collaboration',
      'App integration'
    ],
    certifications: ['Microsoft Teams Partner']
  }
];