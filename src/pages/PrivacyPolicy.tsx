import React from 'react';
import SectionHeading from '../components/common/SectionHeading';

export default function PrivacyPolicy() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Privacy Policy" 
          subtitle="Last updated: March 2024"
          theme="dark"
        />
        
        <div className="prose prose-invert">
          <p className="text-zinc-400">
            BEYOND AI is committed to protecting your privacy. This Privacy Policy explains how we collect,
            use, and safeguard your personal information when you use our services.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Information We Collect</h2>
          <p className="text-zinc-400">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 text-zinc-400">
            <li>Contact information (name, email, phone number)</li>
            <li>Business information</li>
            <li>Call recordings (with your consent)</li>
            <li>Usage data and analytics</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
          <p className="text-zinc-400">
            If you have any questions about our Privacy Policy, please contact us at{' '}
            <a href="mailto:hesham@beyondmngmt.com" className="text-white hover:text-zinc-300">
              hesham@beyondmngmt.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}