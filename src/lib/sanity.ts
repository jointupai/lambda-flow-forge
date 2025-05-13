
import { createClient } from '@sanity/client';

// Initialize Sanity client
export const sanityClient = createClient({
  projectId: '3gu414ev',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
});
