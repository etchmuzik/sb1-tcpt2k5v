import { Integration } from './types';

export const storageIntegrations: Integration[] = [
  {
    id: 'google-drive',
    name: 'Google Drive',
    description: 'Cloud storage and collaboration',
    logo: 'https://www.google.com/drive/static/images/drive/logo-drive.png',
    docsUrl: '/docs/integrations/google-drive',
    category: 'storage',
    status: 'active',
    features: [
      'File storage',
      'Document collaboration',
      'Version control',
      'Access management'
    ],
    certifications: ['Google Cloud Partner']
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    description: 'Business file sharing and storage',
    logo: 'https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/dropbox-logo-white.svg',
    docsUrl: '/docs/integrations/dropbox',
    category: 'storage',
    status: 'active',
    features: [
      'Team folders',
      'File sharing',
      'Smart sync',
      'Paper integration'
    ],
    certifications: ['Dropbox Business Partner']
  }
];