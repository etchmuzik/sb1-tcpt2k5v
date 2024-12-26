import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../common/Button';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';

export default function Navigation() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="flex items-center space-x-8">
      {/* Main Navigation Links */}
      <Link to="/solutions" className="text-white hover:text-teal transition-colors">
        Solutions
      </Link>
      <Link to="/pricing" className="text-white hover:text-teal transition-colors">
        Pricing
      </Link>
      <Link to="/contact" className="text-white hover:text-teal transition-colors">
        Contact
      </Link>

      {/* Controls */}
      <div className="flex items-center space-x-4">
        <LanguageSelector />
        <ThemeToggle />
        
        {user ? (
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline"
              onClick={() => navigate('/dashboard')}
            >
              Dashboard
            </Button>
            <Button 
              variant="minimal"
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline"
              onClick={() => navigate('/demo')}
            >
              Book Demo
            </Button>
            <Button 
              variant="minimal"
              onClick={() => navigate('/login')}
            >
              Sign In
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}