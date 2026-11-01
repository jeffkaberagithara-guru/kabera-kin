# Asset Sources

All imagery is stored locally under `public/images/photos/` and served through
Next.js image optimisation. No third-party image host is contacted at runtime.

## Photography

- Source: [Unsplash](https://unsplash.com)
- Licence: [Unsplash License](https://unsplash.com/license) — free for commercial
  and non-commercial use, no attribution required.
- Treatment: cropped, compressed, and colour-graded in the UI with
  `.image-warm`; originals are not altered on disk.
- Selection: editorial photography chosen for tone and composition. These are
  **not** photographs of the real Kabera Kin animals or team.

| Local file | Unsplash photo ID | Used for |
| --- | --- | --- |
| `fieldwork.jpg` | `photo-1534361960057-19889db9621e` | Homepage hero, field notes |
| `pair.jpg` | `photo-1548199973-03cce0bbc87b` | Adopt hero, bonded pair |
| `volunteer.jpg` | `photo-1587300003388-59208cc962cb` | Foster hero, volunteers |
| `clinic.jpg` | `photo-1584515933487-779824d29309` | Donate hero, clinic |
| `hands.jpg` | `photo-1450778869180-41d0601e046e` | Volunteer hero, carer detail |
| `care.jpg` | `photo-1601758177266-bc599de87707` | Care hero, foster panel |
| `simba.jpg` | `photo-1543466835-00a7907e9de1` | Simba dossier, rescue panel |
| `partners.jpg` | `photo-1522071820081-009f0129c71c` | Partners hero |
| `golden.jpg` | `photo-1552053831-71594a27632d` | About hero, golden-hour panel |
| `stories.jpg` | `photo-1477884213360-7e9d7dcc1e48` | Stories hero |
| `how-it-works.jpg` | `photo-1561037404-61cd46aa615b` | Adoption protocol hero |
| `contact.jpg` | `photo-1530281700549-e82e7bf110d6` | Contact hero |
| `amari.jpg` | `photo-1517849845537-4d257902454a` | Amari dossier |
| `kito.jpg` | `photo-1591160690555-5debfba289f0` | Kito dossier |
| `jabari.jpg` | `photo-1583337130417-3346a1be7dee` | Jabari dossier |
| `baraka.jpg` | `photo-1551717743-49959800b1f6` | Baraka dossier |
| `nyota.jpg` | `photo-1511044568932-338cba0ad803` | Nyota dossier |
| `zuri.jpg` | `photo-1514888286974-6c03e2ca1dba` | Zuri dossier |
| `malaika.jpg` | `photo-1533738363-b7f9aef128ce` | Malaika dossier |
| `makena.jpg` | `photo-1495360010541-f48722b34f7d` | Cat detail gallery |
| `sanctuary.jpg` | `photo-1544568100-847a948585b9` | Sanctuary panel, film poster |
| `homecoming.jpg` | `photo-1518717758536-85ae29035b6d` | Homecoming panel |
| `recovery.jpg` | `photo-1583511655857-d19b40a7a54e` | Recovery film poster |
| `og.jpg` | `photo-1534361960057-19889db9621e` | Open Graph / social preview |

## Film

| Local/stored source | Title | Source | Licence |
| --- | --- | --- | --- |
| `https://cdn.coverr.co/videos/coverr-dog-in-a-shelter-2971/720p.mp4` | Dog in a shelter | [Coverr](https://coverr.co) | Free for commercial use, no attribution required |
| `https://cdn.coverr.co/videos/coverr-dog-sleeping-in-a-shelter-9902/720p.mp4` | Dog sleeping in a shelter | [Coverr](https://coverr.co) | Free for commercial use, no attribution required |

The films are loaded from Coverr's CDN only after the visitor presses play.
`preload="none"` keeps them out of the initial page load.

## Brand assets

- `public/brand/*` and `public/favicon.svg` are original Kabera Kin marks.
- All other imagery under `public/images/photos/` is documented in the table
  above. Unused placeholder artwork has been removed.

## Production note

Before launch with real animals, replace the editorial photography with
authorised photographs of the actual animals and team. Keep signed model or
guardian releases for any identifiable person, and re-check the licence terms
for every asset at the time of publication.
