
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'skXgnCwTZhsxZ2AirHVrE41Z8UEuVmgmcBAHNL4OmF0QD5zuK8D7BZufwZrQxdcOIy8FMyEhWHQZJGzoXLtxD85WMOnHMEkMZVO6SkRIIldEKxMixBaWJOL4SLLw66cEOQATwU4iPqhAn2JkMFPjxufksbAFWOZOJDAQlCHbmuwwAKfqh4cF',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
});

// Types for Sanity content
export interface DocCategory {
  _id: string;
  title: string;
  slug: string;
}

export interface DocArticle {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: any[]; // Sanity block content
  category: {
    title: string;
    slug: string;
  };
  publishedAt: string;
}
