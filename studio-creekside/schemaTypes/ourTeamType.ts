import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'ourTeam',
  type: 'document',
  title: 'Our Team',
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
        defineField({ name: 'headingPrefix', type: 'string', title: 'Heading Prefix' }),
        defineField({ name: 'headingHighlight', type: 'string', title: 'Heading Highlight' }),
        defineField({ name: 'headingSuffix', type: 'string', title: 'Heading Suffix' }),
        defineField({
          name: 'subheadingParagraphs',
          type: 'array',
          title: 'Subheading Paragraphs',
          of: [defineArrayMember({ type: 'string' })],
        }),
        defineField({ name: 'ctaText', type: 'string', title: 'CTA Text' }),
        defineField({ name: 'ctaHref', type: 'string', title: 'CTA Link' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Hero Image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'staffLeadershipText',
      type: 'object',
      title: 'Staff Leadership Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Section Title' }),
        defineField({
          name: 'members',
          type: 'array',
          title: 'Members',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'name', type: 'string', title: 'Name' }),
                defineField({ name: 'role', type: 'string', title: 'Role' }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'boardOfDirectorsText',
      type: 'object',
      title: 'Board of Directors Section',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Section Title' }),
        defineField({
          name: 'members',
          type: 'array',
          title: 'Members',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'name', type: 'string', title: 'Name' }),
                defineField({ name: 'role', type: 'string', title: 'Role' }),
                defineField({ name: 'bio', type: 'text', title: 'Bio' }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'ourTeamGroupsText',
      type: 'object',
      title: 'Our Team Groups Section',
      fields: [
        defineField({ name: 'sectionHeading', type: 'string', title: 'Section Heading' }),
        defineField({
          name: 'groups',
          type: 'array',
          title: 'Groups',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'description', type: 'text', title: 'Description' }),
                defineField({
                  name: 'images',
                  type: 'array',
                  title: 'Images',
                  of: [
                    defineArrayMember({
                      type: 'image',
                      options: { hotspot: true },
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
})
