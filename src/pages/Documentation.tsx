
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ChevronDown,
  BarChart,
  Code,
  Database,
  Search,
  Shield,
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

// ContentItem from Sanity
interface ContentItem {
  _id: string;
  category?: string;
  title?: string;
  content?: any;
}

export default function Documentation() {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Grouped content by category
  const groupedContent = React.useMemo(() => {
    const grouped: { [category: string]: ContentItem[] } = {};
    content.forEach((item) => {
      if (!item.category) return;
      if (!grouped[item.category]) grouped[item.category] = [];
      grouped[item.category].push(item);
    });
    return grouped;
  }, [content]);

  useEffect(() => {
    const fetchDocContent = async () => {
      try {
        setIsLoading(true);
        const contentData = await fetchContent();
        setContent(contentData || []);
        const allCategories = Array.from(
          new Set(
            (contentData || [])
              .map((item: ContentItem) => item.category)
              .filter((c): c is string => !!c)
          )
        ) as string[];
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

  // Search filter in sidebar: only categories and posts matching query
  const filteredCategories = categories.filter((cat) => {
    if (!searchQuery) return true;
    if (cat.toLowerCase().includes(searchQuery.toLowerCase())) return true;
    const posts = groupedContent[cat] || [];
    return posts.some(
      (post) =>
        (post.title?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (typeof post.content === "string" && post.content.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  // Show/hide posts under given category
  const handleCategoryToggle = (cat: string) => {
    setExpandedCategory(prev => prev === cat ? null : cat);
  };

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
                <span className="text-sm font-bold text-gray-200 mb-3 block">Categories</span>
                {isLoading ? (
                  Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <div key={index} className="space-y-2">
                        <Skeleton className="h-6 w-32 bg-zinc-800" />
                        <Separator className="bg-zinc-800" />
                      </div>
                    ))
                ) : filteredCategories.length > 0 ? (
                  filteredCategories.map((cat) => (
                    <div key={cat} className="mb-2">
                      <button
                        className={`flex items-center w-full py-2 px-2 rounded hover:bg-zinc-800 text-gray-300 transition text-left ${expandedCategory === cat ? "bg-zinc-800 text-white font-semibold" : ""}`}
                        onClick={() => handleCategoryToggle(cat)}
                        aria-expanded={expandedCategory === cat}
                      >
                        <span className="flex-1">{cat}</span>
                        {expandedCategory === cat ? (
                          <ChevronDown className="ml-2 w-4 h-4" />
                        ) : (
                          <ChevronRight className="ml-2 w-4 h-4" />
                        )}
                      </button>
                      {/* Dropdown of posts in category if expanded */}
                      {expandedCategory === cat && groupedContent[cat] && (
                        <ul className="ml-3 mt-0.5 space-y-1">
                          {groupedContent[cat].map((post) => (
                            <li key={post._id}>
                              <Link
                                to={`/documentation/post/${post._id}`}
                                className="block px-2 py-1 text-sm rounded hover:bg-zinc-700 text-gray-300 transition"
                              >
                                {post.title || "(Untitled)"}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                      <Separator className="bg-zinc-800 mt-2" />
                    </div>
                  ))
                ) : (
                  <span className="text-gray-500 text-sm">No categories found.</span>
                )}
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
                <br />
                <span className="text-sm block mt-2 text-zinc-400">
                  Select a category and a post from the sidebar to view its content.
                </span>
              </p>
            </div>
            {isLoading ? (
              <div className="flex items-center justify-center my-20">
                <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
              </div>
            ) : (
              <div>
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
              </div>
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
