interface MenuItemData {
  id: string;
  title: string;
  description: string;
  href: string;
  status?: 'active' | 'beta' | 'coming';
  price?: string;
}

interface MenuSectionData {
  id: string;
  title: string;
  icon: LucideIcon;
  items: MenuItemData[];
}

export type { MenuItemData, MenuSectionData };