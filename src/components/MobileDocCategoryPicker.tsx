import React from "react";
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
  groupedContent: {
    [category: string]: ContentItem[];
  };
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
  onPostChange
}) => {
  const [open, setOpen] = React.useState(false);
  const [expandedCat, setExpandedCat] = React.useState<string | null>(selectedCategory || null);
  React.useEffect(() => {
    setExpandedCat(selectedCategory || null);
  }, [selectedCategory]);

  // Ensure focus trap within the menu overlay.
  const menuRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (open && menuRef.current) {
      menuRef.current.focus();
    }
  }, [open]);

  // Animate close: after animation, unmount the overlay
  const [closing, setClosing] = React.useState(false);
  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 260); // Match animation duration
  };

  // Category click handler (expand/collapse)
  const handleCategoryClick = (cat: string) => {
    setExpandedCat(expandedCat === cat ? null : cat);
    onCategoryChange(cat);
  };

  // Post click handler
  const handlePostClick = (cat: string, post: ContentItem) => {
    onPostChange(cat, post);
    handleClose();
  };

  // Always at least 1/3 of screen, scrollable if content is larger
  return <>
      {/* Overlay modal */}
      {(open || closing) && <div className={`
            fixed inset-0 z-[130] flex items-end md:hidden
            bg-black bg-opacity-40
            transition-colors duration-200
            ${closing ? "opacity-0" : "opacity-100"}
          `} style={{
      transition: 'opacity 0.24s'
    }} tabIndex={-1} onClick={handleClose}>
          <div ref={menuRef} tabIndex={0} className={`
              w-full sm:max-w-md mx-auto
              rounded-t-2xl shadow-lg
              bg-zinc-900 border-t border-zinc-800
              pb-2
              relative
              z-[131]
              select-none
              min-h-[33vh] max-h-[90vh]
              overflow-hidden
              flex flex-col
              ${closing ? "animate-slide-down-fast" : "animate-slide-up-fast"}
            `} onClick={e => e.stopPropagation()} style={{
        willChange: "transform, opacity"
      }}>
            <div className="w-full flex items-center justify-between px-6 pt-5 pb-2 border-b border-zinc-800">
              <span className="text-lg font-semibold text-white">Browse Documentation</span>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={handleClose} aria-label="Close">
                <X className="w-5 h-5" />
              </Button>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 pb-4 pt-2 space-y-2" style={{
          minHeight: "120px",
          // Always visible at least 1/3 of mobile screen
          overscrollBehavior: "contain"
        }}>
              {categories.length === 0 ? <div className="text-gray-500 text-sm py-8 text-center">No categories found.</div> : categories.map(cat => <div key={cat} className="mb-1">
                    <button className={`
                        w-full flex items-center justify-between py-3 px-2 text-base font-medium rounded-lg
                        ${expandedCat === cat ? "bg-zinc-800 text-white" : "text-gray-200 hover:bg-zinc-800"}
                        transition-colors
                        outline-none
                      `} aria-expanded={expandedCat === cat} onClick={() => handleCategoryClick(cat)}>
                      <span className="truncate">{categoryDisplayNames[cat] || cat}</span>
                      <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-200 ${expandedCat === cat ? "rotate-180" : ""}`} />
                    </button>
                    {/* Posts list (collapsible) */}
                    <div className={`
                        overflow-hidden transition-all duration-200
                        ${expandedCat === cat ? "max-h-96 animate-fade-in" : "max-h-0 opacity-0"}
                      `} style={{
              background: expandedCat === cat ? "#18181b" : undefined,
              borderRadius: "0 0 12px 12px"
            }}>
                      <ul>
                        {expandedCat === cat && (groupedContent[cat]?.length ? groupedContent[cat].map(post => {
                  const isSelected = selectedPost?._id === post._id;
                  return <li key={post._id}>
                                    <button onClick={() => handlePostClick(cat, post)} className={`w-full text-left px-4 py-2 text-sm rounded
                                        transition-colors duration-100
                                        ${isSelected ? "text-white font-bold bg-zinc-700" : "text-gray-200 hover:bg-zinc-700"}`}>
                                      {post.title || "(Untitled)"}
                                    </button>
                                  </li>;
                }) : <li className="px-4 py-2 text-gray-400 text-sm">
                                No posts in this category.
                              </li>)}
                      </ul>
                    </div>
                  </div>)}
            </nav>
            <style>
              {`
                @keyframes slide-up-fast {
                  from {
                    opacity: 0;
                    transform: translateY(100%);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0%);
                  }
                }
                .animate-slide-up-fast {
                  animation: slide-up-fast 0.26s cubic-bezier(0.32,0.7,0.42,1.05);
                }
                @keyframes slide-down-fast {
                  from {
                    opacity: 1;
                    transform: translateY(0%);
                  }
                  to {
                    opacity: 0;
                    transform: translateY(100%);
                  }
                }
                .animate-slide-down-fast {
                  animation: slide-down-fast 0.26s cubic-bezier(0.48,0.46,0.47,1.08);
                }
                @keyframes fade-in {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }
                .animate-fade-in {
                  animation: fade-in 0.2s ease;
                }
              `}
            </style>
          </div>
        </div>}
      {/* Button at the bottom to open menu */}
      <div className="fixed z-[129] bottom-0 inset-x-0 flex items-center justify-center px-4 py-3 bg-black/80 border-t border-zinc-800 md:hidden">
        <Button onClick={() => setOpen(true)} className="w-full max-w-xs bg-black text-white hover:bg-gray-200 flex justify-between items-center border border-gray-400">
          <span>
            {selectedPost && selectedCategory ? `${categoryDisplayNames[selectedCategory] || selectedCategory} — ${selectedPost.title || "(Untitled)"}` : "Browse Documentation"}
          </span>
          <ChevronDown className={`transition-transform ml-2 ${open ? "rotate-180" : ""}`} />
        </Button>
      </div>
    </>;
};
export default MobileDocCategoryPicker;