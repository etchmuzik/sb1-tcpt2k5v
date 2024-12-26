import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Home, Users, Phone, Info, LogIn, UserPlus, LogOut } from 'lucide-react';
import Button from '../common/Button';

export default function Sidebar() {
  const { user, signOut } = useAuth();

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white dark:bg-black border-r border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col h-full">
        <div className="p-6">
          <NavLink to="/" className="text-xl font-bold text-zinc-900 dark:text-white">
            Beyond AI
          </NavLink>
        </div>

        <nav className="flex-1 px-4">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-lg transition-colors ${
                    isActive ? 'bg-zinc-100 dark:bg-zinc-800/50 text-zinc-900 dark:text-white' : ''
                  }`
                }
              >
                <Home className="w-5 h-5 mr-3" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-lg transition-colors ${
                    isActive ? 'bg-zinc-100 dark:bg-zinc-800/50 text-zinc-900 dark:text-white' : ''
                  }`
                }
              >
                <Info className="w-5 h-5 mr-3" />
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-lg transition-colors ${
                    isActive ? 'bg-zinc-100 dark:bg-zinc-800/50 text-zinc-900 dark:text-white' : ''
                  }`
                }
              >
                <Phone className="w-5 h-5 mr-3" />
                Contact
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-lg transition-colors ${
                      isActive ? 'bg-zinc-100 dark:bg-zinc-800/50 text-zinc-900 dark:text-white' : ''
                    }`
                  }
                >
                  <Users className="w-5 h-5 mr-3" />
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </nav>

        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
          {user ? (
            <div className="space-y-4">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 px-4">
                Signed in as<br />
                <span className="text-zinc-900 dark:text-white">{user.email}</span>
              </p>
              <Button
                variant="outline"
                icon={LogOut}
                className="w-full"
                onClick={signOut}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              <NavLink to="/login">
                <Button variant="minimal" icon={LogIn} className="w-full">
                  Sign In
                </Button>
              </NavLink>
              <NavLink to="/signup">
                <Button variant="outline" icon={UserPlus} className="w-full">
                  Sign Up
                </Button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}