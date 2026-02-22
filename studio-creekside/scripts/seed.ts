/**
 * Generic seed script: creates or replaces a Sanity document using the page's defaults file.
 *
 * Usage: npm run seed <page>
 *   npm run seed what-we-do
 *   npm run seed who-we-are
 *
 * Each page has a defaults file at src/lib/<page>-defaults.ts that must export:
 *   buildSanityDocument(): Record<string, unknown>
 *
 * Loads .env from studio-creekside if present. Requires SANITY_AUTH_TOKEN with Editor access.
 */

import 'dotenv/config'
import { createClient } from '@sanity/client'

const projectId = 'zu0udp1i'
const dataset = 'production'
const apiVersion = '2024-01-01'

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
})

const PAGE_MODULES: Record<
  string,
  () => Promise<{ buildSanityDocument: () => Record<string, unknown> }>
> = {
  'home': () => import('../../src/lib/home-defaults'),
  'what-we-do': () => import('../../src/lib/what-we-do-defaults'),
  'who-we-are': () => import('../../src/lib/who-we-are-defaults'),
  'join-us': () => import('../../src/lib/join-us-defaults'),
  'families': () => import('../../src/lib/families-defaults'),
  'parent-resources': () => import('../../src/lib/parent-resources-defaults'),
  'admissions-process': () => import('../../src/lib/admissions-process-defaults'),
  'support-donate': () => import('../../src/lib/support-donate-defaults'),
}

async function main() {
  const page = process.argv[2]
  if (!page) {
    console.error('Usage: npm run seed <page>')
    console.error('  Pages:', Object.keys(PAGE_MODULES).join(', '))
    process.exit(1)
  }

  const load = PAGE_MODULES[page]
  if (!load) {
    console.error('Unknown page:', page)
    console.error('  Available:', Object.keys(PAGE_MODULES).join(', '))
    process.exit(1)
  }

  if (!process.env.SANITY_AUTH_TOKEN) {
    console.error(
      'Missing SANITY_AUTH_TOKEN. Create a token with Editor access at https://www.sanity.io/manage/project/zu0udp1i/api#tokens'
    )
    process.exit(1)
  }

  try {
    const mod = await load()
    const doc = mod.buildSanityDocument()
    const result = await client.createOrReplace(doc)
    console.log('Document created/updated:', result._id)
  } catch (err) {
    console.error('Seed failed:', err)
    process.exit(1)
  }
}

main()
