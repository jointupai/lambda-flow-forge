import React, { useEffect, useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  BarChart,
  Code,
  Database,
  Search,
  Shield,
  Loader2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchContent } from "@/lib/sanity";
import { toast } from "@/hooks/use-toast";
import { PortableText } from "@portabletext/react";

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
  const [selectedPost, setSelectedPost] = useState<ContentItem | null>(null);

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
          description:
            "Could not connect to the content server. Please try again later.",
          variant: "destructive",
        });
        setIsLoading(false);
      }
    };
    fetchDocContent();
  }, []);

  useEffect(() => {
    setSelectedPost(null);
  }, [searchQuery, content]);

  const filteredCategories = categories.filter((cat) => {
    if (!searchQuery) return true;
    if (cat.toLowerCase().includes(searchQuery.toLowerCase())) return true;
    const posts = groupedContent[cat] || [];
    return posts.some(
      (post) =>
        post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (typeof post.content === "string" &&
          post.content.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const filteredPosts = (cat: string) => {
    if (!searchQuery) return groupedContent[cat] || [];
    return (groupedContent[cat] || []).filter(
      (post) =>
        post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (typeof post.content === "string" &&
          post.content.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };

  const handleCategoryToggle = (cat: string) => {
    setExpandedCategory((prev) => (prev === cat ? null : cat));
  };

  // Add custom components for PortableText, to support headings/lists/etc.
  const portableTextComponents = {
    block: {
      h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
      h2: ({ children }) => <h2 className="text-2xl font-semibold mb-3">{children}</h2>,
      h3: ({ children }) => <h3 className="text-xl font-semibold mb-2">{children}</h3>,
      h4: ({ children }) => <h4 className="text-lg font-semibold mb-2">{children}</h4>,
      normal: ({ children }) => <p className="mb-4">{children}</p>,
      blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-700 pl-4 italic text-gray-400 mb-4">{children}</blockquote>,
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className="mb-2">{children}</li>,
      number: ({ children }) => <li className="mb-2">{children}</li>,
    },
    marks: {
      link: ({ children, value }) => (
        <a
          href={value?.href}
          className="underline text-blue-400 hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
      em: ({ children }) => <em className="italic">{children}</em>,
      code: ({ children }) => (
        <code className="bg-zinc-800 px-2 py-1 rounded text-sm">{children}</code>
      ),
    },
    types: {
      code: ({ value }) => (
        <pre className="bg-zinc-800 rounded p-4 mb-4 whitespace-pre overflow-x-auto">
          <code>{value.code}</code>
        </pre>
      ),
      // ...add more custom types if needed
    },
  };

  return (
    <div className="min-h-screen bg-black text-white w-full">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full md:w-64 md:flex-shrink-0">
            <div className="p-0">
              <div className="relative mb-6">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search documentation..."
                  className="pl-8 bg-zinc-900 border-zinc-700 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <nav className="pb-16">
                <div className="space-y-8">
                  <div>
                    <span className="text-sm font-bold text-gray-200 mb-3 block">
                      Categories
                    </span>
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
                            className={`flex items-center w-full py-2 px-2 rounded hover:bg-zinc-800 text-gray-300 transition text-left ${
                              expandedCategory === cat
                                ? "bg-zinc-800 text-white font-semibold"
                                : ""
                            }`}
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
                              {filteredPosts(cat).map((post) => (
                                <li key={post._id}>
                                  <button
                                    className={`block px-2 py-1 text-sm rounded transition w-full text-left hover:bg-zinc-700 ${
                                      selectedPost?._id === post._id
                                        ? "bg-zinc-700 text-white font-medium"
                                        : "text-gray-300"
                                    }`}
                                    onClick={() => setSelectedPost(post)}
                                  >
                                    {post.title || "(Untitled)"}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                          <Separator className="bg-zinc-800 mt-2" />
                        </div>
                      ))
                    ) : (
                      <span className="text-gray-500 text-sm">
                        No categories found.
                      </span>
                    )}
                  </div>
                </div>
              </nav>
            </div>
          </aside>
          {/* Main content area with same width/spacing as homepage */}
          <main className="flex-1 min-w-0">
            <div className="w-full">
              {isLoading ? (
                <div className="flex items-center justify-center my-20">
                  <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
                </div>
              ) : selectedPost ? (
                <div>
                  <div className="mb-4 flex flex-col gap-2">
                    <div className="text-sm text-gray-400">
                      {selectedPost.category}
                    </div>
                    <h1 className="text-3xl font-bold">{selectedPost.title}</h1>
                  </div>
                  <div className="prose prose-invert max-w-none mb-8">
                    {Array.isArray(selectedPost.content) && selectedPost.content.length > 0 ? (
                      <PortableText
                        value={selectedPost.content}
                        components={portableTextComponents}
                      />
                    ) : selectedPost.content ? (
                      // fallback for non-array content
                      <span>{selectedPost.content}</span>
                    ) : (
                      <span>No content</span>
                    )}
                  </div>
                  <Button
                    className="bg-white text-black hover:bg-gray-200"
                    onClick={() => setSelectedPost(null)}
                  >
                    Back to categories
                  </Button>
                </div>
              ) : (
                <div>
                  <div className="mb-16">
                    <h1 className="text-4xl font-bold mb-4">
                      JointUp Documentation
                    </h1>
                    <p className="text-xl text-gray-400">
                      JointUp is a cloud automation and integration platform for
                      modern businesses.
                      <br />
                      <span className="text-sm block mt-2 text-zinc-400">
                        Select a category and a post from the sidebar to view its
                        content.
                      </span>
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Database className="h-5 w-5 text-white" />
                        <h3 className="text-lg font-semibold">
                          Infrastructure from your code
                        </h3>
                      </div>
                      <p className="text-gray-400">
                        Deploy your applications with a simple push,
                        automatically creating the necessary infrastructure.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Code className="h-5 w-5 text-white" />
                        <h3 className="text-lg font-semibold">
                          Use your favorite developer tools
                        </h3>
                      </div>
                      <p className="text-gray-400">
                        Work with your preferred frameworks and libraries while we
                        handle the deployment.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-5 w-5 text-white" />
                        <h3 className="text-lg font-semibold">
                          Stay fast and secure
                        </h3>
                      </div>
                      <p className="text-gray-400">
                        Built-in security features and performance optimizations
                        for all your applications.
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <BarChart className="h-5 w-5 text-white" />
                        <h3 className="text-lg font-semibold">Observability</h3>
                      </div>
                      <p className="text-gray-400">
                        Monitor and analyze your application's performance with
                        detailed metrics.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button className="bg-white text-black hover:bg-gray-200">
                      Start building today
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
