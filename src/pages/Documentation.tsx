
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  ChevronRight, 
  Sparkles, 
  Bot, 
  FileText, 
  ArrowRight, 
  Loader2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { sanityClient, type DocCategory, type DocArticle } from "@/lib/sanity";

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState<DocCategory[]>([]);
  const [featuredArticles, setFeaturedArticles] = useState<DocArticle[]>([]);
  const [recentArticles, setRecentArticles] = useState<DocArticle[]>([]);
  const [searchResults, setSearchResults] = useState<DocArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchDocumentationData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch categories
        const categoriesData = await sanityClient.fetch(`
          *[_type == "docCategory"] {
            _id,
            title,
            "slug": slug.current
          }
        `);
        
        // Fetch featured articles
        const featuredArticlesData = await sanityClient.fetch(`
          *[_type == "docArticle" && featured == true] | order(publishedAt desc)[0...4] {
            _id,
            title,
            "slug": slug.current,
            excerpt,
            "category": category->{title, "slug": slug.current},
            publishedAt
          }
        `);
        
        // Fetch recent articles
        const recentArticlesData = await sanityClient.fetch(`
          *[_type == "docArticle"] | order(publishedAt desc)[0...6] {
            _id,
            title,
            "slug": slug.current,
            excerpt,
            "category": category->{title, "slug": slug.current},
            publishedAt
          }
        `);
        
        setCategories(categoriesData);
        setFeaturedArticles(featuredArticlesData);
        setRecentArticles(recentArticlesData);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch documentation data:", error);
        setIsLoading(false);
      }
    };
    
    fetchDocumentationData();
  }, []);

  // Handle search
  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (searchQuery.trim().length > 2) {
        setIsSearching(true);
        try {
          const results = await sanityClient.fetch(`
            *[_type == "docArticle" && (title match "*${searchQuery}*" || excerpt match "*${searchQuery}*")] {
              _id,
              title,
              "slug": slug.current,
              excerpt,
              "category": category->{title, "slug": slug.current},
              publishedAt
            }
          `);
          setSearchResults(results);
        } catch (error) {
          console.error("Search error:", error);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(searchTimeout);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero section */}
      <div className="bg-zinc-900 border-b border-zinc-800">
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Everything you need to know about integrating and using our services.
            Browse our guides, API reference, and examples.
          </p>
          
          <div className="relative mt-8 max-w-2xl">
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
            <Input 
              placeholder="Search documentation..."
              className="bg-zinc-800 border-zinc-700 pl-10 py-6 text-lg w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            
            {/* Search results dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute z-20 mt-2 w-full bg-zinc-900 border border-zinc-800 rounded-md shadow-lg max-h-96 overflow-y-auto">
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Search Results</h3>
                  {isSearching ? (
                    <div className="flex justify-center p-4">
                      <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {searchResults.map((result) => (
                        <li key={result._id}>
                          <Link 
                            to={`/documentation/${result.slug}`}
                            className="block p-3 hover:bg-zinc-800 rounded-md transition-colors"
                          >
                            <div className="text-sm font-medium">{result.title}</div>
                            <div className="text-xs text-gray-400 mt-1 line-clamp-1">{result.excerpt}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
          </div>
        ) : (
          <>
            {/* Categories grid */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <Link 
                    key={category._id}
                    to={`/documentation?category=${category.slug}`}
                    className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
                  >
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <div className="flex items-center text-blue-400 mt-4">
                      <span className="text-sm">View articles</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
            
            {/* Featured articles */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Featured Articles</h2>
                <Badge className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">
                  <Sparkles className="h-3.5 w-3.5 mr-1" />
                  Featured
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredArticles.map((article) => (
                  <Link 
                    key={article._id}
                    to={`/documentation/${article.slug}`}
                    className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
                  >
                    <div className="text-sm text-gray-400 mb-2">
                      {article.category?.title}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center text-blue-400">
                      <span className="text-sm">Read article</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
            
            {/* Recent articles list */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Recent Updates</h2>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg">
                {recentArticles.map((article, index) => (
                  <React.Fragment key={article._id}>
                    <Link 
                      to={`/documentation/${article.slug}`}
                      className="flex items-start p-6 hover:bg-zinc-800/50 transition-colors"
                    >
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400">
                          {article.category?.title} • {new Date(article.publishedAt).toLocaleDateString()}
                        </div>
                        <h3 className="text-lg font-medium mt-1">{article.title}</h3>
                        <p className="text-gray-400 mt-1 line-clamp-1">{article.excerpt}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-500 flex-shrink-0 self-center ml-4" />
                    </Link>
                    {index < recentArticles.length - 1 && (
                      <Separator className="bg-zinc-800" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
      
      {/* Additional help section */}
      <div className="bg-zinc-900 border-t border-zinc-800 mt-16">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Need personalized assistance?</h2>
              <p className="text-gray-400 max-w-xl">
                Our support team is ready to help with your specific integration questions.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                <Bot className="h-5 w-5 mr-2" />
                Chat with AI
              </Button>
              <Button className="bg-white text-black hover:bg-gray-200">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
