import React from 'react';
import type { LegalSection as LegalSectionType } from '../../data/legal/terms';

interface LegalSectionProps extends LegalSectionType {}

export default function LegalSection({ title, content, subsections }: LegalSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      <p className="text-zinc-400 mb-6">{content}</p>
      
      {subsections && subsections.length > 0 && (
        <div className="pl-6 space-y-6">
          {subsections.map((subsection) => (
            <div key={subsection.id}>
              <h3 className="text-xl font-semibold text-white mb-3">
                {subsection.title}
              </h3>
              <p className="text-zinc-400">{subsection.content}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}