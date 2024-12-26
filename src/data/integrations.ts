import { Database, MessageSquare, Calendar, Users, CreditCard, HardDrive } from 'lucide-react';

export const integrationCategories = [
  {
    id: 'crm',
    title: 'CRM Platforms',
    description: 'Keep your sales pipeline updated with two-way syncing for real-time lead tracking.',
    platforms: ['Salesforce', 'HubSpot', 'Zoho', 'Pipedrive', 'Microsoft Dynamics'],
    features: [
      'Real-time lead syncing',
      'Activity tracking and updates',
      'Automatic data mapping'
    ],
    icon: Database
  },
  {
    id: 'marketing',
    title: 'Marketing Platforms',
    description: 'Enhance your campaigns by combining Beyond AI with email and marketing tools.',
    platforms: ['Mailchimp', 'ActiveCampaign', 'Marketo', 'Klaviyo'],
    features: [
      'Automated follow-ups triggered by AI data',
      'Centralized marketing and lead management',
      'Multi-channel outreach'
    ],
    icon: MessageSquare
  },
  {
    id: 'calendar',
    title: 'Calendar Tools',
    description: 'Ensure you never miss an appointment with AI-powered scheduling.',
    platforms: ['Google Calendar', 'Outlook', 'Apple Calendar', 'Calendly'],
    features: [
      'Timezone detection and conflict avoidance',
      'Automated reminders and notifications',
      'Centralized scheduling'
    ],
    icon: Calendar
  },
  {
    id: 'collaboration',
    title: 'Collaboration Tools',
    description: 'Keep your team aligned and informed with real-time notifications and updates.',
    platforms: ['Slack', 'Microsoft Teams', 'Trello', 'Asana'],
    features: [
      'Automatic updates for lead activities',
      'Team notifications for meetings and calls',
      'Shared insights and reports'
    ],
    icon: Users
  },
  {
    id: 'payment',
    title: 'Payment Platforms',
    description: 'Simplify billing and payment tracking with built-in payment integrations.',
    platforms: ['Stripe', 'PayPal', 'Razorpay'],
    features: [
      'Automatic invoicing post-deal closure',
      'Payment reminders for overdue invoices',
      'One-click payment options for clients'
    ],
    icon: CreditCard
  },
  {
    id: 'storage',
    title: 'Cloud Storage',
    description: 'Store and manage your data with secure, encrypted cloud solutions.',
    platforms: ['Google Drive', 'Dropbox', 'OneDrive', 'Box'],
    features: [
      'Secure call recording storage',
      'Share reports and insights with your team',
      'Automatic backup of key documents'
    ],
    icon: HardDrive
  }
];