/**
 * Single source of truth for Support Donate page default content.
 * Used by: studio-creekside/scripts/seed.ts (seed only). Page uses blanks; defaults are for seeding.
 */

export const DOCUMENT_ID = 'supportDonate'
export const SANITY_TYPE = 'supportDonate' as const

const CALENDAR_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`
const HEART_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
const HOME_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`

export const DEFAULT_CONTENT = {
  pageTitle: 'Donate',
  hero: {
    headingPrefix: 'Make a gift to ',
    headingHighlight: 'Creekside',
    headingSuffix: '',
    subheading:
      'Your gift powers individualized education and suite-level autism services for students and their families.',
    donateCta: 'Donate Now',
    donateHref: '#donate-now',
  },
  waysToGive: {
    sectionTitle: 'Donate Now',
    donationAmounts: ['$50', '$100', '$250', '$500', '$1,000', 'Other'],
    monthlyLabel: 'Monthly',
    inKindTitle: 'In-Kind Donations',
    inKindSubtitle: 'Classroom, sensory, art/music, and campus supplies.',
  },
  givingOptions: {
    sectionTitle: 'Giving Options',
    items: [
      {
        title: 'Monthly Giving',
        description:
          "Join a circle of supporters who provide steady, consistent funding for staffing, therapies, classroom materials, and learning trips. You'll receive impact updates during the year.",
        iconSvg: CALENDAR_ICON,
      },
      {
        title: 'Tribute & Memorial Gifts',
        description:
          "Celebrate someone special. We'll notify the honoree or family with a customized message (gift amount withheld).",
        iconSvg: HEART_ICON,
      },
      {
        title: 'Employer Matching',
        description:
          "Many employers match charitable donations and volunteer hours. After giving, check \"My company will match this gift\" and we'll help complete the process.",
        iconSvg: HOME_ICON,
      },
    ],
  },
  transparency: {
    title: 'Transparency & Privacy',
    body:
      'Creekside acknowledges all gifts and respects donor intent and privacy. Contributions are tax-deductible as allowed by law. Tax ID (EIN): [insert]. For assistance, contact giving@creeksideschool.org.',
  },
} as const

/** Builds the Sanity document for createOrReplace (text/arrays only; add hero image in Studio). */
export function buildSanityDocument(): Record<string, unknown> {
  const d = DEFAULT_CONTENT
  return {
    _id: DOCUMENT_ID,
    _type: SANITY_TYPE,
    title: d.pageTitle,
    heroText: {
      headingPrefix: d.hero.headingPrefix,
      headingHighlight: d.hero.headingHighlight,
      headingSuffix: d.hero.headingSuffix,
      subheading: d.hero.subheading,
      donateCta: d.hero.donateCta,
      donateHref: d.hero.donateHref,
    },
    waysToGiveText: {
      sectionTitle: d.waysToGive.sectionTitle,
      donationAmounts: d.waysToGive.donationAmounts,
      monthlyLabel: d.waysToGive.monthlyLabel,
      inKindTitle: d.waysToGive.inKindTitle,
      inKindSubtitle: d.waysToGive.inKindSubtitle,
    },
    givingOptionsItems: d.givingOptions.items.map((item, i) => ({
      _type: 'object',
      _key: `opt-${i}`,
      title: item.title,
      description: item.description,
      iconSvg: item.iconSvg,
    })),
    transparencyText: {
      title: d.transparency.title,
      body: d.transparency.body,
    },
  }
}
