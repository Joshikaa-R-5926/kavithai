"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, Feather, FileEdit, Settings } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

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
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="w-64 bg-sidebar-background text-sidebar-foreground border-r border-sidebar-border p-4 flex flex-col shadow-md">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-sidebar-primary-foreground">My App</h2>
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