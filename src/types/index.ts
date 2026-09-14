export type Language = 'tr' | 'en';

export type ProductTag = 'popular' | 'new' | 'vegetarian' | 'vegan' | 'gluten_free' | 'chef_special';

export interface LocalizedString {
  tr: string;
  en: string;
}

export interface LocalizedStringArray {
  tr: string[];
  en: string[];
}

export interface ProductOptionChoice {
  name: LocalizedString;
  priceDiff?: number;
}

export interface ProductOption {
  title: LocalizedString;
  required?: boolean;
  choices: ProductOptionChoice[];
}

export interface Product {
  id: string;
  categoryId: string;
  name: LocalizedString;
  description: LocalizedString;
  price: number;
  currency: string;
  image: string;
  tags?: ProductTag[];
  calories?: number;
  prepTime?: string;
  ingredients?: LocalizedStringArray;
  allergens?: LocalizedStringArray;
  isAvailable: boolean;
  options?: ProductOption[];
  featured?: boolean;
}

export interface Category {
  id: string;
  slug: string;
  name: LocalizedString;
  iconName: string;
  description?: LocalizedString;
  order: number;
  section?: 'food' | 'drinks';
  image?: string;
}

export interface WifiConfig {
  ssid: string;
  password: string;
  securityType: 'WPA' | 'WEP' | 'nopass';
  isHidden?: boolean;
  helpNote?: LocalizedString;
}

export interface CafeConfig {
  name: string;
  shortName: string;
  tagline: LocalizedString;
  description: LocalizedString;
  logo: string;
  coverImage: string;
  address: LocalizedString;
  googleMapsUrl?: string;
  phone: string;
  instagram: string;
  workingHours: LocalizedString;
  wifi: WifiConfig;
  features: {
    icon: string;
    title: LocalizedString;
    description: LocalizedString;
  }[];
}
