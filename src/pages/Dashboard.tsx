"use client";

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <div className="flex-1 overflow-auto">
          <Outlet /> {/* This is where nested routes will render their content */}
        </div>
        <MadeWithDyad />
      </main>
    </div>
  );
};

export default Dashboard;