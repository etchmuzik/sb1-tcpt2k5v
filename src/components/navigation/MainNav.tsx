import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { mainMenuItems, ctaButtons } from '../../data/navigation/menuItems';
import Button from '../common/Button';
import MegaMenu from './MegaMenu';

export default function MainNav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="flex items-center space-x-8">
      {/* Main Menu Items */}
      <div className="flex items-center space-x-6">
        {mainMenuItems.map((item) => (
          <div key={item.label} className="relative group">
            <button
              onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)}
              className="flex items-center space-x-1 px-4 py-2 text-white hover:text-teal transition-colors"
            >
              <span>{item.label}</span>
              {item.children && (
                <ChevronDown className={`h-4 w-4 transition-transform ${
                  activeMenu === item.label ? 'rotate-180' : ''
                }`} />
              )}
            </button>
            
            {/* Mega Menu */}
            {activeMenu === item.label && item.children && (
              <MegaMenu items={item.children} onClose={() => setActiveMenu(null)} />
            )}
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center space-x-4">
        {ctaButtons.map((button) => (
          <Link key={button.label} to={button.href}>
            <Button
              variant={button.variant as any}
              icon={button.icon}
            >
              {button.label}
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );
}