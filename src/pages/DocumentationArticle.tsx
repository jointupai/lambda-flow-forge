
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { sanityClient, type DocCategory, type DocArticle } from "@/lib/sanity";

export default function DocumentationArticle() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<DocArticle | null>(null);
  const [categories, setCategories] = useState<DocCategory[]>([]);
  const [relatedArticles, setRelatedArticles] = useState<DocArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        
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
            "category": category->{_id, title, "slug": slug.current},
            publishedAt
          }
        `, { slug });
        
        if (articleData && articleData.category) {
          // Fetch related articles from the same category
          const relatedData = await sanityClient.fetch(`
            *[_type == "docArticle" && category._ref == $categoryId && _id != $articleId] | order(publishedAt desc)[0...4] {
              _id,
              title,
              "slug": slug.current,
              excerpt,
              "category": category->{title, "slug": slug.current},
              publishedAt
            }
          `, { 
            categoryId: articleData.category._id,
            articleId: articleData._id
          });
          
          setRelatedArticles(relatedData);
        }
        
        setCategories(categoriesData);
        setArticle(articleData);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch article:", error);
        setIsLoading(false);
      }
    };
    
    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/documentation?search=${encodeURIComponent(searchQuery)}`);
    }
  };
  
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:block w-64 h-screen border-r border-zinc-800 overflow-y-auto fixed top-16">
          <div className="p-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search documentation..." 
                className="pl-8 bg-zinc-900 border-zinc-700 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
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
              <div className="space-y-8">
                <Skeleton className="h-8 w-48 bg-zinc-800" />
                <Skeleton className="h-6 w-full bg-zinc-800" />
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full bg-zinc-800" />
                  <Skeleton className="h-4 w-full bg-zinc-800" />
                  <Skeleton className="h-4 w-3/4 bg-zinc-800" />
                </div>
              </div>
            ) : article ? (
              <>
                <div className="mb-8">
                  <Link to="/documentation" className="flex items-center text-gray-400 hover:text-white mb-4">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Documentation
                  </Link>
                  
                  <div className="text-sm text-gray-400 mb-2">
                    {article.category?.title} • {new Date(article.publishedAt).toLocaleDateString()}
                  </div>
                  
                  <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
                  <p className="text-xl text-gray-400 mb-8">
                    {article.excerpt}
                  </p>
                  
                  <Separator className="bg-zinc-800 my-8" />
                  
                  {/* Simple rendering of content - in a real app you would use a Portable Text renderer */}
                  <div className="prose prose-invert max-w-none">
                    {article.content ? (
                      <div className="text-gray-300 space-y-4">
                        {JSON.stringify(article.content)}
                        {/* In a real implementation, you would use @portabletext/react to render this content */}
                        <p className="text-gray-400 italic mt-8">
                          Note: For a proper rendering of rich text content, install the @portabletext/react package
                          and implement a PortableText component to render the article content.
                        </p>
                      </div>
                    ) : (
                      <p className="text-gray-400">
                        This article's content is not available in a format we can display right now.
                        Please check back later or contact our support team.
                      </p>
                    )}
                  </div>
                </div>
                
                {/* Related articles section */}
                {relatedArticles.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {relatedArticles.map(related => (
                        <Link 
                          key={related._id}
                          to={`/documentation/${related.slug}`}
                          className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
                        >
                          <h4 className="font-medium mb-1">{related.title}</h4>
                          <p className="text-sm text-gray-400 line-clamp-2">{related.excerpt}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                
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
