import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { menuData } from '../menu/menuData';

interface SolutionsDropdownProps {
  onClose: () => void;
}

export default function SolutionsDropdown({ onClose }: SolutionsDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div 
      ref={dropdownRef}
      className="absolute top-full left-0 mt-2 w-[600px] bg-black border border-zinc-800 
        rounded-xl shadow-xl p-6 grid grid-cols-2 gap-4"
    >
      {menuData.map((section) => (
        <div key={section.id} className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <section.icon className="h-4 w-4 text-[#00FF00]" />
            <h3 className="font-medium text-white">{section.title}</h3>
          </div>
          {section.items.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="block p-2 rounded-lg hover:bg-zinc-900 transition-colors"
              onClick={onClose}
            >
              <div className="flex items-center justify-between">
                <span className="text-white hover:text-[#00FF00] transition-colors">
                  {item.title}
                </span>
                {item.status && (
                  <span className={`px-2 py-0.5 text-xs rounded-full ${
                    item.status === 'active' ? 'bg-green-500' :
                    item.status === 'beta' ? 'bg-blue-500' : 'bg-yellow-500'
                  }`}>
                    {item.status}
                  </span>
                )}
              </div>
              <p className="text-sm text-zinc-500">{item.description}</p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}