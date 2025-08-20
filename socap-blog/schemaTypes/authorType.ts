import { UserIcon } from '@heroicons/react/16/solid'
import { defineField, defineType } from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.custom((value) => {
        if (!value) return true;
        if (typeof value !== 'string') return 'Name must be a string';
        if (!value.startsWith('@')) {
          return 'Name must start with @ symbol — your twitter handle (e.g. @elonmusk)';
        }
        return true;
      }),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
