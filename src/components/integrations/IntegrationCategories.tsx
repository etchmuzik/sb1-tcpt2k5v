import React from 'react';
import IntegrationCard from './IntegrationCard';
import { integrationCategories } from '../../data/integrations';

export default function IntegrationCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {integrationCategories.map((category) => (
        <IntegrationCard
          key={category.id}
          title={category.title}
          description={category.description}
          platforms={category.platforms}
          features={category.features}
          icon={category.icon}
        />
      ))}
    </div>
  );
}