import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '../../data/faq';

export default function FAQItem({ question, answer }: FAQ) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-zinc-900 hover:bg-zinc-800 transition-colors"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <ChevronDown className={`h-5 w-5 text-zinc-400 transition-transform ${
          isOpen ? 'rotate-180' : ''
        }`} />
      </button>
      
      {isOpen && (
        <div className="p-6 bg-black border-t border-zinc-800">
          <p className="text-zinc-400 whitespace-pre-wrap">{answer}</p>
        </div>
      )}
    </div>
  );
}