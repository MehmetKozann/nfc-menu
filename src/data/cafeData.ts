import { CafeConfig, Category, Product } from '@/types';

export const CAFE_CONFIG: CafeConfig = {
  name: "Roast & Bloom",
  shortName: "R&B",
  tagline: {
    tr: "Mutfak & Nitelikli Kahve & Butik Fırın",
    en: "Artisan Kitchen, Specialty Coffee & Bakery"
  },
  description: {
    tr: "Usta şeflerimizden gurme ana yemekler, taş fırından taze lezzetler ve dünyanın en seçkin mikro-lot kahveleri.",
    en: "Gourmet mains crafted by our chefs, stone-baked artisan bakery, and single-origin specialty coffees."
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
    tr: "Hafta içi & Hafta sonu: 08:00 - 23:30",
    en: "Mon - Sun: 08:00 AM - 11:30 PM"
  },
  wifi: {
    ssid: "RoastBloom_Guest",
    password: "artisan_coffee",
    securityType: "WPA",
    helpNote: {
      tr: "Misafir ağımız 100 Mbps fiber hızındadır.",
      en: "Our guest network is powered by 100 Mbps fiber."
    }
  },
  features: [
    {
      icon: "Utensils",
      title: {
        tr: "Gurme Şef Mutfağı",
        en: "Gourmet Chef Kitchen"
      },
      description: {
        tr: "Taze malzemelerle hazırlanan ana yemekler, burgerler ve makarnalar.",
        en: "Freshly prepared artisan mains, burgers, and hand-rolled pasta."
      }
    },
    {
      icon: "Coffee",
      title: {
        tr: "%100 Nitelikli Arabica",
        en: "100% Specialty Arabica"
      },
      description: {
        tr: "SCA 86+ puanlı taze kavrum tek köken çekirdekler.",
        en: "Ethically sourced SCA 86+ rated single-origin beans."
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
        en: "Comfortable workspace with complimentary high-speed internet."
      }
    }
  ]
};

export const CATEGORIES: Category[] = [
  {
    id: "cat-mains",
    slug: "ana-yemekler",
    name: {
      tr: "Ana Yemekler & Izgaralar",
      en: "Main Courses & Steaks"
    },
    iconName: "UtensilsCrossed",
    description: {
      tr: "Şefimizin özel reçeteleriyle hazırlanan et, tavuk ve somon tabakları",
      en: "Chef's signature grilled meats, salmon, and gourmet platters"
    },
    order: 1,
    section: "food",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cat-burgers",
    slug: "burger-sandvic",
    name: {
      tr: "Burgerler & Sandviçler",
      en: "Burgers & Sandwiches"
    },
    iconName: "Sandwich",
    description: {
      tr: "Brioche ekmeğinde smash burgerler ve çıtır tavuk seçenekleri",
      en: "Brioche smash burgers and crispy buttermilk chicken sandwiches"
    },
    order: 2,
    section: "food",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cat-pastas",
    slug: "makarna-bowllar",
    name: {
      tr: "Makarnalar & Salatalar",
      en: "Pastas & Bowls"
    },
    iconName: "UtensilsCrossed",
    description: {
      tr: "Taze soslu İtalyan makarnaları ve renkli besleyici kinoa bowlları",
      en: "Artisan Italian pastas and fresh nutritious superfood bowls"
    },
    order: 3,
    section: "food",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80"
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
      tr: "Ekşi mayalı tostlar, poşe yumurtalar ve zengin kruvasanlar",
      en: "Sourdough toasts, organic poached eggs, and stuffed croissants"
    },
    order: 4,
    section: "food",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cat-desserts",
    slug: "tatlilar",
    name: {
      tr: "Tatlılar & Butik Fırın",
      en: "Bakery & Desserts"
    },
    iconName: "CakeSlice",
    description: {
      tr: "San Sebastian Cheesecake, fıstıklı tartlar ve taze kruvasanlar",
      en: "San Sebastian cheesecake, pistachio pastries, and fresh bakes"
    },
    order: 5,
    section: "food",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cat-coffee",
    slug: "kahveler",
    name: {
      tr: "Sıcak Kahveler & Çaylar",
      en: "Specialty Coffee & Tea"
    },
    iconName: "Coffee",
    description: {
      tr: "Espresso klasikleri, cortado, latte ve nitelikli V60 demlemeler",
      en: "Espresso classics, flat white, cortado, and single-origin V60 brews"
    },
    order: 6,
    section: "drinks",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cat-cold-drinks",
    slug: "soguk-icecekler",
    name: {
      tr: "Soğuk İçecekler & Mocktail",
      en: "Cold Drinks & Mocktails"
    },
    iconName: "GlassWater",
    description: {
      tr: "18 saat soğuk demlenmiş Cold Brew, ev yapımı limonatalar ve matcha",
      en: "18h cold brews, handcrafted berry lemonades, and matcha lattes"
    },
    order: 7,
    section: "drinks",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80"
  }
];

export const PRODUCTS: Product[] = [
  // ==========================================
  // 1. ANA YEMEKLER / MAIN COURSES
  // ==========================================
  {
    id: "prod-truffle-ribeye-steak",
    categoryId: "cat-mains",
    name: {
      tr: "Trüflü Cafe de Paris Antrikot",
      en: "Truffle Cafe de Paris Ribeye"
    },
    description: {
      tr: "220g ızgara dana antrikot, özel Cafe de Paris tereyağı sosu, trüflü çıtır patates kızartması ve taze roka salatası ile.",
      en: "220g grilled dry-aged ribeye steak, house Cafe de Paris butter sauce, truffle shoestring fries and wild arugula."
    },
    price: 495,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    tags: ["popular", "chef_special"],
    calories: 780,
    prepTime: "15-18",
    ingredients: {
      tr: ["220g Dana Antrikot", "Cafe de Paris Sos", "Taze Baharatlar", "Kızarmış Patates", "Parmesan"],
      en: ["220g Beef Ribeye", "Cafe de Paris Butter", "Fresh Herbs", "Crispy Fries", "Aged Parmesan"]
    },
    allergens: {
      tr: ["Süt ve Süt Ürünleri (Tereyağı/Krema)", "Hardal"],
      en: ["Dairy (Butter/Cream)", "Mustard"]
    },
    isAvailable: true,
    featured: true
  },
  {
    id: "prod-grilled-salmon-plate",
    categoryId: "cat-mains",
    name: {
      tr: "Fırınlanmış Norveç Somon & Kuşkonmaz",
      en: "Glazed Norwegian Salmon & Asparagus"
    },
    description: {
      tr: "Misket limonlu tereyağında mühürlenmiş taze somon fileto, kremalı patates püresi, ızgara bebek kuşkonmaz ve kapari sosu.",
      en: "Pan-seared Norwegian salmon fillet, silky potato mousseline, grilled baby asparagus, and lemon caper drizzle."
    },
    price: 465,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    tags: ["popular", "gluten_free"],
    calories: 620,
    prepTime: "14-16",
    ingredients: {
      tr: ["Taze Norveç Somonu", "Bebek Kuşkonmaz", "Patates Püresi", "Kapari", "Sızma Zeytinyağı"],
      en: ["Fresh Norwegian Salmon", "Baby Asparagus", "Potato Mousseline", "Capers", "Extra Virgin Olive Oil"]
    },
    allergens: {
      tr: ["Balık", "Süt Ürünleri (Püre)"],
      en: ["Fish", "Dairy"]
    },
    isAvailable: true,
    featured: true
  },
  {
    id: "prod-crispy-parmesan-schnitzel",
    categoryId: "cat-mains",
    name: {
      tr: "Viyana Usulü Çıtır Tavuk Şinitzel",
      en: "Crispy Viennese Chicken Schnitzel"
    },
    description: {
      tr: "Altın sarısı panko kaplı yumuşak tavuk göğsü, ılık hardallı patates salatası, ızgara limon ve yaban mersini sosu.",
      en: "Golden panko-crusted chicken breast, warm German mustard potato salad, grilled lemon and lingonberry jam."
    },
    price: 365,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1599921841143-819025383852?auto=format&fit=crop&w=800&q=80",
    tags: ["popular"],
    calories: 710,
    prepTime: "12-14",
    ingredients: {
      tr: ["Taze Tavuk Göğsü", "Panko Ekmek Kırıntısı", "Organik Yumurta", "Hardallı Patates Salatası"],
      en: ["Tender Chicken Breast", "Japanese Panko", "Organic Eggs", "Mustard Potato Salad"]
    },
    allergens: {
      tr: ["Gluten", "Yumurta", "Hardal"],
      en: ["Gluten", "Eggs", "Mustard"]
    },
    isAvailable: true
  },

  // ==========================================
  // 2. BURGERLER & SANDVİÇLER / BURGERS
  // ==========================================
  {
    id: "prod-truffle-smash-burger",
    categoryId: "cat-burgers",
    name: {
      tr: "Truffle Smash Çift Köfteli Burger",
      en: "Double Truffle Smash Burger"
    },
    description: {
      tr: "Taş fırın brioche ekmeğinde çift smash dana köftesi (180g), erimiş İngiliz çedarı, karamelize soğan, trüf mayonez ve patates kızartması.",
      en: "Double dry-aged beef patties (180g) smashed crispy on brioche, melted cheddar, caramelized onions, truffle aioli and fries."
    },
    price: 345,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    tags: ["popular", "chef_special"],
    calories: 850,
    prepTime: "10-12",
    ingredients: {
      tr: ["180g Dana Kıyması", "Tereyağlı Brioche", "İngiliz Çedar", "Trüf Mayonez", "Karamelize Soğan", "Baharatlı Patates"],
      en: ["180g Aged Beef", "Brioche Bun", "Melted Cheddar", "Truffle Aioli", "Caramelized Onion", "Crispy Fries"]
    },
    allergens: {
      tr: ["Gluten", "Süt ve Süt Ürünleri", "Yumurta", "Hardal"],
      en: ["Gluten", "Dairy", "Eggs", "Mustard"]
    },
    isAvailable: true,
    featured: true
  },
  {
    id: "prod-crispy-chicken-burger",
    categoryId: "cat-burgers",
    name: {
      tr: "Crispy Buttermilk Tavuk Burger",
      en: "Crispy Buttermilk Chicken Burger"
    },
    description: {
      tr: "24 saat marine edilmiş çıtır tavuk fileto, lahana coleslaw, acı-tatlı chipotle mayonez, salatalık turşusu ve patates cipsi.",
      en: "24h buttermilk-marinated fried chicken thigh, crunchy purple coleslaw, smoky chipotle mayo, house pickles and fries."
    },
    price: 320,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
    tags: ["new"],
    calories: 780,
    prepTime: "10-12",
    ingredients: {
      tr: ["Buttermilk Tavuk Fileto", "Brioche Ekmek", "Coleslaw Salata", "Chipotle Sos", "Kornişon Turşu"],
      en: ["Buttermilk Fried Chicken", "Brioche Bun", "Purple Slaw", "Chipotle Aioli", "Dill Pickles"]
    },
    allergens: {
      tr: ["Gluten", "Süt Ürünleri", "Yumurta"],
      en: ["Gluten", "Dairy", "Eggs"]
    },
    isAvailable: true
  },
  {
    id: "prod-smoked-turkey-melt",
    categoryId: "cat-burgers",
    name: {
      tr: "Füme Hindi & Gravyer Brioche Melt",
      en: "Smoked Turkey & Gruyere Melt"
    },
    description: {
      tr: "Kızarmış tereyağlı brioche arasında fırınlanmış hindi füme, erimiş gravyer peyniri, ballı hardal ve karamelize soğan.",
      en: "Toasted brioche, artisanal smoked turkey breast, melted gruyere cheese, honey mustard and sweet onions."
    },
    price: 265,
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

  // ==========================================
  // 3. MAKARNALAR & KASELER / PASTAS & BOWLS
  // ==========================================
  {
    id: "prod-truffle-fettuccine",
    categoryId: "cat-pastas",
    name: {
      tr: "Trüf Kremalı & Mantarlı Fettuccine",
      en: "Truffle & Wild Mushroom Fettuccine"
    },
    description: {
      tr: "El yapımı taze yumurtalı fettuccine makarna, porçini ve kestane mantarları, taze trüf yağı, krema ve 24 aylık Parmigiano Reggiano.",
      en: "Handmade egg fettuccine tossed with porcini & chestnut mushrooms, white truffle oil, light cream and aged Parmigiano Reggiano."
    },
    price: 335,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80",
    tags: ["popular", "vegetarian", "chef_special"],
    calories: 610,
    prepTime: "10-12",
    ingredients: {
      tr: ["Taze Fettuccine Hamuru", "Porçini Mantarı", "Trüf Kreması", "Parmigiano Reggiano", "Taze Fesleğen"],
      en: ["Fresh Fettuccine", "Wild Porcini", "Truffle Cream", "Parmigiano Reggiano", "Fresh Basil"]
    },
    allergens: {
      tr: ["Gluten (Buğday)", "Süt Ürünleri (Krema/Peynir)", "Yumurta"],
      en: ["Gluten", "Dairy", "Eggs"]
    },
    isAvailable: true,
    featured: true
  },
  {
    id: "prod-halloumi-quinoa-bowl",
    categoryId: "cat-pastas",
    name: {
      tr: "Izgara Hellimli Renkli Kinoa Kasesi",
      en: "Grilled Halloumi & Tricolor Quinoa Bowl"
    },
    description: {
      tr: "Kızarmış Kıbrıs hellimi, organik renkli kinoa, bebek roka, avokado dilimleri, kurutulmuş domates, kavrulmuş ceviz ve nar ekşili zeytinyağı.",
      en: "Pan-seared Cyprus halloumi, tricolor quinoa, baby arugula, Hass avocado, sun-dried tomatoes, roasted walnuts, pomegranate vinaigrette."
    },
    price: 285,
    currency: "₺",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian", "gluten_free"],
    calories: 430,
    prepTime: "7-8",
    ingredients: {
      tr: ["Kıbrıs Hellim Peyniri", "Renkli Kinoa", "Bebek Roka", "Avokado", "Ceviz", "Nar Ekşisi & Sızma Zeytinyağı"],
      en: ["Cyprus Halloumi", "Tricolor Quinoa", "Baby Arugula", "Avocado", "Walnuts", "Pomegranate Dressing"]
    },
    allergens: {
      tr: ["Süt Ürünleri", "Ceviz (Sert Kabuklu Yemiş)"],
      en: ["Dairy", "Walnuts (Tree Nuts)"]
    },
    isAvailable: true
  },

  // ==========================================
  // 4. KAHVALTI & BRUNCH / BREAKFAST
  // ==========================================
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
      tr: ["Doğal Ekşi Mayalı Ekmek", "Olgun Avokado", "Organik Köy Yumurtası", "Sızma Zeytinyağı"],
      en: ["Stoneground Sourdough", "Hass Avocado", "Organic Farm Egg", "Extra Virgin Olive Oil"]
    },
    allergens: {
      tr: ["Gluten (Ekmek)", "Yumurta"],
      en: ["Gluten (Wheat)", "Eggs"]
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
      tr: "Tereyağlı çıtır fırın kruvasanı içinde krema kıvamında trüf yağlı çırpılmış yumurta ve taze frenk soğanı.",
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
      en: ["French Butter Croissant", "Farm Eggs", "White Truffle Oil", "Aged Cheese", "Chives"]
    },
    allergens: {
      tr: ["Gluten", "Süt Ürünleri", "Yumurta"],
      en: ["Gluten", "Dairy", "Eggs"]
    },
    isAvailable: true
  },

  // ==========================================
  // 5. KAHVELER / COFFEE
  // ==========================================
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
    featured: true
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
    isAvailable: true
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

  // ==========================================
  // 6. SOĞUK İÇECEKLER / COLD DRINKS
  // ==========================================
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

  // ==========================================
  // 7. TATLILAR & FIRIN / DESSERTS
  // ==========================================
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
  }
];
