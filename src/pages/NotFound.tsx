import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import BackButton from "@/components/BackButton";
import Logo from "@/components/Logo"; // Import the new Logo component

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-800">
      <header className="p-4">
        <Logo className="text-primary" />
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Oops! Page not found</p>
          <div className="mt-6">
            <BackButton className="text-blue-500 hover:text-blue-700" />
            <span className="ml-2 text-blue-500">Go Back</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;