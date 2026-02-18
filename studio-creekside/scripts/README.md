# Studio scripts

## seed (generic)

Creates or replaces a Sanity singleton document using the default content from the page’s **defaults file**.

Each page has a defaults file at `src/lib/<page>-defaults.ts` that exports `buildSanityDocument()`. The seed script imports that file and runs it, so content stays in sync with the app.

**Run from `studio-creekside`:**

```bash
# Seed a specific page (pass the page name)
npm run seed what-we-do
npm run seed who-we-are
npm run seed join-us

# Or use the shortcuts
npm run seed:what-we-do
npm run seed:who-we-are
npm run seed:join-us
```

For the full pattern (index, lib defaults, schema, seed, blanks), see **`docs/CMS-PAGE-SETUP.md`** in the repo root.

**Requirements:**

1. **API token with Editor (write) access**  
   Create a token at [sanity.io/manage](https://www.sanity.io/manage) → project **zu0udp1i** → **API** → **Tokens**.  
   Put it in `studio-creekside/.env` as `SANITY_AUTH_TOKEN=...` (or pass it when running).

2. **Dependencies installed**  
   From `studio-creekside`: `npm install`

Re-running overwrites the existing document (same `_id`), so it’s safe to run multiple times.

**Adding a new page:**

1. Add `src/lib/<page>-defaults.ts` that exports `buildSanityDocument(): Record<string, unknown>`.
2. Register the page in `scripts/seed.ts` in the `PAGE_MODULES` object.
