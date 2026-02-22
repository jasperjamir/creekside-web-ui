/**
 * Single source of truth for Join Us default content.
 * Used by: studio-creekside/scripts/seed.ts (seed only). Page uses blanks; defaults are for seeding.
 */

export const DOCUMENT_ID = 'joinUs'
export const SANITY_TYPE = 'joinUs' as const

export const DEFAULT_CONTENT = {
  pageTitle: '',
  hero: {
    heading: 'Join Us',
    body:
      'Our team shares the commitment to integrity, collegiality, and the mission of improving the lives of our students and their families. Our deep sense of purpose fuels our motivation to embrace the challenges of our work and rise to meet the needs of our students.',
    body2:
      'Creekside is a place where excellence, passion, and dedication are at the heart of our work.',
  },
  whyWorkAtCreekside: {
    heading: 'Why Work at Creekside',
    subheading:
      'We foster a transparent and open environment where every team member is encouraged to question, innovate, and continuously refine our methods.',
    pillars: [
      { title: 'Mission-driven culture', icon: 'Target', text: 'rooted in dignity, learning, and family partnership' },
      { title: 'Small class sizes', icon: 'Presentation', text: 'with full-time paraprofessional support.' },
      {
        title: 'Cross-disciplinary collaboration',
        icon: 'Users',
        text: 'with speech, OT, music, art, behavioral, and mental-health specialists.',
      },
      { title: 'Professional growth', icon: 'TrendingUp', text: 'through ongoing training and shared planning time.' },
    ],
  },
  joinOurTeam: {
    title: 'Join Our Team',
    description:
      "The Creekside School is currently hiring creative, experienced, and passionate teaching professionals. As part of the Creekside staff, you'll be able to enjoy a fulfilling career on top of many different benefits, including:",
    benefits: [
      'Full-time employment',
      'Fully paid premiums for Health, Dental, and Vision Insurance',
      'Fully vested 401(k) with 4% company match',
      '7 Weeks Paid Time Off (per school calendar) plus Holiday Pay',
      'Small class size with full-time paraprofessional support',
      'Professional Development across Disciplines',
      'Highly collaborative multidisciplinary team',
      'Employee Assistance Program',
      'Incredibly friendly, fun, and supportive staff',
    ],
  },
  applyInstructions: {
    text: 'To apply, read through any of the job descriptions listed below and send your resume to ',
    email: 'jobs@creeksideschool.org',
  },
  openPositions: {
    heading: 'Open Positions',
    subheading: '',
    positions: [
      {
        title: 'Occupational Therapist Assistant',
        type: 'Full-time position',
        description:
          'Under the supervision and guidance of the OT, provide occupational therapy services to students as directed by an individualized student program.',
        link: 'https://www.creeksideschool.org/_files/ugd/7c5785_8cd160241eee4638a7687344346d6fa0.pdf',
        tagColor: '#fbbf24',
      },
      {
        title: 'Speech Language Pathologist Assistant',
        type: 'Full-time position',
        description:
          'Under the supervision and guidance of the SLP, provide speech-language therapy services to students as directed by an individualized student program.',
        link: 'https://www.creeksideschool.org/_files/ugd/7c5785_d6e98270191f4a5c8945c5320f43eeba.pdf',
        tagColor: '#fbbf24',
      },
      {
        title: 'Special Education Teacher',
        type: 'Full-time position',
        description:
          "The Special Education Teacher leads the classroom team in educating all students on California Core Content Standards, NCSC Core Content Connectors, leads the development and implementation of student Individual Education Plans and supports students in learning functional, developmentally appropriate life skills. The Teacher also acts as the student's case manager to coordinate all related service providers, parents/guardians, school district personnel and other providers in providing exemplary special education services.",
        link: 'https://www.creeksideschool.org/_files/ugd/7c5785_9ccb09f2a955449a80ad775d02042c19.pdf',
        tagColor: '#fbbf24',
      },
      {
        title: 'Teaching Assistant',
        type: 'Full-time position',
        description:
          "The Teaching Assistant will work under the supervision of the Special Educator and Related Services Providers to implement individual student education and behavior plans for the purpose of the students' educational, behavioral, and social-emotional growth.",
        link: 'https://www.creeksideschool.org/_files/ugd/7c5785_cfaccd367f3d426db68a2c2a7d255248.pdf',
        tagColor: '#fbbf24',
      },
    ],
  },
  howWeHire: {
    heading: 'How We Hire',
    steps: [
      { title: 'Apply', description: 'with resume (and cover letter, optional).' },
      { title: 'Conversation', description: 'with our team about your experience and interests.' },
      { title: 'Demo/Scenario', description: 'relevant to the role.' },
      { title: 'References & Offer', description: '' },
    ],
  },
  questionsEmail: {
    text: 'Questions? Email ',
    email: 'jobs@creeksideschool.org',
  },
  equalOpportunity: {
    title: 'Equal Opportunity Statement',
    text: 'Creekside does not discriminate based on race, color, religion (creed), gender, gender expression, age, national origin, disability, or any protected status.',
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
    whyWorkAtCreeksideText: {
      heading: d.whyWorkAtCreekside.heading,
      subheading: d.whyWorkAtCreekside.subheading,
      pillars: d.whyWorkAtCreekside.pillars.map((p, i) => ({
        _type: 'object',
        _key: `pillar-${i}`,
        title: p.title,
        icon: p.icon,
        text: p.text,
      })),
    },
    joinOurTeamText: {
      title: d.joinOurTeam.title,
      description: d.joinOurTeam.description,
      benefits: d.joinOurTeam.benefits,
    },
    applyInstructionsText: {
      text: d.applyInstructions.text,
      email: d.applyInstructions.email,
    },
    openPositionsText: {
      heading: d.openPositions.heading,
      subheading: d.openPositions.subheading,
      positions: d.openPositions.positions.map((p, i) => ({
        _type: 'object',
        _key: `pos-${i}`,
        title: p.title,
        type: p.type,
        description: p.description,
        link: p.link,
        tagColor: p.tagColor,
      })),
    },
    howWeHireText: {
      heading: d.howWeHire.heading,
      steps: d.howWeHire.steps.map((s, i) => ({
        _type: 'object',
        _key: `step-${i}`,
        title: s.title,
        description: s.description,
      })),
    },
    questionsEmailText: {
      text: d.questionsEmail.text,
      email: d.questionsEmail.email,
    },
    equalOpportunityText: {
      title: d.equalOpportunity.title,
      text: d.equalOpportunity.text,
    },
  }
}
