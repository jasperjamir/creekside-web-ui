/**
 * Creates or replaces the Who We Are document in Sanity with default content.
 * Run from studio-creekside: npm run seed:who-we-are
 * Requires SANITY_AUTH_TOKEN with write access (create a token at sanity.io/manage).
 */

import { createClient } from '@sanity/client'

const projectId = 'zu0udp1i'
const dataset = 'production'
const apiVersion = '2024-01-01'

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
})

const WHO_WE_ARE_ID = 'whoWeAre'

const defaultDocument = {
  _id: WHO_WE_ARE_ID,
  _type: 'whoWeAre',
  title: 'Who We Are - The Creekside School',
  ourStoryText: {
    body: 'Founded by parents who faced challenges finding a suitable school.',
    body2:
      'Creekside is a community dedicated to individualized support and education for students with profound autism.',
  },
  lifelongLearningText: {
    headline:
      'Lifelong learning begins with belonging, connection, and understanding.',
    subheading:
      "Guided by this belief, each student's unique set of interests, strengths, and needs drives the development of our individualized, comprehensive programs.",
    body: 'Our emphasis on family and community stems from our recognition that autism affects more than just parents. It impacts the whole family and the people around them.',
    imageUrl: '', // Front-end uses ASSETS_BASE_URL fallback when empty
  },
  missionVisionText: {
    mission:
      'To holistically enhance the quality of life for individuals with profound autism and their families through empowerment, community engagement, and collaborative partnerships.',
    vision:
      'To extend this through a lifetime — ensuring lifelong opportunities for growth, connection, and purpose.',
  },
  ourTeamText: {
    groups: [
      {
        _type: 'object',
        _key: 'leadership',
        title: 'Creekside Leadership',
        description:
          'Creekside leadership values transparent, open communications for our students and their families.',
        images: [
          'https://picsum.photos/seed/leadership-1/600/450',
          'https://picsum.photos/seed/leadership-2/600/450',
          'https://picsum.photos/seed/leadership-3/600/450',
        ],
      },
      {
        _type: 'object',
        _key: 'teachers',
        title: 'Credentialed Teachers',
        description:
          'Creekside teachers are credentialed special education teachers who bring a wealth of knowledge and experience to their classrooms.',
        images: [
          'https://picsum.photos/seed/teachers-1/600/450',
          'https://picsum.photos/seed/teachers-2/600/450',
          'https://picsum.photos/seed/teachers-3/600/450',
        ],
      },
      {
        _type: 'object',
        _key: 'assistants',
        title: 'Experienced Teaching Assistants',
        description:
          'Creekside teaching assistants work with class teachers and autism-related services therapists to create highly individualized learning tools, such as drawing with colored pencils and letter blocks during art therapy, and playing piano during music therapy.',
        images: [
          'https://picsum.photos/seed/assistants-1/600/450',
          'https://picsum.photos/seed/assistants-2/600/450',
        ],
      },
      {
        _type: 'object',
        _key: 'board',
        title: 'Board of Directors',
        description:
          'Our Board of Directors enables Creekside to provide quality education through their support that allows us to expand our programs, connect with partners and parents, and adapt to the evolving needs of our students.',
        images: [
          'https://picsum.photos/seed/board-1/600/450',
          'https://picsum.photos/seed/board-2/600/450',
          'https://picsum.photos/seed/board-3/600/450',
        ],
      },
      {
        _type: 'object',
        _key: 'donors',
        title: 'Our Donors and Supporters',
        description:
          "A core part of Creekside's history and identity is our commitment to working with our community, from collaborating with parents to setting up events with our partners. We express a sincere thank you to the partners, donors, and school organizations who share their time, energy, and resources to help us build spaces where individuals with profound autism are truly seen, heard, and understood.",
        images: [
          'https://picsum.photos/seed/donors-1/600/450',
          'https://picsum.photos/seed/donors-2/600/450',
          'https://picsum.photos/seed/donors-3/600/450',
        ],
      },
    ],
  },
  whatIsProfoundAutismText: {
    definition:
      'Profound autism is a term used to describe individuals on the autism spectrum who have extremely high support needs — often characterized by limited or non-vocal communication abilities, significant challenges in adaptive functioning (e.g., daily living skills), and co-occurring medical or behavioral complexities.',
    learnMoreLinks: [
      { _type: 'object', _key: 'programs', name: 'Our Programs', href: '/what-we-do/' },
      { _type: 'object', _key: 'students', name: 'Our Students', href: '/families/' },
    ],
    supportLinks: [
      { _type: 'object', _key: 'donate', name: 'Donate', href: '/support/donate/' },
      { _type: 'object', _key: 'volunteer', name: 'Volunteer', href: '/support/#volunteer' },
      {
        _type: 'object',
        _key: 'wishlist',
        name: 'Student Wish List',
        href: '/support/#student-wish-list',
      },
      {
        _type: 'object',
        _key: 'join',
        name: 'Join Our Staff',
        href: '/join-us/join-our-team/',
      },
    ],
  },
}

async function main() {
  if (!process.env.SANITY_AUTH_TOKEN) {
    console.error(
      'Missing SANITY_AUTH_TOKEN. Create a token with Editor access at https://www.sanity.io/manage/project/zu0udp1i/api#tokens'
    )
    process.exit(1)
  }

  try {
    const result = await client.createOrReplace(defaultDocument)
    console.log('Who We Are document created/updated:', result._id)
  } catch (err) {
    console.error('Failed to create Who We Are document:', err)
    process.exit(1)
  }
}

main()
