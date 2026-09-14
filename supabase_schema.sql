-- ==============================================================================
-- 1. TABLOLARI OLUŞTUR (TABLE DEFINITIONS)
-- ==============================================================================

create table if not exists categories (
  id text primary key,
  slug text not null unique,
  name jsonb not null,
  icon_name text not null,
  description jsonb,
  "order" integer default 1,
  section text default 'food',
  image text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists products (
  id text primary key,
  category_id text references categories(id) on delete cascade,
  name jsonb not null,
  description jsonb not null,
  price numeric not null,
  currency text default '₺',
  image text not null,
  tags text[],
  calories integer,
  prep_time text,
  ingredients jsonb,
  allergens jsonb,
  is_available boolean default true,
  options jsonb,
  featured boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

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

-- RLS Güvenlik İzinleri (Tekrar Çalıştırılabilir)
alter table categories enable row level security;
alter table products enable row level security;
alter table cafe_config enable row level security;

drop policy if exists "Allow public read access on categories" on categories;
create policy "Allow public read access on categories" on categories for select using (true);

drop policy if exists "Allow public read access on products" on products;
create policy "Allow public read access on products" on products for select using (true);

drop policy if exists "Allow public read access on cafe_config" on cafe_config;
create policy "Allow public read access on cafe_config" on cafe_config for select using (true);

-- ==============================================================================
-- 2. KAFE BİLGİLERİ (CAFE CONFIG)
-- ==============================================================================

insert into cafe_config (id, name, short_name, tagline, description, logo, cover_image, address, google_maps_url, phone, instagram, working_hours, wifi, features)
values (
  'default',
  'Roast & Bloom',
  'R&B',
  '{"tr": "Mutfak & Nitelikli Kahve & Butik Fırın", "en": "Artisan Kitchen, Specialty Coffee & Bakery"}',
  '{"tr": "Usta şeflerimizden gurme ana yemekler, taş fırından taze lezzetler ve dünyanın en seçkin mikro-lot kahveleri.", "en": "Gourmet mains crafted by our chefs, stone-baked artisan bakery, and single-origin specialty coffees."}',
  '/images/logo.svg',
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
  '{"tr": "Bağdat Caddesi No: 284/A, Kadıköy, İstanbul", "en": "Bagdat Avenue No: 284/A, Kadikoy, Istanbul"}',
  'https://maps.google.com',
  '+90 216 450 88 90',
  'roastandbloomcafe',
  '{"tr": "Hafta içi & Hafta sonu: 08:00 - 23:30", "en": "Mon - Sun: 08:00 AM - 11:30 PM"}',
  '{"ssid": "RoastBloom_Guest", "password": "artisan_coffee", "securityType": "WPA", "helpNote": {"tr": "Misafir ağımız 100 Mbps fiber hızındadır.", "en": "Our guest network is powered by 100 Mbps fiber."}}',
  '[{"icon": "Utensils", "title": {"tr": "Gurme Şef Mutfağı", "en": "Gourmet Chef Kitchen"}, "description": {"tr": "Taze malzemelerle hazırlanan ana yemekler, burgerler ve makarnalar.", "en": "Freshly prepared artisan mains, burgers, and hand-rolled pasta."}}]'
)
on conflict (id) do update set 
  name = excluded.name, 
  tagline = excluded.tagline, 
  description = excluded.description, 
  working_hours = excluded.working_hours, 
  updated_at = now();

-- ==============================================================================
-- 3. KATEGORİLER (CATEGORIES)
-- ==============================================================================

insert into categories (id, slug, name, icon_name, description, "order", section, image)
values
  ('cat-mains', 'ana-yemekler', '{"tr": "Ana Yemekler & Izgaralar", "en": "Main Courses & Steaks"}', 'UtensilsCrossed', '{"tr": "Şefimizin özel reçeteleriyle hazırlanan et, tavuk ve somon tabakları", "en": "Chef signature grilled meats, salmon, and gourmet platters"}', 1, 'food', 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'),
  ('cat-burgers', 'burger-sandvic', '{"tr": "Burgerler & Sandviçler", "en": "Burgers & Sandwiches"}', 'Sandwich', '{"tr": "Brioche ekmeğinde smash burgerler ve çıtır tavuk seçenekleri", "en": "Brioche smash burgers and crispy buttermilk chicken sandwiches"}', 2, 'food', 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'),
  ('cat-pastas', 'makarna-bowllar', '{"tr": "Makarnalar & Salatalar", "en": "Pastas & Bowls"}', 'UtensilsCrossed', '{"tr": "Taze soslu İtalyan makarnaları ve renkli besleyici kinoa bowlları", "en": "Artisan Italian pastas and fresh nutritious superfood bowls"}', 3, 'food', 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80'),
  ('cat-breakfast', 'kahvalti', '{"tr": "Kahvaltı & Brunch", "en": "Breakfast & Brunch"}', 'UtensilsCrossed', '{"tr": "Ekşi mayalı tostlar, poşe yumurtalar ve zengin kruvasanlar", "en": "Sourdough toasts, organic poached eggs, and stuffed croissants"}', 4, 'food', 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80'),
  ('cat-desserts', 'tatlilar', '{"tr": "Tatlılar & Butik Fırın", "en": "Bakery & Desserts"}', 'CakeSlice', '{"tr": "San Sebastian Cheesecake, fıstıklı tartlar ve taze kruvasanlar", "en": "San Sebastian cheesecake, pistachio pastries, and fresh bakes"}', 5, 'food', 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80'),
  ('cat-coffee', 'kahveler', '{"tr": "Sıcak Kahveler & Çaylar", "en": "Specialty Coffee & Tea"}', 'Coffee', '{"tr": "Espresso klasikleri, cortado, latte ve nitelikli V60 demlemeler", "en": "Espresso classics, flat white, cortado, and single-origin V60 brews"}', 6, 'drinks', 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80'),
  ('cat-cold-drinks', 'soguk-icecekler', '{"tr": "Soğuk İçecekler & Mocktail", "en": "Cold Drinks & Mocktails"}', 'GlassWater', '{"tr": "18 saat soğuk demlenmiş Cold Brew, ev yapımı limonatalar ve matcha", "en": "18h cold brews, handcrafted berry lemonades, and matcha lattes"}', 7, 'drinks', 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80')
on conflict (id) do update set 
  name = excluded.name, 
  description = excluded.description, 
  "order" = excluded."order",
  section = excluded.section,
  image = excluded.image;

-- ==============================================================================
-- 4. ÜRÜNLER (PRODUCTS)
-- ==============================================================================

insert into products (id, category_id, name, description, price, currency, image, tags, calories, prep_time, ingredients, allergens, is_available, featured)
values
  -- Ana Yemekler
  ('prod-truffle-ribeye-steak', 'cat-mains', '{"tr": "Trüflü Cafe de Paris Antrikot", "en": "Truffle Cafe de Paris Ribeye"}', '{"tr": "220g ızgara dana antrikot, özel Cafe de Paris tereyağı sosu, trüflü çıtır patates kızartması ve taze roka salatası ile.", "en": "220g grilled dry-aged ribeye steak, house Cafe de Paris butter sauce, truffle shoestring fries and wild arugula."}', 495, '₺', 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', array['popular', 'chef_special'], 780, '15-18', '{"tr": ["220g Dana Antrikot", "Cafe de Paris Sos", "Taze Baharatlar", "Kızarmış Patates", "Parmesan"], "en": ["220g Beef Ribeye", "Cafe de Paris Butter", "Fresh Herbs", "Crispy Fries", "Aged Parmesan"]}', '{"tr": ["Süt ve Süt Ürünleri (Tereyağı/Krema)", "Hardal"], "en": ["Dairy (Butter/Cream)", "Mustard"]}', true, true),

  ('prod-grilled-salmon-plate', 'cat-mains', '{"tr": "Fırınlanmış Norveç Somon & Kuşkonmaz", "en": "Glazed Norwegian Salmon & Asparagus"}', '{"tr": "Misket limonlu tereyağında mühürlenmiş taze somon fileto, kremalı patates püresi, ızgara bebek kuşkonmaz ve kapari sosu.", "en": "Pan-seared Norwegian salmon fillet, silky potato mousseline, grilled baby asparagus, and lemon caper drizzle."}', 465, '₺', 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80', array['popular', 'gluten_free'], 620, '14-16', '{"tr": ["Taze Norveç Somonu", "Bebek Kuşkonmaz", "Patates Püresi", "Kapari"], "en": ["Fresh Norwegian Salmon", "Baby Asparagus", "Potato Mousseline", "Capers"]}', '{"tr": ["Balık", "Süt Ürünleri"], "en": ["Fish", "Dairy"]}', true, true),

  ('prod-crispy-parmesan-schnitzel', 'cat-mains', '{"tr": "Viyana Usulü Çıtır Tavuk Şinitzel", "en": "Crispy Viennese Chicken Schnitzel"}', '{"tr": "Altın sarısı panko kaplı yumuşak tavuk göğsü, ılık hardallı patates salatası, ızgara limon ve yaban mersini sosu.", "en": "Golden panko-crusted chicken breast, warm German mustard potato salad, grilled lemon and lingonberry jam."}', 365, '₺', 'https://images.unsplash.com/photo-1599921841143-819025383852?auto=format&fit=crop&w=800&q=80', array['popular'], 710, '12-14', '{"tr": ["Taze Tavuk Göğsü", "Panko Ekmek Kırıntısı", "Organik Yumurta"], "en": ["Tender Chicken Breast", "Japanese Panko", "Organic Eggs"]}', '{"tr": ["Gluten", "Yumurta", "Hardal"], "en": ["Gluten", "Eggs", "Mustard"]}', true, false),

  -- Burgerler & Sandviçler
  ('prod-truffle-smash-burger', 'cat-burgers', '{"tr": "Truffle Smash Çift Köfteli Burger", "en": "Double Truffle Smash Burger"}', '{"tr": "Taş fırın brioche ekmeğinde çift smash dana köftesi (180g), erimiş İngiliz çedarı, karamelize soğan, trüf mayonez ve patates kızartması.", "en": "Double dry-aged beef patties (180g) smashed crispy on brioche, melted cheddar, caramelized onions, truffle aioli and fries."}', 345, '₺', 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80', array['popular', 'chef_special'], 850, '10-12', '{"tr": ["180g Dana Kıyması", "Tereyağlı Brioche", "İngiliz Çedar", "Trüf Mayonez"], "en": ["180g Aged Beef", "Brioche Bun", "Melted Cheddar", "Truffle Aioli"]}', '{"tr": ["Gluten", "Süt ve Süt Ürünleri", "Yumurta"], "en": ["Gluten", "Dairy", "Eggs"]}', true, true),

  ('prod-crispy-chicken-burger', 'cat-burgers', '{"tr": "Crispy Buttermilk Tavuk Burger", "en": "Crispy Buttermilk Chicken Burger"}', '{"tr": "24 saat marine edilmiş çıtır tavuk fileto, lahana coleslaw, acı-tatlı chipotle mayonez, salatalık turşusu ve patates cipsi.", "en": "24h buttermilk-marinated fried chicken thigh, crunchy purple coleslaw, smoky chipotle mayo, house pickles and fries."}', 320, '₺', 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80', array['new'], 780, '10-12', '{"tr": ["Buttermilk Tavuk Fileto", "Brioche Ekmek", "Coleslaw Salata"], "en": ["Buttermilk Fried Chicken", "Brioche Bun", "Purple Slaw"]}', '{"tr": ["Gluten", "Süt Ürünleri", "Yumurta"], "en": ["Gluten", "Dairy", "Eggs"]}', true, false),

  -- Makarnalar & Kaseler
  ('prod-truffle-fettuccine', 'cat-pastas', '{"tr": "Trüf Kremalı & Mantarlı Fettuccine", "en": "Truffle & Wild Mushroom Fettuccine"}', '{"tr": "El yapımı taze yumurtalı fettuccine makarna, porçini ve kestane mantarları, taze trüf yağı, krema ve 24 aylık Parmigiano Reggiano.", "en": "Handmade egg fettuccine tossed with porcini & chestnut mushrooms, white truffle oil, light cream and aged Parmigiano Reggiano."}', 335, '₺', 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80', array['popular', 'vegetarian', 'chef_special'], 610, '10-12', '{"tr": ["Taze Fettuccine Hamuru", "Porçini Mantarı", "Trüf Kreması", "Parmigiano Reggiano"], "en": ["Fresh Fettuccine", "Wild Porcini", "Truffle Cream", "Parmigiano Reggiano"]}', '{"tr": ["Gluten", "Süt Ürünleri", "Yumurta"], "en": ["Gluten", "Dairy", "Eggs"]}', true, true),

  ('prod-halloumi-quinoa-bowl', 'cat-pastas', '{"tr": "Izgara Hellimli Renkli Kinoa Kasesi", "en": "Grilled Halloumi & Tricolor Quinoa Bowl"}', '{"tr": "Kızarmış Kıbrıs hellimi, organik renkli kinoa, bebek roka, avokado dilimleri, kurutulmuş domates, kavrulmuş ceviz ve nar ekşili zeytinyağı.", "en": "Pan-seared Cyprus halloumi, tricolor quinoa, baby arugula, Hass avocado, sun-dried tomatoes, roasted walnuts, pomegranate vinaigrette."}', 285, '₺', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80', array['vegetarian', 'gluten_free'], 430, '7-8', '{"tr": ["Kıbrıs Hellim Peyniri", "Renkli Kinoa", "Bebek Roka", "Avokado", "Ceviz"], "en": ["Cyprus Halloumi", "Tricolor Quinoa", "Baby Arugula", "Avocado", "Walnuts"]}', '{"tr": ["Süt Ürünleri", "Ceviz"], "en": ["Dairy", "Walnuts"]}', true, false),

  -- Kahvaltılıklar
  ('prod-avocado-sourdough', 'cat-breakfast', '{"tr": "Ekşi Mayalı Avokado & Poşe Yumurta", "en": "Avocado Sourdough & Poached Egg"}', '{"tr": "Kızarmış artisan ekşi mayalı ekmek, ezilmiş misket limonlu avokado, organik poşe yumurta, taze kişniş ve çörek otu.", "en": "Toasted artisan sourdough, zesty lime-smashed avocado, organic poached egg, chili flakes and microgreens."}', 265, '₺', 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80', array['popular', 'vegetarian'], 420, '8-10', '{"tr": ["Doğal Ekşi Mayalı Ekmek", "Olgun Avokado", "Organik Köy Yumurtası"], "en": ["Stoneground Sourdough", "Hass Avocado", "Organic Farm Egg"]}', '{"tr": ["Gluten", "Yumurta"], "en": ["Gluten", "Eggs"]}', true, true),

  ('prod-truffle-croissant', 'cat-breakfast', '{"tr": "Trüflü Çırpılmış Yumurtalı Kruvasan", "en": "Truffle Scrambled Egg Croissant"}', '{"tr": "Tereyağlı çıtır fırın kruvasanı içinde krema kıvamında trüf yağlı çırpılmış yumurta ve taze frenk soğanı.", "en": "Crispy all-butter bakery croissant filled with creamy truffle scrambled eggs and garden chives."}', 285, '₺', 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80', array['popular', 'chef_special'], 540, '8-10', '{"tr": ["Fransız Tereyağlı Kruvasan", "Köy Yumurtası", "Doğal Trüf Yağı"], "en": ["French Butter Croissant", "Farm Eggs", "White Truffle Oil"]}', '{"tr": ["Gluten", "Süt Ürünleri", "Yumurta"], "en": ["Gluten", "Dairy", "Eggs"]}', true, false),

  -- Kahveler
  ('prod-cortado', 'cat-coffee', '{"tr": "Cortado", "en": "Cortado"}', '{"tr": "Eşit oranda çift shot ristretto ve ipeksi kadifemsi sıcak süt.", "en": "Equal parts double ristretto espresso and silky warm textured milk."}', 135, '₺', 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80', array['popular'], 95, '3-4', '{"tr": ["Çift Shot Espresso", "Taze Tam Yağlı Süt"], "en": ["Double Shot Espresso", "Fresh Whole Milk"]}', '{"tr": ["Süt ve Süt Ürünleri"], "en": ["Dairy"]}', true, true),

  ('prod-spanish-latte', 'cat-coffee', '{"tr": "Spanish Latte", "en": "Spanish Latte"}', '{"tr": "Yoğunlaştırılmış tatlı süt, çift shot espresso ve buharda ısıtılmış ipeksi süt köpüğü.", "en": "Sweetened condensed milk, double shot espresso, and steamed silky milk microfoam."}', 165, '₺', 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80', array['popular', 'chef_special'], 220, '4-5', '{"tr": ["Espresso", "Kondanse Süt", "Taze Süt"], "en": ["Espresso", "Condensed Milk", "Fresh Milk"]}', '{"tr": ["Süt ve Süt Ürünleri"], "en": ["Dairy"]}', true, true),

  -- Soğuk İçecekler
  ('prod-cold-brew-reserve', 'cat-cold-drinks', '{"tr": "18 Saat Soğuk Demleme Cold Brew", "en": "18h Reserve Cold Brew"}', '{"tr": "18 saat boyunca soğuk suyla yavaşça demlenen, düşük asiditeli, çikolata ve fındık notalı soğuk kahve.", "en": "Slow cold-extracted for 18 hours. Ultra-smooth with rich notes of dark chocolate and roasted hazelnut."}', 155, '₺', 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80', array['popular'], 5, '2', '{"tr": ["Guatemala Antigua Çekirdeği", "Buz", "Portakal Dilimi"], "en": ["Guatemala Antigua Beans", "Clear Ice", "Orange Peel"]}', '{"tr": [], "en": []}', true, false),

  ('prod-iced-matcha-latte', 'cat-cold-drinks', '{"tr": "Iced Ceremonial Matcha Latte", "en": "Iced Ceremonial Matcha Latte"}', '{"tr": "Japonya Uji bölgesi birinci kalite seremoniyel yeşil çay tozu, vanilya esansı ve soğuk yulaf sütü.", "en": "Grade-A ceremonial Uji matcha whisked with Madagascar vanilla and chilled oat milk over ice."}', 185, '₺', 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80', array['popular', 'vegetarian', 'vegan'], 140, '4', '{"tr": ["Japon Seremoniyel Matcha", "Yulaf Sütü", "Vanilya"], "en": ["Japanese Ceremonial Matcha", "Oat Milk", "Vanilla"]}', '{"tr": ["Yulaf"], "en": ["Oat"]}', true, false),

  -- Tatlılar
  ('prod-san-sebastian', 'cat-desserts', '{"tr": "Belçika Çikolatalı San Sebastian", "en": "San Sebastian Cheesecake with Belgian Chocolate"}', '{"tr": "İçi akışkan ve ipeksi kıvamda pişmiş orijinal Bask cheesecake, yanında ılık %70 Callebaut eritme çikolata sosu ile.", "en": "Authentic creamy Basque burnt cheesecake served with warm 70% Callebaut dark chocolate pour."}', 210, '₺', 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80', array['popular', 'chef_special'], 480, '3', '{"tr": ["Taze Krem Peynir", "Krema", "Organik Yumurta", "Callebaut Çikolata"], "en": ["Cream Cheese", "Heavy Cream", "Organic Eggs", "Callebaut Chocolate"]}', '{"tr": ["Süt ve Süt Ürünleri", "Yumurta"], "en": ["Dairy", "Eggs"]}', true, true)
on conflict (id) do update set 
  category_id = excluded.category_id,
  name = excluded.name, 
  description = excluded.description, 
  price = excluded.price, 
  image = excluded.image,
  tags = excluded.tags,
  calories = excluded.calories,
  prep_time = excluded.prep_time,
  ingredients = excluded.ingredients,
  allergens = excluded.allergens,
  is_available = excluded.is_available,
  featured = excluded.featured;
