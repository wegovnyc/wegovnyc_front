# Retired: the multi-theme switcher

> **Status: removed from the app on 2026-08-05.** wegov.nyc is now committed to
> the WeGov theme alone. Everything needed to understand or resurrect the
> concept is preserved in this directory.

## What it was

wegov.nyc could render itself in **three visual identities**, switchable at
runtime from a flag dropdown pinned to the top-right corner of every page:

| Theme | Label in the switcher | Idea |
|---|---|---|
| `nyc` | NYC Core Framework | The City's own design framework — what an official NYC.gov property looks like |
| `amsterdam` | Amsterdam Design System | Amsterdam's civic design system — a European reference point |
| `wegov` | WeGov | Our own editorial identity. **The default, and now the only one.** |

The point was **rhetorical, not functional**: a live demonstration that the same
civic content can wear a City framework, a respected European system, or our own
voice — useful when arguing that NYC's digital presence is a design *choice*.

## Why it was retired

It cost more than it argued.

- Three parallel CSS surfaces to keep working, ~330 lines beyond the base theme,
  each with its own `:root[data-theme='…']` selector prefix on every rule.
- Every styling change had to be reasoned about three times, or silently
  regressed two identities nobody was looking at.
- It fought the design-system work: the whole point of
  [`@wegovnyc/design-tokens`](https://github.com/sarapis/wegovnyc-design-tokens)
  is *one* system with per-brand variants. A second, older, unrelated theming
  mechanism sitting next to it was a live source of confusion about which one
  owned a given value.
- The switcher was permanently visible to real visitors at `position: fixed`,
  top-right, `z-index: 9999` — a demo control shipped on a public site.

The concept is worth keeping. The runtime machinery was not.

## What is preserved here

| File | What it is |
|---|---|
| `retired-themes/nyc.css` | The complete NYC Core Framework theme, verbatim (103 lines, 16 selectors) |
| `retired-themes/amsterdam.css` | The complete Amsterdam Design System theme, verbatim (228 lines, 35 selectors) |
| `retired-themes/ThemeToggle.js.txt` | The flag-dropdown switcher component |
| `retired-themes/ThemeContext.js.txt` | The provider — React state + `localStorage` persistence + the `data-theme` attribute write |

The two `.js.txt` files are renamed so the Next build and linters ignore them;
strip `.txt` to restore. Flag images are still in
`frontend/public/assets/{nyc,amsterdam,wegov}_flag.png` and are now **unreferenced**
by any source file — delete them if you want the space, but they're the only
copies.

## How the mechanism worked

1. `ThemeProvider` held `theme` in React state, defaulting to `'wegov'`.
2. An effect wrote `document.documentElement.setAttribute('data-theme', theme)`.
3. A second effect read `localStorage.theme` on mount and applied it if set.
4. `toggleTheme(id)` set state and persisted to `localStorage`.
5. Each theme stylesheet scoped every rule under `:root[data-theme='<id>']`, all
   imported into `@layer theme` in `base.css`.

**A real flaw worth knowing if you rebuild it:** because the attribute was
written in `useEffect`, it was *absent during SSR and first paint* — so the page
rendered unthemed for a beat before hydration. Removing the switcher fixed that
as a side effect, since `data-theme="wegov"` is now a static attribute on
`<html>` in the server-rendered markup. If you ever restore runtime switching,
write the attribute in the server-rendered HTML and correct it on hydration,
rather than only after.

## What was left in place, and why

`frontend/src/app/wegov.css` still scopes its 106 selectors under
`:root[data-theme='wegov']`, and `<html>` still carries a static
`data-theme="wegov"`. That prefix is now technically redundant.

**It was deliberately not flattened.** Dropping it changes specificity on every
rule — `:root[data-theme='wegov'] h1` is (0,2,1); a bare `h1` is (0,0,1) — which
would hand the win to any `globals.css` rule that currently loses to it. That is
106 chances to introduce a subtle visual regression in exchange for cosmetics, so
it is a separate change with its own verification, not a freebie bundled into a
deletion.

## Restoring it

1. `git mv` the two CSS files back to `frontend/src/app/`.
2. Strip `.txt` from both JS files and restore them to
   `frontend/src/components/` and `frontend/src/context/`.
3. Re-add their `@import … layer(theme)` lines to `frontend/src/app/base.css`.
4. Re-wrap the tree in `<ThemeProvider>` and mount `<ThemeToggle />` in
   `frontend/src/app/layout.js`, and drop the static `data-theme` from `<html>`
   (or better — keep it, and read the SSR flaw note above).

Note that any visitor with a stale `localStorage.theme` of `nyc` or `amsterdam`
simply gets the WeGov theme now; the orphaned key is harmless and needs no
migration.
