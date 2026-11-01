# Implementation Status

## Verified

- [x] Next.js 15 App Router build passes (`npm run build`, 37 routes)
- [x] ESLint passes (`npm run lint`)
- [x] All 30 public routes generate; contact remains dynamic for `?animal=`
- [x] Responsive header, mobile navigation, skip link, and focus styles
- [x] Animal registry, filters, dossiers, galleries, and related animals
- [x] Story archive and individual field notes
- [x] Legal pages, privacy, terms, and safety guidance
- [x] Local, optimised photography for every hero and animal profile
- [x] Two click-to-play Coverr films with `preload="none"`
- [x] Newsletter and dossier-save interactions
- [x] Enquiry and welfare-report flows with submitting/success states
- [x] Custom 404, route error boundary, global error, and loading skeleton
- [x] `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, Open Graph metadata,
      and `AnimalShelter` JSON-LD
- [x] Security headers and long-lived immutable caching for `/images/*`
- [x] AVIF/WebP image formats, responsive device sizes, and 30-day image cache

## Demonstration-only behaviour

The enquiry form, welfare report, and newsletter signup are front-end
simulations. They do not send email or persist submissions. Connect them to a
form endpoint, CRM, or server action before launch. Dossier saves are stored in
`localStorage` on the visitor's device only.

## Before production

- [ ] Replace editorial stock photography with authorised sanctuary photography
- [ ] Connect forms to a monitored inbox or case-management system
- [ ] Add real donation payment links and receipts
- [ ] Confirm the production domain in `src/lib/site.ts`
- [ ] Add privacy-preserving analytics if required
- [ ] Run a browser-based accessibility and performance audit on the deployed URL
