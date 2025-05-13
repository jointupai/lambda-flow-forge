
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronRight,
  Search,
  Code,
  Database,
  Shield,
  BarChart,
  Loader2
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchContent } from "@/lib/sanity";
import { toast } from "@/hooks/use-toast";

// Types for Sanity content
interface ContentItem {
  _id: string;
  category?: string;
  title?: string;
  content?: string;
}

export default function Documentation() {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchDocContent = async () => {
      try {
        setIsLoading(true);
        const contentData = await fetchContent();
        setContent(contentData || []);
        // unique categories (excluding empty)
        const allCategories = Array.from(
          new Set(
            (contentData || [])
              .map((item: ContentItem) => item.category)
              .filter((c): c is string => !!c)
          )
        );
        setCategories(allCategories);
        setIsLoading(false);
      } catch (error) {
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

  // Filter content by search and selected category
  const filteredContent = content.filter((item) =>
    (selectedCategory ? item.category === selectedCategory : true) &&
    (
      !searchQuery ||
      item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content?.toLowerCase().includes(searchQuery.toLowerCase())
    )
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
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-gray-200">Categories</span>
                </div>
                {isLoading ? (
                  Array(5).fill(0).map((_, index) => (
                    <div key={index} className="space-y-2">
                      <Skeleton className="h-6 w-32 bg-zinc-800" />
                      <Separator className="bg-zinc-800" />
                    </div>
                  ))
                ) : (
                  categories.length > 0 ? (
                    categories.map(category => (
                      <button
                        key={category}
                        className={`block text-left w-full py-2 px-2 rounded hover:bg-zinc-800 transition text-gray-300 ${
                          selectedCategory === category ? "bg-zinc-800 text-white font-semibold" : ""
                        }`}
                        onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                      >
                        <span>{category}</span>
                        {selectedCategory === category && (
                          <ChevronRight className="inline align-middle ml-1 w-4 h-4" />
                        )}
                      </button>
                    ))
                  ) : (
                    <span className="text-gray-500 text-sm">No categories found.</span>
                  )
                )}
                {selectedCategory && (
                  <button
                    className="mt-2 text-xs underline text-gray-400"
                    onClick={() => setSelectedCategory(null)}
                  >
                    Clear filter
                  </button>
                )}
                <Separator className="bg-zinc-800 mt-4" />
              </div>
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
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-6">Documentation Content</h2>
                  {filteredContent.length > 0 ? (
                    filteredContent.map((item) => (
                      <Card key={item._id} className="bg-zinc-900 border-zinc-800 p-6 hover:border-zinc-600 transition-all mb-6">
                        <div className="mb-4 flex gap-2 items-center">
                          <Code size={24} className="text-white" />
                          <h3 className="text-xl font-bold">{item.title}</h3>
                        </div>
                        <div className="text-gray-400 mb-2">{item.content}</div>
                        {item.category && (
                          <div className="text-xs text-gray-500 mt-2">Category: {item.category}</div>
                        )}
                      </Card>
                    ))
                  ) : (
                    <div className="text-gray-400">No content found{selectedCategory ? ` in "${selectedCategory}"` : ""}.</div>
                  )}
                </div>
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
