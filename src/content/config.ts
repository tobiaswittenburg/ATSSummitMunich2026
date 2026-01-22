import { defineCollection, z } from 'astro:content';

const vocabularyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    word: z.string(),
    translation: z.string(),
    category: z.string().optional(),
    difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
    examples: z.array(z.string()).optional(),
  }),
});

export const collections = {
  vocabulary: vocabularyCollection,
};
