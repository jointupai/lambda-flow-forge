
import { sanityClient } from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any): string {
  // Handles both {_ref} and {url}
  if (!source) return "";
  if (source.url) return source.url; // already a usable url
  if (source._ref) return builder.image(source).auto('format').url() || "";
  return "";
}
