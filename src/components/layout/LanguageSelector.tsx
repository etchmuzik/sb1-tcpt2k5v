import React, { useState } from 'react';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية' }
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);
    // In a real app, you would update the app's language context/state here
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zinc-800/10 
          dark:hover:bg-white/10 transition-colors"
      >
        <Globe className="h-5 w-5 text-white" />
        <span className="text-sm text-white">{currentLang.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-black 
          border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-lg overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="w-full px-4 py-2 text-left text-sm hover:bg-zinc-100 
                dark:hover:bg-zinc-800 transition-colors"
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}