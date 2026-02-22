import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'whoWeAre',
  type: 'document',
  title: 'Who We Are',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
    }),
    defineField({
      name: 'ourStoryText',
      type: 'object',
      title: 'Our Story Section',
      fields: [
        defineField({
          name: 'heading',
          type: 'string',
          title: 'Section Heading',
        }),
        defineField({
          name: 'body',
          type: 'text',
          title: 'Body',
        }),
        defineField({
          name: 'body2',
          type: 'text',
          title: 'Body (Second Paragraph)',
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
      name: 'lifelongLearningText',
      type: 'object',
      title: 'Lifelong Learning Section',
      fields: [
        defineField({
          name: 'headline',
          type: 'string',
          title: 'Headline',
        }),
        defineField({
          name: 'subheading',
          type: 'text',
          title: 'Subheading',
        }),
        defineField({
          name: 'body',
          type: 'text',
          title: 'Body',
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
      name: 'missionVisionText',
      type: 'object',
      title: 'Mission & Vision Section',
      fields: [
        defineField({
          name: 'sectionHeading',
          type: 'string',
          title: 'Section Heading',
        }),
        defineField({
          name: 'mission',
          type: 'text',
          title: 'Mission',
        }),
        defineField({
          name: 'vision',
          type: 'text',
          title: 'Vision',
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
      name: 'ourTeamText',
      type: 'object',
      title: 'Our Team Section',
      fields: [
        defineField({
          name: 'sectionHeading',
          type: 'string',
          title: 'Section Heading',
        }),
        defineField({
          name: 'groups',
          type: 'array',
          title: 'Groups',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                }),
                defineField({
                  name: 'description',
                  type: 'text',
                  title: 'Description',
                }),
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
    defineField({
      name: 'whatIsProfoundAutismText',
      type: 'object',
      title: 'What Is Profound Autism Section',
      fields: [
        defineField({
          name: 'sectionHeading',
          type: 'string',
          title: 'Section Heading',
        }),
        defineField({
          name: 'definition',
          type: 'text',
          title: 'Definition',
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

