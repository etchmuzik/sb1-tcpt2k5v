import React, { useState } from 'react';
import { Search } from 'lucide-react';
import MenuSection from './MenuSection';
import { menuData } from './menuData';
import SearchBar from './SearchBar';

export default function MegaMenu() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
          className="mb-8"
        />

        {/* Menu Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.map((section) => (
            <MenuSection
              key={section.id}
              section={section}
              isActive={activeSection === section.id}
              onToggle={() => setActiveSection(activeSection === section.id ? null : section.id)}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      </div>
    </div>
  );
}