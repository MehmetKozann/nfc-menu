# ☕ Roast & Bloom | Mobile-First NFC Cafe Experience Web App

A modern, mobile-first NFC web application crafted for cafes, specialty coffee shops, and restaurants. Customers tap a table NFC sticker with their smartphone, and a web page opens displaying their table number, an instant Wi-Fi connection portal, and a digital menu in Turkish & English.

---

## 🌟 Key Features

- **📱 Tap & Open (NFC Experience)**: No app downloads or account registrations required. The NFC sticker simply triggers a URL like `https://yourcafe.com/table/12`.
- **🏷️ Dynamic Table Identification**: Detects table number from `/table/[tableId]` and displays an active glowing table status badge (*"Masanız Tanımlandı: Masa 12"*).
- **🌐 Full Internationalization (TR & EN)**:
  - Default language: **Turkish (`TR`)**.
  - One-tap toggle to **English (`EN`)** and back.
  - Complete translation dictionary covering welcome messages, category names, product details, ingredients, allergens, tags, search placeholders, and Wi-Fi guides.
  - Language preference automatically persists across page refreshes (`localStorage` + URL sync).
- **📶 Realistic Wi-Fi Flow**:
  - Automatically generates an instant Wi-Fi QR code (`WIFI:S:SSID;T:WPA;P:PASSWORD;;`) for native iOS & Android camera scanning.
  - One-touch copy buttons for Network Name (SSID) & Password with visual copied feedback.
  - Device-specific guidance tabs for **iPhone / iPad**, **Android**, and **Manual** connection.
  - Honest and secure: No deceptive claims of "silent automatic background connection" since modern mobile OS security requires camera QR approval or copy-paste.
- **🍰 Rich Digital Menu**:
  - Sticky horizontal category navigation bar with smooth auto-centering on mobile.
  - Real-time instant search with keyword highlights and clear button.
  - Dietary & popularity tags (*Çok Tercih Edilen / Popular*, *Yeni / New*, *Vejetaryen / Vegetarian*, *Vegan*, *Glutensiz / Gluten-Free*, *Şefin İmzası / Chef's Special*).
  - High-resolution imagery with fallback placeholders.
- **🔍 Product Detail Modal (Mobile Bottom Sheet)**:
  - High-res product banner.
  - Full ingredients list and visual allergen warning chips.
  - Preparation times, calories, and milk/option customizations (e.g. Oat milk, Almond milk).
- **🛎️ Table Service & Waiter Call**:
  - Instant one-tap options for *Garson Çağır* (Call Waiter), *Hesap İsteyin* (Request Bill), and *Su İsteği* (Request Water) linked to the active table.
- **⚡ Performance & PWA Ready**:
  - Mobile viewport optimized (`user-scalable=no`, theme color status bar).
  - Web App Manifest (`manifest.json`) for Home Screen bookmarking.
  - Out-of-the-box local data fallback with zero configuration needed.
  - Production-ready **Supabase** adapter with provided SQL schema (`supabase_schema.sql`).

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Components & Client Interactivity)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (Warm artisan coffee palette, glassmorphic floating bars, micro-animations)
- **Icons**: Lucide React
- **QR Engine**: `qrcode.react` (for instant camera Wi-Fi pairing)
- **Feedback**: `canvas-confetti` (for interactive tactile feedback)
- **Database / Backend**: Supabase JS Client (optional, with instant local fallback data)

---

## 📂 Project Structure

```text
nfc-menu/
├── public/
│   └── manifest.json             # PWA Web App Manifest
├── src/
│   ├── app/
│   │   ├── globals.css           # Design tokens, color palette, custom styling
│   │   ├── layout.tsx            # Root layout with LanguageProvider & metadata
│   │   ├── page.tsx              # Root / General Takeaway landing
│   │   └── table/[tableId]/
│   │       └── page.tsx          # Dynamic NFC Table route (/table/12)
│   ├── components/
│   │   ├── common/
│   │   │   ├── Footer.tsx        # Cafe location, hours, social links
│   │   │   ├── LanguageToggle.tsx # TR / EN switcher
│   │   │   ├── Navbar.tsx        # Sticky top navigation with table badge
│   │   │   └── TableBadge.tsx    # Table session badge
│   │   ├── home/
│   │   │   ├── CafeExperience.tsx # Main client orchestrator
│   │   │   └── HeroSection.tsx   # Welcome hero & primary action buttons
│   │   ├── menu/
│   │   │   ├── CategoryBar.tsx   # Sticky horizontal scroll category bar
│   │   │   ├── MenuSection.tsx   # Search, category grid, product listings
│   │   │   ├── ProductCard.tsx   # Responsive product card with allergens
│   │   │   ├── ProductTagBadge.tsx # Dietary and popularity badges
│   │   │   └── SearchBar.tsx     # Live search input
│   │   ├── modals/
│   │   │   ├── ProductDetailModal.tsx # Bottom sheet modal with ingredients
│   │   │   └── ServiceModal.tsx  # Call waiter / Bill request modal
│   │   └── wifi/
│   │       └── WifiModal.tsx     # Wi-Fi QR, copy password, and device guide
│   ├── context/
│   │   └── LanguageContext.tsx   # Persistent TR/EN state provider
│   ├── data/
│   │   ├── cafeData.ts           # Realistic sample cafe menu dataset
│   │   └── translations.ts       # Complete Turkish & English dictionaries
│   ├── lib/
│   │   ├── api.ts                # Data fetching layer (Supabase + fallback)
│   │   └── supabase.ts           # Supabase client initializer
│   └── types/
│       └── index.ts              # Core TypeScript interfaces
├── .env.example                  # Environment configuration template
├── supabase_schema.sql           # Complete SQL tables and RLS policies
└── package.json
```

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) or test a table URL:
👉 [http://localhost:3000/table/12](http://localhost:3000/table/12)

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🏷️ How to Program NFC Stickers for Cafe Tables

In a real cafe setup:
1. Buy standard **NTAG213 / NTAG215 / NTAG216** adhesive NFC stickers (waterproof / on-metal sticker variants recommended for outdoor and metal cafe tables).
2. Download a free NFC writer app on your smartphone (such as **NFC Tools** on iOS or Android).
3. Select **Write** -> **Add a record** -> **URL / URI**.
4. Enter your table URL according to the table number:
   - Masa 1: `https://yourdomain.com/table/1`
   - Masa 2: `https://yourdomain.com/table/2`
   - Masa 12: `https://yourdomain.com/table/12`
   - Masa 4B: `https://yourdomain.com/table/4B`
5. Tap **Write** and touch the NFC sticker with the back of your phone.
6. Stick the tag on the table or inside an acrylic table stand.

---

## 🗄️ Supabase Backend Setup (Optional)

The application is built to run out-of-the-box with high-quality local mock data. When you are ready to connect a live Supabase backend:

1. Create a project at [supabase.com](https://supabase.com).
2. Go to **SQL Editor** in Supabase and run the provided SQL script:
   👉 [`supabase_schema.sql`](file:///Users/mehmetkozan/Desktop/nfc-menu/supabase_schema.sql)
3. Copy your project URL and anon public key to `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```
4. Restart your Next.js server. The application will automatically stream real-time categories, products, and cafe config from Supabase!

---

## 🚢 Production Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub / GitLab.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. If using Supabase, add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to Environment Variables.
4. Click **Deploy**. Vercel will build and assign your custom domain with automatic HTTPS.

### Deploy to Docker / VPS
```dockerfile
FROM node:20-alpine AS runner
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```
