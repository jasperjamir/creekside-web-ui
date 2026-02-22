/**
 * Single source of truth for Home page default content.
 * Used by: studio-creekside/scripts/seed.ts (seed only). Page uses blanks; defaults are for seeding.
 */

export const DOCUMENT_ID = 'home'
export const SANITY_TYPE = 'home' as const

export const DEFAULT_CONTENT = {
  pageTitle: 'Home Page',
  hero: {
    badge: '',
    headingPrefix: 'Specialized Education for ',
    headingHighlight: 'Students with Profound Autism',
    subheading:
      'At Creekside, we create tailored learning experiences and environments where students with profound autism are truly seen and understood.',
  },
  creeksideDifference: {
    heading: 'The Creekside Difference',
    body: 'Located on a 6-acre campus in South Blossom Hill, San Jose, Creekside provides ample space for students to learn and grow.',
  },
  ourPillars: {
    heading: 'Our Pillars',
    subheading:
      'The Creekside School serves a unique student population and their families. We take a special, holistic approach to educating students guided by 7 pillars, which create the foundation of our approach.',
    pillars: [
      { title: 'Relationships', icon: 'Users', text: 'We build sincere and meaningful relationships with all of our students.' },
      { title: 'Fun', icon: 'Smile', text: 'We incorporate interests and highly engaging activities in everything we do to ensure that students want to be at school and to participate.' },
      { title: 'Regulation', icon: 'HandHeart', text: 'All students learn important emotional, sensory, and behavioral regulation strategies.' },
      { title: 'Data Driven', icon: 'BarChart', text: 'We decide Creekside programming, goals, and treatment options by consulting high-quality data.' },
      { title: 'Best In Class Education', icon: 'BookOpen', text: 'We only follow evidence-based practices backed by extensive research that have been shown to benefit people with autism.' },
      { title: 'Person Centered', icon: 'User', text: "Our approach is person-first, trauma-sensitive, and humanistic. We adapt programming for students based on their personal preferences, history, and assent." },
      { title: 'Family Partnership', icon: 'Heart', text: "Families are our partners in holistically educating and caring for our students. We work together with parents to meet all students' needs." },
    ],
  },
  communityPartners: {
    heading: 'Our heartfelt thanks to our community partners:',
    partners: [
      { name: "Stanford Medicine, Stanford Autism Center at Packard Children's Hospital" },
      { name: 'Bay Area Furniture Bank' },
      { name: 'autism speaks' },
      { name: 'the Y' },
    ],
  },
  navigationGrid: {
    heading: 'What are you interested in learning about?',
    linkLabel: 'Learn more',
    items: [
      { title: 'Admission Process', icon: 'FileText', link: '/families/admissions-process' },
      { title: 'Community Partnerships', icon: 'Users', link: '/what-we-do/#community-partnerships' },
      { title: 'Donating To Creekside', icon: 'Heart', link: '/support/donate' },
      { title: 'Job Opportunities', icon: 'Briefcase', link: '/join-us/' },
    ],
  },
  testimonials: {
    heading: 'Join the Creekside Community',
    testimonials: [
      { text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...', author: 'First Name M.L. Last Name,', role: 'Affiliation with Creekside' },
      { text: 'Parents are genuinely surprised their students can cook, use power tools, and perform complex tasks that will benefit them beyond the classroom.', author: 'Jer Sanchez', role: 'Adult Transition Teacher' },
      { text: "After 15 - 16 years with a client, I feel like these students, and often their families, are part of my family.", author: 'Karen Hook', role: 'Music Therapist' },
    ],
  },
  communityImage: {
    title: 'What are you interested in learning about?',
    description: 'Explore admissions, community partnerships, giving, and career opportunities at Creekside.',
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
      badge: d.hero.badge,
      headingPrefix: d.hero.headingPrefix,
      headingHighlight: d.hero.headingHighlight,
      subheading: d.hero.subheading,
    },
    creeksideDifferenceText: {
      heading: d.creeksideDifference.heading,
      body: d.creeksideDifference.body,
    },
    ourPillarsText: {
      heading: d.ourPillars.heading,
      subheading: d.ourPillars.subheading,
      pillars: d.ourPillars.pillars.map((p, i) => ({
        _type: 'object',
        _key: `pillar-${i}`,
        title: p.title,
        icon: p.icon,
        text: p.text,
      })),
    },
    communityPartnersText: {
      heading: d.communityPartners.heading,
      partners: d.communityPartners.partners.map((p, i) => ({
        _type: 'object',
        _key: `partner-${i}`,
        name: p.name,
      })),
    },
    navigationGridText: {
      heading: d.navigationGrid.heading,
      linkLabel: d.navigationGrid.linkLabel,
      items: d.navigationGrid.items.map((item, i) => ({
        _type: 'object',
        _key: `item-${i}`,
        title: item.title,
        icon: item.icon,
        link: item.link,
      })),
    },
    testimonialsText: {
      heading: d.testimonials.heading,
      testimonials: d.testimonials.testimonials.map((t, i) => ({
        _type: 'object',
        _key: `testimonial-${i}`,
        text: t.text,
        author: t.author,
        role: t.role,
      })),
    }
  }
}
