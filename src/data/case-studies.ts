export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'real-estate-automation',
    title: 'Automating Property Inquiries',
    company: 'Dubai Properties',
    description: 'How a leading real estate company automated their lead response system',
    metrics: [
      { label: 'Response Time', value: '-85%' },
      { label: 'Lead Conversion', value: '+45%' }
    ],
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sales-transformation',
    title: 'Sales Team Transformation',
    company: 'TechCorp',
    description: 'Transforming sales operations with AI-powered automation',
    metrics: [
      { label: 'Sales Efficiency', value: '+120%' },
      { label: 'Cost Reduction', value: '60%' }
    ],
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800'
  }
];