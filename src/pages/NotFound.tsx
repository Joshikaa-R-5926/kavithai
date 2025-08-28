import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import BackButton from "@/components/BackButton"; // Import BackButton

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <div className="mt-6">
          <BackButton className="text-blue-500 hover:text-blue-700" />
          <span className="ml-2 text-blue-500">Go Back</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;