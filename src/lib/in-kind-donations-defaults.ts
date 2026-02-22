/**
 * Single source of truth for In-Kind Donations page default content.
 * Used by: studio-creekside/scripts/seed.ts (seed only). Page uses blanks; defaults are for seeding.
 */

export const DOCUMENT_ID = 'supportInKindDonations'
export const SANITY_TYPE = 'supportInKindDonations' as const

export const DEFAULT_CONTENT = {
  title: 'In-Kind Donations',
  hero: {
    headingPrefix: '',
    headingHighlight: 'Donate',
    headingSuffix: ' supplies and materials',
    subheading:
      'Tangible items help classrooms and therapy teams stretch every dollar.',
    donateCta: 'View Wishlist',
    donateHref: '#content',
  },
  wishlist: {
    sectionTitle: 'Wishlist',
    categories: [
      {
        title: 'Classroom & Teaching',
        items: [
          { text: 'laminating pouches', link: '#' as string | null },
          { text: 'Velcro® dots/strips', link: '#' as string | null },
          { text: 'dry-erase markers', link: '#' as string | null },
          { text: 'binders', link: '#' as string | null },
          { text: 'page protectors', link: '#' as string | null },
        ],
      },
      {
        title: 'Sensory & Regulation',
        items: [
          { text: 'fidget tools', link: null },
          { text: 'weighted lap pads', link: null },
          { text: 'noise-reducing headphones', link: null },
          { text: 'therapy putty', link: null },
          { text: 'resistance bands', link: null },
        ],
      },
      {
        title: 'Art & Music',
        items: [
          { text: 'tempera/acrylic paints', link: null },
          { text: 'brushes', link: null },
          { text: 'cardstock', link: null },
          { text: 'glue sticks', link: null },
          { text: 'handheld rhythm instruments', link: null },
        ],
      },
      {
        title: 'Life Skills & CBI',
        items: [
          { text: 'grocery store gift cards', link: null },
          { text: 'clipboards', link: null },
          { text: 'visual timers', link: null },
          { text: 'reusable shopping bags', link: null },
        ],
      },
      {
        title: 'Campus & Outdoor',
        items: [
          { text: 'balls', link: null },
          { text: 'cones', link: null },
          { text: 'scooter boards', link: null },
          { text: 'chalk', link: null },
          { text: 'bubbles', link: null },
        ],
      },
    ],
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
  drives: {
    cards: [
      {
        type: 'blue' as const,
        title: 'Group & Corporate Drives',
        text: 'We\'ll help you run a themed drive (e.g., "Sensory Kits" or "Art Month") and provide lists, signage, and pickup details.',
        textHtml: null as string | null,
        emailLink: null as string | null,
      },
      {
        type: 'black' as const,
        title: "We're Unable to Accept",
        text: "Used furniture, large electronics, medical devices, perishables, or items not suitable for student safety. If unsure, email inkind@creeksideschool.org.",
        textHtml:
          'Used furniture, large electronics, medical devices, perishables, or items not suitable for student safety. If unsure, email <a href="mailto:inkind@creeksideschool.org" class="drive-card-link">inkind@creeksideschool.org</a>.',
        emailLink: 'mailto:inkind@creeksideschool.org' as string | null,
      },
    ],
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
    wishlistText: {
      sectionTitle: d.wishlist.sectionTitle,
      categories: d.wishlist.categories.map((cat, i) => ({
        _type: 'object',
        _key: `cat-${i}`,
        title: cat.title,
        items: cat.items.map((item, j) => ({
          _type: 'object',
          _key: `item-${i}-${j}`,
          text: item.text,
          link: item.link ?? undefined,
        })),
      })),
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
    drivesText: {
      cards: d.drives.cards.map((card, i) => ({
        _type: 'object',
        _key: `card-${i}`,
        type: card.type,
        title: card.title,
        text: card.text,
        textHtml: card.textHtml ?? undefined,
        emailLink: card.emailLink ?? undefined,
      })),
    },
  }
}
