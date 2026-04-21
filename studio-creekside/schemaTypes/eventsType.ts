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
        defineField({
          name: 'ctaText',
          type: 'string',
          title: 'Hero button label',
          description:
            'Shown on the main call-to-action under the headline (e.g. View School Calendar). Leave empty to use the site default.',
        }),
        defineField({
          name: 'ctaHref',
          type: 'string',
          title: 'Hero button link',
          description:
            'Where the hero button goes: internal path (e.g. /events/#school-calendar) or full URL. Leave empty to use the site default.',
        }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Hero Image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'updatesText',
      type: 'object',
      title: 'Updates Section',
      fields: [
        defineField({ name: 'sectionTitle', type: 'string', title: 'Section Title' }),
        defineField({ name: 'sectionBody', type: 'text', title: 'Section Paragraph' }),
        defineField({
          name: 'items',
          type: 'array',
          title: 'Updates',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Update Title' }),
                defineField({ name: 'body', type: 'text', title: 'Update Paragraph' }),
                defineField({
                  name: 'image',
                  type: 'image',
                  title: 'Image',
                  options: { hotspot: true },
                }),
              ],
            }),
          ],
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
