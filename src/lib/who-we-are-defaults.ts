/**
 * Single source of truth for Who We Are default content.
 * Used by: src/pages/who-we-are/index.astro (fallbacks) and studio-creekside/scripts/seed.ts (seed).
 */

export const DOCUMENT_ID = 'whoWeAre'
export const SANITY_TYPE = 'whoWeAre' as const

export const DEFAULT_CONTENT = {
  pageTitle: '',
  ourStory: {
    heading: 'The Creekside Difference',
    body:
      'Founded by parents who faced challenges finding a suitable school.',
    body2:
      'Creekside is a community dedicated to individualized support and education for students with profound autism.',
  },
  lifelongLearning: {
    headline:
      'Lifelong learning begins with belonging, connection, and understanding.',
    subheading:
      "Guided by this belief, each student's unique set of interests, strengths, and needs drives the development of our individualized, comprehensive programs.",
    body:
      'Our emphasis on family and community stems from our recognition that autism affects more than just parents. It impacts the whole family and the people around them.',
  },
  missionVision: {
    sectionHeading: '',
    mission:
      'To holistically enhance the quality of life for individuals with profound autism and their families through empowerment, community engagement, and collaborative partnerships.',
    vision:
      'To extend this through a lifetime — ensuring lifelong opportunities for growth, connection, and purpose.',
  },
  ourTeam: {
    sectionHeading: '',
    groups: [
      {
        title: 'Creekside Leadership',
        description:
          'Creekside leadership values transparent, open communications for our students and their families.',
      },
      {
        title: 'Credentialed Teachers',
        description:
          'Creekside teachers are credentialed special education teachers who bring a wealth of knowledge and experience to their classrooms.',
      },
      {
        title: 'Experienced Teaching Assistants',
        description:
          'Creekside teaching assistants work with class teachers and autism-related services therapists to create highly individualized learning tools, such as drawing with colored pencils and letter blocks during art therapy, and playing piano during music therapy.',
      },
      {
        title: 'Board of Directors',
        description:
          'Our Board of Directors enables Creekside to provide quality education through their support that allows us to expand our programs, connect with partners and parents, and adapt to the evolving needs of our students.',
      },
      {
        title: 'Our Donors and Supporters',
        description:
          "A core part of Creekside's history and identity is our commitment to working with our community, from collaborating with parents to setting up events with our partners. We express a sincere thank you to the partners, donors, and school organizations who share their time, energy, and resources to help us build spaces where individuals with profound autism are truly seen, heard, and understood.",
      },
    ],
  },
  whatIsProfoundAutism: {
    sectionHeading: '',
    definition:
      'Profound autism is a term used to describe individuals on the autism spectrum who have extremely high support needs — often characterized by limited or non-vocal communication abilities, significant challenges in adaptive functioning (e.g., daily living skills), and co-occurring medical or behavioral complexities.',
  },
} as const

/** Builds the Sanity document for createOrReplace (text/arrays only; add images in Studio). */
export function buildSanityDocument(): Record<string, unknown> {
  const d = DEFAULT_CONTENT
  return {
    _id: DOCUMENT_ID,
    _type: SANITY_TYPE,
    title: d.pageTitle,
    ourStoryText: {
      heading: d.ourStory.heading,
      body: d.ourStory.body,
      body2: d.ourStory.body2,
    },
    lifelongLearningText: {
      headline: d.lifelongLearning.headline,
      subheading: d.lifelongLearning.subheading,
      body: d.lifelongLearning.body,
    },
    missionVisionText: {
      sectionHeading: d.missionVision.sectionHeading,
      mission: d.missionVision.mission,
      vision: d.missionVision.vision,
    },
    ourTeamText: {
      sectionHeading: d.ourTeam.sectionHeading,
      groups: d.ourTeam.groups.map((g, i) => ({
        _type: 'object',
        _key: `group-${i}`,
        title: g.title,
        description: g.description,
        images: [],
      })),
    },
    whatIsProfoundAutismText: {
      sectionHeading: d.whatIsProfoundAutism.sectionHeading,
      definition: d.whatIsProfoundAutism.definition,
    },
  }
}
