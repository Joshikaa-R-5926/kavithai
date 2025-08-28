"use client";

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar"; // Assuming Sidebar exists and is in components

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <div className="flex-1 overflow-auto">
          <Outlet /> {/* This is where nested dashboard routes will render */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;