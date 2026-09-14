import { CafeConfig, Category, Product } from '@/types';

export const CAFE_CONFIG: CafeConfig = {
  name: "Roast & Bloom",
  shortName: "R&B",
  tagline: {
    tr: "Nitelikli Kahve & Butik Artisan Fırın",
    en: "Specialty Coffee Roastery & Artisan Bakery"
  },
  description: {
    tr: "Dünyanın dört bir yanından özenle seçilen mikro-lot kahve çekirdekleri ve günlük taş fırınımızda pişen taze lezzetler.",
    en: "Carefully sourced micro-lot specialty coffees and freshly baked artisan delicacies crafted daily."
  },
  logo: "/images/logo.svg",
  coverImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
  address: {
    tr: "Bağdat Caddesi No: 284/A, Kadıköy, İstanbul",
    en: "Bagdat Avenue No: 284/A, Kadikoy, Istanbul"
  },
  googleMapsUrl: "https://maps.google.com",
  phone: "+90 216 450 88 90",
  instagram: "roastandbloomcafe",
  workingHours: {
    tr: "Hafta içi & Hafta sonu: 08:00 - 23:00",
    en: "Mon - Sun: 08:00 AM - 11:00 PM"
  },
  wifi: {
    ssid: "RoastBloom_Guest",
    password: "artisan_coffee",
    securityType: "WPA",
    helpNote: {
      tr: "Misafir ağımız 100 Mbps fiber hızındadır. Şifreyi kopyalayabilir veya QR kodu okutabilirsiniz.",
      en: "Our guest network is powered by 100 Mbps fiber. Copy the password or scan the QR code."
    }
  },
  features: [
    {
      icon: "Coffee",
      title: {
        tr: "%100 Nitelikli Arabica",
        en: "100% Specialty Arabica"
      },
      description: {
        tr: "Etik kaynaklı, SCA 86+ puanlı taze kavrum çekirdekler.",
        en: "Ethically sourced, SCA 86+ rated freshly roasted beans."
      }
    },
    {
      icon: "Croissant",
      title: {
        tr: "Artisan Taş Fırın",
        en: "Artisan Stone Bakery"
      },
      description: {
        tr: "Gerçek Fransız tereyağı ve ekşi mayalı taze fırın ürünleri.",
        en: "French butter pastries and slow-fermented sourdough."
      }
    },
    {
      icon: "Wifi",
      title: {
        tr: "Yüksek Hızlı Fiber Wi-Fi",
        en: "High-Speed Fiber Wi-Fi"
      },
      description: {
        tr: "Rahat çalışma alanları ve kesintisiz internet erişimi.",
        en: "Comfortable workspaces and uninterrupted connection."
      }
    }
  ]
};

export const CATEGORIES: Category[] = [
  {
    id: "cat-coffee",
    slug: "kahveler",
    name: {
      tr: "Kahveler",
      en: "Specialty Coffee"
    },
    iconName: "Coffee",
    description: {
      tr: "Espresso bazlı klasikler ve nitelikli demleme kahveler",
      en: "Espresso classics and pour-over single-origin brews"
    },
    order: 1
  },
  {
    id: "cat-cold-drinks",
    slug: "soguk-icecekler",
    name: {
      tr: "Soğuk İçecekler",
      en: "Cold Drinks"
    },
    iconName: "GlassWater",
    description: {
      tr: "Buzlu kahveler, ferahlatıcı mocktailler ve soğuk demlemeler",
      en: "Iced coffees, craft mocktails and signature cold brews"
    },
    order: 2
  },
  {
    id: "cat-tea",
    slug: "caylar",
    name: {
      tr: "Çaylar",
      en: "Artisan Teas"
    },
    iconName: "CupSoda",
    description: {
      tr: "Dünya çayları, bitki harmanları ve taze demlenmiş Türk çayı",
      en: "Single-origin whole leaf teas and calming herbal infusions"
    },
    order: 3
  },
  {
    id: "cat-breakfast",
    slug: "kahvalti",
    name: {
      tr: "Kahvaltı & Brunch",
      en: "Breakfast & Brunch"
    },
    iconName: "UtensilsCrossed",
    description: {
      tr: "Ekşi mayalı tostlar, taze kaseler ve kruvasan sandviçler",
      en: "Sourdough toasts, superfood bowls and stuffed croissants"
    },
    order: 4
  },
  {
    id: "cat-desserts",
    slug: "tatlilar",
    name: {
      tr: "Tatlılar & Fırın",
      en: "Bakery & Desserts"
    },
    iconName: "CakeSlice",
    description: {
      tr: "San Sebastian Cheesecake, tartlar ve artisan kurabiyeler",
      en: "San Sebastian cheesecake, fruit tarts and artisan bakes"
    },
    order: 5
  },
  {
    id: "cat-snacks",
    slug: "atistirmaliklar",
    name: {
      tr: "Atıştırmalıklar",
      en: "Savory & Snacks"
    },
    iconName: "Sandwich",
    description: {
      tr: "Sıcak paniniler, paylaşımlık tabaklar ve gurme salatalar",
      en: "Warm paninis, gourmet salads and artisanal finger foods"
    },
    order: 6
  }
];

export const PRODUCTS: Product[] = [
  // --- KAHVELER / COFFEE ---
  {
    id: "prod-cortado",
    categoryId: "cat-coffee",
    name: {
      tr: "Cortado",
      en: "Cortado"
    },
    description: {
      tr: "Eşit oranda çift shot ristretto ve ipeksi kadifemsi sıcak süt.",
      en: "Equal parts double ristretto espresso and silky warm textured milk."
    },
    price: 135,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    tags: ["popular"],
    calories: 95,
    prepTime: "3-4",
    ingredients: {
      tr: ["Çift Shot Espresso (Etiyopya Yirgacheffe)", "Taze Tam Yağlı Süt"],
      en: ["Double Shot Espresso (Ethiopia Yirgacheffe)", "Fresh Whole Milk"]
    },
    allergens: {
      tr: ["Süt ve Süt Ürünleri (Laktozsuz ve Yulaf sütü alternatifi mevcut)"],
      en: ["Dairy (Lactose-free and Oat milk options available)"]
    },
    isAvailable: true,
    featured: true,
    options: [
      {
        title: { tr: "Süt Tercihi", en: "Milk Choice" },
        choices: [
          { name: { tr: "Standart Tam Yağlı", en: "Whole Milk" }, priceDiff: 0 },
          { name: { tr: "Yulaf Sütü (Oat Milk)", en: "Oat Milk" }, priceDiff: 20 },
          { name: { tr: "Badem Sütü", en: "Almond Milk" }, priceDiff: 25 },
          { name: { tr: "Laktozsuz Süt", en: "Lactose-Free Milk" }, priceDiff: 10 }
        ]
      }
    ]
  },
  {
    id: "prod-spanish-latte",
    categoryId: "cat-coffee",
    name: {
      tr: "Spanish Latte",
      en: "Spanish Latte"
    },
    description: {
      tr: "Yoğunlaştırılmış tatlı süt, çift shot espresso ve buharda ısıtılmış ipeksi süt köpüğü.",
      en: "Sweetened condensed milk, double shot espresso, and steamed silky milk microfoam."
    },
    price: 165,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    tags: ["popular", "chef_special"],
    calories: 220,
    prepTime: "4-5",
    ingredients: {
      tr: ["Espresso", "Kondanse Süt", "Taze Süt", "Tarçın Tozu"],
      en: ["Espresso", "Condensed Milk", "Fresh Milk", "Cinnamon Dust"]
    },
    allergens: {
      tr: ["Süt ve Süt Ürünleri (Laktoz)"],
      en: ["Dairy (Lactose)"]
    },
    isAvailable: true,
    featured: true
  },
  {
    id: "prod-v60-pourover",
    categoryId: "cat-coffee",
    name: {
      tr: "V60 Chemex Nitelikli Demleme",
      en: "V60 Single-Origin Hand Brew"
    },
    description: {
      tr: "Hario V60 ile taze çekilmiş Kolombiya Huila çekirdeklerinden berrak, floral ve meyvemsi demleme.",
      en: "Hand-poured Colombia Huila single-origin beans, clean cup with jasmine & citrus notes."
    },
    price: 175,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    tags: ["new"],
    calories: 5,
    prepTime: "5-6",
    ingredients: {
      tr: ["Kolombiya Huila Nitelikli Kahve Çekirdeği", "Arıtılmış 93°C Sıcak Su"],
      en: ["Colombia Huila Specialty Coffee Beans", "Filtered 93°C Water"]
    },
    allergens: {
      tr: [],
      en: []
    },
    isAvailable: true
  },
  {
    id: "prod-flat-white",
    categoryId: "cat-coffee",
    name: {
      tr: "Flat White",
      en: "Flat White"
    },
    description: {
      tr: "İnce kadifemsi mikro köpükle birleşen yoğun çift shot espresso lezzeti.",
      en: "Double shot espresso folded into a velvety thin microfoam layer."
    },
    price: 145,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
    tags: ["popular"],
    calories: 120,
    prepTime: "3-4",
    ingredients: {
      tr: ["Çift Shot Espresso", "Buharlanmış İnce Süt"],
      en: ["Double Shot Espresso", "Steamed Microfoam Milk"]
    },
    allergens: {
      tr: ["Süt ve Süt Ürünleri"],
      en: ["Dairy"]
    },
    isAvailable: true
  },

  // --- SOĞUK İÇECEKLER / COLD DRINKS ---
  {
    id: "prod-cold-brew-reserve",
    categoryId: "cat-cold-drinks",
    name: {
      tr: "18 Saat Soğuk Demleme Cold Brew",
      en: "18h Reserve Cold Brew"
    },
    description: {
      tr: "18 saat boyunca soğuk suyla yavaşça demlenen, düşük asiditeli, çikolata ve fındık notalı soğuk kahve.",
      en: "Slow cold-extracted for 18 hours. Ultra-smooth with rich notes of dark chocolate and roasted hazelnut."
    },
    price: 155,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    tags: ["popular"],
    calories: 5,
    prepTime: "2",
    ingredients: {
      tr: ["Guatemala Antigua Çekirdeği", "Buz", "Portakal Kabuğu Dilimi"],
      en: ["Guatemala Antigua Beans", "Clear Ice", "Orange Peel Garnish"]
    },
    allergens: {
      tr: [],
      en: []
    },
    isAvailable: true
  },
  {
    id: "prod-iced-matcha-latte",
    categoryId: "cat-cold-drinks",
    name: {
      tr: "Iced Ceremonial Matcha Latte",
      en: "Iced Ceremonial Matcha Latte"
    },
    description: {
      tr: "Japonya Uji bölgesi birinci kalite seremoniyel yeşil çay tozu, vanilya esansı ve soğuk yulaf sütü.",
      en: "Grade-A ceremonial Uji matcha whisked with Madagascar vanilla and chilled oat milk over ice."
    },
    price: 185,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    tags: ["popular", "vegetarian", "vegan"],
    calories: 140,
    prepTime: "4",
    ingredients: {
      tr: ["Japon Seremoniyel Matcha", "Yulaf Sütü", "Organik Agave / Vanilya"],
      en: ["Japanese Ceremonial Matcha", "Oat Milk", "Organic Agave / Vanilla"]
    },
    allergens: {
      tr: ["Yulaf (Gluten hassasiyeti uyarısı)"],
      en: ["Oat (Trace gluten warning)"]
    },
    isAvailable: true
  },
  {
    id: "prod-hibiscus-lemonade",
    categoryId: "cat-cold-drinks",
    name: {
      tr: "Hibiscus Berry Artisan Limonata",
      en: "Hibiscus Berry Artisan Lemonade"
    },
    description: {
      tr: "Taze sıkılmış Bodrum limonu, ev yapımı hibiscus şurubu, taze nane ve yaban mersini taneleri.",
      en: "Freshly squeezed Bodrum lemons, house-crafted hibiscus cordial, fresh mint, and wild blueberries."
    },
    price: 145,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    tags: ["new", "vegan"],
    calories: 110,
    prepTime: "3",
    ingredients: {
      tr: ["Taze Limon Suyu", "Hibiscus Çiçeği Özü", "Nane", "Yaban Mersini", "Maden Suyu"],
      en: ["Fresh Lemon Juice", "Hibiscus Infusion", "Fresh Mint", "Blueberries", "Sparkling Water"]
    },
    allergens: {
      tr: [],
      en: []
    },
    isAvailable: true
  },

  // --- ÇAYLAR / ARTISAN TEAS ---
  {
    id: "prod-earl-grey-reserve",
    categoryId: "cat-tea",
    name: {
      tr: "Seylan Bergamot Reserve Çay",
      en: "Imperial Earl Grey Reserve"
    },
    description: {
      tr: "Sri Lanka yüksek rakım tam yaprak siyah çay ve doğal İtalyan bergamot yağı esansı.",
      en: "High-grown full-leaf Ceylon black tea scented with cold-pressed Italian bergamot essential oil."
    },
    price: 110,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    tags: [],
    calories: 2,
    prepTime: "4-5",
    ingredients: {
      tr: ["Tam Yaprak Seylan Siyah Çay", "Doğal Bergamot"],
      en: ["Whole Leaf Ceylon Black Tea", "Natural Bergamot Oil"]
    },
    allergens: {
      tr: [],
      en: []
    },
    isAvailable: true
  },
  {
    id: "prod-relaxing-botanical-tea",
    categoryId: "cat-tea",
    name: {
      tr: "Rooibos Vanilla & Papatya Harmanı",
      en: "Rooibos Vanilla & Chamomile Blend"
    },
    description: {
      tr: "Kafeinsiz Güney Afrika kızıl çayı, Mayıs papatyası, lavanta çiçekleri ve gerçek vanilya çubuğu.",
      en: "Caffeine-free South African red rooibos, gentle chamomile blossoms, lavender, and Madagascar vanilla."
    },
    price: 125,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian", "vegan"],
    calories: 0,
    prepTime: "5",
    ingredients: {
      tr: ["Kızıl Rooibos", "Alman Papatyası", "Lavanta", "Doğal Vanilya"],
      en: ["Red Rooibos", "German Chamomile", "French Lavender", "Vanilla Pod"]
    },
    allergens: {
      tr: [],
      en: []
    },
    isAvailable: true
  },

  // --- KAHVALTI & BRUNCH / BREAKFAST ---
  {
    id: "prod-avocado-sourdough",
    categoryId: "cat-breakfast",
    name: {
      tr: "Ekşi Mayalı Avokado & Poşe Yumurta",
      en: "Avocado Sourdough & Poached Egg"
    },
    description: {
      tr: "Kızarmış artisan ekşi mayalı ekmek, ezilmiş misket limonlu avokado, organik poşe yumurta, taze kişniş ve çörek otu.",
      en: "Toasted artisan sourdough, zesty lime-smashed avocado, organic poached egg, chili flakes and microgreens."
    },
    price: 265,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    tags: ["popular", "vegetarian"],
    calories: 420,
    prepTime: "8-10",
    ingredients: {
      tr: ["Doğal Ekşi Mayalı Ekmek", "Olgun Avokado", "Organik Köy Yumurtası", "Sızma Zeytinyağı", "Keten Tohumu"],
      en: ["Stoneground Sourdough", "Hass Avocado", "Organic Farm Egg", "Extra Virgin Olive Oil", "Flaxseed"]
    },
    allergens: {
      tr: ["Gluten (Ekmek)", "Yumurta", "Susam/Tohum İzleri"],
      en: ["Gluten (Wheat)", "Eggs", "Sesame / Seeds"]
    },
    isAvailable: true,
    featured: true
  },
  {
    id: "prod-truffle-croissant",
    categoryId: "cat-breakfast",
    name: {
      tr: "Trüflü Çırpılmış Yumurtalı Kruvasan",
      en: "Truffle Scrambled Egg Croissant"
    },
    description: {
      tr: "Her sabah fırınımızda açılan tereyağlı çıtır kruvasan içinde krema kıvamında trüf yağlı çırpılmış yumurta ve taze frenk soğanı.",
      en: "Crispy all-butter bakery croissant filled with creamy truffle scrambled eggs and garden chives."
    },
    price: 285,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    tags: ["popular", "chef_special"],
    calories: 540,
    prepTime: "8-10",
    ingredients: {
      tr: ["Fransız Tereyağlı Kruvasan", "Köy Yumurtası", "Doğal Trüf Yağı", "Eski Kaşar Peyniri", "Frenk Soğanı"],
      en: ["French Butter Croissant", "Farm Eggs", "White Truffle Oil", "Aged Kashar Cheese", "Chives"]
    },
    allergens: {
      tr: ["Gluten", "Süt Ürünleri", "Yumurta"],
      en: ["Gluten (Wheat)", "Dairy", "Eggs"]
    },
    isAvailable: true
  },
  {
    id: "prod-acai-superfood-bowl",
    categoryId: "cat-breakfast",
    name: {
      tr: "Amazon Acai Superfood Kasesi",
      en: "Amazonian Acai Superfood Bowl"
    },
    description: {
      tr: "Organik acai püresi, muz, badem sütü, ev yapımı fırınlanmış granola, taze çilek, böğürtlen ve chia tohumu.",
      en: "Organic wild acai blend, banana, almond milk, topped with toasted house granola, fresh berries and chia."
    },
    price: 240,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80",
    tags: ["new", "vegan", "vegetarian"],
    calories: 360,
    prepTime: "5-6",
    ingredients: {
      tr: ["Dondurulmuş Acai Meyvesi", "Muz", "Badem Sütü", "Yulaf Granola", "Taze Meyveler", "Hindistan Cevizi Cipsi"],
      en: ["Pure Acai Pulp", "Banana", "Almond Milk", "Oat Granola", "Fresh Berries", "Coconut Flakes"]
    },
    allergens: {
      tr: ["Sert Kabuklu Yemişler (Badem)", "Yulaf (Gluten)"],
      en: ["Tree Nuts (Almonds)", "Oats"]
    },
    isAvailable: true
  },

  // --- TATLILAR & FIRIN / DESSERTS ---
  {
    id: "prod-san-sebastian",
    categoryId: "cat-desserts",
    name: {
      tr: "Belçika Çikolatalı San Sebastian",
      en: "San Sebastian Cheesecake with Belgian Chocolate"
    },
    description: {
      tr: "İçi akışkan ve ipeksi kıvamda pişmiş orijinal Bask cheesecake, yanında ılık %70 Callebaut eritme çikolata sosu ile.",
      en: "Authentic creamy Basque burnt cheesecake served with warm 70% Callebaut dark chocolate pour."
    },
    price: 210,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    tags: ["popular", "chef_special"],
    calories: 480,
    prepTime: "3",
    ingredients: {
      tr: ["Taze Krem Peynir", "Krema", "Organik Yumurta", "Pancar Şekeri", "Callebaut Belçika Çikolatası"],
      en: ["Cream Cheese", "Heavy Cream", "Organic Eggs", "Cane Sugar", "Callebaut Belgian Chocolate"]
    },
    allergens: {
      tr: ["Süt ve Süt Ürünleri", "Yumurta", "Eser miktarda fındık/fıstık içerebilir"],
      en: ["Dairy", "Eggs", "May contain traces of tree nuts"]
    },
    isAvailable: true,
    featured: true
  },
  {
    id: "prod-pistachio-paris-brest",
    categoryId: "cat-desserts",
    name: {
      tr: "Antep Fıstıklı Paris-Brest",
      en: "Antep Pistachio Paris-Brest"
    },
    description: {
      tr: "Çıtır choux hamuru halkası, ipeksi Antep fıstığı kreması ve fırınlanmış pirinç fıstık parçaları.",
      en: "Crisp choux pastry ring filled with luscious 100% Antep pistachio mousseline and roasted pistachios."
    },
    price: 235,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    tags: ["new", "popular"],
    calories: 410,
    prepTime: "3",
    ingredients: {
      tr: ["Choux Hamuru", "Hakiki Antep Fıstığı Ezmesi", "Pastacı Kreması", "Kavrulmuş Fıstık"],
      en: ["Choux Pastry", "Pure Antep Pistachio Paste", "Pastry Cream", "Crushed Pistachios"]
    },
    allergens: {
      tr: ["Antep Fıstığı (Sert Kabuklu Yemiş)", "Gluten", "Süt Ürünleri", "Yumurta"],
      en: ["Pistachios (Tree Nuts)", "Gluten", "Dairy", "Eggs"]
    },
    isAvailable: true
  },
  {
    id: "prod-almond-croissant",
    categoryId: "cat-desserts",
    name: {
      tr: "Badem Kremalı Kruvasan",
      en: "Twice-Baked Almond Croissant"
    },
    description: {
      tr: "Portakal çiçeği şurubu ile ıslatılmış, içi ve üzeri frangipane badem kreması ve file bademle fırınlanmış kruvasan.",
      en: "Twice-baked butter croissant steeped with orange blossom syrup, packed with rich frangipane almond cream."
    },
    price: 175,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian"],
    calories: 460,
    prepTime: "2",
    ingredients: {
      tr: ["Tereyağlı Kruvasan", "Frangipane Badem Kreması", "File Badem", "Pudra Şekeri"],
      en: ["Butter Croissant", "Frangipane Almond Cream", "Flaked Almonds", "Icing Sugar"]
    },
    allergens: {
      tr: ["Badem (Sert Kabuklu Yemiş)", "Gluten", "Süt Ürünleri", "Yumurta"],
      en: ["Almonds (Tree Nuts)", "Gluten", "Dairy", "Eggs"]
    },
    isAvailable: true
  },

  // --- ATIŞTIRMALIKLAR / SAVORY & SNACKS ---
  {
    id: "prod-smoked-turkey-melt",
    categoryId: "cat-snacks",
    name: {
      tr: "Füme Hindi & Gravyer Brioche Melt",
      en: "Smoked Turkey & Gruyere Brioche Melt"
    },
    description: {
      tr: "Tereyağlı brioche ekmeği arasında fırınlanmış hindi füme, erimiş gravyer peyniri, ballı hardal ve karamelize soğan.",
      en: "Golden toasted buttery brioche, artisanal smoked turkey breast, melted gruyere, honey Dijon, and caramelized onions."
    },
    price: 245,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    tags: ["popular"],
    calories: 520,
    prepTime: "7-8",
    ingredients: {
      tr: ["Brioche Ekmek", "Füme Hindi Göğsü", "Gravyer Peyniri", "Dijon Hardalı", "Karamelize Soğan"],
      en: ["Brioche Bread", "Smoked Turkey Breast", "Gruyere Cheese", "Honey Dijon Mustard", "Caramelized Onions"]
    },
    allergens: {
      tr: ["Gluten", "Süt ve Süt Ürünleri", "Hardal", "Yumurta"],
      en: ["Gluten", "Dairy", "Mustard", "Eggs"]
    },
    isAvailable: true
  },
  {
    id: "prod-halloumi-quinoa-bowl",
    categoryId: "cat-snacks",
    name: {
      tr: "Izgara Hellimli Kinoa & Avokado Kasesi",
      en: "Grilled Halloumi & Quinoa Salad Bowl"
    },
    description: {
      tr: "Kızarmış Kıbrıs hellimi, organik renkli kinoa, bebek roka, kurutulmuş domates, ceviz ve nar ekşili zeytinyağı sosu.",
      en: "Crispy pan-seared Cyprus halloumi, tricolor quinoa, baby arugula, sun-dried tomatoes, roasted walnuts, pomegranate dressing."
    },
    price: 255,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian", "gluten_free"],
    calories: 390,
    prepTime: "6-8",
    ingredients: {
      tr: ["Kıbrıs Hellim Peyniri", "Renkli Kinoa", "Bebek Roka", "Ceviz", "Nar Ekşisi & Sızma Zeytinyağı"],
      en: ["Cyprus Halloumi Cheese", "Tri-color Quinoa", "Baby Arugula", "Walnuts", "Extra Virgin Olive Oil & Pomegranate"]
    },
    allergens: {
      tr: ["Süt Ürünleri", "Ceviz (Sert Kabuklu Yemiş)"],
      en: ["Dairy", "Walnuts (Tree Nuts)"]
    },
    isAvailable: true
  }
];
