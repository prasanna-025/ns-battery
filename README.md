# NS Batteries — Energy for People

> A world-class digital presence combining family legacy, clean solar technology, high-cranking automotive batteries, pure sine wave inverters, and high-conversion lead generation.

Built according to the **NS Batteries Master Implementation Blueprint v2** for the flagship store in Ramanathapuram, Tamil Nadu.

---

## 🌟 Unique UI/UX & Design Highlights

1. **Cinematic Hero with Interactive 3D Three.js Solar Rooftop**:
   - Features the high-resolution portrait of the client's father & uncle prominently in tailored suits.
   - Interactive 3D Three.js Canvas in the background rendering a rooftop solar array, sun orbit with corona flare, and animated photon energy particle streams traveling into an inverter accumulator node.
   - Live time-of-day toggle (**Day**, **Golden Hour Sunset**, **Cyber Night**).
   - Mouse and touch parallax orbit controls.

2. **Interactive 3D / Animated Energy Flow Ecosystem Simulator**:
   - Visualizes real-time power distribution between:
     $$\text{Sun} \longrightarrow \text{Solar Panels} \longrightarrow \text{Hybrid PCU} \longrightarrow \text{LiFePO4 Battery} \longrightarrow \text{Home Load / TANGEDCO Grid}$$
   - Toggle between **Daytime Solar Generation & Export**, **Evening Battery Discharge (Zero Grid Bills)**, and **Grid Outage Emergency Islanding**.
   - Interactive node inspector to learn about every component.

3. **Solar Savings & TANGEDCO Subsidy Calculator**:
   - Monthly electricity bill slider (₹1,000 to ₹30,000+).
   - Instant calculation of recommended kW capacity, panel count, annual savings in ₹, PM Surya Ghar Muft Bijli Yojana Central Government subsidy (up to ₹78,000), payback years, required roof area (sq. ft), and CO₂ offset.
   - Pre-fills into the quotation lead form.

4. **Intelligent Battery Finder**:
   - Smart selector for two-wheelers, passenger cars & SUVs, commercial fleets / marine vessels, and inverter backup.
   - Recommends exact factory-sealed Amaron, Powerzone, and Luminous models with warranty duration and WhatsApp pricing inquiry.

5. **Virtual Storefront Showcase & Hotspot Tour**:
   - High-resolution photograph of the client's Ramanathapuram storefront.
   - Interactive exploration of store pillars: Automobile Batteries, Inverter Batteries, Solar Solutions, and Gulf Oil / SKF accessories.
   - Ramanathapuram location, store hours, dual phone numbers (`88701 20911` & `95145 20911`), and Google Maps directions.

6. **Founders' Trust & Heritage Story**:
   - Showcases the 15+ year family legacy in Ramanathapuram, adherence to 100% genuine OEM products, transparent pricing, and instant counter warranty replacements.

7. **Vercel-Ready Serverless Architecture (No Supabase required)**:
   - Next.js 14 API route (`/api/leads`) with client and server-side validation.
   - Instant WhatsApp lead redirect formatting with full customer details pre-filled.
   - Mobile sticky floating action bar with click-to-call, WhatsApp chat, and solar calculator shortcut.

---

## 📂 Source Code Structure

```
d:/bt/
├── app/
│   ├── layout.tsx             # Root layout with metadata, navbar, footer & floating bar
│   ├── page.tsx               # Flagship Homepage with 3D hero & all core sections
│   ├── globals.css            # Custom glow, glassmorphism panels & animations
│   ├── solar/page.tsx         # On-grid, Hybrid & Off-grid solar + PM Surya Ghar subsidies
│   ├── batteries/page.tsx     # Automobile, tubular inverter, LiFePO4 + battery finder
│   ├── inverters/page.tsx     # Pure sine wave UPS, UTL rMPPT PCUs & load wattage guide
│   ├── lubricants/page.tsx    # Gulf Oil (bike, car, truck, marine vessel) & SKF bearings
│   ├── products/page.tsx      # Searchable, filterable catalogue with live category pills
│   ├── about/page.tsx         # Family legacy, founders' journey, core values & service area
│   ├── contact/page.tsx       # Ramanathapuram store address, Google Maps embed & lead form
│   ├── quote/page.tsx         # Multi-step interactive solar quotation wizard
│   └── api/leads/route.ts     # Lead submission API with WhatsApp dispatch
├── components/
│   ├── hero/
│   │   ├── HeroSection.tsx    # Hero section with family portrait & badges
│   │   └── Hero3DCanvas.tsx   # Three.js 3D solar panels, sun & photon particle stream
│   ├── solar/
│   │   ├── EnergyFlowSimulator.tsx # Interactive power distribution simulator
│   │   └── SolarCalculator.tsx     # Dynamic ROI, subsidy & bill savings calculator
│   ├── batteries/
│   │   └── BatteryFinder.tsx       # Vehicle & inverter battery recommendation engine
│   ├── store/
│   │   └── StorefrontShowcase.tsx  # Storefront photo showcase with interactive pillars
│   ├── home/
│   │   └── FoundersTrustStory.tsx  # Family leadership & Ramanathapuram roots
│   ├── products/
│   │   ├── ProductCard.tsx         # Product card with specs & WhatsApp button
│   │   └── ProductGrid.tsx         # Searchable filterable product catalog
│   ├── navigation/
│   │   ├── Navbar.tsx              # Responsive navbar with official logo & top contact bar
│   │   ├── Footer.tsx              # Rich brand footer with addresses & division links
│   │   └── FloatingActions.tsx     # Sticky mobile & desktop floating WhatsApp/call bar
│   └── common/
│       └── LeadForm.tsx            # Validated lead submission form
├── data/
│   ├── company.ts             # Official company info, phones, address, pillars
│   ├── products.ts            # Complete products catalog across all 6 divisions
│   └── solarCalculator.ts     # Tamil Nadu / TANGEDCO solar sizing calculation engine
├── lib/
│   └── utils.ts               # Currency formatting, Tailwind merger & WhatsApp helpers
└── public/
    ├── images/
    │   ├── hero-family.png    # High-resolution portrait of founders
    │   └── storefront.jpg     # High-resolution storefront photograph
    └── logos/                 # Official SVG and transparent PNG brand logos
```

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 🚢 Deploying to Vercel

```bash
# Production build test
npm run build

# Deploy via Vercel CLI or connect your Git repository to Vercel
vercel
```

**Zero external database setup required.** All product information and calculation logic are version-controlled, and leads are delivered directly via Next.js serverless API routes and WhatsApp.
