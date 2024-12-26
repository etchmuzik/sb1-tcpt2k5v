import React from 'react';
import QuoteHeader from '../components/quote/QuoteHeader';
import QuoteForm from '../components/quote/QuoteForm';
import QuoteSidebar from '../components/quote/QuoteSidebar';
import AIAssistant from '../components/quote/AIAssistant';

export default function RequestQuote() {
  return (
    <div className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <AIAssistant />
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 text-sm text-zinc-500 bg-black">
                  or fill out the form below
                </span>
              </div>
            </div>
            <QuoteForm />
          </div>
          <div>
            <QuoteSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}