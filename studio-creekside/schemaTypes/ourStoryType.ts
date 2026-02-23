import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'ourStory',
  type: 'document',
  title: 'Our Story',
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
      name: 'schoolHistoryText',
      type: 'object',
      title: 'School History Section',
      fields: [
        defineField({
          name: 'paragraphs',
          type: 'array',
          title: 'Paragraphs',
          of: [{ type: 'text' }],
        }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'historyExpansionText',
      type: 'object',
      title: 'History Expansion Section',
      fields: [
        defineField({ name: 'text', type: 'text', title: 'Text' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'historyConclusionText',
      type: 'object',
      title: 'History Conclusion Section',
      fields: [
        defineField({
          name: 'paragraphs',
          type: 'array',
          title: 'Paragraphs',
          of: [{ type: 'text' }],
        }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'jonahLegacyText',
      type: 'object',
      title: 'Jonah Legacy Section',
      fields: [
        defineField({ name: 'kicker', type: 'string', title: 'Kicker' }),
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'quote', type: 'text', title: 'Quote' }),
        defineField({ name: 'attribution', type: 'string', title: 'Attribution' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'firstStepText',
      type: 'object',
      title: 'First Step Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Section Title' }),
        defineField({
          name: 'paragraphs',
          type: 'array',
          title: 'Paragraphs',
          of: [{ type: 'text' }],
        }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'jonahMemoriamText',
      type: 'object',
      title: 'Jonah Memoriam Section',
      fields: [
        defineField({
          name: 'overlay',
          type: 'object',
          title: 'Overlay',
          fields: [
            defineField({ name: 'kicker', type: 'string', title: 'Kicker' }),
            defineField({ name: 'name', type: 'string', title: 'Name' }),
            defineField({ name: 'dates', type: 'string', title: 'Dates' }),
          ],
        }),
        defineField({ name: 'quote', type: 'text', title: 'Quote' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
        }),
      ],
    }),
  ],
})
