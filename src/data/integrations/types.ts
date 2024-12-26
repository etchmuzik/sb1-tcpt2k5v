export interface Integration {
  id: string;
  name: string;
  description: string;
  logo: string;
  docsUrl: string;
  category: IntegrationCategory;
  status: 'active' | 'beta' | 'coming-soon';
  certifications?: string[];
}

export type IntegrationCategory = 
  | 'crm'
  | 'calendar'
  | 'marketing'
  | 'payment'
  | 'collaboration'
  | 'storage'
  | 'social'
  | 'voice'
  | 'analytics'
  | 'security'
  | 'support'
  | 'ecommerce';