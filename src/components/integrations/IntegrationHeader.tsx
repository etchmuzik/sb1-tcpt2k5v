import React from 'react';

export default function IntegrationHeader() {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-white mb-4">
        Seamless Integrations
      </h1>
      <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
        Connect Beyond AI with your favorite tools and automate your workflow. From CRMs to marketing platforms, 
        we've got you covered.
      </p>
      <div className="mt-8 inline-flex items-center text-[#47bda4]">
        <span className="h-2 w-2 bg-[#47bda4] rounded-full mr-2"></span>
        <span>All integrations are verified and tested regularly</span>
      </div>
    </div>
  );
}