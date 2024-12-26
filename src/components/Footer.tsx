import React from 'react';
import { Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const sections = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Case Studies', 'Documentation'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Help Center', 'API Status', 'Terms of Service', 'Privacy Policy'],
  },
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
  { icon: Phone, href: '#', label: 'Phone' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">AI Calling Assistant</h3>
            <p className="text-zinc-400 mb-4">
              Your AI-powered cold calling assistant is here to help you close more deals effortlessly.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-zinc-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-400">
          <p>&copy; {new Date().getFullYear()} AI Calling Assistant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}