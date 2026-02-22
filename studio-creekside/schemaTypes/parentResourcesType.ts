import { defineType, defineField, defineArrayMember } from 'sanity';

const imageField = () =>
  defineField({
    name: 'image',
    type: 'image',
    title: 'Image',
    options: { hotspot: true },
  });

export default defineType({
  name: 'parentResources',
  type: 'document',
  title: 'Parent Resources',
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
        imageField(),
      ],
    }),
    defineField({
      name: 'familyImpactText',
      type: 'object',
      title: 'Family Impact Section',
      fields: [
        defineField({
          name: 'paragraphs',
          type: 'array',
          title: 'Paragraphs',
          of: [defineArrayMember({ type: 'string' })],
        }),
        imageField(),
      ],
    }),
    defineField({
      name: 'contactWithImageText',
      type: 'object',
      title: 'Contact With Image Section',
      fields: [
        defineField({ name: 'schoolName', type: 'string', title: 'School Name' }),
        defineField({
          name: 'address',
          type: 'array',
          title: 'Address Lines',
          of: [defineArrayMember({ type: 'string' })],
        }),
        defineField({ name: 'mapsLink', type: 'string', title: 'Maps Link URL' }),
        defineField({ name: 'contactLabel', type: 'string', title: 'Contact Label' }),
        defineField({ name: 'phone', type: 'string', title: 'Phone' }),
        defineField({ name: 'email', type: 'string', title: 'Email' }),
        imageField(),
      ],
    }),
    defineField({
      name: 'navigatingSystemsText',
      type: 'object',
      title: 'Navigating Systems Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'titleHighlight', type: 'string', title: 'Title Highlight Word' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
      ],
    }),
    defineField({
      name: 'benefitsCards',
      type: 'array',
      title: 'Benefits Cards',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Title' }),
            defineField({ name: 'link', type: 'string', title: 'Link' }),
            defineField({ name: 'description', type: 'text', title: 'Description' }),
            imageField(),
          ],
        }),
      ],
    }),
    defineField({
      name: 'publicBenefitsText',
      type: 'object',
      title: 'Public Benefits Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
        defineField({
          name: 'button',
          type: 'object',
          title: 'Button',
          fields: [
            defineField({ name: 'text', type: 'string', title: 'Text' }),
            defineField({ name: 'link', type: 'string', title: 'Link URL' }),
          ],
        }),
        imageField(),
      ],
    }),
    defineField({
      name: 'publicBenefitsLibraryItems',
      type: 'array',
      title: 'Public Benefits Library Items',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Title' }),
            defineField({ name: 'link', type: 'string', title: 'Link URL' }),
            imageField(),
          ],
        }),
      ],
    }),
    defineField({
      name: 'checkMoreText',
      type: 'object',
      title: 'Check More Section',
      fields: [
        defineField({ name: 'text', type: 'string', title: 'Text' }),
        defineField({ name: 'boldText', type: 'string', title: 'Bold Text' }),
        defineField({ name: 'link', type: 'string', title: 'Link URL' }),
      ],
    }),
    defineField({
      name: 'educationText',
      type: 'object',
      title: 'Education Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
        imageField(),
      ],
    }),
    defineField({
      name: 'educationLibraryItems',
      type: 'array',
      title: 'Education Library Items',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Title' }),
            defineField({ name: 'link', type: 'string', title: 'Link URL' }),
            defineField({ name: 'featured', type: 'boolean', title: 'Featured', initialValue: false }),
            imageField(),
          ],
        }),
      ],
    }),
    defineField({
      name: 'insuranceText',
      type: 'object',
      title: 'Insurance Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
        imageField(),
      ],
    }),
    defineField({
      name: 'insuranceLibraryItems',
      type: 'array',
      title: 'Insurance Library Items',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Title' }),
            defineField({ name: 'link', type: 'string', title: 'Link URL' }),
            defineField({ name: 'featured', type: 'boolean', title: 'Featured', initialValue: false }),
            imageField(),
          ],
        }),
      ],
    }),
  ],
});
