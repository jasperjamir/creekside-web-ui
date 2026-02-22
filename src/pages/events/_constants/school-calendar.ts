export interface SchoolCalendarDetail {
  heading: string;
  text?: string;
  list?: string[];
}

export const SCHOOL_CALENDAR_CONTENT = {
  title: 'School Calendar',
  details: [
    {
      heading: 'School Year',
      text: '2025-2026 School Year',
    },
    {
      heading: 'School Hours',
      list: [
        '9:00 am - 2:45 pm - Monday, Tuesday, Thursday & Friday',
        '9:00 am - 12:45 pm - every Wednesday (early release)',
      ],
    },
    {
      heading: 'Class Size',
      text: 'Six students per class.',
    },
  ],
  footerText: 'The Creekside School is a year-round program.',
  image: {
    src: 'support--why-support-matters.png',
    alt: 'Student playing basketball on an outdoor school court',
  },
};
