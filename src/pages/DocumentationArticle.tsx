
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { sanityClient } from "@/lib/sanity";
import { toast } from "@/hooks/use-toast";

// Types for Sanity content
interface DocCategory {
  _id: string;
  title: string;
  slug: string;
}

interface DocArticle {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: any[]; // This would be richer content from Sanity's block content
  category: {
    title: string;
    slug: string;
  };
  publishedAt: string;
}

// Mock data for fallback
const mockCategories: DocCategory[] = [
  { _id: "1", title: "Getting Started", slug: "getting-started" },
  { _id: "2", title: "API Reference", slug: "api-reference" },
  { _id: "3", title: "Tutorials", slug: "tutorials" },
  { _id: "4", title: "FAQs", slug: "faqs" }
];

const mockArticle: DocArticle = {
  _id: "1",
  title: "Introduction to JointUp",
  slug: "introduction",
  excerpt: "Learn the basics of JointUp platform and how to get started.",
  content: [
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'JointUp is a powerful cloud automation and integration platform designed for modern businesses. This guide will help you get started with the platform and understand its core features.'
        }
      ]
    },
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'Key features include automated workflows, API integrations, and custom development capabilities that allow you to create powerful solutions without extensive coding knowledge.'
        }
      ]
    }
  ],
  category: { title: "Getting Started", slug: "getting-started" },
  publishedAt: "2025-01-10"
};

export default function DocumentationArticle() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<DocArticle | null>(null);
  const [categories, setCategories] = useState<DocCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isUsingMockData, setIsUsingMockData] = useState(false);
  
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Fetch categories for sidebar
        const categoriesData = await sanityClient.fetch(`
          *[_type == "docCategory"] {
            _id,
            title,
            "slug": slug.current
          }
        `);
        
        // Fetch the specific article
        const articleData = await sanityClient.fetch(`
          *[_type == "docArticle" && slug.current == $slug][0] {
            _id,
            title,
            "slug": slug.current,
            excerpt,
            content,
            "category": category->{title, "slug": slug.current},
            publishedAt
          }
        `, { slug });

        console.log("Categories fetched:", categoriesData);
        console.log("Article fetched:", articleData);
        
        if ((!categoriesData || categoriesData.length === 0) && !articleData) {
          console.log("No content found, using mock data");
          setCategories(mockCategories);
          // If there's a slug parameter but no article, use the mock article
          setArticle(mockArticle);
          setIsUsingMockData(true);
          toast({
            title: "Using sample content",
            description: "Could not load content from Sanity. Displaying sample content instead.",
            variant: "default"
          });
        } else {
          setCategories(categoriesData || []);
          setArticle(articleData);
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch article:", error);
        
        // Use mock data on error
        setCategories(mockCategories);
        setArticle(mockArticle);
        setIsUsingMockData(true);
        
        toast({
          title: "Error loading documentation",
          description: "Could not connect to the content server. Displaying sample content instead.",
          variant: "destructive"
        });
        setIsLoading(false);
      }
    };
    
    if (slug) {
      fetchArticle();
    } else {
      // No slug provided
      setIsLoading(false);
      setArticle(null);
    }
  }, [slug]);
  
  return (
    <div className="min-h-screen bg-black text-white">
      {isUsingMockData && (
        <div className="bg-amber-600 text-white p-2 text-center text-sm">
          Currently displaying sample content. The connection to the content management system is unavailable.
        </div>
      )}
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:block w-64 h-screen border-r border-zinc-800 overflow-y-auto fixed top-16">
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search documentation..." 
                className="pl-8 bg-zinc-900 border-zinc-700 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <nav className="px-4 pb-16">
            <div className="space-y-8">
              {isLoading ? (
                Array(5).fill(0).map((_, index) => (
                  <div key={index} className="space-y-2">
                    <Skeleton className="h-6 w-32 bg-zinc-800" />
                    <Separator className="bg-zinc-800" />
                  </div>
                ))
              ) : (
                categories.map(category => (
                  <div key={category._id}>
                    <div className="flex items-center py-2">
                      <span className="text-sm font-medium text-gray-400">{category.title}</span>
                      <ChevronRight className="ml-auto h-4 w-4 text-gray-500" />
                    </div>
                    <Separator className="bg-zinc-800" />
                  </div>
                ))
              )}
            </div>
          </nav>
        </div>
        
        {/* Main content */}
        <div className="flex-1 md:ml-64">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 max-w-3xl">
            {isLoading ? (
              <div className="flex items-center justify-center my-20">
                <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
              </div>
            ) : article ? (
              <>
                <div className="mb-8">
                  <Link to="/documentation" className="flex items-center text-gray-400 hover:text-white mb-4">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Documentation
                  </Link>
                  
                  <div className="text-sm text-gray-400 mb-2">
                    {article.category.title} • {new Date(article.publishedAt).toLocaleDateString()}
                  </div>
                  
                  <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
                  <p className="text-xl text-gray-400 mb-8">
                    {article.excerpt}
                  </p>
                  
                  <Separator className="bg-zinc-800 my-8" />
                  
                  {/* Simple rendering of content - in a real app you would use a Portable Text renderer */}
                  <div className="prose prose-invert max-w-none">
                    {article.content ? (
                      <p className="text-gray-300">
                        {JSON.stringify(article.content)}
                        {/* In a real implementation, you would use @portabletext/react to render this content */}
                      </p>
                    ) : (
                      <p className="text-gray-400">
                        This article's content is not available in a format we can display right now.
                        Please check back later or contact our support team.
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Need more help?</h3>
                  <p className="text-gray-400 mb-4">
                    Can't find what you're looking for or have questions about this article?
                    Our support team is here to help.
                  </p>
                  <Button className="bg-white text-black hover:bg-gray-200">Contact Support</Button>
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
