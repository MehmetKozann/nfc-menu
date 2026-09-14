import { supabase, isSupabaseConfigured } from './supabase';
import { CAFE_CONFIG, CATEGORIES, PRODUCTS } from '@/data/cafeData';
import { CafeConfig, Category, Product } from '@/types';

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
      console.warn('Falling back to local cafe config due to Supabase query error:', error);
      return CAFE_CONFIG;
    }

    return data as CafeConfig;
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

    return data as Category[];
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

    return data as Product[];
  } catch (err) {
    console.error('Error fetching products from Supabase:', err);
    return PRODUCTS;
  }
}
