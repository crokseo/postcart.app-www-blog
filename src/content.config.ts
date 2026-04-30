import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.string().optional(),
    categorySlug: z.string().optional(),
    image: z.string().optional(),
    imageAlign: z.enum(['left', 'center', 'right']).optional(),
    readingTime: z.string().optional(),
  }),
});

export const collections = { blog };
