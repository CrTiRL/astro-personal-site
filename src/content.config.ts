import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const common = z.object({
  title: z.string(), description: z.string(), date: z.coerce.date(),
  tags: z.array(z.string()), draft: z.boolean().default(false),
});
export const collections = {
  blog: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/blog' }), schema: common }),
  projects: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/projects' }), schema: common.extend({ type: z.string(), color: z.enum(['green', 'sand', 'blue']), url: z.url().optional() }) }),
};
