"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Feather } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className={cn("flex items-center space-x-2", className)}>
      <Feather className="h-8 w-8" />
      <span className="text-2xl font-bold">Kavithai</span>
    </Link>
  );
};

export default Logo;