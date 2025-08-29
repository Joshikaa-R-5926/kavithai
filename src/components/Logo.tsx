"use client";

import React from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react"; // Changed from Feather to BookOpen
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className={cn("flex items-center space-x-2", className)}>
      <BookOpen className="h-8 w-8" /> {/* Changed icon */}
      <span className="text-2xl font-bold">Kavithai</span>
    </Link>
  );
};

export default Logo;