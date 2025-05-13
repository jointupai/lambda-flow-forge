
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Loader2, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PortableText } from "@portabletext/react";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchContent } from "@/lib/sanity";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";

// Bring category param into useParams
export default function PostPage() {
  const { id, category } = useParams<{ id?: string; category?: string }>();
  const [post, setPost] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setIsLoading(true);
        const allContent = await fetchContent();
        let foundPost = null;
        if (id && category) {
          // If both category and id (which is really SLUG), find by both
          foundPost = (allContent as any[]).find(
            (item) =>
              item.category === category &&
              item.slug &&
              item.slug.current === id
          ) || null;
        } else if (id) {
          // Fallback: find by Sanity document _id
          foundPost = (allContent as any[]).find((item) => item._id === id) || null;
        }
        setPost(foundPost);
        setIsLoading(false);
      } catch (error) {
        toast({
          title: "Failed to load post",
          description: "Could not load documentation post.",
          variant: "destructive",
        });
        setIsLoading(false);
      }
    };
    if (id) loadPost();
  }, [id, category]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center my-20 min-h-screen">
        <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
        <p className="text-gray-400 mb-8">
          We couldn't find the documentation post you're looking for. It may have been moved or deleted.
        </p>
        <Link to="/documentation">
          <Button className="bg-white text-black hover:bg-gray-200">
            Return to Documentation
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* --- SEO tags for post page --- */}
      {post && (
        <SEO
          title={post.seo?.metaTitle || post.title || "Documentation post"}
          description={
            post.seo?.metaDescription ||
            (typeof post.content === "string" ? post.content : "")
          }
          keywords={post.seo?.keywords}
          ogImage={post.seo?.ogImage}
          slug={post.slug?.current}
        />
      )}
      <div className="flex">
        {/* Main content */}
        <div className="flex-1 mx-auto max-w-3xl pt-16 px-4">
          <Link to="/documentation" className="flex items-center text-gray-400 hover:text-white mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Documentation
          </Link>
          <Card className="bg-zinc-900 border-zinc-800 p-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="text-gray-400 mb-2">
              {Array.isArray(post.content) ? (
                <PortableText value={post.content} />
              ) : post.content ? (
                <div>{post.content}</div>
              ) : (
                <span>No content</span>
              )}
            </div>
            {post.category && (
              <div className="text-xs text-gray-500 mt-2">Category: {post.category}</div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

