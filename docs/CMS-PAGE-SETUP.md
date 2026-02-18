# CMS page setup (Sanity)

This doc describes how to add or convert a page so its content comes from Sanity, with a single source of default content used only for seeding.

**Pattern in short:**

1. **Extract all CMS data to the page index** — the index fetches from Sanity and builds one `content` object.
2. **Put default values in `src/lib`** — one defaults file per page, used only by the seed script.
3. **Add a schema type in Sanity** — document type and fields in `studio-creekside/schemaTypes/`.
4. **Add seed support** — generic seed script creates/updates the document from the defaults file.
5. **Keep default values in Astro as blanks** — index uses `?? ''` and `?? []` only; no import of default copy. Image fallbacks stay in the index via `DEFAULT_IMAGES` and `withDefaultImage`.

Reference implementations: **What We Do**, **Who We Are**, **Join Us**.

---

## 1. Extract all CMS data to the index

- In `src/pages/<page>/index.astro`:
  - Import `sanityClient` from `'sanity:client'`.
  - Define a **GROQ query** for the page’s document type (singleton, e.g. `*[_type == "joinUs"][0] { ... }`).
  - `const data = await sanityClient.fetch(QUERY)`.
  - Build a **single `content` object** that maps Sanity fields to the shape your sections expect.
  - Use **blanks for fallbacks**: `data?.field ?? ''` or `?? []`. Do **not** import default copy (e.g. `DEFAULT_CONTENT`) in the index.
  - For **images**, keep fallbacks in the index:
    - `DEFAULT_IMAGES = { sectionKey: { url: ASSETS_BASE_URL + '...', alt: '...' }, ... }`.
    - `withDefaultImage(cmsImage, DEFAULT_IMAGES.sectionKey)` so each image is either from Sanity or the default URL/alt.
  - Pass `content` (or parts of it) into each section component.

---

## 2. Put default values in lib

- Add **`src/lib/<page>-defaults.ts`** (e.g. `join-us-defaults.ts`).
- Export:
  - **`DOCUMENT_ID`** — Sanity document ID (e.g. `'joinUs'`).
  - **`SANITY_TYPE`** — document type name (e.g. `'joinUs'`).
  - **`DEFAULT_CONTENT`** — plain object with all default copy (and structure) for the page. Used only to build the seed document; no image refs needed.
  - **`buildSanityDocument(): Record<string, unknown>`** — returns the object to send to `createOrReplace`: `_id`, `_type`, and all fields. Text and arrays only; omit image assets (editors add those in Studio).

This file is the **single source of truth** for “default” content; the Astro page does not import it for display.

---

## 3. Add schema type in Sanity

- Add **`studio-creekside/schemaTypes/<name>Type.ts`** (e.g. `joinUsType.ts`).
  - Use `defineType`, `defineField`, `defineArrayMember` from `'sanity'`.
  - Define a **document** with fields that match what the index expects (e.g. `heroText`, `whyWorkAtCreeksideText`, etc.).
  - For images use `type: 'image'` with an `alt` field in `options.fields`.
- Register the type in **`studio-creekside/schemaTypes/index.ts`** (import and add to `schemaTypes` array).

Field names in the schema should align with the GROQ query and with `buildSanityDocument()` in the defaults file.

---

## 4. Add seed for the page

- In **`studio-creekside/scripts/seed.ts`**:
  - Add an entry to **`PAGE_MODULES`**: `'<page-slug>': () => import('../../src/lib/<page>-defaults')`  
    (e.g. `'join-us': () => import('../../src/lib/join-us-defaults')`).
- In **`studio-creekside/package.json`** (optional but handy):
  - Add a script: `"seed:<page>": "npx tsx scripts/seed.ts <page>"`  
    (e.g. `"seed:join-us": "npx tsx scripts/seed.ts join-us"`).

**Run the seed** from `studio-creekside`:

```bash
npm run seed join-us
# or
npm run seed:join-us
```

Requires **`SANITY_AUTH_TOKEN`** in `studio-creekside/.env` with Editor (write) access. See `studio-creekside/scripts/README.md` for details.

---

## 5. Keep default values in Astro as blanks

- **Index**
  - Do **not** import `DEFAULT_CONTENT` (or any default copy) from the lib defaults file.
  - Use only `?? ''` and `?? []` for text and arrays when building `content`.
  - Use `DEFAULT_IMAGES` and `withDefaultImage()` in the index for image fallbacks.
- **Section components**
  - Accept all content via props from the index.
  - Use **blank defaults** in destructuring: `heading = ''`, `steps = []`, etc. No hardcoded copy (e.g. no `heading = 'How We Hire'`).
  - For images, sections receive the image object (e.g. `{ asset?: { url }, alt? }`) from the index; index is responsible for applying default URL/alt when Sanity has no image.

Result: the live site shows Sanity content when present, and blanks when not; the seed is the only place that uses the default copy from `src/lib/<page>-defaults.ts`.

---

## File checklist (new CMS page)

| Step | Location | What to add/do |
|------|----------|----------------|
| 1 | `src/pages/<page>/index.astro` | Sanity client, GROQ query, `content` with blanks + `DEFAULT_IMAGES`/`withDefaultImage`, pass `content` to sections |
| 2 | `src/lib/<page>-defaults.ts` | `DOCUMENT_ID`, `SANITY_TYPE`, `DEFAULT_CONTENT`, `buildSanityDocument()` |
| 3 | `studio-creekside/schemaTypes/<name>Type.ts` | Document schema; register in `schemaTypes/index.ts` |
| 4 | `studio-creekside/scripts/seed.ts` | Add `<page>` to `PAGE_MODULES` |
| 4 | `studio-creekside/package.json` | Add `"seed:<page>": "npx tsx scripts/seed.ts <page>"` (optional) |
| 5 | `src/pages/<page>/_sections/*.astro` | Props only from index; default props = `''` or `[]` |

---

## Related

- **Seed script details:** `studio-creekside/scripts/README.md`
- **Sanity project:** `projectId` `zu0udp1i`, dataset `production`
