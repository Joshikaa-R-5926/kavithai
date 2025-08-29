"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, Feather, FileEdit, Settings, User, Palette, Music } from "lucide-react"; // Import new icons

const Sidebar = () => {
  const location = useLocation();

  // Fake user data for the sidebar profile
  const currentUser = {
    name: "Jane Doe",
    avatarUrl: "https://api.dicebear.com/7.x/lorelei/svg?seed=Jane", // Example avatar URL
  };

  const navItems = [
    {
      name: "Overview",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Kavithai Creator",
      href: "/dashboard/kavithai",
      icon: Feather,
    },
    {
      name: "Content Editor",
      href: "/dashboard/editor",
      icon: FileEdit,
    },
    {
      name: "Background",
      href: "/dashboard/background",
      icon: Palette, // New icon for Background
    },
    {
      name: "Song Adding",
      href: "/dashboard/song-adding",
      icon: Music, // New icon for Song Adding
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="w-64 bg-sidebar-background text-sidebar-foreground border-r border-sidebar-border p-4 flex flex-col shadow-md">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-sidebar-primary-foreground mb-4">My App</h2>
        {/* User Profile Section */}
        <Link to="/dashboard" className="flex items-center space-x-3 p-2 rounded-md hover:bg-sidebar-accent transition-colors duration-200">
          <Avatar className="h-10 w-10">
            {currentUser.avatarUrl ? (
              <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
            ) : (
              <AvatarFallback className="bg-primary text-primary-foreground">
                <User className="h-5 w-5" />
              </AvatarFallback>
            )}
          </Avatar>
          <span className="text-lg font-semibold text-sidebar-foreground">{currentUser.name}</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Button
              key={item.name}
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start text-lg py-6",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/90"
                  : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <Link to={item.href} className="flex items-center space-x-3">
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            </Button>
          );
        })}
      </nav>
      <div className="mt-auto pt-4 border-t border-sidebar-border">
        {/* Future footer items or user info can go here */}
        <p className="text-sm text-sidebar-foreground/70">Version 1.0</p>
      </div>
    </aside>
  );
};

export default Sidebar;