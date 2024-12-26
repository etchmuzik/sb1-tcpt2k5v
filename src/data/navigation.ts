export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Solutions',
    href: '#',
    children: [
      { label: 'Features', href: '/features' },
      { label: 'Services', href: '/services' },
      { label: 'Integrations', href: '/integrations' }
    ]
  },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Resources',
    href: '#',
    children: [
      { label: 'Documentation', href: '/docs' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Blog', href: '/blog' },
      { label: 'Support', href: '/support' }
    ]
  },
  { label: 'Contact', href: '/contact' }
];