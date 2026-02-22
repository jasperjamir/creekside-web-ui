import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'whatWeDo',
  type: 'document',
  title: 'Our Programs',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
    }),
    defineField({
      name: 'heroText',
      type: 'object',
      title: 'Hero Section',
      fields: [
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({ name: 'body', type: 'text', title: 'Body' }),
        defineField({ name: 'body2', type: 'text', title: 'Body (Second Line)' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (rule) => rule.required().warning('Alt text is important for SEO'),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'ourServicesText',
      type: 'object',
      title: 'Our Services Section',
      fields: [
        defineField({ name: 'sectionHeading', type: 'string', title: 'Section Heading' }),
        defineField({ name: 'body', type: 'text', title: 'Intro Paragraph' }),
        defineField({
          name: 'services',
          type: 'array',
          title: 'Services',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({
                  name: 'image',
                  type: 'image',
                  title: 'Image',
                  options: { hotspot: true },
                  fields: [
                    defineField({
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative Text',
                      validation: (rule) => rule.required().warning('Alt text is important for SEO'),
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
      name: 'adultProgramText',
      type: 'object',
      title: 'Adult Program Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'subheading', type: 'text', title: 'Subheading' }),
        defineField({ name: 'overviewParagraph', type: 'text', title: 'Overview Paragraph' }),
        defineField({ name: 'approachParagraph', type: 'text', title: 'Approach Paragraph' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (rule) => rule.required().warning('Alt text is important for SEO'),
            }),
          ],
        }),
        defineField({
          name: 'approachImageAlt',
          type: 'string',
          title: 'Approach Block Image Alt',
          description: 'Alt text for the image in the second (approach) block',
        }),
      ],
    }),
    defineField({
      name: 'longTermGoalText',
      type: 'object',
      title: 'Long-Term Goal Section',
      fields: [
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({ name: 'subheading', type: 'text', title: 'Subheading' }),
        defineField({
          name: 'goals',
          type: 'array',
          title: 'Goals',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'icon', type: 'string', title: 'Icon' }),
                defineField({ name: 'text', type: 'text', title: 'Text' }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'communityPartnershipsText',
      type: 'object',
      title: 'Community Partnerships Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Section Title' }),
        defineField({ name: 'cbiTitle', type: 'string', title: 'CBI Details Title' }),
        defineField({ name: 'cbiBody', type: 'text', title: 'CBI Description' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Section Image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (rule) => rule.required().warning('Alt text is important for SEO'),
            }),
          ],
        }),
        defineField({
          name: 'partners',
          type: 'array',
          title: 'Partners',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'name', type: 'string', title: 'Name' }),
                defineField({ name: 'href', type: 'string', title: 'Link URL' }),
                defineField({
                  name: 'image',
                  type: 'image',
                  title: 'Logo / Image',
                  options: { hotspot: true },
                  fields: [
                    defineField({
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative Text',
                      validation: (rule) => rule.required().warning('Alt text is important for SEO'),
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
});
