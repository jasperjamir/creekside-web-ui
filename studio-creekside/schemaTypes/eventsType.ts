import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'events',
  type: 'document',
  title: 'Events',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
      description: 'Shown in the browser tab.',
    }),
    defineField({
      name: 'heroText',
      type: 'object',
      title: 'Hero Section',
      fields: [
        defineField({ name: 'headingPrefix', type: 'string', title: 'Heading Prefix' }),
        defineField({ name: 'headingHighlight', type: 'string', title: 'Heading Highlight' }),
        defineField({ name: 'headingSuffix', type: 'string', title: 'Heading Suffix' }),
        defineField({ name: 'subheading', type: 'text', title: 'Subheading' }),
        defineField({ name: 'ctaText', type: 'string', title: 'CTA Button Text' }),
        defineField({ name: 'ctaHref', type: 'string', title: 'CTA Link' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Hero Image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'calendarOfEventsText',
      type: 'object',
      title: 'Calendar of Events Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Section Title' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'schoolCalendarText',
      type: 'object',
      title: 'School Calendar Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Section Title' }),
        defineField({
          name: 'details',
          type: 'array',
          title: 'Details',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'heading', type: 'string', title: 'Heading' }),
                defineField({ name: 'text', type: 'string', title: 'Text (optional)' }),
                defineField({
                  name: 'list',
                  type: 'array',
                  title: 'List (optional)',
                  of: [defineArrayMember({ type: 'string' })],
                }),
              ],
            }),
          ],
        }),
        defineField({ name: 'footerText', type: 'string', title: 'Footer Text' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
        }),
      ],
    }),
  ],
});
