# WeGovMarketing

> WeGov marketing website — Next.js on Vercel, content from the **Sarapis Payload CMS**, styled by the shared **WeGovNYC design system** (`@wegovnyc/design-tokens`, `wegov` variant). Single-theme since 2026-08-05.

> [!IMPORTANT]
> **UNNYC moved out of this repo (2026-08-04).** The campaign now lives in its own repo and site:
> **[`sarapis/unnyc`](https://github.com/sarapis/unnyc) → https://unnyc.wegov.nyc**.
> **The `/unnyc*` routes are GONE from this repo as of 2026-08-05** — route tree, 25 components,
> both data files and `public/unnyc/` deleted (~7,400 lines). Only the redirects remain, and they
> are what serves those URLs now. **Do not re-add `/unnyc` here.** Recover any of it from git
> history; the campaign's live source is `sarapis/unnyc`.
>
> What the deletion also removed, so you don't go looking: the hardcoded UNNYC nav item and its
> ten-item `/unnyc#section` submenu (those anchors had already stopped resolving — the campaign
> was restructured into `/start`, `/crosswalk`, `/success`, `/campaign`, `/resources` when it
> moved out), the `UNNYC_SPY_IDS` IntersectionObserver scroll-spy in `Navbar.js`, and the `unnyc`
> cascade layer. The nav now carries a single **external** link to `https://unnyc.wegov.nyc`.
> `Navbar.js`'s submenu machinery is kept but is **currently unexercised** — no CMS nav link
> defines `children`, and hash children can no longer report active without the scroll-spy.
>
> **Both follow-ups are done as of `84a83de` (2026-08-04)** — `frontend/next.config.mjs` now
> redirects all of `/unnyc/*` to the standalone site, and the dead `unnyc.wegov.nyc` host rule
> is deleted. Things to know about that config:
> - `permanent: true` emits **308**, not 301. Equivalent for search engines.
> - Rules are ordered **specific-before-catch-all** — Next.js matches redirects in array order,
>   so a new specific `/unnyc/…` rule must go **above** the `/unnyc/:path*` catch-all or it
>   will never fire.
> - **`/unnyc/guide` is special-cased** to `unnyc.wegov.nyc/resources`. That long-form article
>   was never carried over to the campaign site, so the catch-all would have 404'd it. The
>   original still serves at `old-unnyc.wegov.nyc/guide.html` — one more reason not to retire
>   that site casually.
> - `/unnyc/` (trailing slash) takes two hops: Next's own trailing-slash normalization runs
>   before custom redirects. Not worth fighting.
>
> The `guide` article's JSX went with the deletion. It is recoverable from git history, and the
> rendered article is still live at `old-unnyc.wegov.nyc/guide.html` — which the `/unnyc/guide`
> redirect above depends on remaining true, so **that old site is load-bearing.**

> [!WARNING]
> **Secrets were committed to this PUBLIC repo and are still in git history.** Two unencrypted
> private keys (`ssh_key.pem`, `LightsailDefaultKey-us-east-1.pem`), a public key, and 12 `*.exp`
> scripts carrying a literal passphrase were removed from the tree in `509149b` (2026-08-04), and
> `.gitignore` now blocks them. GitHub secret scanning + push protection are now ON (both had been
> off, which is why no alert ever fired). **History is NOT purged** — see
> [`docs/SECRET-PURGE.md`](docs/SECRET-PURGE.md) for fingerprints, per-key risk and the
> `git filter-repo` procedure. Verified during triage: the exposed `ssh_key.pem` is NOT trusted by
> root on Hetzner `utilities-2`, and the owner confirms Lightsail is retired — so this is hygiene,
> not an active incident. Tracked as task `51968fc0`.

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

- **Frontend**: Next.js, styled by `@wegovnyc/design-tokens` (`wegov` brand variant). Hosted on **Vercel** (`devins-projects-1baf43f0/wegovnyc-frontend`); deploys automatically on push to `main`.
- **CMS**: the **Sarapis Payload** instance (`next.sarapis.org`), shared with sarapis.org and databook.nyc. Content is brand-scoped — this site reads only docs whose `sites` includes the **`wegovnyc`** brand (Sites doc #2). Edit in that one admin; a post can be published to several brands at once.
- **What comes from the CMS**: blog posts (`/blog`, `/blog/[slug]`, category + tag pages) and the site chrome (navbar/footer/SEO via the brand's Site doc). ⚠ The `events` and `news-items` collections are still populated for the **wegovnyc** brand but nothing in THIS repo renders them any more — they were the `/unnyc` hub's, and that tree is deleted. `sarapis/unnyc` does not read them either (its copy is static). `lib/api.js` still handles those endpoints; treat them as unused here, not as a live dependency.
- **What does NOT**: the home page and `/about` are **frozen** in `frontend/src/content/frozen-pages.js` (section data rendered by the existing `SectionRenderer`). Edit that file, not the CMS.

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
3. **Content changes** happen in the Sarapis Payload admin, not in a deploy. Blog posts appear without
   a rebuild (`/blog` is `revalidate = 3600`, so allow up to an hour or redeploy to force it).

## Gotchas

- **Frozen marketing pages**: home + `/about` come from `frontend/src/content/frozen-pages.js`, and
  their images from `frontend/public/frozen-media/` (migrated off Strapi 2026-07-29). Editing them in
  any CMS will do nothing.
- **The `/unnyc` gotchas are GONE with the routes** (deleted 2026-08-05). The static fallback that once
  masked three lost CMS news items, and the date-aware events filtering, both lived in that tree. The
  lesson survives them though: **that fallback made a real content loss look like success** — a
  "byte-identical" check passed because it compared against an already-degraded page. If you change a
  CMS-backed source, diff row counts against the CMS, not just rendered output.
- **CSS / design system.** Layer order is `reset < theme < components`, declared in
  `frontend/src/app/base.css`. The `unnyc` layer went with the routes. Component styling goes in
  `@layer components`; a new microsite needing to beat the theme declares its layer *after* it —
  later layers win regardless of specificity, so no `:root`/`!important` hacks.
  - Tokens come from **[`@wegovnyc/design-tokens`](https://github.com/sarapis/wegovnyc-design-tokens)**
    (a git dependency), not a local file. `frontend/src/styles/wegov-tokens.css` was DELETED
    2026-08-05 — it had silently forked into a byte-identical copy in `sarapis/unnyc`.
  - **Every rule reads the SEMANTIC tier (`--wg-*`) directly.** The 27 legacy aliases
    (`--foreground`, `--primary-color`, `--wegov-*`) were removed after migrating all 128 reads.
    **Never write a colour literal or read a reference token (`--db-*`) in a rule** — both are
    invisible to the brand variant, which is the whole point of the two tiers. If a value is
    missing, add a semantic upstream and bump the dependency **in every consumer** (a git dep pins
    to a commit, and a missing custom property fails *silently*).
  - `npm run lint:tokens` warns on violations; it also runs as `prebuild`, so it prints on every
    Vercel build. It is warn-only and baselined — `globals.css` carries 46 known pre-system literals
    in `.wg-lint-baseline.json`, so only NEW findings are reported.
  - Full model: the `wegovnyc-design-system` KI.
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
