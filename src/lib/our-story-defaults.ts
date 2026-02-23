/**
 * Single source of truth for Our Story default content.
 * Used by: studio-creekside/scripts/seed.ts (seed only). Page uses blanks; defaults are for seeding.
 */

export const DOCUMENT_ID = 'ourStory'
export const SANITY_TYPE = 'ourStory' as const

export const DEFAULT_CONTENT = {
  pageTitle: 'Our Story - The Creekside School',
  hero: {
    heading: 'Our Story',
    body:
      "Founded with the commitment to provide individualized schooling for students with moderate-to-severe autism, Creekside's story started in a basement, at the home of a young boy with autism whose parents had struggled to find an appropriate school that fit his neurologic and behavioral needs.",
    body2:
      'Soon, other youngsters who had experienced similar, yet unique challenges began joining the classes with their parents or caregivers.',
  },
  schoolHistory: {
    paragraphs: [
      'In 2006, the school was formally established and soon thereafter leased two classrooms and ancillary space in the corner of a San Jose-based church school.',
      'In the years that followed, <strong>Creekside continued to grow to serve students</strong> from many school districts.',
    ],
  },
  historyExpansion: {
    text: 'In 2018, <strong>the Creekside School was invited to move into a vacant school in the Oak Grove School District of San Jose.</strong> The former George Miner Elementary was the perfect campus with its large, sunlit classrooms and expansive blacktop and playground area.',
  },
  historyConclusion: {
    paragraphs: [
      'Now, <strong>Creekside serves as the only school within the San Jose area that provides suite-level care.</strong>',
      'Driven by our belief that anyone can learn once we learn how to teach, we continue working to build a community where individuals with moderate to severe autism receive the care, support, and education they need.',
    ],
  },
  jonahLegacy: {
    kicker: 'The Legacy That Inspires Us:',
    title: 'Jonah Chung',
    quote:
      '"Jonah was a small circle guy, mostly home and school. Jonah\'s school, The Creekside School, is a special place filled with dedicated, hard-working professionals. Creekside is family to us, as they loved Jonah exactly as he was. Did he have bad days and really stretch them? Yes. Did they ever give up on him? No."',
    attribution: "- Karen Chung, Jonah's mother",
  },
  firstStep: {
    title: 'Taking The First Step',
    paragraphs: [
      "Jonah first set eyes on an escalator at a light rail station during a school trip to a shopping mall. On the next outings, his face would light up as he watched the moving stairs for extended periods of time, rocking back and forth, and reaching over to feel the moving handrail.",
      "Staff encouraged Jonah to step onto the escalator, but each time he declined, until one day, he was ready.",
      "Jonah gingerly stepped onto the escalator, and he began leaning back as though to put as much distance as possible between himself and the experience. Meanwhile, the Creekside staff he was with propped his upper body up to make sure he wouldn't fall. As he neared the top, he was filled with pride and smiled broadly as the staff celebrated his courage.",
      "To passersby, it may have seemed an odd place for high-fives, but there was great reason to celebrate on the light rail platform that day.",
      "Jonah's experience of Creekside staff supporting his curiosity with patience and preparation is a testament to our philosophy. Our students' interests are central to their learning, and staff build on those interests to help develop important life skills for as safe and meaningful an adulthood as possible.",
    ],
  },
  jonahMemoriam: {
    overlay: {
      kicker: 'In memoriam:',
      name: 'Jonah Chung',
      dates: 'March 2001 - December 2020',
    },
    quote:
      'This is the Jonah we will always remember: an intelligent young man of so many dimensions who was an inspiration to all who had the joy of working with him.',
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
    schoolHistoryText: {
      paragraphs: d.schoolHistory.paragraphs,
    },
    historyExpansionText: {
      text: d.historyExpansion.text,
    },
    historyConclusionText: {
      paragraphs: d.historyConclusion.paragraphs,
    },
    jonahLegacyText: {
      kicker: d.jonahLegacy.kicker,
      title: d.jonahLegacy.title,
      quote: d.jonahLegacy.quote,
      attribution: d.jonahLegacy.attribution,
    },
    firstStepText: {
      title: d.firstStep.title,
      paragraphs: d.firstStep.paragraphs,
    },
    jonahMemoriamText: {
      overlay: {
        kicker: d.jonahMemoriam.overlay.kicker,
        name: d.jonahMemoriam.overlay.name,
        dates: d.jonahMemoriam.overlay.dates,
      },
      quote: d.jonahMemoriam.quote,
    },
  }
}
