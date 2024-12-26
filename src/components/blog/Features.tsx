import React from 'react';
import { Brain, Settings, Scale } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Brain,
    title: "Trained on the best",
    description: "Simulates top salesmen by asking questions, overcoming objections, and building confidence in purchase decisions."
  },
  {
    icon: Settings,
    title: "Fully Customizable",
    description: "Automatic lead qualification, follow-ups, and integrations with SMS, CRMs, and analytics - tailored to your process."
  },
  {
    icon: Scale,
    title: "Infinite Scalability",
    description: "One AI Salesman equals 50+ human salespeople, with no scaling limits and consistent personalized communication."
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            AI Salesman Capabilities
          </h2>
          <p className="text-xl text-zinc-400">
            Powerful features to transform your sales process
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}