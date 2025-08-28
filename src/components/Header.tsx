"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/"); // Navigate to the login page
  };

  return (
    <header className="flex items-center justify-end p-4 border-b border-gray-200 dark:border-gray-800 bg-background">
      <Button variant="outline" onClick={handleLoginClick} className="flex items-center gap-2">
        <LogIn className="h-4 w-4" />
        Login
      </Button>
    </header>
  );
};

export default Header;