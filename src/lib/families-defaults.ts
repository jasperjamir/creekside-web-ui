/**
 * Single source of truth for For Families default content.
 * Used by: studio-creekside/scripts/seed.ts (seed only). Page uses blanks; defaults are for seeding.
 */

export const DOCUMENT_ID = 'families'
export const SANITY_TYPE = 'families' as const

export const DEFAULT_CONTENT = {
  pageTitle: 'For Families',
  hero: {
    imageAlt: 'Students and families at Creekside School',
    headingPrefix: 'Sign up through our ',
    headingHighlight: 'interest form',
    headingSuffix: '',
    subheading:
      'Interested parents may complete an "Admissions Interest Form" and are encouraged to read the information "About Our Waitlist".',
    ctaText: 'View parent resources',
    ctaHref: '/families/parent-resources',
  },
  aboutAdmission: {
    title: 'About Admission',
    description: `The Creekside School is certified as a nonpublic school (NPS) by the California Department of Education (CDE) to serve students in Kindergarten to 12th grade, through a contractual agreement with the Special Education Local Plan Area (SELPA) in Santa Clara County. Creekside also has a post-secondary program for students aged 18-22 years.

Students are enrolled in the program through an offer of Free Appropriate Public Education (FAPE) by the student's home school district in agreement with their IEP team.

The Creekside School also maintains its status as a private school. Student enrollment may be made privately through a placement agreement and fulfillment of tuition.

Questions can be directed to: <strong>admissions@creeksideschool.org</strong>`,
    imageAlt: 'Students and staff at Creekside engaging in a learning activity.',
  },
  sarc: {
    title: 'School Accountability Report Card (SARC)',
    description: [
      'A SARC provides parents and the community with information about schools that receive state funding.',
      'School report cards are updated annually and made available on February 1st of each year.',
    ],
    button: {
      label: 'Creekside SARC Report',
      link: '/reports/sarc-current.pdf',
    },
    imageAlt: 'Students and staff at Creekside engaging in a learning activity.',
  },
  sarcArchive: [
    { years: '2021-2022', label: 'SARC', theme: 'light-blue', link: '/reports/sarc-21-22.pdf' },
    { years: '2022-2023', label: 'SARC', theme: 'yellow', link: '/reports/sarc-22-23.pdf' },
    { years: '2023-2024', label: 'SARC', theme: 'navy', link: '/reports/sarc-23-24.pdf' },
  ],
  resources: {
    title: 'Resource for Parents',
    features: [
      "The Creekside School's emphasis on family stems from our recognition that autism doesn't just impact parents.",
    ],
    button: {
      label: 'View Parent Resources',
      link: '/families/parent-resources',
    },
    imageAlt: 'Students and staff at Creekside engaging in a learning activity.',
  },
} as const

/** Builds the Sanity document for createOrReplace (text/arrays only; add images in Studio). */
export function buildSanityDocument(): Record<string, unknown> {
  const d = DEFAULT_CONTENT
  return {
    _id: DOCUMENT_ID,
    _type: SANITY_TYPE,
    title: d.pageTitle,
    heroText: {
      imageAlt: d.hero.imageAlt,
      headingPrefix: d.hero.headingPrefix,
      headingHighlight: d.hero.headingHighlight,
      headingSuffix: d.hero.headingSuffix,
      subheading: d.hero.subheading,
      ctaText: d.hero.ctaText,
      ctaHref: d.hero.ctaHref,
    },
    aboutAdmissionText: {
      title: d.aboutAdmission.title,
      description: d.aboutAdmission.description,
      imageAlt: d.aboutAdmission.imageAlt,
    },
    sarcText: {
      title: d.sarc.title,
      description: d.sarc.description,
      button: d.sarc.button,
      imageAlt: d.sarc.imageAlt,
    },
    sarcArchiveItems: d.sarcArchive.map((item, i) => ({
      _type: 'object',
      _key: `item-${i}`,
      years: item.years,
      label: item.label,
      theme: item.theme,
      link: item.link,
    })),
    resourcesText: {
      title: d.resources.title,
      features: d.resources.features,
      button: d.resources.button,
      imageAlt: d.resources.imageAlt,
    },
  }
}
