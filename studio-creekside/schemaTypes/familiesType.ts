import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'families',
  type: 'document',
  title: 'For Families',
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
        defineField({ name: 'ctaText', type: 'string', title: 'CTA Button Text' }),
        defineField({ name: 'ctaHref', type: 'string', title: 'CTA Button Link' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Hero Image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'aboutAdmissionText',
      type: 'object',
      title: 'About Admission Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'sarcText',
      type: 'object',
      title: 'SARC Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({
          name: 'description',
          type: 'array',
          title: 'Description Paragraphs',
          of: [defineArrayMember({ type: 'string' })],
        }),
        defineField({
          name: 'button',
          type: 'object',
          title: 'Button',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Label' }),
            defineField({ name: 'link', type: 'string', title: 'Link URL' }),
          ],
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
      name: 'sarcArchiveItems',
      type: 'array',
      title: 'SARC Archive Items',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'years', type: 'string', title: 'Years' }),
            defineField({ name: 'label', type: 'string', title: 'Label' }),
            defineField({
              name: 'theme',
              type: 'string',
              title: 'Theme',
              options: {
                list: [
                  { title: 'Light Blue', value: 'light-blue' },
                  { title: 'Yellow', value: 'yellow' },
                  { title: 'Navy', value: 'navy' },
                ],
              },
            }),
            defineField({ name: 'link', type: 'string', title: 'Link URL' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'resourcesText',
      type: 'object',
      title: 'Resources Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({
          name: 'features',
          type: 'array',
          title: 'Features',
          of: [defineArrayMember({ type: 'string' })],
        }),
        defineField({
          name: 'button',
          type: 'object',
          title: 'Button',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Label' }),
            defineField({ name: 'link', type: 'string', title: 'Link URL' }),
          ],
        }),
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
