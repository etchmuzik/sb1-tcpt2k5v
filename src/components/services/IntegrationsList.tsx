import React from 'react';
import { Database, MessageSquare, CreditCard, Calendar } from 'lucide-react';

const integrations = [
  {
    category: 'CRM Platforms',
    items: ['Salesforce', 'HubSpot', 'Zoho CRM', 'Microsoft Dynamics'],
    icon: Database
  },
  {
    category: 'Communication',
    items: ['Twilio', 'SendGrid', 'Slack', 'Microsoft Teams'],
    icon: MessageSquare
  },
  {
    category: 'Payment Processing',
    items: ['Stripe', 'PayPal', 'Square', 'Network International'],
    icon: CreditCard
  },
  {
    category: 'Scheduling',
    items: ['Calendly', 'Microsoft Bookings', 'Google Calendar', 'Acuity'],
    icon: Calendar
  }
];

export default function IntegrationsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {integrations.map((category) => {
        const Icon = category.icon;
        return (
          <div key={category.category} className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <Icon className="h-6 w-6 text-emerald-500" />
              <h3 className="text-lg font-semibold text-white">{category.category}</h3>
            </div>
            <ul className="grid grid-cols-2 gap-3">
              {category.items.map((item) => (
                <li key={item} className="text-zinc-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}