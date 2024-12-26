import React from 'react';

export default function TableOfContents() {
  return (
    <nav className="sticky top-24 w-64 pr-8">
      <h4 className="text-sm font-semibold text-zinc-400 uppercase mb-4">
        On this page
      </h4>
      <ul className="space-y-3 text-sm">
        <li>
          <a href="#getting-started" className="nav-hover text-zinc-400">
            Getting Started
          </a>
        </li>
        <li>
          <a href="#installation" className="nav-hover text-zinc-400">
            Installation
          </a>
        </li>
        <li>
          <a href="#configuration" className="nav-hover text-zinc-400">
            Configuration
          </a>
        </li>
        {/* Add more sections as needed */}
      </ul>
    </nav>
  );
}