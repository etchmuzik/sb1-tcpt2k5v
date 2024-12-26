import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { mainMenuItems, ctaButtons } from '../../data/navigation/menuItems';
import Button from '../common/Button';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white md:hidden"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black">
          <div className="h-full overflow-auto py-20 px-4">
            {mainMenuItems.map((item) => (
              <div key={item.label} className="mb-6">
                <button
                  onClick={() => setActiveSection(activeSection === item.label ? null : item.label)}
                  className="flex items-center justify-between w-full py-2 text-white"
                >
                  <span className="text-lg font-semibold">{item.label}</span>
                  {item.children && (
                    <ChevronDown className={`h-5 w-5 transition-transform ${
                      activeSection === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>

                {activeSection === item.label && item.children && (
                  <div className="mt-2 ml-4 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block py-2 text-zinc-400 hover:text-white"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="space-y-4 mt-8">
              {ctaButtons.map((button) => (
                <Link key={button.label} to={button.href} className="block">
                  <Button
                    variant={button.variant as any}
                    icon={button.icon}
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    {button.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}