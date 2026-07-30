# Safe Planet — Modern animated website + PHP leads admin

## Stack
- **Frontend:** React + Vite + TypeScript + Tailwind CSS + Framer Motion + Three.js (`@react-three/fiber`)
- **Backend:** Core PHP (`/api/lead.php`) — stores website leads in MySQL
- **Admin:** Core PHP panel at `/admin` — view/update leads only

## Design
Linear / Apple / Stripe inspired light–dark SaaS aesthetic with:
- Syne + Manrope typography
- 3D animated hero
- Framer Motion page & UI animations
- 21st.dev-inspired nav pill cursor, theme switch, spotlight cards

## Content source
Marketing copy adapted from [safeplanet.net.au](https://safeplanet.net.au/).

## Setup (Laragon)

1. Ensure MySQL is running (Laragon default user `root`, empty password).
2. Database `safe_planet` is auto-created on first lead submit.
3. Install & run frontend:

```bash
npm install
npm run dev
```

Open the Vite URL (usually `http://localhost:5173`).

API proxy rewrites `/api` → `http://localhost/safe-planet/api`.

### Admin panel
Open: `http://safe-planet.test/admin/`  
(or `http://localhost/safe-planet/admin/`)

Default login (change in `api/config.php`):
- **User:** `admin`
- **Password:** `SafePlanet2026!`

### Production build

```bash
npm run build
```

Then visit the Laragon vhost; `.htaccess` serves `dist/index.html` for SPA routes while keeping `/api` and `/admin` on PHP.

## Lead fields
Name, email, phone, product (Aircon / Hot Water Heat Pump / Solar Batteries), message, source page, IP, user agent, status (`new` | `contacted` | `closed`).
