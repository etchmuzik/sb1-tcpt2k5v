import React from 'react';
import { ChevronDown } from 'lucide-react';
import NavLink from './NavLink';
import { NavItem } from '../../data/navigation';

interface DropdownMenuProps {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
}

export default function DropdownMenu({ item, isOpen, onToggle }: DropdownMenuProps) {
  return (
    <div className="relative group">
      <button
        onClick={onToggle}
        className="flex items-center space-x-1 px-4 py-2 rounded-lg text-white hover:text-[#2ECC71] transition-colors duration-300"
      >
        <span>{item.label}</span>
        <ChevronDown className="h-4 w-4 ml-1" />
      </button>
      
      {isOpen && item.children && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-zinc-800 rounded-lg shadow-xl py-2">
          {item.children.map((child) => (
            <NavLink
              key={child.href}
              to={child.href}
              className="block w-full text-left px-4 py-2"
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}