import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ to, children, className = '' }: NavLinkProps) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) => `
        px-4 py-2 rounded-lg text-white
        ${isActive ? 'text-[#2ECC71]' : 'hover:text-[#2ECC71]'}
        transition-colors duration-300
        ${className}
      `}
    >
      {children}
    </RouterNavLink>
  );
}