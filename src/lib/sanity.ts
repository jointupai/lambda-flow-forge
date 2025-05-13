
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
    const content = await sanityClient.fetch('*[_type == "content"]');
    return content;
  } catch (error) {
    console.error('Error fetching content from Sanity:', error);
    throw error;
  }
};
