# Highdown Automotive — Landing Microsite

Public microsite for Highdown Automotive. Positions the company as a
specialized collector car dealership today, with a deliberately vague teaser
("The Road Ahead") toward the future collector-investment platform. No logins,
no forms, no offering details.

## Stack

- Next.js 15 (App Router, fully static output)
- Tailwind CSS 3 — branding/tokens ported from `hda-mvp` (Figma export palette)
- Deployed on Vercel: https://hda-landing.vercel.app

## Development

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
```

## Deploy

```bash
vercel deploy --prod
```

## Content notes

- Contact details live in the `CONTACT_PHONE`, `CONTACT_PHONE_HREF`, and
  `CONTACT_EMAIL` constants at the top of `src/app/page.tsx`.
- Brand assets (`highdown-logo.svg`, `h-icon.svg`, `hero-cover.png`,
  `decorator-vector.svg`) are copied from `hda-mvp`.
- Photography in `public/images/*.jpg` is sourced from Pexels (free license,
  no attribution required).
