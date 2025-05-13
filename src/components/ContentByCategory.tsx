
import React, { useEffect, useState } from "react";
import { fetchContent } from "@/lib/sanity";

interface Post {
  _id: string;
  category?: string;
  title?: string;
  content?: string;
}

interface Categories {
  [key: string]: Post[];
}

const ContentByCategory: React.FC = () => {
  const [categories, setCategories] = useState<Categories>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategoriesAndPosts = async () => {
      setIsLoading(true);
      try {
        const result: Post[] = await fetchContent();

        // Organize posts by category
        const organized: Categories = result.reduce((acc: Categories, post: Post) => {
          const cat = post.category || "Uncategorized";
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(post);
          return acc;
        }, {});
        setCategories(organized);
      } catch (error) {
        setCategories({});
      }
      setIsLoading(false);
    };

    fetchCategoriesAndPosts();
  }, []);

  if (isLoading) return <div className="text-gray-400 p-4">Loading content...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Content by Category</h1>
      {Object.entries(categories).map(([category, posts]) => (
        <div key={category} className="mb-10">
          <h2 className="text-xl font-semibold mb-4">{category}</h2>
          {posts.map((post) => (
            <div key={post._id} className="mb-6 p-4 rounded bg-zinc-900 border border-zinc-800">
              <h3 className="text-lg font-bold mb-2">{post.title}</h3>
              <div className="text-gray-300">{post.content}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ContentByCategory;
