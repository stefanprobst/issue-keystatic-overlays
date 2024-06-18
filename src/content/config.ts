// @ts-ignore
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    cards: z.array(
      z.object({
        title: z.string(),
        content: z.string(),
      })
    ),
  }),
});

export const collections = { posts };
