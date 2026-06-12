# UI/UX Audit — cobboston.org

Audited: 2026-06-12. Method: full code review (`app/`, `components/`, `lib/content/`, `public/`) cross-checked against the live production HTML. Focus per request: symmetry, use of space, image assets, mobile friendliness.

Severity: 🔴 fix now · 🟠 should fix · 🟡 polish

---

## 1. Image assets — the weakest area

### 🔴 105 MB of unoptimized source images in `public/`
Camera originals are committed as-is:

| File | Dimensions | Size |
|---|---|---|
| `gallery/about/about-6.JPG` | 6720×4480 | 10.6 MB |
| `gallery/about/about-3.JPG` | 8064×4536 | 10.5 MB |
| `gallery/home/home-5.JPG` | 8064×4536 | 9.9 MB |
| `gallery/home/home-3.JPG` | 8064×4536 | 9.8 MB |
| ...11 files total are 7–10.6 MB | | |

`next/image` resizes on request, but the largest rendered slot for any of these is the hero carousel at **28rem (~448 px) wide**. You are storing 8064 px images for a 448 px slot — an 18× oversupply. Consequences: repo bloat, slow first-time image optimization on the server, and any consumer that bypasses the optimizer (direct link, some scrapers) gets the 10 MB original. Resize masters to ~1600 px wide, export at q80 (or convert to WebP), target ≤300 KB each. Expected result: `public/` drops from 105 MB to under 10 MB with zero visible difference.

### 🔴 No `og:image`
`layout.tsx` sets `twitter:card = summary_large_image` but defines no OpenGraph/Twitter image, and there's no `opengraph-image` file. Every share on WhatsApp/X/LinkedIn/iMessage renders text-only — a significant loss for a community org whose growth is share-driven. You have strong photography; pick one, crop to 1200×630, wire it into `metadata.openGraph.images`.

### 🟠 Duplicate and inconsistently named files
- `gallery/team/team-1.jpeg` and `gallery/events/events-2.jpeg` are the **same 3.6 MB file** committed twice.
- Naming drift: `boston-1.jpg`, `boston-3.jpg`, but `boston2.jpg`; `.JPG` vs `.jpg` vs `.jpeg`. Case matters on Linux deploy targets — standardize lowercase `.jpg`.
- `.DS_Store` committed in `public/` and `public/events/`. Add to `.gitignore` and remove.

### 🟠 Weak alt text across the pools (`lib/content/hero.ts`, `events.ts`)
`alt: "Boston "` (trailing space), `alt: "Kigezi"` ×5, `alt: "members"` ×3, `alt: "banyakegizi"` (misspelled, lowercase). Screen-reader users get nothing useful, and it forfeits image SEO. Each photo deserves one descriptive sentence.

### 🟠 All carousel slides load eagerly
`HeroCarousel` renders every slide stacked with `opacity-0`; on the homepage that's 6 `next/image` fills (`perPool: 3` × 2 pools) fetched on first paint, all above the fold so lazy-loading never kicks in. Only the active slide needs `priority`; render the rest with `loading="lazy"` + `hidden` until first activation, or mount slides on demand.

### 🟡 Aspect-ratio mismatches
Carousel frame is `aspect-[3/2]`; `events-3.jpg` (1021×1600) and `events-4.jpg` (1200×1600) are **portrait** — `object-cover` crops away ~60% of the frame, usually faces. Curate landscape images for the carousel or add `object-position`.

### 🟡 Placeholder SVGs in a production photo gallery
The Handover Ceremony gallery (`events.ts`) shows three 1.5 KB decorative SVGs (`fellowship-dance.svg`, etc.) in the same grid treatment as real photos. They read as broken/unfinished. Hide the gallery until real photos exist.

### 🟡 No blur placeholders
Slides crossfade from flat sand background. With statically imported images (or `blurDataURL`), you'd get the standard blur-up and less perceived jank on slow connections.

---

## 2. Symmetry & alignment

### 🟠 Container width drifts section-to-section
`max-w-6xl` (header, heroes, Pillars, Community, footer) → `max-w-5xl` (Join, TeamGrid) → `max-w-4xl` (EventsList, Values). Three content widths on one scroll path means the left edge jumps twice on the homepage alone. Narrower widths for reading-heavy sections are defensible, but this isn't systematic — Join is a two-column layout like the hero yet 1 step narrower. Pick two widths max (e.g. 6xl for layout sections, 3xl–4xl for prose) and apply them by rule.

### 🟠 Horizontal padding is inconsistent, so edges don't line up
- Hero: `px-10 sm:px-12` · PageHero: `px-8 sm:px-10` · all Sections: `px-6` · header: `px-6`.
- On mobile the hero text sits 40 px from the edge while everything below sits 24 px — a visible 16 px misalignment between the hero and the first section, and the homepage hero doesn't even match the interior-page hero. Unify on one scale (`px-6 sm:px-8` is plenty).

### 🟠 Mixed heading alignment with no pattern
Homepage flow: hero centered (mobile) → Pillars **left** → Community **left** → Explore **centered** → Join **left**. About page: About left → Heritage left → Vision/Mission **centered** → Values centered. Centering appears random rather than meaningful. Convention: centered for full-width statement sections, left for content sections — currently Explore (a content grid) is centered while Community (a statement) is left.

### 🟡 Vision/Mission cards are visually unequal
A symmetric 2-up grid, but Vision text is `text-2xl sm:text-[1.7rem]` while Mission is `text-xl sm:text-[1.4rem]`. The size drop reads as accidental hierarchy ("Mission matters less"), amplified by Mission being on inverse forest. If the sizes differ because Mission copy is longer, that's the tell the copy should be tightened instead.

### ✅ What's right
Card grids are genuinely symmetric: Pillars 6→3×2, Heritage 4→1×4, Explore 3, Team 6→3×2 — no orphan rows at any breakpoint. The `2fr/2.5fr` hero split and `1.1fr/1fr` Join split are deliberate, consistent asymmetries. Good.

---

## 3. Use of space

### 🔴 Every interior page burns a full viewport on its hero
`PageHero` is `min-h-[100svh]` — the comment in the file says "*Compact* interior-page header," but the implementation contradicts it. On About/Events/Team, a visitor gets one heading + a recycled carousel and must scroll an entire screen before any content. On Events — the page with the most time-sensitive content — the actual events start below the fold. Interior heroes should be ~40–50vh with the carousel reduced or dropped.

### 🟠 The same three hero images repeat on every page
Live site serves the identical `HERO_SLIDES` set (home-1, boston-1, home-3) on Home, About, and Team initial render. Combined with full-screen interior heroes, the site feels like the same page four times. The pools (`ABOUT_POOL`, `TEAM_POOL`, `EVENTS_POOL`) already exist in `hero.ts` — the pages just don't pass them. (They also only swap in client-side after mount, so first paint is always the default set; consider seeding server-side per page instead.)

### 🟡 Hero top padding vs fixed header
Hero uses `pt-16` (64 px) under an `h-20` (80 px) fixed header. `items-center` usually rescues it, but on short/landscape viewports the eyebrow can slide under the header glass. Use `pt-20`+.

### ✅ Section rhythm (`py-20 sm:py-28`), alternating cream/sand/forest-deep surfaces, and the hills motif as a section seam are all well-judged. Vertical spacing is not the problem; the hero economics are.

---

## 4. Mobile friendliness

### 🔴 Hero CTAs overflow on small phones
`hero.tsx`: the CTA row is hard `flex-row` and **both** buttons have `whitespace-nowrap` ("Join the community" + "Our story"). Inside `px-10` padding on a 375 px screen, the pair is borderline; at 360 px and below (iPhone SE, small Androids) it overflows or collides. Fix: `flex-col sm:flex-row` with full-width buttons on mobile, or drop `whitespace-nowrap` and the heavy `px-10`.

### 🟠 Carousel is uncontrollable on touch
Dots are `aria-hidden` decoration, not buttons; there's no swipe, no pause, no prev/next. On a 4 s timer, if a user wants to look at a photo of their own community, they can't hold it. This is also a WCAG 2.2.2 issue (auto-advancing content needs a pause/stop mechanism — `prefers-reduced-motion` only covers users who set it). Minimum: make dots tappable + pause on touch/hover.

### 🟠 Mobile menu has no dismiss affordance or focus management
`site-header.tsx`: the panel doesn't cover the viewport, there's no backdrop, tapping outside doesn't close, Escape isn't handled, and focus isn't trapped — keyboard/AT users can tab into the page behind a scroll-locked menu. Add backdrop + Escape + focus trap (or swap in a `<dialog>`).

### 🟡 `sizes` hints are inflated
Carousel `sizes="(min-width:1024px) 28rem, 90vw"` is correct, but `EventGallery` claims `32rem` for cells that render ~21rem in a 3-col `max-w-6xl` grid — phones on 2–3× DPR fetch a tier larger than needed. Minor, but it compounds with the heavy sources.

### ✅ Credit where due
`100svh` (not `vh`) for iOS, `scroll-padding-top` for anchor jumps under the fixed header, body scroll-lock while the menu is open, `prefers-reduced-motion` respected in every animated component, 44 px+ touch targets in the mobile nav. The responsive fundamentals are solid; the failures are specific, not systemic.

---

## 5. Production content bugs (visible to users right now)

These are live on cobboston.org:

1. **Team page shows "Name Name" ×5** and the intro literally says "*(Names below are placeholders — replace with your real leadership.)*"
2. **Events intro says** "*Dates below are samples — replace with your real calendar.*"
3. Voting event `location: " MA"` — renders as a bare "MA" with a pin icon.
4. Typo in event description: "*as the new President. together with a new team*" (stray period, lowercase).
5. Trailing/double spaces in team names (`"Name  Name "`) — will render oddly and break React keys if names ever duplicate.
6. Footer fine print `text-cream/50` on `#11281e` computes to ~#46554d on dark — below the 4.5:1 contrast minimum for 12 px text. Raise to `/70`.

Item 1 and 2 undermine trust more than any layout issue on the site — a visitor can't tell what else is fake.

---

## Priority order

1. Strip placeholder content from production (team names, "samples" copy, location).
2. Resize/recompress the 11 oversized JPGs; delete the duplicate; add `og:image`.
3. Fix mobile hero CTA overflow.
4. Cut interior `PageHero` to ~45vh and feed each page its own image pool.
5. Carousel: tappable dots + pause; mobile menu: backdrop + Escape + focus trap.
6. Normalize container widths and horizontal padding to one scale.
7. Alt text pass; `.gitignore` `.DS_Store`; lowercase file extensions.

Not verified visually: the sandbox ran out of disk and the Chrome extension was disconnected, so findings are from code analysis plus the live site's served HTML — no pixel-level screenshots. If you start `pnpm dev` and reconnect Chrome, I can do a visual pass to confirm the rendering-dependent items (CTA overflow threshold, hills/scroll-cue contrast, carousel crops).
