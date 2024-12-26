import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DocBreadcrumbs() {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-4">
      <Link to="/" className="text-zinc-400 hover:text-white transition-colors">
        Home
      </Link>
      <ChevronRight className="h-4 w-4 text-zinc-600" />
      <span className="text-zinc-200">Documentation</span>
    </nav>
  );
}