
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchContent } from "@/lib/sanity";
import { toast } from "@/hooks/use-toast";
import { PortableText } from "@portabletext/react";
import SEO from "@/components/SEO";

// Types for content
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

export default function DocumentationArticle() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const [article, setArticle] = useState<ContentItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        const allContent = await fetchContent();
        const found = (allContent as ContentItem[]).find(
          (item) =>
            item.category?.toLowerCase().replace(/\s+/g, "-") ===
              (category || "").toLowerCase() &&
            item.slug?.current === slug
        );
        setArticle(found || null);
        setIsLoading(false);
      } catch (error) {
        toast({
          title: "Error loading documentation",
          description: "Could not connect to the content server. Please try again later.",
          variant: "destructive",
        });
        setIsLoading(false);
      }
    };

    if (category && slug) fetchArticle();
  }, [category, slug]);

  return (
    <div className="min-h-screen bg-black text-white">
      {article && (
        <SEO
          title={article.seo?.metaTitle || article.title || "Documentation Article"}
          description={
            article.seo?.metaDescription ||
            (typeof article.content === "string" ? article.content : "")
          }
          keywords={article.seo?.keywords}
          ogImage={article.seo?.ogImage}
          slug={`documentation/${category}/${slug}`}
        />
      )}
      <div className="flex">
        <div className="flex-1 mx-auto max-w-3xl pt-16 px-4">
          <Link
            to={`/documentation/${category}`}
            className="flex items-center text-gray-400 hover:text-white mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {category?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </Link>
          <div className="bg-zinc-900 border-zinc-800 p-8 rounded">
            {isLoading ? (
              <div className="flex items-center justify-center my-20">
                <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
              </div>
            ) : article ? (
              <>
                <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
                <div className="prose prose-invert max-w-none mb-8">
                  {Array.isArray(article.content) ? (
                    <PortableText value={article.content} />
                  ) : article.content ? (
                    <span>{article.content}</span>
                  ) : (
                    <span>No content</span>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
                <p className="text-gray-400 mb-8">
                  We couldn't find the article you're looking for. It may have been moved or deleted.
                </p>
                <Link to="/documentation">
                  <Button className="bg-white text-black hover:bg-gray-200">
                    Return to Documentation
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
