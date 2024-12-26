import React from 'react';
import ServiceTiers from '../components/services/ServiceTiers';
import IntegrationsList from '../components/services/IntegrationsList';
import SecurityFeatures from '../components/services/SecurityFeatures';
import SuccessMetrics from '../components/services/SuccessMetrics';
import { IllustrationComposite } from '../components/illustrations/IllustrationComposite';
import SectionHeading from '../components/common/SectionHeading';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <h1 className="text-5xl font-bold text-white mb-6">
            Enterprise Automation Solutions
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Transform your business with AI-powered automation that drives efficiency,
            reduces costs, and delivers measurable results.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="mb-24">
          <SectionHeading
            title="Impact & Results"
            subtitle="Real metrics from real clients"
            theme="dark"
          />
          <SuccessMetrics />
        </div>

        {/* Service Tiers */}
        <div className="mb-24">
          <SectionHeading
            title="Service Tiers"
            subtitle="Choose the plan that fits your needs"
            theme="dark"
          />
          <ServiceTiers />
        </div>

        {/* Integrations */}
        <div className="mb-24">
          <SectionHeading
            title="Seamless Integrations"
            subtitle="Connect with your existing tools"
            theme="dark"
          />
          <IntegrationsList />
        </div>

        {/* Security */}
        <div className="mb-24">
          <SectionHeading
            title="Enterprise-Grade Security"
            subtitle="Your data is safe with us"
            theme="dark"
          />
          <SecurityFeatures />
        </div>

        {/* Illustration */}
        <div className="max-w-4xl mx-auto">
          <IllustrationComposite businessType="realestate" className="opacity-50" />
        </div>
      </div>
    </div>
  );
}