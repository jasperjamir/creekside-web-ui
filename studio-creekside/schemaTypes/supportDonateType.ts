import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'supportDonate',
  type: 'document',
  title: 'Donate (Support)',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
      description: 'Shown in the browser tab and used as the document label in the desk.',
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
        defineField({ name: 'donateCta', type: 'string', title: 'Donate CTA Button Text' }),
        defineField({ name: 'donateHref', type: 'string', title: 'Donate CTA Link' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Hero Image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'waysToGiveText',
      type: 'object',
      title: 'Ways to Give Section',
      fields: [
        defineField({ name: 'sectionTitle', type: 'string', title: 'Section Title' }),
        defineField({
          name: 'donationAmounts',
          type: 'array',
          title: 'Donation Amounts',
          description: 'e.g. $50, $100, Other',
          of: [defineArrayMember({ type: 'string' })],
        }),
        defineField({ name: 'monthlyLabel', type: 'string', title: 'Monthly Option Label' }),
        defineField({ name: 'inKindTitle', type: 'string', title: 'In-Kind Donations Title' }),
        defineField({ name: 'inKindSubtitle', type: 'string', title: 'In-Kind Donations Subtitle' }),
      ],
    }),
    defineField({
      name: 'givingOptionsItems',
      type: 'array',
      title: 'Giving Options',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Title' }),
            defineField({ name: 'description', type: 'text', title: 'Description' }),
            defineField({
              name: 'iconSvg',
              type: 'text',
              title: 'Icon (SVG markup)',
              description: 'Paste the SVG HTML string for the icon.',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'transparencyText',
      type: 'object',
      title: 'Transparency Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'body', type: 'text', title: 'Body' }),
      ],
    }),
  ],
});
