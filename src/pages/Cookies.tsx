import React from 'react';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
        <div className="prose prose-invert">
          <p className="text-zinc-400">
            This Cookie Policy explains how Beyond AI uses cookies and similar technologies
            to recognize you when you visit our website and applications.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">What are cookies?</h2>
          <p className="text-zinc-400">
            Cookies are small data files that are placed on your computer or mobile device when
            you visit a website. They are widely used by website owners to make their websites
            work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How we use cookies</h2>
          <p className="text-zinc-400">
            We use cookies for several purposes:
          </p>
          <ul className="list-disc pl-6 text-zinc-400">
            <li>Essential cookies: Required for the website to function properly</li>
            <li>Analytics cookies: Help us understand how visitors interact with our website</li>
            <li>Marketing cookies: Used to track visitors across websites</li>
            <li>Preference cookies: Remember your settings and preferences</li>
          </ul>
        </div>
      </div>
    </div>
  );
}