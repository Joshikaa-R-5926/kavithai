"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardOverview = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <Card>
        <CardHeader>
          <CardTitle>Welcome to your Dashboard!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300">
            This is your central hub. Use the sidebar to navigate through different sections of your application.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Start by exploring the Kavithai Creator!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;