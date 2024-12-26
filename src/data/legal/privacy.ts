import { LegalSection } from './terms';

export const privacy: LegalSection[] = [
  {
    id: 'collection',
    title: '1. Information Collection',
    content: 'We collect information that you provide directly to us, including contact information, usage data, and communication records.',
    subsections: [
      {
        id: 'personal-data',
        title: '1.1 Personal Data',
        content: 'This includes your name, email address, phone number, and other contact information.'
      },
      {
        id: 'usage-data',
        title: '1.2 Usage Data',
        content: 'We collect data about how you use our services, including call recordings, analytics, and performance metrics.'
      }
    ]
  },
  {
    id: 'use',
    title: '2. Use of Information',
    content: 'We use collected information to provide and improve our services, communicate with you, and ensure security.'
  },
  {
    id: 'sharing',
    title: '3. Information Sharing',
    content: 'We do not sell your personal information. We may share data with service providers who assist in our operations.'
  },
  {
    id: 'security',
    title: '4. Data Security',
    content: 'We implement appropriate technical and organizational measures to protect your information.'
  }
];