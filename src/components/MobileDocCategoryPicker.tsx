
import React from "react";
import { useNavigate } from "react-router-dom";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

interface ContentItem {
  _id: string;
  category?: string;
  title?: string;
  content?: any;
  slug?: {
    current: string;
  };
}

// Props: categories, groupedContent, categoryDisplayNames, selectedPost, expandedCategory, setExpandedCategory, setSelectedPost
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

  // Update dropdown if parent state changes (sync with main page)
  React.useEffect(() => {
    setLocalCategory(selectedCategory || "");
  }, [selectedCategory]);
  React.useEffect(() => {
    setLocalPostId(selectedPost?._id || "");
  }, [selectedPost]);

  // Styling for floating bar
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[80] bg-black bg-opacity-50 flex items-end justify-center md:hidden" onClick={() => setOpen(false)}>
          <div
            className="w-full sm:max-w-md bg-zinc-900 border-t border-zinc-800 p-6 pb-8 rounded-t-2xl shadow-lg mx-auto"
            onClick={e => e.stopPropagation()}
          >
            <div>
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
            {localCategory && (
              <div className="mt-4">
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
            <div className="flex justify-end mt-6">
              <Button className="bg-white text-black hover:bg-gray-200" size="sm" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="fixed z-[81] bottom-0 inset-x-0 flex items-center justify-center px-4 py-3 bg-black/80 border-t border-zinc-800 md:hidden">
        <Button className="w-full max-w-xs bg-white text-black hover:bg-gray-200" onClick={() => setOpen(true)}>
          {selectedPost && selectedCategory
            ? `${categoryDisplayNames[selectedCategory] || selectedCategory} — ${selectedPost.title || "(Untitled)"}`
            : "Browse Documentation"}
        </Button>
      </div>
    </>
  );
};

export default MobileDocCategoryPicker;
