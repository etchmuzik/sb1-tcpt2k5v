import { Integration, IntegrationCategory } from './types';
import { categories } from './categories';
import { crmIntegrations } from './crm';
import { calendarIntegrations } from './calendar';
import { voiceIntegrations } from './voice';
import { paymentIntegrations } from './payment';
import { storageIntegrations } from './storage';
import { collaborationIntegrations } from './collaboration';
import { marketingIntegrations } from './marketing';
import { analyticsIntegrations } from './analytics';
import { ecommerceIntegrations } from './ecommerce';

// Combine all integrations
const allIntegrations: Integration[] = [
  ...crmIntegrations,
  ...calendarIntegrations,
  ...voiceIntegrations,
  ...paymentIntegrations,
  ...storageIntegrations,
  ...collaborationIntegrations,
  ...marketingIntegrations,
  ...analyticsIntegrations,
  ...ecommerceIntegrations
];

// Helper functions
export function getIntegrationsByCategory(category: IntegrationCategory): Integration[] {
  return allIntegrations.filter(integration => integration.category === category);
}

export function getActiveIntegrations(): Integration[] {
  return allIntegrations.filter(integration => integration.status === 'active');
}

export function getIntegrationById(id: string): Integration | undefined {
  return allIntegrations.find(integration => integration.id === id);
}

export {
  type Integration,
  type IntegrationCategory,
  categories,
  allIntegrations
};