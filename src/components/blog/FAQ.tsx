import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does AI Salesman work?',
    answer: 'AI Salesman uses advanced natural language processing to engage with leads, understand their needs, and guide them through the sales process naturally and effectively.'
  },
  {
    question: 'What integrations are supported?',
    answer: 'We support integrations with major CRM systems, calendar apps, and communication platforms including Salesforce, HubSpot, Google Calendar, and more.'
  },
  {
    question: 'Is it available 24/7?',
    answer: 'Yes, AI Salesman works around the clock, ensuring no lead goes unattended regardless of time zone or business hours.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-zinc-400">
            Everything you need to know about AI Salesman
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown className={`h-5 w-5 text-zinc-400 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`} />
              </button>
              {openIndex === index && (
                <div className="p-6 bg-black border-t border-zinc-800">
                  <p className="text-zinc-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}