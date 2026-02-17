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
      validation: (rule) => rule.required(),
      initialValue: 'Who We Are - The Creekside School',
    }),
    defineField({
      name: 'ourStoryText',
      type: 'object',
      title: 'Our Story Section',
      fields: [
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
          name: 'imageUrl',
          type: 'string',
          title: 'Image URL',
          description:
            'Full image URL or relative path; front-end falls back to default if empty.',
        }),
      ],
    }),
    defineField({
      name: 'missionVisionText',
      type: 'object',
      title: 'Mission & Vision Section',
      fields: [
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
      ],
    }),
    defineField({
      name: 'ourTeamText',
      type: 'object',
      title: 'Our Team Section',
      fields: [
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
                  title: 'Image URLs',
                  of: [
                    defineArrayMember({
                      type: 'string',
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
          name: 'definition',
          type: 'text',
          title: 'Definition',
        }),
        defineField({
          name: 'learnMoreLinks',
          type: 'array',
          title: 'Learn More Links',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  type: 'string',
                  title: 'Label',
                }),
                defineField({
                  name: 'href',
                  type: 'string',
                  title: 'URL',
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'supportLinks',
          type: 'array',
          title: 'Support Links',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  type: 'string',
                  title: 'Label',
                }),
                defineField({
                  name: 'href',
                  type: 'string',
                  title: 'URL',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});

