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
      <BookOpen className="h-8 w-8 text-sky-500 group-hover:text-blue-500 transition-colors duration-300 drop-shadow-sm" />
      <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent group-hover:from-sky-500 group-hover:to-blue-600 transition-all duration-300 drop-shadow-sm">
        Kavithai
      </span>
    </Link>
  );
};

export default Logo;