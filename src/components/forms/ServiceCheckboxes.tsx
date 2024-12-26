import React from 'react';
import { Check } from 'lucide-react';

const services = [
  'AI Calling Solutions',
  'Custom AI Development',
  'Integration Services',
  'Consulting & Strategy',
  'Training & Support',
  'Enterprise Solutions'
];

interface ServiceCheckboxesProps {
  selected: string[];
  onChange: (services: string[]) => void;
}

export default function ServiceCheckboxes({ selected, onChange }: ServiceCheckboxesProps) {
  const toggleService = (service: string) => {
    const newServices = selected.includes(service)
      ? selected.filter(s => s !== service)
      : [...selected, service];
    onChange(newServices);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-zinc-400 mb-4">
        Services Needed <span className="text-red-500">*</span>
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <button
            key={service}
            type="button"
            onClick={() => toggleService(service)}
            className={`flex items-center p-4 rounded-lg border ${
              selected.includes(service)
                ? 'border-teal bg-teal/10 text-white'
                : 'border-zinc-800 text-zinc-400 hover:border-teal/50'
            } transition-colors text-left`}
          >
            <div className={`w-5 h-5 rounded border mr-3 flex items-center justify-center ${
              selected.includes(service) ? 'border-teal bg-teal' : 'border-zinc-600'
            }`}>
              {selected.includes(service) && <Check className="h-3 w-3 text-black" />}
            </div>
            {service}
          </button>
        ))}
      </div>
    </div>
  );
}