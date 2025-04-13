import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const storyCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/stories' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    author: z.string(),
    pubDate: z.string().or(z.date()),
    tags: z.array(z.string()).optional(),
    img: z.string().optional(),
    draft: z.boolean().optional(),
    layout: z.string().optional(),
  }),
})
const memberCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/members' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    img: z.string().optional(),
    layout: z.string().optional(),
  }),
})


export const collections = {
  'stories': storyCollection,
  'members': memberCollection,
};