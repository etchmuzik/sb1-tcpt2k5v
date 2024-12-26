export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number | null;
  yearlyPrice: number | null;
  currency: string;
  features: string[];
  priceId: string;
}

export interface PricingFeature {
  name: string;
  description: string;
  starter: boolean;
  professional: boolean;
  enterprise: boolean;
}