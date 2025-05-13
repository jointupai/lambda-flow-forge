
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Loader2, ArrowLeft, ChevronRight } from "lucide-react";
import { fetchContent } from "@/lib/sanity";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";

interface ContentItem {
  _id: string;
  category?: string;
  title?: string;
  content?: any;
  slug?: {
    current: string;
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: any;
  };
}

export default function DocumentationCategory() {
  const { category } = useParams<{ category: string }>();
  const [articles, setArticles] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryArticles = async () => {
      try {
        setIsLoading(true);
        const allContent = await fetchContent();
        const filtered = (allContent as ContentItem[]).filter(
          (item) =>
            item.category?.toLowerCase().replace(/\s+/g, "-") ===
            (category || "").toLowerCase()
        );
        setArticles(filtered);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        toast({
          title: "Failed to load category",
          description: "Could not load documentation articles for this category.",
          variant: "destructive",
        });
      }
    };
    if (category) fetchCategoryArticles();
  }, [category]);

  // SEO meta for the category page
  const categoryTitle = category
    ? category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "";

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title={categoryTitle + " | Documentation"}
        description={`Documentation articles for category: ${categoryTitle}`}
        slug={`documentation/${category}`}
      />
      <div className="max-w-2xl mx-auto pt-12 px-4">
        <Link
          to="/documentation"
          className="flex items-center text-gray-400 hover:text-white mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Documentation
        </Link>
        <h1 className="text-3xl font-bold mb-8">{categoryTitle}</h1>
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
          </div>
        ) : articles.length === 0 ? (
          <div className="text-gray-400">
            No articles found in this category.
          </div>
        ) : (
          <ul className="space-y-6">
            {articles.map((item) => (
              <li key={item._id} className="p-4 bg-zinc-900 rounded border border-zinc-800">
                <Link
                  to={`/documentation/${category}/${item.slug?.current}`}
                  className="text-lg font-semibold hover:underline text-white"
                >
                  {item.title}
                </Link>
                <div className="text-gray-400 text-sm mt-2">
                  {item.seo?.metaDescription ||
                    (typeof item.content === "string"
                      ? item.content.substring(0, 150)
                      : "")}
                </div>
                <div className="mt-2">
                  <Link
                    to={`/documentation/${category}/${item.slug?.current}`}
                  >
                    <Button className="bg-white text-black hover:bg-gray-200" size="sm">
                      Read Article
                    </Button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
