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
    headingPrefix: 'Welcome to ',
    headingHighlight: 'The Creekside School',
    subheading:
      'A place where students with profound autism learn, grow, and thrive in a supportive community.',
  },
  creeksideDifference: {
    heading: 'The Creekside Difference',
    body: 'We are committed to providing the highest quality education and care for students with profound autism, in partnership with families and the community.',
  },
  ourPillars: {
    heading: 'Our Pillars',
    subheading: 'The values that guide everything we do.',
    pillars: [
      { title: 'Relationships', icon: 'Users', text: 'We build sincere and meaningful relationships with all of our students.' },
      { title: 'Fun', icon: 'Smile', text: 'We incorporate interests and highly engaging activities in everything we do to ensure that students want to be at school and to participate.' },
      { title: 'Regulation', icon: 'HandHeart', text: 'All students learn important emotional, sensory, and behavioral regulation strategies.' },
      { title: 'Data Driven', icon: 'BarChart', text: 'We decide Creekside programming, goals, and treatment options by consulting high-quality data.' },
      { title: 'Best in Class Education', icon: 'BookOpen', text: 'We only follow evidence-based practices backed by extensive research that have been shown to benefit people with autism.' },
      { title: 'Person Centered', icon: 'User', text: "Our approach is person-first, trauma-sensitive, and humanistic. We adapt programming for students based on their personal preferences, history, and assent." },
      { title: 'Family Partnership', icon: 'Heart', text: "Families are our partners in holistically educating and caring for our students. We work together with parents to meet all students' needs." },
    ],
  },
  communityPartners: {
    heading: 'Community Partners',
    partners: [] as { name: string }[],
  },
  navigationGrid: {
    heading: 'Explore',
    linkLabel: 'Learn more',
    items: [
      { title: 'For Families', icon: 'Heart', link: '/families/' },
      { title: 'What We Do', icon: 'BookOpen', link: '/what-we-do/' },
      { title: 'Who We Are', icon: 'Users', link: '/who-we-are/' },
      { title: 'Support', icon: 'Heart', link: '/support/' },
      { title: 'Join Us', icon: 'User', link: '/join-us/' },
    ],
  },
  testimonials: {
    heading: 'What People Say',
    testimonials: [
      { text: 'Parents are genuinely surprised their students can cook, use power tools, and perform complex tasks that will benefit them beyond the classroom.', author: 'Jer Sanchez', role: 'Adult Transition Teacher' },
      { text: "After 15 - 16 years with a client, I feel like these students, and often their families, are part of my family.", author: 'Karen Hook', role: 'Music Therapist' },
    ],
  },
  communityImage: {
    title: 'Our Community',
    description: 'Students, staff, and families together at Creekside.',
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
    },
    communityImageText: {
      title: d.communityImage.title,
      description: d.communityImage.description,
    },
  }
}
