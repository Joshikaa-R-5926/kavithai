"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { showSuccess } from "@/utils/toast";

const SettingsPage = () => {
  const [language, setLanguage] = useState<string>("english");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [emailNotifications, setEmailNotifications] = useState<boolean>(true);

  const handleSaveChanges = () => {
    console.log("Saving settings:", { language, darkMode, emailNotifications });
    showSuccess("Settings saved successfully!");
    // In a real app, you would send these settings to a backend or update a global state/context.
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Application Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Language Setting */}
          <div className="flex items-center justify-between">
            <Label htmlFor="language-select" className="text-base">Language</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger id="language-select" className="w-[180px]">
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="tamil">Tamil</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="french">French</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Theme Setting */}
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode-switch" className="text-base">Dark Mode</Label>
            <Switch
              id="dark-mode-switch"
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
          </div>

          {/* Email Notifications Setting */}
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications-checkbox" className="text-base">Email Notifications</Label>
            <Checkbox
              id="email-notifications-checkbox"
              checked={emailNotifications}
              onCheckedChange={(checked) => setEmailNotifications(checked as boolean)}
            />
          </div>
        </CardContent>
        <CardFooter className="border-t p-6">
          <Button onClick={handleSaveChanges} className="w-full">
            Save Changes
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SettingsPage;