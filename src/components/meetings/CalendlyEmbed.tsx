import React from 'react';

interface CalendlyEmbedProps {
  className?: string;
}

export function CalendlyEmbed({ className = '' }: CalendlyEmbedProps) {
  return (
    <div className={`min-h-[630px] ${className}`}>
      <iframe
        src="https://calendly.com/beyondtech-eg/30min"
        width="100%"
        height="100%"
        className="border-0 min-h-[630px]"
      />
    </div>
  );
}