// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob } from 'astro/loaders'

// 3. Define your collection(s)
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

// 4. Export a single `collections` object to register you collection(s)
export const collections = {
  'reviews': reviewsCollection,
};