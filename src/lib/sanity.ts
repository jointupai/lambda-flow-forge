
import { createClient } from '@sanity/client';

// Initialize Sanity client with correct project ID
export const sanityClient = createClient({
  projectId: 'skXgnCwTZhsxZ2AirHVrE41Z8UEuVmgmcBAHNL4OmF0QD5zuK8D7BZufwZrQxdcOIy8FMyEhWHQZJGzoXLtxD85WMOnHMEkMZVO6SkRIIldEKxMixBaWJOL4SLLw66cEOQATwU4iPqhAn2JkMFPjxufksbAFWOZOJDAQlCHbmuwwAKfqh4cF',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
  token: 'skXgnCwTZhsxZ2AirHVrE41Z8UEuVmgmcBAHNL4OmF0QD5zuK8D7BZufwZrQxdcOIy8FMyEhWHQZJGzoXLtxD85WMOnHMEkMZVO6SkRIIldEKxMixBaWJOL4SLLw66cEOQATwU4iPqhAn2JkMFPjxufksbAFWOZOJDAQlCHbmuwwAKfqh4cF'
});
