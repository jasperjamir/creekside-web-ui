import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'supportInKindDonations',
  type: 'document',
  title: 'In-Kind Donations',
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
        defineField({ name: 'donateCta', type: 'string', title: 'CTA Button Text' }),
        defineField({ name: 'donateHref', type: 'string', title: 'CTA Link' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Hero Image',
          options: { hotspot: true },
          fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text' })],
        }),
      ],
    }),
    defineField({
      name: 'wishlistText',
      type: 'object',
      title: 'Wishlist Section',
      fields: [
        defineField({ name: 'sectionTitle', type: 'string', title: 'Section Title' }),
        defineField({
          name: 'categories',
          type: 'array',
          title: 'Categories',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Category Title' }),
                defineField({
                  name: 'items',
                  type: 'array',
                  title: 'Items',
                  of: [
                    defineArrayMember({
                      type: 'object',
                      fields: [
                        defineField({ name: 'text', type: 'string', title: 'Text' }),
                        defineField({
                  name: 'link',
                  type: 'string',
                  title: 'Link (optional)',
                  description: 'Full URL or mailto: (e.g. mailto:email@example.org)',
                }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'howToGiveText',
      type: 'object',
      title: 'How To Give Section',
      fields: [
        defineField({ name: 'sectionTitle', type: 'string', title: 'Section Title' }),
        defineField({
          name: 'steps',
          type: 'array',
          title: 'Steps',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'heading', type: 'string', title: 'Heading' }),
                defineField({ name: 'subHeading', type: 'string', title: 'Subheading (e.g. email)' }),
                defineField({ name: 'text', type: 'string', title: 'Text' }),
                defineField({
                  name: 'link',
                  type: 'string',
                  title: 'Link (optional)',
                  description: 'Full URL or mailto: (e.g. mailto:email@example.org)',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'drivesText',
      type: 'object',
      title: 'Drives Section',
      fields: [
        defineField({
          name: 'cards',
          type: 'array',
          title: 'Cards',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'type',
                  type: 'string',
                  title: 'Card Type',
                  options: {
                    list: [
                      { title: 'Blue (checkmark)', value: 'blue' },
                      { title: 'Black (X)', value: 'black' },
                    ],
                  },
                }),
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'text', type: 'text', title: 'Text' }),
                defineField({
                  name: 'textHtml',
                  type: 'text',
                  title: 'Text (HTML, optional)',
                  description: 'Override for links; leave blank to use plain text.',
                }),
                defineField({
                  name: 'emailLink',
                  type: 'string',
                  title: 'Email Link (optional)',
                  description: 'e.g. mailto:email@example.org',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
