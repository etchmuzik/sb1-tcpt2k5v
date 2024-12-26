import React from 'react';
import { Map, Cog, Wrench } from 'lucide-react';

const workflowSteps = [
  {
    icon: Map,
    title: 'Map out',
    description: 'We understand your systems and recommend solutions to help cut costs and scale revenue.'
  },
  {
    icon: Wrench,
    title: 'Integrate',
    description: 'We implement our solutions - custom coding, AI, Zapier, outsourced workflows.'
  },
  {
    icon: Cog,
    title: 'Manage',
    description: 'Our partners enjoy a defined step-by-step journey towards complete business automation.'
  }
];

export default function AgencyWorkflow() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            How our AI and Automation Agency Works
          </h2>
          <p className="text-xl text-zinc-400">
            We work like your Chief AI Officer - we provide you with a hands-free solution to upgrade your business in sync with AI trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center">
                {/* Step number */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-zinc-800/50">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-teal-light rounded-full transform -rotate-6"></div>
                    <div className="relative p-4 rounded-full">
                      <Icon className="h-8 w-8 text-teal" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-zinc-400">{step.description}</p>

                {/* Connector line */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-px bg-zinc-800 transform -translate-y-1/2 -translate-x-1/2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}