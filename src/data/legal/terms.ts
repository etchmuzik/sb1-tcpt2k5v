export interface LegalSection {
  id: string;
  title: string;
  content: string;
  subsections?: LegalSection[];
}

export const terms: LegalSection[] = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: 'By accessing and using Beyond AI services, you agree to be bound by these Terms of Service.'
  },
  {
    id: 'services',
    title: '2. Services',
    content: 'Beyond AI provides AI-powered communication and automation services.',
    subsections: [
      {
        id: 'availability',
        title: '2.1 Service Availability',
        content: 'While we strive for 99.9% uptime, we do not guarantee uninterrupted access to our services.'
      }
    ]
  }
];