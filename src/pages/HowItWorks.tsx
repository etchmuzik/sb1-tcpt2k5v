import React from 'react';
import { Upload, PhoneCall, CalendarCheck, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

const steps = [
  {
    title: 'Upload Your Lead List',
    description: 'Simply import your contacts and let our AI handle the rest.',
    icon: Upload,
  },
  {
    title: 'AI Makes the Calls',
    description: 'Our assistant engages leads with natural conversations.',
    icon: PhoneCall,
  },
  {
    title: 'Automatic Scheduling',
    description: 'Meetings are booked and synced with your calendar.',
    icon: CalendarCheck,
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            How It Works
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Get started with Beyond AI in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-full transform -rotate-6" />
                    <div className="relative bg-white dark:bg-zinc-800 p-4 rounded-full">
                      <Icon className="h-8 w-8 text-blue-500" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 left-full w-full h-px bg-zinc-200 dark:bg-zinc-800 transform -translate-x-1/2" />
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-xl p-8 mb-24">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
            Detailed Process
          </h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
                  1. Upload Your Lead List
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Import your contacts through our intuitive interface or integrate directly with your CRM. Our system supports various file formats and automatically validates contact information.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015&ixlib=rb-4.0.3"
                  alt="Upload leads"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
                  2. AI Makes the Calls
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Our AI assistant handles calls with natural, context-aware conversations. It understands responses, handles objections, and maintains engaging dialogue while respecting your brand voice.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=2012&ixlib=rb-4.0.3"
                  alt="AI calling"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
                  3. Automatic Scheduling
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  When a lead shows interest, our AI seamlessly schedules meetings based on your availability. All appointments are automatically synced with your calendar and the lead receives instant confirmation.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src="https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?auto=format&fit=crop&q=80&w=2068&ixlib=rb-4.0.3"
                  alt="Calendar scheduling"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            Transform your sales process with Beyond AI today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button variant="minimal" icon={ArrowRight}>
                Start Free Trial
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}