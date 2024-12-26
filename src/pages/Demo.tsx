import React from 'react';
import { Calendar } from 'lucide-react';
import Button from '../components/common/Button';

export default function Demo() {
  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Book a Free Demo
          </h1>
          <p className="text-xl text-zinc-400">
            See how Beyond AI can transform your business with a personalized demo
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">What to expect:</h2>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-center gap-2">
                <span className="text-teal">•</span>
                Personalized walkthrough of our platform
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal">•</span>
                Live demonstration of AI capabilities
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal">•</span>
                Q&A session with our experts
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal">•</span>
                Custom pricing and implementation discussion
              </li>
            </ul>
          </div>

          <Button
            variant="minimal"
            icon={Calendar}
            className="w-full"
            onClick={() => window.open('https://calendly.com/beyondtech-eg/30min', '_blank')}
          >
            Schedule Your Demo
          </Button>
        </div>
      </div>
    </div>
  );
}