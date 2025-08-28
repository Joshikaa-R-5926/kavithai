"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the dashboard if the user lands on the old Index route
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Loading...</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">Redirecting to dashboard.</p>
      </div>
    </div>
  );
};

export default Index;