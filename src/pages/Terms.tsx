import React from 'react';
import { terms } from '../data/legal/terms';
import LegalSection from '../components/legal/LegalSection';

export default function Terms() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          {terms.map((section) => (
            <LegalSection key={section.id} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
}