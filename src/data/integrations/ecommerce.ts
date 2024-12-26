import { Integration } from './types';

export const ecommerceIntegrations: Integration[] = [
  {
    id: 'shopify',
    name: 'Shopify',
    description: 'Complete e-commerce platform integration',
    logo: 'https://cdn.shopify.com/assets/images/logos/shopify-bag.png',
    docsUrl: '/docs/integrations/shopify',
    category: 'ecommerce',
    status: 'active',
    certifications: ['Shopify Plus Partner']
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    description: 'WordPress e-commerce integration',
    logo: 'https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce-white.svg',
    docsUrl: '/docs/integrations/woocommerce',
    category: 'ecommerce',
    status: 'active',
    certifications: ['WooExpert Partner']
  },
  {
    id: 'magento',
    name: 'Adobe Commerce (Magento)',
    description: 'Enterprise e-commerce platform integration',
    logo: 'https://business.adobe.com/content/dam/dx/us/en/products/magento-commerce/magento-commerce-white.svg',
    docsUrl: '/docs/integrations/magento',
    category: 'ecommerce',
    status: 'active',
    certifications: ['Adobe Solution Partner']
  }
];