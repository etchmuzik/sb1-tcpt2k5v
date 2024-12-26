import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';
import CoreFeature from '../components/solutions/CoreFeature';
import ServicesSection from '../components/solutions/ServicesSection';
import { coreFeatures } from '../data/solutions/coreFeatures';
import PricingSection from '../components/solutions/PricingSection';

export default function Solutions() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-blue-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI-Powered Solutions for Modern Business
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
              Transform your operations with cutting-edge AI automation that drives efficiency,
              reduces costs, and delivers measurable results.
            </p>
            <Button 
              variant="minimal" 
              icon={ArrowRight}
              onClick={() => window.location.href = '/request-quote'}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Core Features
          </h2>
          <p className="text-xl text-zinc-400">
            Everything you need to automate and scale your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreFeatures.map((feature) => (
            <CoreFeature key={feature.title} {...feature} />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Pricing Section */}
      <div className="bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
            <p className="text-xl text-zinc-400">Choose the plan that fits your needs</p>
          </div>
          <PricingSection />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-t from-zinc-900 to-black border-t border-zinc-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zinc-400 mb-8">
            Get started with our AI solutions today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="minimal" 
              icon={ArrowRight}
              onClick={() => window.location.href = '/request-quote'}
            >
              Request Quote
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}