# WeGovMarketing

> WeGov marketing website — Next.js + Strapi CMS, WeGov theme (UNNY design system)

## Live Project Data

```
get_workspace_detail("WeGovMarketing")   → services, URLs, repos, recent commits
list_tasks(workspace="WeGovMarketing")   → open tasks
search_knowledge(topic="WeGovMarketing") → strapi_cms_management KI, web_infrastructure_and_security KI
```

## Tech Stack

- **Frontend**: Next.js utilizing the UNNY design system
- **Backend / CMS**: Strapi CMS (v5 — 5.33.0). UNNYC events + news are content types (`event`, `news-item`); page/marketing content uses `page` dynamic zones + `article` (blog).
- **Hosting (Frontend)**: Vercel (`devins-projects-1baf43f0/wegovnyc-frontend`)
- **Hosting (CMS)**: Hetzner `utilities-2` (91.99.169.60, `root@`) via Docker + Let's Encrypt SSL. Strapi runs as the `opt-strapi-1` container (`node:20-slim`, port 1337) behind the shared `opt-nginx-1` reverse proxy; compose project lives in `/opt`.

## Repositories & URLs

- **Frontend**: `https://github.com/wegovnyc/wegovnyc_front` (Live: `https://wegov.nyc`)
- **Strapi CMS**: `https://github.com/wegovnyc/wegovnyc_back` (Live: `https://strapi.wegov.nyc/`)

## Development & Deployment Process

The standard DevOps lifecycle for WeGovMarketing is **Local → GitHub → Production**.

1. **Develop Locally** 
   - Test UI updates against the local or remote Strapi staging instance.
2. **Push to GitHub**
   - Commit code to ensure source control is up to date (`git push`)
3. **Deploy to Production**
   - Frontend: Vercel automatically deploys when code is pushed to the target branch.
   - CMS: **`/opt/strapi` is NOT a git checkout** — the `opt-strapi-1` container volume-mounts `/opt/strapi` (`/opt/docker-compose.yml`) and runs the source directly (`npm install --production && npm run start`). Deploy = sync files into `/opt/strapi` (e.g. `rsync`), `chown 1000:1000`, then restart: `cd /opt && docker compose up -d strapi`. New content types create their tables + public perms on boot (bootstrap in `src/index.js`); seed with `docker compose run --rm strapi node scripts/seed-unnyc.js`. The `wegovnyc_back` repo is the source-of-record, NOT the deploy path — keep it in sync manually (it had drifted behind prod; reconciled 2026-07-09). SQLite DB: `/opt/strapi/.tmp/data.db`.

## Gotchas

- **Strapi Content Types**: Managing dynamic zone architecture requires syncing schema changes between local and production.
- **Direct DB Updates**: See `strapi_cms_management` KI for direct SQLite DB updates via better-sqlite3 when no API token is available.
- **UNNYC content freshness**: `/unnyc` fetches `event` + `news-item` from Strapi (server-side in `app/unnyc/page.js`, `revalidate = 3600`), with the `@/data/unnyc` arrays kept as a build-time fallback. Events are date-aware — `UnnycEvents` drops any event past its `end`/`endDate` client-side and sorts soonest-first; news sorts newest-first by `sortDate`. A weekly host cron (`Sun 04:00 UTC`) runs `docker exec opt-strapi-1 node /srv/app/scripts/hygiene-unnyc.js` to unpublish past events (keeps the draft, reversible) + link-check; log at `/opt/strapi/.tmp/hygiene.log`.
- **CSS architecture (cascade layers)**: The frontend uses CSS `@layer` — order `reset < theme < components < unnyc`, declared in `frontend/src/app/base.css`, which imports the four global theme files into `@layer theme`. Shared design tokens live in `frontend/src/styles/wegov-tokens.css` (canonical navy `#162e51`; `--wg-*` semantic aliases). **Component styling goes in `@layer components`, page/microsite styling in its own later layer** — later layers beat the theme regardless of specificity, so no `:root`/`!important` hacks. UNNYC (`app/unnyc/unnyc.css`) is wrapped in `@layer unnyc`. Full model + brand-theme system: `wegovnyc-design-system` KI + Claude Design project.
- **SSL / cert renewal** (`strapi.wegov.nyc`, host `utilities-2`): host `certbot` issues to `/etc/letsencrypt/live/<domain>/`; the `opt-nginx-1` proxy serves them (its `/opt/nginx/certs/<domain>/` are symlinks to the live certs) and routes `/.well-known/acme-challenge/` to `/opt/nginx/certs`… `/opt/acme-challenge`. Renewal MUST use **webroot** (`-w /opt/acme-challenge`), never `--standalone` — nginx holds port 80, so standalone renewals silently fail. The renewal conf carries `renew_hook = docker exec opt-nginx-1 nginx -s reload` so a new cert is served automatically. Manual renew: `certbot certonly --webroot -w /opt/acme-challenge -d strapi.wegov.nyc --cert-name strapi.wegov.nyc` then reload nginx. (History: the cert expired 2026-07-09 because auto-renew had been failing on the standalone/port-80 conflict; fixed by switching to webroot + adding the reload hook. All sibling certs on this box (dash/n8n/tasks.flofactory.org, dash/n8n.itspruvn.com) were likewise converted to webroot + `renew_hook` on 2026-07-09; `certbot renew --dry-run` passes for all six. See `web_infrastructure_and_security` KI → `certbot_webroot_vs_standalone.md`.)
