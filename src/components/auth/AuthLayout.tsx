import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../brand/Logo';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  linkText: string;
  linkHref: string;
}

export default function AuthLayout({ children, title, subtitle, linkText, linkHref }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      <div className="flex min-h-screen">
        {/* Left side - Content */}
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10 mx-auto w-full max-w-sm">
            <div className="mb-8">
              <Logo />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
            <p className="text-zinc-400 mb-8">{subtitle}</p>
            
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6">
              {children}
            </div>
            
            <p className="mt-6 text-center text-sm text-zinc-400">
              {linkText}{' '}
              <Link to={linkHref} className="text-teal hover:text-teal-hover transition-colors">
                Click here
              </Link>
            </p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden lg:block relative w-0 flex-1">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
              alt="Office workspace"
            />
          </div>
        </div>
      </div>
    </div>
  );
}