/**
 * Single source of truth for Parent Resources default content.
 * Used by: studio-creekside/scripts/seed.ts (seed only). Page uses blanks; defaults are for seeding.
 */

export const DOCUMENT_ID = 'parentResources'
export const SANITY_TYPE = 'parentResources' as const

export const DEFAULT_CONTENT = {
  pageTitle: 'Parent Resources',
  hero: {
    headingPrefix: 'Key resources for ',
    headingHighlight: 'Parents',
    headingSuffix: '',
    subheading: '',
    ctaText: 'View parent resources',
    ctaHref: '/families/parent-resources',
  },
  familyImpact: {
    paragraphs: [
      'Autism impacts the whole family: siblings, grandparents, aunts, uncles and cousins.',
      "All families play an important role in their students' success. The families of students with autism play a crucial role in supporting their child's journey to adulthood.",
    ],
  },
  contactWithImage: {
    schoolName: 'The Creekside School:',
    address: ['5629 Lean Avenue', 'San Jose, CA 95123'],
    mapsLink: 'https://maps.google.com/?q=5629+Lean+Avenue+San+Jose+CA+95123',
    contactLabel: 'Contact us:',
    phone: '408.448.2494',
    email: 'info@creeksideschool.org',
  },
  navigatingSystems: {
    title: 'Navigating the systems that support your family',
    titleHighlight: 'family',
    description:
      "We've partnered with Undivided's specialists to help you understand what supports are available to your family and how to get the most out of them. Choose the topic you're interested in learning about to see curated resources with expert information and tips.",
  },
  benefitsCards: [
    {
      title: 'Public Benefits',
      link: '#public-benefits',
      description: 'Public benefits for individuals with developmental disabilities and delays',
    },
    {
      title: 'Education',
      link: '#education',
      description: 'Individualized Education Programs (IEPs) and 504 Plans',
    },
    {
      title: 'Insurance',
      link: '#insurance',
      description: 'Private insurance, Medi-Cal, and Medi-Cal as secondary insurance',
    },
  ],
  publicBenefits: {
    title: 'Public Benefits',
    description:
      "Depending on your income, your child's age and diagnosis, and other factors, there are many programs you can take advantage of.",
    button: {
      text: 'View Complete List',
      link: 'https://undivided.io/resources/california-public-benefits-for-children-with-disabilities-236',
    },
  },
  publicBenefitsLibraryItems: [
    { title: 'Regional Center 101', link: '/resources/regional-center' },
    { title: 'Medi-Cal 101', link: '/resources/medi-cal' },
    { title: 'In-Home Supportive Services (IHSS) 101', link: '/resources/ihss' },
    { title: "California Children's Services (CCS) 101", link: '/resources/ccs' },
    { title: 'How to Get Started with Regional Center', link: '/resources/get-started' },
    { title: "Medi-Cal's Institutional Deeming Waiver", link: '/resources/deeming-waiver' },
    { title: 'How to Apply for In-Home Supportive Services (IHSS)', link: '/resources/apply-ihss' },
    { title: 'Overview of CCS Medical Eligibility', link: '/resources/ccs-eligibility' },
  ],
  checkMore: {
    text: 'Check out more on ',
    boldText: 'undivided.io',
    link: 'https://www.undivided.io/',
  },
  education: {
    title: 'Education',
    description:
      'Students with disabilities and learning challenges can receive personalized help, services, and accommodations through an Individualized Education Program (IEP) or 504 Plan.',
  },
  educationLibraryItems: [
    { title: 'Least Restrictive Environment and Placement Options in an IEP', link: '/resources/least-restrictive-environment' },
    { title: 'The Ultimate Checklist for IEP Prep', link: '/resources/iep-checklist' },
    { title: 'List of Accommodations for IEPs and 504s', link: '/resources/accommodations-list' },
    { title: 'What Are Related Services in an IEP?', link: '/resources/related-services' },
  ],
  insurance: {
    title: 'Insurance',
    description:
      'If you use private insurance, Medi-Cal, or both, these resources provide information about maximizing your benefits, filing claims, handling denials, and more.',
  },
  insuranceLibraryItems: [
    { title: 'How to Review Your Health Plan Benefits & Coverage', link: '/resources/review-benefits' },
    { title: 'Insurance Claim Denials and Appeals 101', link: '/resources/claim-denials' },
    { title: 'Making the Most of Medi-Cal', link: '/resources/medi-cal-tips' },
    { title: 'How to Use Medi-Cal as Secondary Insurance', link: '/resources/secondary-insurance' },
  ],
} as const

/** Builds the Sanity document for createOrReplace (text/arrays only; add images in Studio). */
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
      ctaText: d.hero.ctaText,
      ctaHref: d.hero.ctaHref,
    },
    familyImpactText: {
      paragraphs: d.familyImpact.paragraphs,
    },
    contactWithImageText: {
      schoolName: d.contactWithImage.schoolName,
      address: d.contactWithImage.address,
      mapsLink: d.contactWithImage.mapsLink,
      contactLabel: d.contactWithImage.contactLabel,
      phone: d.contactWithImage.phone,
      email: d.contactWithImage.email,
    },
    navigatingSystemsText: {
      title: d.navigatingSystems.title,
      titleHighlight: d.navigatingSystems.titleHighlight,
      description: d.navigatingSystems.description,
    },
    benefitsCards: d.benefitsCards.map((card, i) => ({
      _type: 'object',
      _key: `card-${i}`,
      title: card.title,
      link: card.link,
      description: card.description,
    })),
    publicBenefitsText: {
      title: d.publicBenefits.title,
      description: d.publicBenefits.description,
      button: d.publicBenefits.button,
    },
    publicBenefitsLibraryItems: d.publicBenefitsLibraryItems.map((item, i) => ({
      _type: 'object',
      _key: `item-${i}`,
      title: item.title,
      link: item.link,
    })),
    checkMoreText: d.checkMore,
    educationText: {
      title: d.education.title,
      description: d.education.description,
    },
    educationLibraryItems: d.educationLibraryItems.map((item, i) => ({
      _type: 'object',
      _key: `item-${i}`,
      title: item.title,
      link: item.link,
    })),
    insuranceText: {
      title: d.insurance.title,
      description: d.insurance.description,
    },
    insuranceLibraryItems: d.insuranceLibraryItems.map((item, i) => ({
      _type: 'object',
      _key: `item-${i}`,
      title: item.title,
      link: item.link,
    })),
  }
}
