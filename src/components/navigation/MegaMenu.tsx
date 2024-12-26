import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../../data/navigation/menuItems';

interface MegaMenuProps {
  items: MenuItem[];
  onClose: () => void;
}

export default function MegaMenu({ items, onClose }: MegaMenuProps) {
  return (
    <div className="absolute top-full left-0 mt-2 w-screen max-w-screen-lg bg-black border border-zinc-800 rounded-xl shadow-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.label}>
            <Link
              to={item.href}
              className="block mb-4 group"
              onClick={onClose}
            >
              <div className="flex items-center gap-3">
                {item.icon && (
                  <item.icon className="h-5 w-5 text-teal" />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-teal">
                    {item.label}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-zinc-400">{item.description}</p>
                  )}
                </div>
                {item.badge && (
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    item.badge === 'new' ? 'bg-teal/10 text-teal' :
                    item.badge === 'beta' ? 'bg-blue-500/10 text-blue-500' :
                    'bg-zinc-500/10 text-zinc-500'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </div>
            </Link>
            
            {item.children && (
              <ul className="space-y-2">
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link
                      to={child.href}
                      className="text-zinc-400 hover:text-white transition-colors"
                      onClick={onClose}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}