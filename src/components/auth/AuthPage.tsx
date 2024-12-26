import React, { useState } from 'react';
import AuthForm from './AuthForm';
import SocialAuth from './SocialAuth';
import { Link } from '../layout/Link';

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            {mode === 'login' ? 'Welcome back' : 'Create an account'}
          </h2>
          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={() => setMode('login')}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                mode === 'login'
                  ? 'bg-white text-black'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                mode === 'signup'
                  ? 'bg-white text-black'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-zinc-800">
          <AuthForm mode={mode} />
          <div className="mt-6">
            <SocialAuth />
          </div>
        </div>
      </div>
    </div>
  );
}