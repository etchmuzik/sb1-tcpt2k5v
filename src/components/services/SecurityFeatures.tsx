import React from 'react';
import { Shield, Lock, FileText, Activity } from 'lucide-react';

const securityFeatures = [
  {
    title: 'Data Encryption',
    description: 'AES-256 encryption for data at rest and in transit',
    icon: Shield
  },
  {
    title: 'Access Control',
    description: 'Role-based access control with MFA support',
    icon: Lock
  },
  {
    title: 'Compliance',
    description: 'GDPR, CCPA, and UAE data protection compliance',
    icon: FileText
  },
  {
    title: 'Audit Logging',
    description: 'Comprehensive audit trails and activity monitoring',
    icon: Activity
  }
];

export default function SecurityFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {securityFeatures.map((feature) => {
        const Icon = feature.icon;
        return (
          <div key={feature.title} className="flex items-start gap-4 p-6 bg-black rounded-xl border border-zinc-800">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Icon className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}