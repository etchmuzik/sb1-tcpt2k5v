import React from 'react';
import { Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative group">
      <pre className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
        <code className={`language-${language}`}>
          {code.trim()}
        </code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-lg bg-zinc-800 opacity-0 
          group-hover:opacity-100 transition-opacity hover:bg-zinc-700"
      >
        <Copy className="h-4 w-4 text-zinc-400" />
      </button>
    </div>
  );
}