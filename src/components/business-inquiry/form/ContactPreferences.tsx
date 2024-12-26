import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

interface ContactPreferencesProps {
  contactMethod: 'email' | 'phone' | 'whatsapp';
  bestTimeToContact: string;
  onChange: (preferences: { contactMethod: 'email' | 'phone' | 'whatsapp'; bestTimeToContact: string }) => void;
}

export default function ContactPreferences({
  contactMethod,
  bestTimeToContact,
  onChange
}: ContactPreferencesProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-zinc-400 mb-4">
          Preferred Contact Method <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { value: 'email', label: 'Email', icon: Mail },
            { value: 'phone', label: 'Phone', icon: Phone },
            { value: 'whatsapp', label: 'WhatsApp', icon: MessageCircle }
          ].map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              type="button"
              onClick={() => onChange({ contactMethod: value as any, bestTimeToContact })}
              className={`flex items-center p-4 rounded-lg border ${
                contactMethod === value
                  ? 'border-teal bg-teal/10 text-white'
                  : 'border-zinc-800 text-zinc-400 hover:border-teal/50'
              } transition-colors`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-400 mb-2">
          Best Time to Contact <span className="text-red-500">*</span>
        </label>
        <select
          value={bestTimeToContact}
          onChange={(e) => onChange({ contactMethod, bestTimeToContact: e.target.value })}
          required
          className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 text-white
            focus:outline-none focus:border-teal transition-colors"
        >
          <option value="">Select preferred time</option>
          <option value="morning">Morning (9 AM - 12 PM)</option>
          <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
          <option value="evening">Evening (4 PM - 6 PM)</option>
        </select>
      </div>
    </div>
  );
}