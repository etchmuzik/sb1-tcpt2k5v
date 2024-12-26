import React from 'react';

interface DocLayoutProps {
  children: React.ReactNode;
}

export default function DocLayout({ children }: DocLayoutProps) {
  return (
    <div className="flex gap-8">
      {children}
    </div>
  );
}