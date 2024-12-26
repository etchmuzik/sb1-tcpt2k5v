import React from 'react';
import { Search } from 'lucide-react';

interface FAQSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function FAQSearch({ value, onChange }: FAQSearchProps) {
  return (
    <div className="relative max-w-2xl mx-auto">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search questions..."
        className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-12 pr-4 py-3
          text-white placeholder-zinc-500 focus:border-teal focus:outline-none
          transition-colors"
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
    </div>
  );
}