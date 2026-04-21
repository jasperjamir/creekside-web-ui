/**
 * Single source of truth for For Families default content.
 * Used by: studio-creekside/scripts/seed.ts (seed only). Page uses blanks; defaults are for seeding.
 */

export const DOCUMENT_ID = 'families'
export const SANITY_TYPE = 'families' as const

export const DEFAULT_CONTENT = {
  pageTitle: 'For Families',
  hero: {
    headingPrefix: 'Sign up through our ',
    headingHighlight: 'interest form',
    headingSuffix: '',
    subheading:
      'Interested parents may complete an "Admissions Interest Form" and are encouraged to read the information "About Our Waitlist".',
    ctaText: 'Admissions Interest Form',
    ctaHref:
      'https://docs.google.com/forms/d/e/1FAIpQLScz2-w8gXm-z81JDniG3Ipeop5Fc0Y52q5lfkY116qemZ1jag/viewform',
  },
  aboutAdmission: {
    title: 'About Admission',
    description: `The Creekside School is certified as a nonpublic school (NPS) by the California Department of Education (CDE) to serve students in Kindergarten to 12th grade, through a contractual agreement with the Special Education Local Plan Area (SELPA) in Santa Clara County. Creekside also has a post-secondary program for students aged 18-22 years.

Students are enrolled in the program through an offer of Free Appropriate Public Education (FAPE) by the student's home school district in agreement with their IEP team.

The Creekside School also maintains its status as a private school. Student enrollment may be made privately through a placement agreement and fulfillment of tuition.

Questions can be directed to: <strong>admissions@creeksideschool.org</strong>`,
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What type of school is Creekside?',
        answer:
          'The Creekside School (TCS) is a nonprofit 501(c)(3) private, nonpublic school dedicated to students with autism spectrum disorder who face significant challenges relating to the world around them. TCS serves students in grades K-12, ages 5 to 22.',
      },
      {
        question: 'What is a Nonpublic School (NPS)?',
        answer:
          'Nonpublic Schools are private schools certified by the California Department of Education to provide educational placement and services to students with special education needs. Local Educational Agencies, such as school districts, refer and fund students to receive their special education at nonpublic schools.',
      },
      {
        question: 'What do you teach?',
        answer:
          'All students will achieve greater independence through:\nFostering effective communication\nLearning positive behaviors and self-regulation strategies\nBuilding relationships and acquiring social skills\nGaining community integration skills through enriched community experiences\nDeveloping functional academic skills, vocational and life skills to be applied across multiple life contexts',
      },
      {
        question: 'Who provides services to students?',
        answer:
          'TCS uses an interdisciplinary approach to provide holistic and therapeutic education to our students. Each student has a team of Teachers, Teaching Assistants, Speech-Language Pathologists, Occupational Therapists, Board Certified Behavior Analysts and Mental Health Therapists who work together with parents to create a customized educational plan that meets a student\'s immediate needs and long-term goals.',
      },
      {
        question: 'What is your approach to autism education?',
        answer:
          'We integrate seven pillars into our approach to autism education and therapy. These pillars guide us as we create individualized programs, lesson plans and enrichment opportunities.',
      },
      {
        question: 'What are The Creekside Pillars?',
        answer:
          'Relationships - We work hard to build sincere and meaningful relationships with all of our students. It is our view that the best education and therapy outcomes can only be achieved when we have positive rapport with each other.\n\nFun! - Education should be fun. We incorporate student interests and highly engaging activities in all that we do. Students should want to be at school and should want to participate.\n\nRegulation - All students learn important emotional, sensory and behavioral regulation strategies. Deep learning cannot occur until a student is regulated.\n\nData Driven - Decisions about programming, goals and treatment options should be made by consulting high quality data. Our students\' achievement can be maximized when we carefully observe and track their progress.\n\nBest In Class Education - We only follow evidence-based practices that have been shown to benefit people with autism through extensive research. All of our program staff are regularly trained in these practices and demonstrate a high level of competency in using the best methods.\n\nPerson Centered - Our approach is person first, trauma sensitive and humanistic. We adapt programming for students based on their personal preferences, history and assent. We avoid all techniques and methods that may be adverse to the student experience unless it is a last resort or safety emergency.\n\nFamily Partnership - Families are our partners in holistically educating and caring for our students. We listen and work together with parents to meet all of the needs of the students.',
      },
      {
        question: 'What is your admissions process?',
        answer:
          'The Creekside School accepts referrals from school districts, parents, advocates and lawyers when it has been determined that a nonpublic school may be beneficial for a student with autism. Referrals may be made by emailing admissions@creeksideschool.org or by filling out our interest form at https://forms.gle/pfgHWQkgKDY42c5w6.\n\nAt the time of referral we ask for a recent copy of the student\'s IEP or Triennial Evaluation to review so that we can see if we would be able to support the student\'s needs. If we do not have a current open spot we will ask if we can put the student on our Interest List so that we can reach out later if a spot becomes available.\n\nIf we have an open spot and we feel that we could possibly support the student\'s needs as outlined on their IEP/Triennial then we will continue with our admissions process.\n\nDuring our process we complete:\nParent tour and interview\nStudent visit\nStudent observation in current setting (if possible)\n\nIf we continue to feel that the student is a fit for The Creekside School, we will make an offer of placement to the school district.',
      },
      {
        question: 'More Questions?',
        answer:
          'If you have any other questions please reach out to our admissions team through email or give us a call at (408)448-2494.',
      },
    ],
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
      subheading: d.hero.subheading,
      ctaText: d.hero.ctaText,
      ctaHref: d.hero.ctaHref,
    },
    aboutAdmissionText: {
      title: d.aboutAdmission.title,
      description: d.aboutAdmission.description,
    },
    faqText: {
      title: d.faq.title,
      items: d.faq.items.map((item, i) => ({
        _type: 'object',
        _key: `faq-${i}`,
        question: item.question,
        answer: item.answer,
      })),
    },
    sarcText: {
      title: d.sarc.title,
      description: d.sarc.description,
      button: d.sarc.button,
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
    },
  }
}
