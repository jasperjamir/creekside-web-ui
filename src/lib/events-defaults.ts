/**
 * Single source of truth for Events page default content.
 * Used by: studio-creekside/scripts/seed.ts (seed only). Page uses blanks; defaults are for seeding.
 */

export const DOCUMENT_ID = 'events'
export const SANITY_TYPE = 'events' as const

export const DEFAULT_CONTENT = {
  title: 'Events & Updates',
  hero: {
    headingPrefix: 'Events & ',
    headingHighlight: 'Updates',
    headingSuffix: '',
    subheading: 'Stay up to date with school events, calendar, and news.',
    ctaText: 'View Calendar of Events',
    ctaHref: '/events/#calendar-of-events',
  },
  calendarOfEvents: {
    title: 'Calendar of Events',
  },
  schoolCalendar: {
    title: 'School Calendar',
    details: [
      { heading: 'School Year', text: '2025-2026 School Year', list: [] as string[] },
      {
        heading: 'School Hours',
        text: '',
        list: [
          '9:00 am - 2:45 pm - Monday, Tuesday, Thursday & Friday',
          '9:00 am - 12:45 pm - every Wednesday (early release)',
        ],
      },
      { heading: 'Class Size', text: 'Six students per class.', list: [] as string[] },
    ],
    footerText: 'The Creekside School is a year-round program.',
  },
} as const

/** Builds the Sanity document for createOrReplace (text/arrays only; add images in Studio). */
export function buildSanityDocument(): Record<string, unknown> {
  const d = DEFAULT_CONTENT
  return {
    _id: DOCUMENT_ID,
    _type: SANITY_TYPE,
    title: d.title,
    heroText: {
      headingPrefix: d.hero.headingPrefix,
      headingHighlight: d.hero.headingHighlight,
      headingSuffix: d.hero.headingSuffix,
      subheading: d.hero.subheading,
      ctaText: d.hero.ctaText,
      ctaHref: d.hero.ctaHref,
    },
    calendarOfEventsText: {
      title: d.calendarOfEvents.title,
    },
    schoolCalendarText: {
      title: d.schoolCalendar.title,
      details: d.schoolCalendar.details.map((detail, i) => ({
        _type: 'object',
        _key: `detail-${i}`,
        heading: detail.heading,
        text: detail.text ?? '',
        list: detail.list ?? [],
      })),
      footerText: d.schoolCalendar.footerText,
    },
  }
}
