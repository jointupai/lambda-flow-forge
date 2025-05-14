import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { ChevronRight, ChevronDown, ChevronUp, BarChart, Code, Database, Search, Shield, Loader2 } from "lucide-react";
import { PiLineVerticalThin } from "react-icons/pi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { fetchContent } from "@/lib/sanity";
import { toast } from "@/hooks/use-toast";
import { PortableText, type PortableTextReactComponents } from "@portabletext/react";
import { urlFor } from "@/lib/sanityImageUrl";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import SEO from "@/components/SEO";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileDocCategoryPicker from "@/components/MobileDocCategoryPicker";

// ContentItem from Sanity
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
export default function Documentation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [content, setContent] = useState<ContentItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<ContentItem | null>(null);

  // Friendly names for categories
  const categoryDisplayNames: Record<string, string> = {
    "ai-agents": "AI Agents",
    "introduction": "Introduction",
    "client-results": "Client Results"
    // Fallback: show the original if not mapped
  };

  // Grouped content by category
  const groupedContent = React.useMemo(() => {
    const grouped: {
      [category: string]: ContentItem[];
    } = {};
    content.forEach(item => {
      if (!item.category) return;
      if (!grouped[item.category]) grouped[item.category] = [];
      grouped[item.category].push(item);
    });
    return grouped;
  }, [content]);

  // Util: get post from category and id
  const getPostByCategoryAndId = (category: string, id: string) => {
    if (!category || !id) return null;
    const posts = groupedContent[category];
    if (!posts) return null;
    return posts.find(post => post._id === id) || null;
  };
  useEffect(() => {
    const fetchDocContent = async () => {
      try {
        setIsLoading(true);
        const contentData = await fetchContent();
        setContent(contentData || []);
        const allCategories = Array.from(new Set((contentData || []).map((item: ContentItem) => item.category).filter((c): c is string => !!c))) as string[];
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

  // --- Handle URL update and initial load from URL (now matches by category & slug, not ID) ---
  useEffect(() => {
    // Try to parse /documentation/:category/:slug (slug, not id)
    const match = location.pathname.match(/^\/documentation\/([^/]+)\/([^/]+)/);
    if (match && content.length) {
      const category = decodeURIComponent(match[1]);
      const slug = decodeURIComponent(match[2]);
      const posts = groupedContent[category] || [];
      // Here, find post by slug, not id
      const found = posts.find(post => post.slug && post.slug.current === slug);
      if (found) {
        setSelectedPost(found);
        setExpandedCategory(category);
        return;
      } else {
        setSelectedPost(null);
      }
    } else {
      setSelectedPost(null);
    }
  }, [location.pathname, content, groupedContent]);

  // Only clear selected post on search/content change IF no post is selected by URL:
  useEffect(() => {
    // If the URL matches a post route, don't clear selectedPost
    const match = location.pathname.match(/^\/documentation\/([^/]+)\/([^/]+)/);
    if (!match) {
      setSelectedPost(null);
    }
    // else, do nothing: let the useEffect above handle selectedPost for post routes.
    // This ensures refreshing on a post keeps it open!
  }, [searchQuery, content, location.pathname]);
  const filteredCategories = categories.filter(cat => {
    if (!searchQuery) return true;
    if (cat.toLowerCase().includes(searchQuery.toLowerCase())) return true;
    const posts = groupedContent[cat] || [];
    return posts.some(post => post.title?.toLowerCase().includes(searchQuery.toLowerCase()) || typeof post.content === "string" && post.content.toLowerCase().includes(searchQuery.toLowerCase()));
  });
  const filteredPosts = (cat: string) => {
    if (!searchQuery) return groupedContent[cat] || [];
    return (groupedContent[cat] || []).filter(post => post.title?.toLowerCase().includes(searchQuery.toLowerCase()) || typeof post.content === "string" && post.content.toLowerCase().includes(searchQuery.toLowerCase()));
  };
  const handleCategoryToggle = (cat: string) => {
    setExpandedCategory(prev => prev === cat ? null : cat);
  };

  // Custom: when clicking post, change URL *without reload* and set selected post just like before
  const handlePostClick = (cat: string, post: ContentItem) => {
    // Instead of using _id, use the slug in the URL
    const slug = post.slug && post.slug.current ? post.slug.current : post._id; // fallback to _id just in case (should not happen)
    const url = `/documentation/${encodeURIComponent(cat)}/${encodeURIComponent(slug)}`;
    window.history.pushState(null, "", url);
    setSelectedPost(post);
    setExpandedCategory(cat);
  };

  // Helper for MobileDocCategoryPicker
  const handlePickerCategoryChange = (cat: string) => {
    setExpandedCategory(cat);
  };
  const handlePickerPostChange = (cat: string, post: ContentItem) => {
    // mimic same navigation as handlePostClick
    const slug = post.slug && post.slug.current ? post.slug.current : post._id;
    const url = `/documentation/${encodeURIComponent(cat)}/${encodeURIComponent(slug)}`;
    window.history.pushState(null, "", url);
    setSelectedPost(post);
    setExpandedCategory(cat);
  };

  // PortableText
  const portableTextComponents: Partial<PortableTextReactComponents> = {
    block: {
      h1: props => <h1 className="text-3xl font-bold mb-4">{props.children}</h1>,
      h2: props => <h2 className="text-2xl font-semibold mb-3">{props.children}</h2>,
      h3: props => <h3 className="text-xl font-semibold mb-2">{props.children}</h3>,
      h4: props => <h4 className="text-lg font-semibold mb-2">{props.children}</h4>,
      normal: props => <p className="mb-4">{props.children}</p>,
      blockquote: props => <blockquote className="border-l-4 border-gray-700 pl-4 italic text-gray-400 mb-4">
          {props.children}
        </blockquote>
    },
    list: {
      bullet: props => <ul className="list-disc ml-6 mb-4">{props.children}</ul>,
      number: props => <ol className="list-decimal ml-6 mb-4">{props.children}</ol>
    },
    listItem: {
      bullet: props => <li className="mb-2">{props.children}</li>,
      number: props => <li className="mb-2">{props.children}</li>
    },
    marks: {
      link: props => {
        // value is possibly undefined
        const href = props.value && "href" in props.value ? props.value.href as string : "#";
        return <a href={href} className="underline text-blue-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
            {props.children}
          </a>;
      },
      strong: props => <strong className="font-bold">{props.children}</strong>,
      em: props => <em className="italic">{props.children}</em>,
      code: props => <code className="bg-zinc-800 px-2 py-1 rounded text-sm">{props.children}</code>
    },
    types: {
      code: props => {
        // value is possibly undefined
        const codeString = props.value && "code" in props.value ? props.value.code : "";
        return <pre className="bg-zinc-800 rounded p-4 mb-4 whitespace-pre overflow-x-auto">
            <code>{codeString}</code>
          </pre>;
      },
      image: props => {
        // Enhanced image block
        const {
          value
        } = props;
        if (!value || !value.asset) {
          return <div className="bg-zinc-800 text-red-400 px-3 py-2 rounded mb-4 text-xs text-center">
              Image could not be loaded (missing asset)
            </div>;
        }
        const {
          asset,
          alt,
          caption,
          displaySize,
          alignment
        } = value;

        // Size and alignment Tailwind classes
        const sizeClasses: Record<string, string> = {
          "25": "w-1/4",
          "50": "w-1/2",
          "75": "w-3/4",
          "100": "w-full"
        };
        const alignmentClasses: Record<string, string> = {
          left: "mr-auto",
          center: "mx-auto",
          right: "ml-auto"
        };
        const imageUrl = urlFor(asset);
        // Show image if URL, otherwise error message
        return imageUrl ? <figure className={`my-8 ${alignmentClasses[alignment] || 'mx-auto'}`}>
            <img src={imageUrl} alt={alt || "Image"} className={`${sizeClasses[String(displaySize)] || 'w-full'} h-auto rounded-lg`} loading="lazy" />
            {caption && <figcaption className="text-center text-sm text-gray-400 mt-2">
                {caption}
              </figcaption>}
          </figure> : <div className="bg-zinc-800 text-red-400 px-3 py-2 rounded mb-4 text-xs text-center">
            Image could not be loaded (missing url)
          </div>;
      },
      youtube: props => {
        const {
          url,
          title,
          caption,
          displaySize,
          alignment
        } = props.value || {};
        if (!url) {
          return <div className="bg-zinc-800 text-red-400 px-3 py-2 rounded mb-4 text-xs text-center">
              Video could not be loaded (missing url)
            </div>;
        }
        return <YouTubeEmbed url={url} title={title} caption={caption} displaySize={displaySize} alignment={alignment} />;
      }
    }
  };
  const isMobile = useIsMobile();
  return <div className="min-h-screen bg-black text-white w-full">
      {/* --- SEO tags (for documentation post view) --- */}
      {selectedPost && <SEO title={selectedPost.seo?.metaTitle || selectedPost.title || "JointUp Documentation"} description={selectedPost.seo?.metaDescription || (typeof selectedPost.content === "string" ? selectedPost.content : "")} keywords={selectedPost.seo?.keywords} ogImage={selectedPost.seo?.ogImage} slug={selectedPost.slug?.current} />}
      <div className="max-w-[1200px] mx-auto px-0 md:px-0 lg:px-0 pt-0 pb-12 md:py-0">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="w-full md:w-64 md:flex-shrink-0 md:h-screen sticky top-0">
            <div className="p-0 md:py-12">
              {/* Hide search and categories on mobile, show only on md+ */}
              <div className="relative mb-4 hidden md:block">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                <Input placeholder="Search documentation..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-8 bg-zinc-900 border-zinc-700 w-[94%]" />
              </div>
              
              {/* Separator between search and categories */}
              <Separator className="my-4 hidden md:block" />
              
              <nav className="pb-16 hidden md:block">
                <div className="space-y-8">
                  <div className="pr-3">
                    <span className="text-sm font-bold text-gray-200 mb-3 block">
                      Categories
                    </span>
                    {isLoading ? Array(5).fill(0).map((_, index) => <div key={index} className="space-y-2">
                            <Skeleton className="h-6 w-32 bg-zinc-800" />
                          </div>) : filteredCategories.length > 0 ? filteredCategories.map(cat => <div key={cat} className="mb-2">
                          <button className={`flex items-center w-full py-2 px-2 rounded hover:bg-zinc-800 text-gray-300 transition text-left ${expandedCategory === cat ? "text-white font-semibold" : ""}`} onClick={() => handleCategoryToggle(cat)} aria-expanded={expandedCategory === cat}>
                            <span className="flex-1">{categoryDisplayNames[cat] || cat}</span>
                            {/* Animate the arrow rotation */}
                            <ChevronDown className={`ml-2 w-4 h-4 transform transition-transform duration-200
                                ${expandedCategory === cat ? "rotate-180" : ""}
                              `} />
                          </button>
                          {/* Sidebar dropdown of posts */}
                          <div style={{
                      overflow: 'hidden'
                    }}>
                          <ul className={`
                              ml-0 mt-0.5 rounded-md select-none z-10
                              transition-all duration-200
                              ${expandedCategory === cat ? "animate-fade-in opacity-100 max-h-96 visible" : "opacity-0 max-h-0 invisible"}
                            `} style={{
                        background: "black"
                      }}>
                            {expandedCategory === cat && filteredPosts(cat).map(post => {
                          const isSelected = selectedPost?._id === post._id;
                          return <li key={post._id} className="relative flex items-center">
                                  {/* Animated divider for selected post */}
                                  <span className="mr-1 flex-shrink-0 w-4 h-6 flex items-center justify-center">
                                    {isSelected && <span className="block animate-[fade-in-scale-divider_0.15s_ease-in] origin-left" style={{
                                // Custom keyframes: fade and scale in
                                animation: 'fade-in-scale-divider 0.2s ease-in'
                              }}>
                                        <PiLineVerticalThin className="text-white" size={18} />
                                      </span>}
                                  </span>
                                    <button className={`w-full text-left px-3 py-2 text-sm flex items-center
                                      transition-colors duration-100
                                      ${isSelected ? "text-white font-bold" : "text-gray-300 hover:bg-zinc-800"}`} style={{
                              outline: "none"
                            }} onClick={() => handlePostClick(cat, post)}>
                                      {post.title || "(Untitled)"}
                                    </button>
                                  </li>;
                        })}
                          </ul>
                          </div>
                        </div>) : <span className="text-gray-500 text-sm">
                        No categories found.
                      </span>}
                  </div>
                </div>
              </nav>
            </div>
          </aside>
          
          {/* Vertical separator between sidebar and main content - now extends full height */}
          <Separator orientation="vertical" className="hidden md:block h-screen sticky top-0 border-[#1F1F1F]" />
          
          {/* Main content area */}
          <main className="flex-1 min-w-0 px-8 md:px-8 md:py-12">
            <div className="w-full">
              {/* Posts content */}
              {isLoading ? <div className="flex items-center justify-center my-20">
                  <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
                </div> : selectedPost ? <div>
                  <div className="mb-4 flex flex-col gap-2">
                    <div className="text-sm text-gray-400">
                      {categoryDisplayNames[selectedPost.category || ""] || selectedPost.category}
                    </div>
                    <h1 className="text-3xl font-bold">{selectedPost.title}</h1>
                  </div>
                  
                  {/* Removed the separator between post title and content */}
                  
                  <div className="prose prose-invert max-w-none mb-8">
                    {Array.isArray(selectedPost.content) && selectedPost.content.length > 0 ? <PortableText value={selectedPost.content} components={portableTextComponents} /> : selectedPost.content ?
                // fallback for non-array content
                <span>{selectedPost.content}</span> : <span>No content</span>}
                  </div>
                  <Button className="bg-white text-black hover:bg-gray-200" onClick={() => {
                window.history.pushState(null, "", "/documentation");
                setSelectedPost(null);
              }}>
                    Back to categories
                  </Button>
                </div> : <div>
                  <div className="mb-8">
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
                  
                  {/* Divider after navigation/header section */}
                  <Separator className="my-6 border-[#1F1F1F]" />
                  
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
                </div>}
            </div>
          </main>
        </div>
      </div>
      {/* Mobile-only picker bar */}
      {isMobile && <MobileDocCategoryPicker categories={filteredCategories} groupedContent={groupedContent} categoryDisplayNames={categoryDisplayNames} selectedCategory={expandedCategory} selectedPost={selectedPost} onCategoryChange={handlePickerCategoryChange} onPostChange={handlePickerPostChange} />}

      {/* Add fade-in-scale-divider keyframes for the divider animation */}
      <style>
        {`
        @keyframes fade-in-scale-divider {
          0% {
            opacity: 0;
            transform: scaleY(0.2);
          }
          80% {
            opacity: 1;
            transform: scaleY(1.1);
          }
          100% {
            opacity: 1;
            transform: scaleY(1);
          }
        }
        .animate-\\[fade-in-scale-divider_0\\.15s_ease-in\\] {
          animation: fade-in-scale-divider 0.15s ease-in;
        }
      `}
      </style>
    </div>;
}