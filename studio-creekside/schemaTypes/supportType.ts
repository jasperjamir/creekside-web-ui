import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'support',
  type: 'document',
  title: 'Support (main page)',
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
        defineField({ name: 'donateCta', type: 'string', title: 'Donate CTA Button Text' }),
        defineField({ name: 'donateHref', type: 'string', title: 'Donate CTA Link' }),
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
      name: 'whySupportMattersText',
      type: 'object',
      title: 'Why Your Support Matters',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Section Title' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
          fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text' })],
        }),
      ],
    }),
    defineField({
      name: 'impactHighlightsText',
      type: 'object',
      title: 'Impact Highlights',
      fields: [
        defineField({ name: 'sectionTitle', type: 'string', title: 'Section Title' }),
        defineField({
          name: 'items',
          type: 'array',
          title: 'Items',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'description', type: 'text', title: 'Description' }),
                defineField({
                  name: 'image',
                  type: 'image',
                  title: 'Image',
                  options: { hotspot: true },
                  fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text' })],
                }),
              ],
            }),
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
          of: [defineArrayMember({ type: 'string' })],
        }),
        defineField({ name: 'monthlyLabel', type: 'string', title: 'Monthly Option Label' }),
        defineField({ name: 'inKindTitle', type: 'string', title: 'In-Kind Donations Title' }),
        defineField({ name: 'inKindSubtitle', type: 'string', title: 'In-Kind Donations Subtitle' }),
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
                defineField({ name: 'link', type: 'url', title: 'Link (optional)' }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'donateNowText',
      type: 'object',
      title: 'Donate Now CTA Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({
          name: 'features',
          type: 'array',
          title: 'Feature Bullets',
          of: [defineArrayMember({ type: 'string' })],
        }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Background Image',
          options: { hotspot: true },
          fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text' })],
        }),
      ],
    }),
    defineField({
      name: 'whatGiftMakesPossibleText',
      type: 'object',
      title: 'What Your Gift Makes Possible',
      fields: [
        defineField({ name: 'sectionTitle', type: 'string', title: 'Section Title' }),
        defineField({
          name: 'items',
          type: 'array',
          title: 'Items',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'text', type: 'string', title: 'Text' }),
                defineField({
                  name: 'iconSvg',
                  type: 'text',
                  title: 'Icon (SVG markup)',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'otherWaysToGiveText',
      type: 'object',
      title: 'Other Ways to Give',
      fields: [
        defineField({ name: 'sectionTitle', type: 'string', title: 'Section Title' }),
        defineField({
          name: 'items',
          type: 'array',
          title: 'Items',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'text', type: 'text', title: 'Text' }),
                defineField({
                  name: 'textHtml',
                  type: 'text',
                  title: 'Text (HTML, optional)',
                  description: 'Override for rich formatting; leave blank to use plain text.',
                }),
                defineField({
                  name: 'icon',
                  type: 'string',
                  title: 'Icon name',
                  description: 'e.g. BarChart, TrendingUp, Heart, Presentation',
                }),
                defineField({ name: 'link', type: 'url', title: 'Link (optional)' }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'credibilityText',
      type: 'object',
      title: 'Credibility / Compliance',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({
          name: 'bodyHtml',
          type: 'text',
          title: 'Body (HTML allowed)',
        }),
      ],
    }),
  ],
});
