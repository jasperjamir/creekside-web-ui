/**
 * Single source of truth for Our Team default content.
 * Used by: studio-creekside/scripts/seed.ts (seed only). Page uses blanks; defaults are for seeding.
 */

export const DOCUMENT_ID = 'ourTeam'
export const SANITY_TYPE = 'ourTeam' as const

export const DEFAULT_CONTENT = {
  pageTitle: 'Our Team - The Creekside School',
  hero: {
    headingPrefix: 'Our ',
    headingHighlight: 'Team',
    headingSuffix: '',
    subheadingParagraphs: [] as string[],
    ctaText: '',
    ctaHref: '',
  },
  staffLeadership: {
    title: 'Staff Leadership',
    members: [
      { name: 'Megan Cooper', role: 'Interim Executive Director' },
      { name: 'Katie Shepard', role: 'Principal' },
      { name: "Alisa D'Angelo", role: 'Finance Manager' },
      { name: 'Julie Salazar', role: 'HR Administrator' },
      { name: 'Sandye Gallagher', role: 'Office Manager' },
      { name: 'Ariel Roullo', role: 'Adult Day Program & Admissions Lead' },
      { name: "Abigail O'Loughlin", role: 'Lead BCBA' },
      { name: 'Eve Ngo', role: 'Lead SLP' },
      { name: 'Ani Abrahamian', role: 'Lead OT' },
      { name: 'Jennifer Collazo', role: 'Teacher' },
      { name: 'Jer Sanchez', role: 'Teacher' },
      { name: 'Sylvia Gonzalez', role: 'Teacher' },
      { name: 'Susan Ellis', role: 'Teacher' },
      { name: 'Chloe Le', role: 'Teacher' },
      { name: 'Angelica Mae Dorn', role: 'Teacher' },
      { name: 'Anne Tong', role: 'Program Specialist' },
      { name: 'Joyce Cortez', role: 'MFT/Art Therapist' },
    ],
  },
  boardOfDirectors: {
    title: 'Board of Directors',
    members: [
      {
        name: 'David Drummond',
        role: 'Board President',
        bio: 'Co-founder of the Creekside School',
      },
      {
        name: 'Elena Marimo Berk',
        role: 'Board Secretary',
        bio: 'Co-founder, former high school teacher, board member, UNICEF USA, board member, UNICEF International Council, HRW Silicon Valley Executive Committee member, Sempirvirens Fund board member, Tech Interactive board member.',
      },
      {
        name: 'Issac Vaughn',
        role: '',
        bio: 'Former Chief Operating Officer at Zenefits, board member, CURO Group Holdings Corp, board member, Rocket Lawyer, board member, All Stars Helping Kids, and board member, Silicon Valley Community Foundation.',
      },
    ],
  },
  ourTeamGroups: {
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
      subheadingParagraphs: d.hero.subheadingParagraphs,
      ctaText: d.hero.ctaText,
      ctaHref: d.hero.ctaHref,
    },
    staffLeadershipText: {
      title: d.staffLeadership.title,
      members: d.staffLeadership.members.map((m, i) => ({
        _type: 'object',
        _key: `staff-${i}`,
        name: m.name,
        role: m.role,
      })),
    },
    boardOfDirectorsText: {
      title: d.boardOfDirectors.title,
      members: d.boardOfDirectors.members.map((m, i) => ({
        _type: 'object',
        _key: `board-${i}`,
        name: m.name,
        role: m.role,
        bio: m.bio,
      })),
    },
    ourTeamGroupsText: {
      sectionHeading: d.ourTeamGroups.sectionHeading,
      groups: d.ourTeamGroups.groups.map((g, i) => ({
        _type: 'object',
        _key: `group-${i}`,
        title: g.title,
        description: g.description,
        images: [],
      })),
    },
  }
}
