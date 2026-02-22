/**
 * Single source of truth for Support page default content.
 * Used by: studio-creekside/scripts/seed.ts (seed only). Page uses blanks; defaults are for seeding.
 */

export const DOCUMENT_ID = 'support'
export const SANITY_TYPE = 'support' as const

const GIFT_ICON_1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`
const GIFT_ICON_2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>`
const GIFT_ICON_3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>`
const GIFT_ICON_4 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`

export const DEFAULT_CONTENT = {
  title: 'Support Us',
  hero: {
    headingPrefix: 'Help Students with Profound Autism ',
    headingHighlight: 'Thrive',
    headingSuffix: '',
    subheading:
      'Your generosity fuels individualized education, therapy, and family support at Creekside.',
    donateCta: 'Donate',
    donateHref: '/support/donate',
  },
  whySupportMatters: {
    title: 'Why Your Support Matters',
    description:
      "At Creekside, every student's program is tailored to their interests, strengths, and needs. Donations sustain small class sizes, suite-level autism services, and a campus built for safety, sensory needs, and learning in community.",
  },
  impactHighlights: {
    sectionTitle: 'Impact Highlights',
    items: [
      {
        title: 'Individualized learning',
        description:
          'Small classrooms, highly trained staff, and daily collaboration time.',
      },
      {
        title: 'Suite-level services',
        description:
          'Speech, OT, music, art, behavioral and mental-health support integrated into each day.',
      },
      {
        title: 'Family partnership',
        description:
          'Resources and coaching that help learning extend beyond the classroom.',
      },
    ],
  },
  waysToGive: {
    sectionTitle: 'Ways to Give',
    donationAmounts: ['$50', '$100', '$250', '$500', '$1,000', 'Other'],
    monthlyLabel: 'Monthly',
    inKindTitle: 'In-Kind Donations',
    inKindSubtitle: 'Classroom, sensory, art/music, and campus supplies.',
  },
  howToGive: {
    sectionTitle: 'How To Give',
    steps: [
      {
        heading: 'Check the Wish List',
        subHeading: '',
        text: 'for current needs and preferred brands/sizes.',
        link: null as string | null,
      },
      {
        heading: 'Email',
        subHeading: 'inkind@creeksideschool.org',
        text: 'for current needs and preferred brands/sizes.',
        link: 'mailto:inkind@creeksideschool.org',
      },
      {
        heading: 'Receipt',
        subHeading: '',
        text: "We'll provide an acknowledgment for your records (valuation determined by donor).",
        link: null as string | null,
      },
    ],
  },
  donateNow: {
    title: 'Donate Now',
    features: ['Become a Monthly Donor', 'Give in Honor/Memory', 'Ask About Matching'],
  },
  whatGiftMakesPossible: {
    sectionTitle: 'What Your Gift Makes Possible',
    items: [
      { title: 'Student-centered learning', text: 'with small class sizes and highly trained teams.', iconSvg: GIFT_ICON_1 },
      {
        title: 'Therapy integrated into school day',
        text: 'speech, OT, music, art, behavioral, and mental health.',
        iconSvg: GIFT_ICON_2,
      },
      {
        title: 'Community-based instruction',
        text: 'that builds real-life skills and confidence.',
        iconSvg: GIFT_ICON_3,
      },
      {
        title: 'Family support',
        text: 'so progress continues at home and in the community.',
        iconSvg: GIFT_ICON_4,
      },
    ],
  },
  otherWaysToGive: {
    sectionTitle: 'Other Ways to Give',
    items: [
      { title: 'Donor-Advised Funds (DAF)', text: 'Recommend a grant to Creekside School (EIN [insert]).', textHtml: '', icon: 'BarChart', link: null as string | null },
      {
        title: 'Stock & Securities',
        text: 'Potential tax advantages; email giving@creeksideschool.org for instructions.',
        textHtml: 'Potential tax advantages; email <strong>giving@creeksideschool.org</strong> for instructions.',
        icon: 'TrendingUp',
        link: 'mailto:giving@creeksideschool.org',
      },
      {
        title: 'Wire/ACH Transfers',
        text: 'Request routing details at giving@creeksideschool.org.',
        textHtml: 'Request routing details at <strong>giving@creeksideschool.org</strong>.',
        icon: 'TrendingUp',
        link: 'mailto:giving@creeksideschool.org',
      },
      {
        title: 'Checks',
        text: 'Payable to Creekside School, mailed to 5629 Lean Avenue, San Jose, CA 95123.',
        textHtml: 'Payable to Creekside School, mailed to <strong>5629 Lean Avenue, San Jose, CA 95123</strong>.',
        icon: 'Presentation',
        link: null as string | null,
      },
      {
        title: 'Legacy/Planned Gifts',
        text: "Name Creekside in your will, trust, or beneficiary designations; we'll provide sample bequest language.",
        textHtml: '',
        icon: 'Heart',
        link: null as string | null,
      },
    ],
  },
  credibility: {
    title: 'Credibility / Compliance',
    bodyHtml:
      'Creekside School is a nonpublic school serving students with moderate-to-severe autism in Santa Clara County. Tax ID (EIN): [insert]. Gifts are tax-deductible as allowed by law.<br />For questions: info@creeksideschool.org, 408-448-2494. 5629 Lean Avenue, San Jose, CA 95123.',
  },
} as const

/** Builds the Sanity document for createOrReplace (text/arrays only; add images in Studio). */
export function buildSanityDocument(): Record<string, unknown> {
  const d = DEFAULT_CONTENT
  return {
    _id: DOCUMENT_ID,
    _type: SANITY_TYPE,
    title: d.title,
    heroText: {
      headingPrefix: d.hero.headingPrefix,
      headingHighlight: d.hero.headingHighlight,
      headingSuffix: d.hero.headingSuffix,
      subheading: d.hero.subheading,
      donateCta: d.hero.donateCta,
      donateHref: d.hero.donateHref,
    },
    whySupportMattersText: {
      title: d.whySupportMatters.title,
      description: d.whySupportMatters.description,
    },
    impactHighlightsText: {
      sectionTitle: d.impactHighlights.sectionTitle,
      items: d.impactHighlights.items.map((item, i) => ({
        _type: 'object',
        _key: `impact-${i}`,
        title: item.title,
        description: item.description,
      })),
    },
    waysToGiveText: {
      sectionTitle: d.waysToGive.sectionTitle,
      donationAmounts: d.waysToGive.donationAmounts,
      monthlyLabel: d.waysToGive.monthlyLabel,
      inKindTitle: d.waysToGive.inKindTitle,
      inKindSubtitle: d.waysToGive.inKindSubtitle,
    },
    howToGiveText: {
      sectionTitle: d.howToGive.sectionTitle,
      steps: d.howToGive.steps.map((step, i) => ({
        _type: 'object',
        _key: `step-${i}`,
        heading: step.heading,
        subHeading: step.subHeading ?? '',
        text: step.text,
        link: step.link ?? undefined,
      })),
    },
    donateNowText: {
      title: d.donateNow.title,
      features: d.donateNow.features,
    },
    whatGiftMakesPossibleText: {
      sectionTitle: d.whatGiftMakesPossible.sectionTitle,
      items: d.whatGiftMakesPossible.items.map((item, i) => ({
        _type: 'object',
        _key: `gift-${i}`,
        title: item.title,
        text: item.text,
        iconSvg: item.iconSvg,
      })),
    },
    otherWaysToGiveText: {
      sectionTitle: d.otherWaysToGive.sectionTitle,
      items: d.otherWaysToGive.items.map((item, i) => ({
        _type: 'object',
        _key: `other-${i}`,
        title: item.title,
        text: item.text,
        textHtml: item.textHtml ?? '',
        icon: item.icon,
        link: item.link ?? undefined,
      })),
    },
    credibilityText: {
      title: d.credibility.title,
      bodyHtml: d.credibility.bodyHtml,
    },
  }
}
