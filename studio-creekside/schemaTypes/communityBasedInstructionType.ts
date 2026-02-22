import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'communityBasedInstruction',
  type: 'document',
  title: 'Community-Based Instruction',
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
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'approachText',
      type: 'object',
      title: 'Approach Section',
      fields: [
        defineField({ name: 'body', type: 'text', title: 'Body' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'communityPartnersText',
      type: 'object',
      title: 'Community Partners Section',
      fields: [
        defineField({ name: 'heading', type: 'string', title: 'Section Heading' }),
        defineField({ name: 'body', type: 'text', title: 'Intro Paragraph' }),
        defineField({
          name: 'partners',
          type: 'array',
          title: 'Partners',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'name', type: 'string', title: 'Name' }),
                defineField({ name: 'description', type: 'text', title: 'Description' }),
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
})
