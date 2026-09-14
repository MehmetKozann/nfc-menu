-- Supabase Database Schema for NFC Cafe Menu

-- 1. Categories Table
create table if not exists categories (
  id text primary key,
  slug text not null unique,
  name jsonb not null, -- { "tr": "Kahveler", "en": "Coffee" }
  icon_name text not null,
  description jsonb,
  "order" integer default 1,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Products Table
create table if not exists products (
  id text primary key,
  category_id text references categories(id) on delete cascade,
  name jsonb not null, -- { "tr": "Cortado", "en": "Cortado" }
  description jsonb not null,
  price numeric not null,
  currency text default '₺',
  image text not null,
  tags text[],
  calories integer,
  prep_time text,
  ingredients jsonb, -- { "tr": ["..."], "en": ["..."] }
  allergens jsonb, -- { "tr": ["..."], "en": ["..."] }
  is_available boolean default true,
  options jsonb,
  featured boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Cafe Configuration Table
create table if not exists cafe_config (
  id text primary key default 'default',
  name text not null,
  short_name text not null,
  tagline jsonb not null,
  description jsonb not null,
  logo text,
  cover_image text,
  address jsonb not null,
  google_maps_url text,
  phone text,
  instagram text,
  working_hours jsonb not null,
  wifi jsonb not null,
  features jsonb,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS) and Public Read Access
alter table categories enable row level security;
alter table products enable row level security;
alter table cafe_config enable row level security;

create policy "Allow public read access on categories" on categories for select using (true);
create policy "Allow public read access on products" on products for select using (true);
create policy "Allow public read access on cafe_config" on cafe_config for select using (true);
