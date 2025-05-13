
import React from "react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronDown, X } from "lucide-react";

interface ContentItem {
  _id: string;
  category?: string;
  title?: string;
  content?: any;
  slug?: {
    current: string;
  };
}

interface MobileDocCategoryPickerProps {
  categories: string[];
  groupedContent: { [category: string]: ContentItem[] };
  categoryDisplayNames: Record<string, string>;
  selectedCategory: string | null;
  selectedPost: ContentItem | null;
  onCategoryChange: (category: string) => void;
  onPostChange: (category: string, post: ContentItem) => void;
}

const MobileDocCategoryPicker: React.FC<MobileDocCategoryPickerProps> = ({
  categories,
  groupedContent,
  categoryDisplayNames,
  selectedCategory,
  selectedPost,
  onCategoryChange,
  onPostChange,
}) => {
  const [open, setOpen] = React.useState(false);
  const [localCategory, setLocalCategory] = React.useState(selectedCategory || "");
  const [localPostId, setLocalPostId] = React.useState(selectedPost?._id || "");
  const posts = localCategory ? groupedContent[localCategory] || [] : [];

  // Sync with parent
  React.useEffect(() => {
    setLocalCategory(selectedCategory || "");
  }, [selectedCategory]);
  React.useEffect(() => {
    setLocalPostId(selectedPost?._id || "");
  }, [selectedPost]);

  // Animation: When open, slide menu from bottom with fade (using Tailwind transitions)
  return (
    <>
      {/* Animated menu overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black bg-opacity-40 flex items-end md:hidden"
          style={{ transition: 'background 0.25s' }}
          onClick={() => setOpen(false)}
        >
          <div
            className={`
              w-full sm:max-w-md mx-auto
              rounded-t-2xl shadow-lg
              bg-zinc-900 border-t border-zinc-800
              p-0
              animate-slide-up-fast
            `}
            style={{
              animation: "slide-up-fast 0.28s cubic-bezier(0.32,0.72,0.42,1.09)",
              willChange: "transform, opacity",
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header with close */}
            <div className="w-full flex items-center justify-between px-6 pt-5 pb-2 border-b border-zinc-800">
              <span className="text-lg font-semibold text-white">Browse Documentation</span>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            {/* Category picker */}
            <div className="px-6 pt-4 pb-2">
              <label className="block text-gray-400 text-sm mb-2">Select Category</label>
              <Select
                value={localCategory}
                onValueChange={value => {
                  setLocalCategory(value);
                  setLocalPostId("");
                  onCategoryChange(value);
                }}
              >
                <SelectTrigger className="w-full bg-zinc-800 border-zinc-700">
                  <SelectValue placeholder="Pick a category..." />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>
                      {categoryDisplayNames[cat] || cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* Post picker */}
            {localCategory && (
              <div className="px-6 pb-2">
                <label className="block text-gray-400 text-sm mb-2">Select Post</label>
                <Select
                  value={localPostId}
                  onValueChange={postId => {
                    setLocalPostId(postId);
                    const post = posts.find(p => p._id === postId);
                    if (post) {
                      onPostChange(localCategory, post);
                      setOpen(false);
                    }
                  }}
                >
                  <SelectTrigger className="w-full bg-zinc-800 border-zinc-700">
                    <SelectValue placeholder="Pick a post..." />
                  </SelectTrigger>
                  <SelectContent>
                    {posts.length > 0 ? (
                      posts.map(post => (
                        <SelectItem key={post._id} value={post._id}>
                          {post.title || "(Untitled)"}
                        </SelectItem>
                      ))
                    ) : (
                      <div className="px-4 py-2 text-gray-400 text-sm">No posts</div>
                    )}
                  </SelectContent>
                </Select>
              </div>
            )}
            {/* Padding at bottom */}
            <div className="h-4" />
          </div>
          <style>
            {`
              @keyframes slide-up-fast {
                from {
                  opacity: 0;
                  transform: translateY(100%);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .animate-slide-up-fast {
                animation: slide-up-fast 0.28s cubic-bezier(0.32,0.72,0.42,1.09);
              }
            `}
          </style>
        </div>
      )}
      {/* Browse documentation button fixed at bottom */}
      <div className="fixed z-[101] bottom-0 inset-x-0 flex items-center justify-center px-4 py-3 bg-black/80 border-t border-zinc-800 md:hidden">
        <Button
          className="w-full max-w-xs bg-white text-black hover:bg-gray-200 flex justify-between items-center"
          onClick={() => setOpen(true)}
        >
          <span>
            {selectedPost && selectedCategory
              ? `${categoryDisplayNames[selectedCategory] || selectedCategory} — ${selectedPost.title || "(Untitled)"}`
              : "Browse Documentation"}
          </span>
          <ChevronDown className={`transition-transform ml-2 ${open ? "rotate-180" : ""}`} />
        </Button>
      </div>
    </>
  );
};

export default MobileDocCategoryPicker;
