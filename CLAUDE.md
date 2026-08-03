# WeGovMarketing

> WeGov marketing website — Next.js on Vercel, content from the **Sarapis Payload CMS**, WeGov theme (UNNY design system)

> [!IMPORTANT]
> **Strapi is gone (retired + deleted 2026-07-24/29).** wegov.nyc now reads its content from the
> multi-brand **Sarapis Payload CMS** at `https://next.sarapis.org`. `strapi.wegov.nyc` returns
> **410 Gone**, the `opt-strapi-1` container and `/opt/strapi` on utilities-2 were deleted, and a
> 13 MB safety archive is kept at `/opt/strapi-archive-20260729.tar.gz` on that box. Anything below
> describing Strapi is history, not procedure.

## Live Project Data

```
get_workspace_detail("WeGovMarketing")   → services, URLs, repos, recent commits
list_tasks(workspace="WeGovMarketing")   → open tasks
search_knowledge(topic="WeGovMarketing") → web_infrastructure_and_security KI
                                           (strapi_cms_management KI is RETIRED — Strapi no longer exists)
```

## Tech Stack

- **Frontend**: Next.js utilizing the UNNY design system. Hosted on **Vercel** (`devins-projects-1baf43f0/wegovnyc-frontend`); deploys automatically on push to `main`.
- **CMS**: the **Sarapis Payload** instance (`next.sarapis.org`), shared with sarapis.org and databook.nyc. Content is brand-scoped — this site reads only docs whose `sites` includes the **`wegovnyc`** brand (Sites doc #2). Edit in that one admin; a post can be published to several brands at once.
- **What comes from the CMS**: blog posts (`/blog`, `/blog/[slug]`, category + tag pages), the `/unnyc` **events** and **news items**, and the site chrome (navbar/footer/SEO via the brand's Site doc).
- **What does NOT**: the home page and `/about` are **frozen** in `frontend/src/content/frozen-pages.js` (section data rendered by the existing `SectionRenderer`), and all of `/unnyc`'s primer/crosswalk/glossary content is hardcoded React. Edit those files, not the CMS.

## Repositories & URLs

- **Frontend**: `https://github.com/wegovnyc/wegovnyc_front` (Live: `https://wegov.nyc`)
- **CMS**: the Sarapis workspace → `devinbalkind/sarapis-website` (`site/`), live at `https://next.sarapis.org/admin`
- *(retired)* `https://github.com/wegovnyc/wegovnyc_back` — the old Strapi app. Kept for history only.

## How the CMS wiring works

`frontend/src/lib/api.js` is the whole seam. It is a **Payload client that deliberately keeps the old
Strapi-shaped exports and response envelopes** (`fetchAPI`, `getStrapiMedia`, `{data, meta.pagination}`,
flattened article fields, `article.content` as an HTML string) — which is why the ~8 consuming files
never had to change. The `getStrapiMedia` name survives only because those files import it.

- Every request is brand-scoped: `?where[sites.key][equals]=$NEXT_PUBLIC_SITE_KEY`.
- It ships a **dependency-free Lexical→HTML converter** — Payload stores rich text as Lexical, but the
  components render `content` as HTML via `dangerouslySetInnerHTML`.
- Handled endpoints: `/articles` → Payload `posts`, `/events`, `/news-items`, `/global` → the brand's
  Site doc. `/pages` intentionally returns empty (home/about are frozen, see above).
- Campaign forms POST through `createSubmission()` → Payload `campaign-signups` /
  `campaign-endorsements` (flat body, **not** Strapi's `{data:{…}}` wrapper).
- **Env** (both optional — `lib/api.js` defaults to exactly these): `NEXT_PUBLIC_PAYLOAD_URL=https://next.sarapis.org`, `NEXT_PUBLIC_SITE_KEY=wegovnyc`. See `frontend/.env.example`.

## Development & Deployment Process

**Local → GitHub → Vercel.** There is no CMS deploy step any more.

1. **Develop locally** against the live Payload (the defaults already point at it).
2. **Push to GitHub** — Vercel deploys `main` automatically (preview builds on PRs).
3. **Content changes** happen in the Sarapis Payload admin, not in a deploy. Blog/news/events appear
   without a rebuild; `/unnyc` is `revalidate = 3600`, so give it up to an hour or redeploy to force it.

## Gotchas

- **Frozen marketing pages**: home + `/about` come from `frontend/src/content/frozen-pages.js`, and
  their images from `frontend/public/frozen-media/` (migrated off Strapi 2026-07-29). Editing them in
  any CMS will do nothing.
- **`/unnyc` has a static fallback**: `app/unnyc/page.js` does `rows.length ? rows : staticEvents/staticNews`
  from `@/data/unnyc`, so a CMS outage degrades instead of emptying the page. That fallback also *masked*
  a real content loss once — three CMS-only news items silently vanished at cutover and a
  "byte-identical" check passed because it was comparing against an already-degraded page. **If you
  change the news/events source, diff row counts against the CMS, not just rendered output.**
- **Events are date-aware**: `UnnycEvents` drops any event past its `end`/`endDate` client-side and sorts
  soonest-first; news sorts newest-first by `sortDate` (`dateLabel` is a fuzzy display string like
  "Q1 2025" and cannot be sorted on).
- **CSS architecture (cascade layers)**: order `reset < theme < components < unnyc`, declared in
  `frontend/src/app/base.css`. Shared tokens in `frontend/src/styles/wegov-tokens.css` (canonical navy
  `#162e51`; `--wg-*` semantic aliases). **Component styling goes in `@layer components`, page/microsite
  styling in its own later layer** — later layers beat the theme regardless of specificity, so no
  `:root`/`!important` hacks. UNNYC (`app/unnyc/unnyc.css`) is wrapped in `@layer unnyc`. Full model:
  `wegovnyc-design-system` KI + Claude Design project.
- **The old Strapi hygiene cron is gone** with the container (it used to unpublish past events weekly).
  Nothing replaces it yet — past events are only hidden client-side, so stale ones linger in the CMS.

## History (Strapi era — for context only)

Strapi v5 (5.33.0) ran as `opt-strapi-1` on Hetzner `utilities-2` (91.99.169.60), volume-mounting
`/opt/strapi` (not a git checkout) with SQLite at `/opt/strapi/.tmp/data.db`. Content types: `event`,
`news-item`, `page` (dynamic zones), `article`. It was retired because it was a second CMS to maintain
for one small site, and it had already caused a silent outage: `databook.nyc/blog` polled it hourly, so
stopping it broke that blog until Databook was migrated too. Its `strapi.wegov.nyc` cert still
auto-renews on utilities-2 and the vhost answers 410 by design — deliberately left unmonitored.
The SSL/certbot webroot pattern for that box is documented in the `web_infrastructure_and_security` KI
(`certbot_webroot_vs_standalone.md`) and still applies to its live siblings.
