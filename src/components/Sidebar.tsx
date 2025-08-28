"use client";

import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, Settings, PenTool, Edit } from "lucide-react"; // Added Edit icon

const Sidebar = () => {
  const navItems = [
    {
      name: "Overview",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Kavithai Creator",
      href: "/dashboard/kavithai",
      icon: PenTool,
    },
    {
      name: "Content Editor", // New item for editing options
      href: "/dashboard/editor",
      icon: Edit, // Using the Edit icon
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="w-64 bg-sidebar-background text-sidebar-foreground p-4 border-r border-sidebar-border h-full flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-sidebar-primary-foreground">My App</h2>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                end={item.href === "/dashboard"} // 'end' prop for exact match on dashboard root
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground",
                  )
                }
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;