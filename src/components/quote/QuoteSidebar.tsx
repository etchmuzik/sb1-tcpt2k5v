import React from 'react';
import { Shield, Clock, CheckCircle } from 'lucide-react';

export default function QuoteSidebar() {
  return (
    <div className="space-y-8">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="h-5 w-5 text-teal" />
          <h3 className="text-lg font-semibold text-white">Quick Response</h3>
        </div>
        <p className="text-zinc-400">
          We typically respond within 24 hours during business days.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="h-5 w-5 text-teal" />
          <h3 className="text-lg font-semibold text-white">Privacy Guaranteed</h3>
        </div>
        <p className="text-zinc-400">
          Your information is protected by enterprise-grade security and will never be shared.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="h-5 w-5 text-teal" />
          <h3 className="text-lg font-semibold text-white">What to Expect</h3>
        </div>
        <ul className="space-y-3 text-zinc-400">
          <li className="flex items-center gap-2">
            <span className="text-teal">•</span>
            Detailed project assessment
          </li>
          <li className="flex items-center gap-2">
            <span className="text-teal">•</span>
            Custom solution proposal
          </li>
          <li className="flex items-center gap-2">
            <span className="text-teal">•</span>
            Transparent pricing breakdown
          </li>
          <li className="flex items-center gap-2">
            <span className="text-teal">•</span>
            Implementation timeline
          </li>
        </ul>
      </div>
    </div>
  );
}