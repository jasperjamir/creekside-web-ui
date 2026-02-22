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
        defineField({
          name: 'cbiBody',
          type: 'text',
          title: 'CBI Description',
          description: 'Paragraph below the heading. Default: "Community-Based Instruction (CBI) is an integral part of the Creekside approach..."',
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
                  title: 'Logo',
                  options: { hotspot: true },
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
