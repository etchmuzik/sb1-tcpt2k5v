import React from 'react';
import IntegrationLogos from './IntegrationLogos';

export default function IntegrationsShowcase() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            We connect to all your apps
          </h2>
          <p className="text-xl text-zinc-400">
            Plus thousands more through APIs, custom code and web hooks.
          </p>
        </div>

        <IntegrationLogos />
      </div>
    </div>
  );
}