
import { createClient } from '@sanity/client';

// Initialize Sanity client
export const sanityClient = createClient({
  projectId: '3gu414ev',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
});

// Function to fetch content
export const fetchContent = async () => {
  try {
    const query = '*[_type == "content"]';
    const content = await sanityClient.fetch(query);
    console.log('Fetched content:', content);
    return content;
  } catch (error) {
    console.error('Error fetching content from Sanity:', error);
    throw error;
  }
};
