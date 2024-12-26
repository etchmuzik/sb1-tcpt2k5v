import React from 'react';
import { Integration } from '../../data/integrations/types';
import IntegrationCard from './IntegrationCard';

interface IntegrationGridProps {
  integrations: Integration[];
  category?: string;
}

export default function IntegrationGrid({ integrations, category }: IntegrationGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {integrations.map((integration) => (
        <IntegrationCard
          key={integration.id}
          integration={integration}
        />
      ))}
    </div>
  );
}