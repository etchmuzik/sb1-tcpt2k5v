import React from 'react';

interface DocSectionProps {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function DocSection({ id, title, content }: DocSectionProps) {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <div className="prose prose-invert max-w-none">
        {content}
      </div>
    </section>
  );
}