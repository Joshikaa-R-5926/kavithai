"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SettingsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Application Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 dark:text-gray-300">
            Manage your application preferences here.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            (This is a placeholder for future settings options.)
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;