import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Twitter, Linkedin, Github } from 'lucide-react';
import Logo from '../brand/Logo';

const sections = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Case Studies', href: '/case-studies' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Help Center', href: '/help' },
      { label: 'API Status', href: '/api-status' },
      { label: 'Privacy Policy', href: '/privacy' }
    ]
  }
];

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/beyondtech_eg', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/beyondtech-eg', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/beyondtech-eg', label: 'GitHub' }
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            <Logo className="mb-6" />
            <p className="text-zinc-400 mb-6">
              Transform your business with AI-powered automation solutions.
            </p>
            <div className="space-y-3">
              <a href="tel:+971581232600" className="flex items-center text-zinc-400 hover:text-teal transition-colors">
                <Phone className="h-5 w-5 mr-3" />
                +971 58 123 2600
              </a>
              <a href="mailto:contact@beyondtech.ae" className="flex items-center text-zinc-400 hover:text-teal transition-colors">
                <Mail className="h-5 w-5 mr-3" />
                contact@beyondtech.ae
              </a>
            </div>
          </div>
          
          {/* Menu Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href}
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-zinc-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Beyond AI. All rights reserved.
            </p>
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
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}