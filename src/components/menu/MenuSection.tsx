import React from 'react';
import { ChevronDown, Circle } from 'lucide-react';
import MenuItem from './MenuItem';
import { MenuSectionData } from './types';

interface MenuSectionProps {
  section: MenuSectionData;
  isActive: boolean;
  onToggle: () => void;
  searchQuery: string;
}

export default function MenuSection({ 
  section, 
  isActive, 
  onToggle,
  searchQuery 
}: MenuSectionProps) {
  const filteredItems = section.items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (searchQuery && filteredItems.length === 0) return null;

  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-800 transition-colors"
      >
        <div className="flex items-center gap-3">
          <section.icon className="h-5 w-5 text-[#00FF00]" />
          <span className="font-medium text-white">{section.title}</span>
        </div>
        <ChevronDown className={`h-5 w-5 text-zinc-400 transition-transform ${
          isActive ? 'rotate-180' : ''
        }`} />
      </button>

      {isActive && (
        <div className="p-4 border-t border-zinc-800">
          <div className="space-y-2">
            {filteredItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}