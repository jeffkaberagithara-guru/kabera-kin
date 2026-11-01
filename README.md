# Kabera Kin

A Kenyan animal welfare sanctuary and civic registry — a Next.js 15 site for
adoption, fostering, rescue reporting, field notes, and the medical fund.

## Stack

- Next.js 15 App Router, React 18, TypeScript
- Tailwind CSS with custom sanctuary design tokens
- Local editorial photography and click-to-play Coverr films

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Notes

- Forms are front-end demonstrations until a backend endpoint is connected.
- Edit site metadata, contact details, and the canonical URL in
  `src/lib/site.ts`.
- Asset provenance and licensing are documented in
  `docs/ASSET_SOURCES.md`.
- Implementation status and launch checks are in
  `docs/IMPLEMENTATION_STATUS.md`.
