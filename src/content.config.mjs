import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const reviewsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    author: z.string(),
    pubDate: z.string().or(z.date()),
    tags: z.array(z.string()).optional(),
    layout: z.string().optional(),
  }),
})
const authorCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/authors' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    tags: z.array(z.string()).optional(),
    layout: z.string().optional(),
  }),
})


export const collections = {
  'reviews': reviewsCollection,
  'authors': authorCollection,
};