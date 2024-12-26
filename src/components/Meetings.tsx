import React from 'react';
import { CalendlyEmbed } from './meetings/CalendlyEmbed';
import SectionHeading from './common/SectionHeading';

export default function Meetings() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Schedule a Meeting" 
          subtitle="Book a free consultation to learn how we can help your business"
          theme="dark"
        />
        <div className="max-w-3xl mx-auto">
          <CalendlyEmbed />
        </div>
      </div>
    </div>
  );
}