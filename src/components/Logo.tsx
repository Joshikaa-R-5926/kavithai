"use client";

import React from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className={cn("flex items-center space-x-2 group", className)}>
      <BookOpen className="h-8 w-8 text-purple-500 group-hover:text-pink-500 transition-colors duration-300" />
      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-pink-400 transition-all duration-300">
        Kavithai
      </span>
    </Link>
  );
};

export default Logo;