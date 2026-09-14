import { supabase, isSupabaseConfigured } from './supabase';
import { CAFE_CONFIG, CATEGORIES, PRODUCTS } from '@/data/cafeData';
import { CafeConfig, Category, Product } from '@/types';

function mapDbCategory(row: any): Category {
  return {
    id: row.id,
    slug: row.slug || row.id,
    name: row.name,
    iconName: row.iconName || row.icon_name || 'Coffee',
    description: row.description,
    order: row.order || 1,
    section: row.section,
    image: row.image
  };
}

function mapDbProduct(row: any): Product {
  return {
    id: row.id,
    categoryId: row.categoryId || row.category_id,
    name: row.name,
    description: row.description,
    price: Number(row.price),
    currency: row.currency || '₺',
    image: row.image,
    tags: row.tags || [],
    calories: row.calories,
    prepTime: row.prepTime || row.prep_time,
    ingredients: row.ingredients,
    allergens: row.allergens,
    isAvailable: row.isAvailable ?? row.is_available ?? true,
    options: row.options,
    featured: row.featured ?? false
  };
}

export async function getCafeConfig(): Promise<CafeConfig> {
  if (!isSupabaseConfigured || !supabase) {
    return CAFE_CONFIG;
  }

  try {
    const { data, error } = await supabase
      .from('cafe_config')
      .select('*')
      .single();

    if (error || !data) {
      console.warn('Falling back to local cafe config:', error);
      return CAFE_CONFIG;
    }

    return {
      name: data.name || CAFE_CONFIG.name,
      shortName: data.short_name || data.shortName || CAFE_CONFIG.shortName,
      tagline: data.tagline || CAFE_CONFIG.tagline,
      description: data.description || CAFE_CONFIG.description,
      logo: data.logo || CAFE_CONFIG.logo,
      coverImage: data.cover_image || data.coverImage || CAFE_CONFIG.coverImage,
      address: data.address || CAFE_CONFIG.address,
      googleMapsUrl: data.google_maps_url || data.googleMapsUrl,
      phone: data.phone || CAFE_CONFIG.phone,
      instagram: data.instagram || CAFE_CONFIG.instagram,
      workingHours: data.working_hours || data.workingHours || CAFE_CONFIG.workingHours,
      wifi: data.wifi || CAFE_CONFIG.wifi,
      features: data.features || CAFE_CONFIG.features
    };
  } catch (err) {
    console.error('Error fetching cafe config from Supabase:', err);
    return CAFE_CONFIG;
  }
}

export async function getCategories(): Promise<Category[]> {
  if (!isSupabaseConfigured || !supabase) {
    return CATEGORIES.sort((a, b) => a.order - b.order);
  }

  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('order', { ascending: true });

    if (error || !data || data.length === 0) {
      return CATEGORIES.sort((a, b) => a.order - b.order);
    }

    return data.map(mapDbCategory).sort((a, b) => a.order - b.order);
  } catch (err) {
    console.error('Error fetching categories from Supabase:', err);
    return CATEGORIES;
  }
}

export async function getProducts(): Promise<Product[]> {
  if (!isSupabaseConfigured || !supabase) {
    return PRODUCTS;
  }

  try {
    const { data, error } = await supabase
      .from('products')
      .select('*');

    if (error || !data || data.length === 0) {
      return PRODUCTS;
    }

    return data.map(mapDbProduct);
  } catch (err) {
    console.error('Error fetching products from Supabase:', err);
    return PRODUCTS;
  }
}
