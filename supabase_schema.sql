-- ==============================================================================
-- 1. TABLOLARI OLUŞTUR (TABLE DEFINITIONS)
-- ==============================================================================

-- Kategoriler Tablosu
create table if not exists categories (
  id text primary key,
  slug text not null unique,
  name jsonb not null, -- { "tr": "Kahveler", "en": "Specialty Coffee" }
  icon_name text not null,
  description jsonb,
  "order" integer default 1,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Ürünler Tablosu
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

-- Kafe Genel Ayarları & Wi-Fi Tablosu
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

-- Row Level Security (RLS) ve Herkese Açık Okuma İzni (Public Read Access)
alter table categories enable row level security;
alter table products enable row level security;
alter table cafe_config enable row level security;

create policy "Allow public read access on categories" on categories for select using (true);
create policy "Allow public read access on products" on products for select using (true);
create policy "Allow public read access on cafe_config" on cafe_config for select using (true);

-- ==============================================================================
-- 2. ÖRNEK MENÜ VERİLERİNİ YÜKLE (SEED DATA)
-- ==============================================================================

-- Kafe Genel Ayarları
insert into cafe_config (id, name, short_name, tagline, description, logo, cover_image, address, google_maps_url, phone, instagram, working_hours, wifi, features)
values (
  'default',
  'Roast & Bloom',
  'R&B',
  '{"tr": "Nitelikli Kahve & Butik Artisan Fırın", "en": "Specialty Coffee Roastery & Artisan Bakery"}',
  '{"tr": "Dünyanın dört bir yanından özenle seçilen mikro-lot kahve çekirdekleri ve günlük taş fırınımızda pişen taze lezzetler.", "en": "Carefully sourced micro-lot specialty coffees and freshly baked artisan delicacies crafted daily."}',
  '/images/logo.svg',
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
  '{"tr": "Bağdat Caddesi No: 284/A, Kadıköy, İstanbul", "en": "Bagdat Avenue No: 284/A, Kadikoy, Istanbul"}',
  'https://maps.google.com',
  '+90 216 450 88 90',
  'roastandbloomcafe',
  '{"tr": "Hafta içi & Hafta sonu: 08:00 - 23:00", "en": "Mon - Sun: 08:00 AM - 11:00 PM"}',
  '{"ssid": "RoastBloom_Guest", "password": "artisan_coffee", "securityType": "WPA", "helpNote": {"tr": "Misafir ağımız 100 Mbps fiber hızındadır.", "en": "Our guest network is powered by 100 Mbps fiber."}}',
  '[{"icon": "Coffee", "title": {"tr": "%100 Nitelikli Arabica", "en": "100% Specialty Arabica"}, "description": {"tr": "Etik kaynaklı, SCA 86+ puanlı taze kavrum çekirdekler.", "en": "Ethically sourced, SCA 86+ rated beans."}}]'
)
on conflict (id) do update set updated_at = now();

-- Kategoriler
insert into categories (id, slug, name, icon_name, description, "order")
values
  ('cat-coffee', 'kahveler', '{"tr": "Kahveler", "en": "Specialty Coffee"}', 'Coffee', '{"tr": "Espresso bazlı klasikler ve nitelikli demleme kahveler", "en": "Espresso classics and pour-over single-origin brews"}', 1),
  ('cat-cold-drinks', 'soguk-icecekler', '{"tr": "Soğuk İçecekler", "en": "Cold Drinks"}', 'GlassWater', '{"tr": "Buzlu kahveler, ferahlatıcı mocktailler ve soğuk demlemeler", "en": "Iced coffees, craft mocktails and signature cold brews"}', 2),
  ('cat-tea', 'caylar', '{"tr": "Çaylar", "en": "Artisan Teas"}', 'CupSoda', '{"tr": "Dünya çayları, bitki harmanları ve taze demlenmiş Türk çayı", "en": "Single-origin whole leaf teas and calming herbal infusions"}', 3),
  ('cat-breakfast', 'kahvalti', '{"tr": "Kahvaltı & Brunch", "en": "Breakfast & Brunch"}', 'UtensilsCrossed', '{"tr": "Ekşi mayalı tostlar, taze kaseler ve kruvasan sandviçler", "en": "Sourdough toasts, superfood bowls and stuffed croissants"}', 4),
  ('cat-desserts', 'tatlilar', '{"tr": "Tatlılar & Fırın", "en": "Bakery & Desserts"}', 'CakeSlice', '{"tr": "San Sebastian Cheesecake, tartlar ve artisan kurabiyeler", "en": "San Sebastian cheesecake, fruit tarts and artisan bakes"}', 5),
  ('cat-snacks', 'atistirmaliklar', '{"tr": "Atıştırmalıklar", "en": "Savory & Snacks"}', 'Sandwich', '{"tr": "Sıcak paniniler, paylaşımlık tabaklar ve gurme salatalar", "en": "Warm paninis, gourmet salads and artisanal finger foods"}', 6)
on conflict (id) do nothing;

-- Ürünler
insert into products (id, category_id, name, description, price, currency, image, tags, calories, prep_time, ingredients, allergens, is_available, featured, options)
values
  -- Cortado
  ('prod-cortado', 'cat-coffee', '{"tr": "Cortado", "en": "Cortado"}', '{"tr": "Eşit oranda çift shot ristretto ve ipeksi kadifemsi sıcak süt.", "en": "Equal parts double ristretto espresso and silky warm textured milk."}', 135, '₺', 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80', array['popular'], 95, '3-4', '{"tr": ["Çift Shot Espresso (Etiyopya Yirgacheffe)", "Taze Tam Yağlı Süt"], "en": ["Double Shot Espresso (Ethiopia Yirgacheffe)", "Fresh Whole Milk"]}', '{"tr": ["Süt ve Süt Ürünleri (Laktozsuz ve Yulaf sütü alternatifi mevcut)"], "en": ["Dairy (Lactose-free and Oat milk options available)"]}', true, true, '[{"title": {"tr": "Süt Tercihi", "en": "Milk Choice"}, "choices": [{"name": {"tr": "Standart Tam Yağlı", "en": "Whole Milk"}, "priceDiff": 0}, {"name": {"tr": "Yulaf Sütü (Oat Milk)", "en": "Oat Milk"}, "priceDiff": 20}, {"name": {"tr": "Badem Sütü", "en": "Almond Milk"}, "priceDiff": 25}]}]'),
  
  -- Spanish Latte
  ('prod-spanish-latte', 'cat-coffee', '{"tr": "Spanish Latte", "en": "Spanish Latte"}', '{"tr": "Yoğunlaştırılmış tatlı süt, çift shot espresso ve buharda ısıtılmış ipeksi süt köpüğü.", "en": "Sweetened condensed milk, double shot espresso, and steamed silky milk microfoam."}', 165, '₺', 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80', array['popular', 'chef_special'], 220, '4-5', '{"tr": ["Espresso", "Kondanse Süt", "Taze Süt", "Tarçın Tozu"], "en": ["Espresso", "Condensed Milk", "Fresh Milk", "Cinnamon Dust"]}', '{"tr": ["Süt ve Süt Ürünleri (Laktoz)"], "en": ["Dairy (Lactose)"]}', true, true, null),

  -- V60 Pourover
  ('prod-v60-pourover', 'cat-coffee', '{"tr": "V60 Chemex Nitelikli Demleme", "en": "V60 Single-Origin Hand Brew"}', '{"tr": "Hario V60 ile taze çekilmiş Kolombiya Huila çekirdeklerinden berrak, floral ve meyvemsi demleme.", "en": "Hand-poured Colombia Huila single-origin beans, clean cup with jasmine & citrus notes."}', 175, '₺', 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80', array['new'], 5, '5-6', '{"tr": ["Kolombiya Huila Nitelikli Kahve Çekirdeği", "Arıtılmış 93°C Sıcak Su"], "en": ["Colombia Huila Specialty Coffee Beans", "Filtered 93°C Water"]}', '{"tr": [], "en": []}', true, false, null),

  -- Cold Brew
  ('prod-cold-brew-reserve', 'cat-cold-drinks', '{"tr": "18 Saat Soğuk Demleme Cold Brew", "en": "18h Reserve Cold Brew"}', '{"tr": "18 saat boyunca soğuk suyla yavaşça demlenen, düşük asiditeli, çikolata ve fındık notalı soğuk kahve.", "en": "Slow cold-extracted for 18 hours. Ultra-smooth with rich notes of dark chocolate and roasted hazelnut."}', 155, '₺', 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80', array['popular'], 5, '2', '{"tr": ["Guatemala Antigua Çekirdeği", "Buz", "Portakal Kabuğu Dilimi"], "en": ["Guatemala Antigua Beans", "Clear Ice", "Orange Peel Garnish"]}', '{"tr": [], "en": []}', true, false, null),

  -- Matcha Latte
  ('prod-iced-matcha-latte', 'cat-cold-drinks', '{"tr": "Iced Ceremonial Matcha Latte", "en": "Iced Ceremonial Matcha Latte"}', '{"tr": "Japonya Uji bölgesi birinci kalite seremoniyel yeşil çay tozu, vanilya esansı ve soğuk yulaf sütü.", "en": "Grade-A ceremonial Uji matcha whisked with Madagascar vanilla and chilled oat milk over ice."}', 185, '₺', 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80', array['popular', 'vegetarian', 'vegan'], 140, '4', '{"tr": ["Japon Seremoniyel Matcha", "Yulaf Sütü", "Organik Agave / Vanilya"], "en": ["Japanese Ceremonial Matcha", "Oat Milk", "Organic Agave / Vanilla"]}', '{"tr": ["Yulaf (Gluten hassasiyeti uyarısı)"], "en": ["Oat (Trace gluten warning)"]}', true, false, null),

  -- Avocado Sourdough
  ('prod-avocado-sourdough', 'cat-breakfast', '{"tr": "Ekşi Mayalı Avokado & Poşe Yumurta", "en": "Avocado Sourdough & Poached Egg"}', '{"tr": "Kızarmış artisan ekşi mayalı ekmek, ezilmiş misket limonlu avokado, organik poşe yumurta, taze kişniş ve çörek otu.", "en": "Toasted artisan sourdough, zesty lime-smashed avocado, organic poached egg, chili flakes and microgreens."}', 265, '₺', 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80', array['popular', 'vegetarian'], 420, '8-10', '{"tr": ["Doğal Ekşi Mayalı Ekmek", "Olgun Avokado", "Organik Köy Yumurtası"], "en": ["Stoneground Sourdough", "Hass Avocado", "Organic Farm Egg"]}', '{"tr": ["Gluten (Ekmek)", "Yumurta"], "en": ["Gluten (Wheat)", "Eggs"]}', true, true, null),

  -- San Sebastian
  ('prod-san-sebastian', 'cat-desserts', '{"tr": "Belçika Çikolatalı San Sebastian", "en": "San Sebastian Cheesecake with Belgian Chocolate"}', '{"tr": "İçi akışkan ve ipeksi kıvamda pişmiş orijinal Bask cheesecake, yanında ılık %70 Callebaut eritme çikolata sosu ile.", "en": "Authentic creamy Basque burnt cheesecake served with warm 70% Callebaut dark chocolate pour."}', 210, '₺', 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80', array['popular', 'chef_special'], 480, '3', '{"tr": ["Taze Krem Peynir", "Krema", "Organik Yumurta", "Callebaut Belçika Çikolatası"], "en": ["Cream Cheese", "Heavy Cream", "Organic Eggs", "Callebaut Belgian Chocolate"]}', '{"tr": ["Süt ve Süt Ürünleri", "Yumurta"], "en": ["Dairy", "Eggs"]}', true, true, null)
on conflict (id) do nothing;
