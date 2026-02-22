export interface CalendarEvent {
  id: string;
  name: string;
  rsvpLink: string | null;
}

export interface CalendarDay {
  dayName: string;
  date: string;
  events: CalendarEvent[];
}

export const CALENDAR_CONTENT = {
  title: 'Calendar of Events',
  month: 'February',
  initialDate: '2026-02-21', // Sunday of initial week (YYYY-MM-DD)
  days: [
    {
      dayName: 'Sun',
      date: '21',
      events: [
        { id: 'Event #1:', name: 'Event Circle', rsvpLink: '#' },
      ],
    },
    {
      dayName: 'Mon',
      date: '22',
      events: [],
    },
    {
      dayName: 'Tue',
      date: '23',
      events: [
        { id: 'Event #2:', name: 'Event Circle', rsvpLink: '#' },
      ],
    },
    {
      dayName: 'Wed',
      date: '24',
      events: [
        { id: 'Event #3:', name: 'Event Circle', rsvpLink: null },
      ],
    },
    {
      dayName: 'Thu',
      date: '25',
      events: [],
    },
    {
      dayName: 'Fri',
      date: '26',
      events: [
        { id: 'Event #4:', name: 'Event Circle', rsvpLink: '#' },
      ],
    },
    {
      dayName: 'Sat',
      date: '27',
      events: [],
    },
  ],
};
