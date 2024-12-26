import React from 'react';
import { Shield, Lock, FileText } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'Enterprise-grade encryption for all your data',
    details: [
      'End-to-end encryption',
      'Regular security audits',
      'Data backup and recovery',
      'Access control'
    ]
  },
  {
    icon: Lock,
    title: 'Access Control',
    description: 'Advanced authentication and authorization',
    details: [
      'Multi-factor authentication',
      'Role-based access control',
      'Session management',
      'IP whitelisting'
    ]
  },
  {
    icon: FileText,
    title: 'Compliance',
    description: 'Industry standard compliance and certifications',
    details: [
      'GDPR compliance',
      'ISO 27001 certified',
      'SOC 2 Type II',
      'Regular compliance audits'
    ]
  }
];

export default function Security() {
  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Security & Compliance</h1>
          <p className="text-xl text-zinc-400">
            Enterprise-grade security to protect your data and privacy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-teal/10 rounded-lg">
                    <Icon className="h-6 w-6 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-zinc-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-center text-zinc-300">
                      <span className="mr-2 text-teal">•</span>
                      {detail}
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