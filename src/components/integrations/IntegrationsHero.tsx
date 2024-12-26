import React from 'react';
import SectionHeading from '../common/SectionHeading';

export default function IntegrationsHero() {
  return (
    <div className="text-center mb-16">
      <SectionHeading
        title="Seamless Integrations for Maximum Efficiency"
        subtitle="Connect Beyond AI with your favorite tools and automate your workflow"
        theme="dark"
      />
      <p className="text-zinc-400 max-w-3xl mx-auto">
        Beyond AI integrates effortlessly with the tools you already use, allowing you to automate 
        workflows and centralize your data. From CRMs to marketing platforms, calendars to 
        collaboration tools, we've got you covered.
      </p>
    </div>
  );
}