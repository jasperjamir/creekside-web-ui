/**
 * Single source of truth for What We Do default content.
 * Used by: src/pages/what-we-do/index.astro (fallbacks) and studio-creekside/scripts/seed.ts (seed).
 */

export const DOCUMENT_ID = 'whatWeDo'
export const SANITY_TYPE = 'whatWeDo' as const

export const DEFAULT_CONTENT = {
  pageTitle: '',
  hero: {
    heading: 'Our Programs',
    body: 'Lifelong Learning',
    body2: 'begins with belonging, connection, and understanding',
  },
  ourServices: {
    sectionHeading: 'Our Services',
    body:
      "Creekside offers a complete suite of autism-related services. Our speech, behavior, occupational, art, music, and mental health therapists work closely with our teachers to address students' social, emotional, and psychological needs.",
  },
  adultProgram: {
    title: 'The Adult Day Program',
    subheading:
      'The Creekside Adult Program (CAP) serves adults 22+ with profound autism and significant support needs.',
    overviewParagraph:
      'After our first students graduated, we noticed that there was a clear lack of adult programs designed to support individuals with profound autism. CAP ensures that Creekside students have access to lifelong learning.',
    approachParagraph:
      "By building on the values that define The Creekside School, we create spaces for connection, purpose, and joy through meaningful activities from community outings across San Jose to more personally aligned choices showcased in our MakerSpace.\n\nGuided by each participant's Individual Program Plan (IPP) and their Person-Centered Plan (PCP), the Creekside Adult Program supports each participant as they live a fulfilling life that honors their individuality and strengths.",
    approachImageAlt: 'Creekside Adult Program - community and activities',
  },
  longTermGoal: {
    heading: 'Long-Term Goal',
    subheading: 'We support our students in achieving greater independence by helping them:',
    goals: [
      {
        title: 'Academic Skills',
        icon: 'BookOpen',
        text: 'Develop academic skills that they can apply across multiple life contexts',
      },
      {
        title: 'Communication & Social Skills',
        icon: 'Users',
        text: 'Build effective communication and social skills to promote meaningful interactions',
      },
      {
        title: 'Positive Behaviors & Self-Regulation',
        icon: 'Target',
        text: 'Learn positive behaviors and self-regulation strategies',
      },
      {
        title: 'Life Skills & Community',
        icon: 'TrendingUp',
        text: 'Gain life skills and experience through frequent and meaningful interactions in the community',
      },
    ],
  },
  communityPartnerships: {
    title: 'Community Partnerships',
    cbiBody:
      'Community-Based Instruction (CBI) is an integral part of the Creekside approach, focusing on real-world application of skills. Through CBI, we support students in building independence and confidence by engaging with their community.',
    partners: [],
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
      body2: d.hero.body2,
    },
    ourServicesText: {
      sectionHeading: d.ourServices.sectionHeading,
      body: d.ourServices.body,
      services: [],
    },
    adultProgramText: {
      title: d.adultProgram.title,
      subheading: d.adultProgram.subheading,
      overviewParagraph: d.adultProgram.overviewParagraph,
      approachParagraph: d.adultProgram.approachParagraph,
      approachImageAlt: d.adultProgram.approachImageAlt,
    },
    longTermGoalText: {
      heading: d.longTermGoal.heading,
      subheading: d.longTermGoal.subheading,
      goals: d.longTermGoal.goals.map((g, i) => ({
        _type: 'object',
        _key: `goal-${i}`,
        title: g.title,
        icon: g.icon,
        text: g.text,
      })),
    },
    communityPartnershipsText: {
      title: d.communityPartnerships.title,
      cbiBody: d.communityPartnerships.cbiBody,
      partners: (d.communityPartnerships.partners ?? []).map((p: { name: string; href?: string }, i: number) => ({
        _type: 'object',
        _key: `partner-${i}`,
        name: p.name,
        href: p.href || undefined,
      })),
    },
  }
}
