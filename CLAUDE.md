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
- **Backend / CMS**: Strapi CMS (v4)
- **Hosting (Frontend)**: Vercel (`devins-projects-1baf43f0/wegovnyc-frontend`)
- **Hosting (CMS)**: Hetzner utilities (178.156.245.46) via Docker + Let's Encrypt SSL

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
   - CMS: SSH into Hetzner instance, pull changes, run `docker compose up -d --build`.

## Gotchas

- **Strapi Content Types**: Managing dynamic zone architecture requires syncing schema changes between local and production.
- **Direct DB Updates**: See `strapi_cms_management` KI for direct SQLite DB updates via better-sqlite3 when no API token is available.
- **SSL Symmetry**: Ensure Nginx configuration reflects SSL routes properly for Strapi endpoints.
