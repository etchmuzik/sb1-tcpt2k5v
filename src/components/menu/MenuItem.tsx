import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuItemProps {
  icon?: LucideIcon;
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export default function MenuItem({
  icon: Icon,
  label,
  href,
  onClick,
  active = false
}: MenuItemProps) {
  const baseStyles = `
    flex items-center
    w-full px-4 py-3
    text-[#333333]
    transition-all duration-200
    hover:bg-[#F5F5F5] hover:text-[#47bda4]
    ${active ? 'bg-white text-[#47bda4] border-l-[3px] border-[#47bda4]' : ''}
  `;

  const content = (
    <>
      {Icon && <Icon className={`h-5 w-5 ${label ? 'mr-2' : ''} ${active ? 'text-[#47bda4]' : ''}`} />}
      {label}
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {content}
    </button>
  );
}