import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'joinUs',
  type: 'document',
  title: 'Join Our Team',
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
      name: 'whyWorkAtCreeksideText',
      type: 'object',
      title: 'Why Work at Creekside Section',
      fields: [
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({ name: 'subheading', type: 'text', title: 'Subheading' }),
        defineField({
          name: 'pillars',
          type: 'array',
          title: 'Pillars',
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
      name: 'joinOurTeamText',
      type: 'object',
      title: 'Join Our Team Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'benefits',
          type: 'array',
          title: 'Benefits',
          of: [defineArrayMember({ type: 'string' })],
        }),
      ],
    }),
    defineField({
      name: 'applyInstructionsText',
      type: 'object',
      title: 'Apply Instructions Section',
      fields: [
        defineField({ name: 'text', type: 'text', title: 'Intro Text' }),
        defineField({ name: 'email', type: 'string', title: 'Email' }),
      ],
    }),
    defineField({
      name: 'openPositionsText',
      type: 'object',
      title: 'Open Positions Section',
      fields: [
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({ name: 'subheading', type: 'text', title: 'Subheading' }),
        defineField({
          name: 'positions',
          type: 'array',
          title: 'Positions',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Job Title' }),
                defineField({ name: 'type', type: 'string', title: 'Type (e.g. Full-time position)' }),
                defineField({ name: 'description', type: 'text', title: 'Description' }),
                defineField({ name: 'link', type: 'string', title: 'Link URL' }),
                defineField({ name: 'tagColor', type: 'string', title: 'Tag Color (hex)' }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'howWeHireText',
      type: 'object',
      title: 'How We Hire Section',
      fields: [
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({
          name: 'steps',
          type: 'array',
          title: 'Steps',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'description', type: 'text', title: 'Description' }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'questionsEmailText',
      type: 'object',
      title: 'Questions Email Section',
      fields: [
        defineField({ name: 'text', type: 'string', title: 'Intro Text' }),
        defineField({ name: 'email', type: 'string', title: 'Email' }),
      ],
    }),
    defineField({
      name: 'equalOpportunityText',
      type: 'object',
      title: 'Equal Opportunity Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'text', type: 'text', title: 'Text' }),
      ],
    }),
  ],
});
