import React from 'react';
import { Bot, Zap, Users, Shield, Puzzle, BarChart3 } from 'lucide-react';
import Button from '../components/common/Button';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Calling',
    description: 'Natural conversations powered by advanced AI that understands context and handles objections.',
    benefits: ['24/7 Availability', 'Natural Language Processing', 'Multi-language Support']
  },
  {
    icon: Zap,
    title: 'Smart Automation',
    description: 'Automate repetitive tasks and streamline your workflow with intelligent automation.',
    benefits: ['Workflow Automation', 'Task Scheduling', 'Custom Triggers']
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Built for teams with robust collaboration features and role-based access control.',
    benefits: ['Role Management', 'Activity Tracking', 'Team Analytics']
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption and compliance features.',
    benefits: ['End-to-end Encryption', 'GDPR Compliance', 'Access Controls']
  },
  {
    icon: Puzzle,
    title: 'Seamless Integration',
    description: 'Connect with your favorite tools through our extensive integration ecosystem.',
    benefits: ['CRM Integration', 'API Access', 'Custom Webhooks']
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Gain insights with comprehensive analytics and customizable reporting.',
    benefits: ['Real-time Metrics', 'Custom Reports', 'Performance Insights']
  }
];

export default function Features() {
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
              Powerful Features for Modern Business
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
              Everything you need to automate your operations and scale your business with AI-powered solutions.
            </p>
            <Button 
              variant="minimal"
              onClick={() => window.location.href = '/request-quote'}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-teal transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-teal/10 rounded-lg">
                    <Icon className="h-6 w-6 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-zinc-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-zinc-300">
                      <span className="mr-2 text-teal">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
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