
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronRight,
  Search,
  BookOpen,
  Code,
  Server,
  BarChart,
  Database,
  Shield,
  Layers,
  GitBranch,
  Bot,
  Loader2
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { sanityClient, fetchContent } from "@/lib/sanity";
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
  category: {
    title: string;
    slug: string;
  };
  publishedAt: string;
}

interface ContentItem {
  _id: string;
  introduction?: string;
  technologyStack?: string;
  ourProcess?: string;
  resources?: string;
  aiAgents?: string;
}

export default function Documentation() {
  const [categories, setCategories] = useState<DocCategory[]>([]);
  const [articles, setArticles] = useState<DocArticle[]>([]);
  const [featuredArticles, setFeaturedArticles] = useState<DocArticle[]>([]);
  const [content, setContent] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    const fetchDocContent = async () => {
      try {
        console.log("Fetching documentation content...");
        
        // Fetch categories
        const categoriesData = await sanityClient.fetch(`
          *[_type == "docCategory"] {
            _id,
            title,
            "slug": slug.current
          }
        `);
        
        console.log("Categories fetched:", categoriesData);
        
        // Fetch articles
        const articlesData = await sanityClient.fetch(`
          *[_type == "docArticle"] {
            _id,
            title,
            "slug": slug.current,
            excerpt,
            "category": category->{title, "slug": slug.current},
            publishedAt
          } | order(publishedAt desc)
        `);
        
        console.log("Articles fetched:", articlesData);
        
        // Fetch content items
        const contentData = await fetchContent();
        console.log("Content items fetched:", contentData);
        
        // Set featured articles (first 3)
        setFeaturedArticles(articlesData.slice(0, 3));
        
        setCategories(categoriesData);
        setArticles(articlesData);
        setContent(contentData);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch documentation content:", error);
        toast({
          title: "Error loading documentation",
          description: "Could not connect to the content server. Please try again later.",
          variant: "destructive"
        });
        setIsLoading(false);
      }
    };
    
    fetchDocContent();
  }, []);
  
  // Filter articles based on search
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-black text-white">
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
          <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 max-w-5xl">
            <div className="mb-16">
              <h1 className="text-4xl font-bold mb-4">JointUp Documentation</h1>
              <p className="text-xl text-gray-400">
                JointUp is a cloud automation and integration platform for modern businesses.
              </p>
            </div>
            
            {isLoading ? (
              <div className="flex items-center justify-center my-20">
                <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
              </div>
            ) : (
              <>
                {/* Content items from Sanity */}
                {content.length > 0 && (
                  <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-6">Content from Sanity</h2>
                    {content.map((item) => (
                      <Card key={item._id} className="bg-zinc-900 border-zinc-800 p-6 hover:border-zinc-600 transition-all mb-6">
                        {item.introduction && (
                          <div className="mb-4">
                            <h3 className="text-xl font-bold">Introduction</h3>
                            <p className="text-gray-400">{item.introduction}</p>
                          </div>
                        )}
                        {item.technologyStack && (
                          <div className="mb-4">
                            <h3 className="text-xl font-bold">Technology Stack</h3>
                            <p className="text-gray-400">{item.technologyStack}</p>
                          </div>
                        )}
                        {item.ourProcess && (
                          <div className="mb-4">
                            <h3 className="text-xl font-bold">Our Process</h3>
                            <p className="text-gray-400">{item.ourProcess}</p>
                          </div>
                        )}
                        {item.resources && (
                          <div className="mb-4">
                            <h3 className="text-xl font-bold">Resources</h3>
                            <p className="text-gray-400">{item.resources}</p>
                          </div>
                        )}
                        {item.aiAgents && (
                          <div>
                            <h3 className="text-xl font-bold">AI Agents</h3>
                            <p className="text-gray-400">{item.aiAgents}</p>
                          </div>
                        )}
                      </Card>
                    ))}
                  </div>
                )}
                
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-6">Start with an idea</h2>
                  <p className="text-lg mb-8">
                    JointUp builds tools to help you create products faster.
                  </p>
                  <p className="text-gray-400 mb-4">
                    Like our AI assistant, which is your web development companion. Paste a screenshot or write a few sentences and it
                    will generate a starting point for your next app, including the code for how it looks and how it works.
                    Then it connects to your systems, takes your code, and creates a URL you can share.
                  </p>
                </div>
                
                <div className="mb-16">
                  <h3 className="text-xl font-medium text-gray-300 mb-4">Featured Documentation</h3>
                  <h2 className="text-3xl font-bold mb-6">Recent Articles</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {featuredArticles.map(article => (
                      <Link to={`/documentation/${article.slug}`} key={article._id}>
                        <Card className="bg-zinc-900 border-zinc-800 p-6 hover:border-zinc-600 transition-all">
                          <div className="mb-4">
                            <AspectRatio ratio={16/9}>
                              <div className="h-full w-full flex items-center justify-center bg-zinc-800 rounded-md">
                                <Code size={36} className="text-white" />
                              </div>
                            </AspectRatio>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                          <p className="text-gray-400 text-sm">
                            {article.excerpt}
                          </p>
                        </Card>
                      </Link>
                    ))}
                  </div>
                  
                  <div className="flex justify-center">
                    <Button className="bg-white text-black hover:bg-gray-200">
                      View All Articles
                    </Button>
                  </div>
                </div>
                
                {searchQuery && (
                  <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-6">Search Results</h2>
                    {filteredArticles.length > 0 ? (
                      <div className="space-y-4">
                        {filteredArticles.map(article => (
                          <Link to={`/documentation/${article.slug}`} key={article._id}>
                            <Card className="bg-zinc-900 border-zinc-800 p-4 hover:border-zinc-600 transition-all">
                              <h3 className="text-lg font-bold mb-1">{article.title}</h3>
                              <p className="text-gray-400 text-sm">{article.excerpt}</p>
                              <div className="text-xs text-gray-500 mt-2">Category: {article.category.title}</div>
                            </Card>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-400">No results found for "{searchQuery}"</p>
                    )}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Database className="h-5 w-5 text-white" />
                      <h3 className="text-lg font-semibold">Infrastructure from your code</h3>
                    </div>
                    <p className="text-gray-400">
                      Deploy your applications with a simple push, automatically creating the necessary infrastructure.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Code className="h-5 w-5 text-white" />
                      <h3 className="text-lg font-semibold">Use your favorite developer tools</h3>
                    </div>
                    <p className="text-gray-400">
                      Work with your preferred frameworks and libraries while we handle the deployment.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="h-5 w-5 text-white" />
                      <h3 className="text-lg font-semibold">Stay fast and secure</h3>
                    </div>
                    <p className="text-gray-400">
                      Built-in security features and performance optimizations for all your applications.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <BarChart className="h-5 w-5 text-white" />
                      <h3 className="text-lg font-semibold">Observability</h3>
                    </div>
                    <p className="text-gray-400">
                      Monitor and analyze your application's performance with detailed metrics.
                    </p>
                  </div>
                </div>
              </>
            )}
            
            <div className="flex justify-center">
              <Button className="bg-white text-black hover:bg-gray-200">
                Start building today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
