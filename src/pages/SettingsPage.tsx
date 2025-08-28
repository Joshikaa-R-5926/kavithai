"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { showSuccess } from "@/utils/toast";

const SettingsPage = () => {
  const [username, setUsername] = React.useState("JohnDoe");
  const [email, setEmail] = React.useState("john.doe@example.com");

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Settings saved successfully!");
    console.log("Saving settings:", { username, email });
    // In a real app, you'd send this data to a backend.
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Card className="w-full max-w-2xl shadow-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Manage Your Account</CardTitle>
          <CardDescription className="text-center text-gray-600 dark:text-gray-400">
            Update your personal information and preferences.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSaveSettings} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full py-3 text-lg">
              Save Changes
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;