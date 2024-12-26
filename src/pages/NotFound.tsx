import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-zinc-800 dark:text-white mb-4">404</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/">
          <Button variant="minimal" icon={Home}>
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}