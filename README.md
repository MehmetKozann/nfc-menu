# Roast & Bloom — NFC Smart Cafe Experience

A minimal, mobile-first NFC web application for specialty cafes and restaurants. Customers tap a table sticker with their phone to view the digital menu, connect to the guest Wi-Fi, and request table service.

---

## Features

- **NFC Table Detection**: Automatic table recognition via `/table/[tableId]` routing.
- **Bilingual Support**: Instant toggle between Turkish (default) and English (`TR` / `EN`) with persistent state.
- **Wi-Fi Portal**: Native camera QR pairing (`WIFI:S:...`) and one-click credential copy with device-specific instructions.
- **Digital Menu**: Categorized layout, live instant search, dietary tags, allergen badges, and customization options.
- **Table Service**: One-tap requests for waiter assistance, water, and bills.
- **Backend Ready**: Modular Supabase client with zero-config local fallback data.

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/MehmetKozann/nfc-menu.git
cd nfc-menu

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000/table/12](http://localhost:3000/table/12) to preview the table experience.

---

## NFC Sticker Setup

Use any NFC writer mobile app (such as **NFC Tools**):

1. Add a **URL / URI** record.
2. Enter the URL: `https://yourdomain.com/table/{table_number}` (e.g. `https://yourdomain.com/table/12`).
3. Write to an NTAG213/215/216 sticker and place on the table.

---

## Environment Configuration

Optional: connect a Supabase project by adding `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Database schema is available in [`supabase_schema.sql`](./supabase_schema.sql).

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: Supabase (optional)
