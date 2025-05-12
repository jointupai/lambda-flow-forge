
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold mb-6 text-white">404</h1>
        <p className="text-xl text-gray-400 mb-8">
          This page could not be found.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
