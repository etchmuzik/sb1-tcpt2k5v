import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Button from '../components/common/Button';
import SocialLoginSection from '../components/auth/social/SocialLoginSection';

export default function FreeTrial() {
  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... existing header section ... */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* ... existing features section ... */}

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Get Started</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white 
                    focus:outline-none focus:border-teal transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-zinc-400 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white 
                    focus:outline-none focus:border-teal transition-colors"
                  required
                />
              </div>

              <Button
                type="submit"
                variant="minimal"
                icon={ArrowRight}
                className="w-full"
              >
                Start Free Trial
              </Button>

              <SocialLoginSection />

              <p className="text-sm text-zinc-400 text-center">
                By signing up, you agree to our{' '}
                <a href="/terms" className="text-teal hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="/privacy" className="text-teal hover:underline">Privacy Policy</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}