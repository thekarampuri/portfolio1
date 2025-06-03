import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default('Anonymous'),
    image: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()).default([]),
    url: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'blog': blogCollection,
  'projects': projectCollection,
};