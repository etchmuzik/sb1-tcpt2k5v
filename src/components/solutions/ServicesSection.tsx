import React from 'react';
import { Bot, Zap, Users, Shield, Puzzle, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI-Powered Calling',
    description: 'Intelligent conversation handling with natural language processing and context awareness.',
    features: [
      'Natural language understanding',
      'Context-aware responses',
      'Multi-language support',
      'Voice recognition'
    ]
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Streamline your operations with intelligent workflow automation and smart scheduling.',
    features: [
      'Workflow automation',
      'Smart scheduling',
      'Task management',
      'Process optimization'
    ]
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Enhanced team productivity with integrated communication and task management.',
    features: [
      'Real-time communication',
      'Task delegation',
      'Progress tracking',
      'Resource management'
    ]
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with advanced encryption and compliance features.',
    features: [
      'End-to-end encryption',
      'Access control',
      'Compliance management',
      'Security monitoring'
    ]
  },
  {
    icon: Puzzle,
    title: 'Custom Integration',
    description: 'Seamless integration with your existing tools and workflows.',
    features: [
      'API integration',
      'Custom workflows',
      'Data synchronization',
      'Third-party connectors'
    ]
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Comprehensive analytics and reporting for data-driven decisions.',
    features: [
      'Performance metrics',
      'Custom reports',
      'Data visualization',
      'Trend analysis'
    ]
  }
];

export default function ServicesSection() {
  return (
    <div className="bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-zinc-400">
            Comprehensive solutions for your business automation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="bg-black border border-zinc-800 rounded-xl p-8 hover:border-teal transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-teal/10 rounded-lg">
                    <Icon className="h-6 w-6 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-zinc-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-zinc-300">
                      <span className="mr-2 text-teal">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}