import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-teal transition-colors"
          aria-label={social.label}
        >
          <social.icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}