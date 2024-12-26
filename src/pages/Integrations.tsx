import React from 'react';
import IntegrationsHero from '../components/integrations/IntegrationsHero';
import IntegrationCategories from '../components/integrations/IntegrationCategories';
import IntegrationsCTA from '../components/integrations/IntegrationsCTA';

export default function Integrations() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <IntegrationsHero />
        <IntegrationCategories />
        <IntegrationsCTA />
      </div>
    </div>
  );
}