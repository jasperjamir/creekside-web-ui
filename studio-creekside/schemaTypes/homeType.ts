import { defineType, defineField, defineArrayMember } from 'sanity';
import { HomeIcon } from '@sanity/icons';

export default defineType({
  name: 'home',
  type: 'document',
  title: 'Home',
  icon: HomeIcon,
  preview: {
    select: {
      title: 'title',
    },
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
      initialValue: 'Home Page',
    }),
    defineField({
      name: 'heroText',
      type: 'object',
      title: 'Hero Section',
      fields: [
        defineField({
          name: 'image',
          type: 'image',
          title: 'Hero Image',
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
        defineField({ name: 'imageAlt', type: 'string', title: 'Image Alt Text (fallback)' }),
        defineField({ name: 'badge', type: 'string', title: 'Badge' }),
        defineField({ name: 'headingPrefix', type: 'string', title: 'Heading Prefix' }),
        defineField({ name: 'headingHighlight', type: 'string', title: 'Heading Highlight' }),
        defineField({ name: 'subheading', type: 'text', title: 'Subheading' }),
        defineField({ name: 'contactCta', type: 'string', title: 'Contact CTA Text' }),
        defineField({ name: 'donateCta', type: 'string', title: 'Donate CTA Text' }),
        defineField({ name: 'contactHref', type: 'string', title: 'Contact Link' }),
        defineField({ name: 'donateHref', type: 'string', title: 'Donate Link' }),
      ],
    }),
    defineField({
      name: 'creeksideDifferenceText',
      type: 'object',
      title: 'Creekside Difference Section',
      fields: [
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({ name: 'body', type: 'text', title: 'Body' }),
      ],
    }),
    defineField({
      name: 'ourPillarsText',
      type: 'object',
      title: 'Our Pillars Section',
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
      name: 'communityPartnersText',
      type: 'object',
      title: 'Community Partners Section',
      fields: [
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({
          name: 'partners',
          type: 'array',
          title: 'Partners',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'name', type: 'text', title: 'Name' }),
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
      name: 'navigationGridText',
      type: 'object',
      title: 'Navigation Grid Section',
      fields: [
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({ name: 'linkLabel', type: 'string', title: 'Link Label' }),
        defineField({
          name: 'items',
          type: 'array',
          title: 'Navigation Items',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'icon', type: 'string', title: 'Icon' }),
                defineField({ name: 'link', type: 'string', title: 'Link' }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'testimonialsText',
      type: 'object',
      title: 'Testimonials Section',
      fields: [
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({
          name: 'testimonials',
          type: 'array',
          title: 'Testimonials',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'text', type: 'text', title: 'Text' }),
                defineField({ name: 'author', type: 'string', title: 'Author' }),
                defineField({ name: 'role', type: 'string', title: 'Role' }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'communityImageText',
      type: 'object',
      title: 'Community Image Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
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
});