import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative max-w-2xl mx-auto">
      <input
        type="search"
        placeholder="Search documentation..."
        className="w-full bg-black text-white rounded-lg pl-12 pr-4 py-3
          border border-zinc-800 focus:border-[#00FF00] outline-none"
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
    </div>
  );
}