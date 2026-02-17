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
          name: 'heading',
          type: 'string',
          title: 'Section Heading',
          initialValue: 'Our Story',
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
    defineField({
      name: 'missionVisionText',
      type: 'object',
      title: 'Mission & Vision Section',
      fields: [
        defineField({
          name: 'sectionHeading',
          type: 'string',
          title: 'Section Heading',
          initialValue: 'Mission & Vision',
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
    defineField({
      name: 'ourTeamText',
      type: 'object',
      title: 'Our Team Section',
      fields: [
        defineField({
          name: 'sectionHeading',
          type: 'string',
          title: 'Section Heading',
          initialValue: 'Our Team',
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
          initialValue: 'What is Profound Autism?',
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
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (rule) => rule.required().warning('Alt text is important for SEO'),
            }),
          ],
        }),
        defineField({
          name: 'learnMoreHeading',
          type: 'string',
          title: 'Learn More Heading',
          initialValue: 'Learn More:',
        }),
        defineField({
          name: 'supportLinksHeading',
          type: 'string',
          title: 'Support Links Heading',
          initialValue: 'Support Creekside:',
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

