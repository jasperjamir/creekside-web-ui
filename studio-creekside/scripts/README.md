# Studio scripts

## seed:who-we-are

Creates or replaces the **Who We Are** singleton document in Sanity with the default page content.

**Run from `studio-creekside`:**

```bash
npm run seed:who-we-are
```

**Requirements:**

1. **API token with write access**  
   Create a token at [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **Tokens**, then add it when running:

   ```bash
   SANITY_AUTH_TOKEN=your_token_here npm run seed:who-we-are
   ```

2. **Dependencies installed**  
   From `studio-creekside`: `npm install`

Re-running the script overwrites the existing Who We Are document (same `_id`), so it’s safe to run multiple times.
