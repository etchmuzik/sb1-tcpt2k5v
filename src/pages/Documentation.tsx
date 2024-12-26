import React from 'react';
import DocLayout from '../components/docs/DocLayout';
import DocContent from '../components/docs/DocContent';
import SearchBar from '../components/docs/SearchBar';
import TableOfContents from '../components/docs/TableOfContents';
import DocBreadcrumbs from '../components/docs/DocBreadcrumbs';

export default function Documentation() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <DocBreadcrumbs />
          <h1 className="text-4xl font-bold text-white mb-4">Documentation</h1>
          <SearchBar />
        </div>

        <DocLayout>
          <TableOfContents />
          <DocContent />
        </DocLayout>
      </div>
    </div>
  );
}