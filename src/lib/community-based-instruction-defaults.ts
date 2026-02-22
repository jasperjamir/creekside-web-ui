/**
 * Single source of truth for Community-Based Instruction default content.
 * Used by: studio-creekside/scripts/seed.ts (seed only). Page uses blanks; defaults are for seeding.
 */

export const DOCUMENT_ID = 'communityBasedInstruction'
export const SANITY_TYPE = 'communityBasedInstruction' as const

export const DEFAULT_CONTENT = {
  pageTitle: 'Community-Based Instruction - The Creekside School',
  hero: {
    heading: 'Community-Based Instruction',
    body:
      'CBI is an integral part of the Creekside approach, focusing on real-world application of skills. Through CBI, we support students in building independence and confidence by engaging with their community.',
  },
  approach: {
    body:
      'Our approach involves a variety of activities, such as volunteering at local organizations and taking functional outings to places like grocery stores, post offices, and gas stations. These experiences help students develop essential life skills, from navigating public spaces and identifying community helpers to understanding social norms.',
  },
  communityPartners: {
    heading: 'Our Community Partners',
    body:
      'The core benefit of CBI is its dual impact: it supports our students in achieving greater autonomy and offers the public an opportunity to interact with individuals with profound autism, fostering a greater understanding of their capabilities and positive contributions to society.',
    partners: [
      {
        name: 'Community Stanford Preschool Autism Lab',
        description:
          'Creekside is one of only three locations of the Stanford Preschool Autism Lab, a program of the Stanford University School of Medicine. Through this program, new models of early intervention can be developed, evaluated, and disseminated for children with Autism Spectrum Disorder.',
      },
      {
        name: 'Autism Speaks',
        description:
          'As one of only three schools in the country working with Autism Speaks, Creekside supports the development of a worldwide training program for school staff that complements the Autism Speaks Caregiver Skills Training program, which has been a major success for families before diagnosis and beyond.',
      },
      {
        name: 'Bay Area Furniture Bank',
        description:
          'Each week, a group of our Adult Transition Students volunteers at the Bay Area Furniture Bank in Santa Clara, where they focus on using tools safely and appropriately, while working together with a peer or individually on a project. Students have assembled a variety of items, including tables, desks, organizer cubbies, side tables, and more, providing a wealth of precious memories and valuable practical experiences.',
      },
      {
        name: 'Stanford Autism Center',
        description:
          'We collaborate closely with the Stanford Autism research team on mutual research projects, sharing program resources, with Stanford providing training to our staff, and The Creekside School (TCS) offering on-site space and support for the Preschool Autism Lab.',
      },
      {
        name: 'South Valley YMCA',
        description:
          'Each week, a group of our Adult Transition Students volunteers at the Bay Area Furniture Bank in Santa Clara, where they focus on using tools safely and appropriately, while working together with a peer or individually on a project. Students have assembled a variety of items, including tables, desks, organizer cubbies, side tables, and more, providing a wealth of precious memories and valuable practical experiences.',
      },
      {
        name: 'University Partners',
        description:
          'The Creekside School partners with several universities to provide university students with internship hours and practical experience by supporting Creekside teachers and staff.',
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
    title: d.pageTitle,
    heroText: {
      heading: d.hero.heading,
      body: d.hero.body,
    },
    approachText: {
      body: d.approach.body,
    },
    communityPartnersText: {
      heading: d.communityPartners.heading,
      body: d.communityPartners.body,
      partners: d.communityPartners.partners.map((p, i) => ({
        _type: 'object',
        _key: `partner-${i}`,
        name: p.name,
        description: p.description,
      })),
    },
  }
}
