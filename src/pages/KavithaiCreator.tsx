"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { showSuccess, showError } from "@/utils/toast"; // Ensure showError is imported
import BackButton from "@/components/BackButton"; // Import BackButton

const KavithaiCreator = () => {
  const [kavithaiText, setKavithaiText] = React.useState<string>("");

  const handleCreateKavithai = () => {
    if (kavithaiText.trim()) {
      showSuccess("Kavithai created successfully!");
      console.log("New Kavithai:", kavithaiText);
      setKavithaiText(""); // Clear the textarea
    } else {
      showError("Kavithai cannot be empty.");
    }
  };

  return (
    <div className="p-6">
      <div className="mb-4">
        <BackButton />
      </div>
      <h1 className="text-3xl font-bold mb-6">Kavithai Creator</h1>
      <Card className="w-full max-w-3xl shadow-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Craft Your Kavithai</CardTitle>
          <CardDescription className="text-center text-gray-600 dark:text-gray-400">
            Write beautiful poems and share your thoughts.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid w-full gap-2">
            <Label htmlFor="kavithai-input" className="text-lg font-medium">Your Kavithai</Label>
            <Textarea
              id="kavithai-input"
              placeholder="Start writing your poem here..."
              value={kavithaiText}
              onChange={(e) => setKavithaiText(e.target.value)}
              className="min-h-[250px] text-base"
            />
          </div>
          <Button onClick={handleCreateKavithai} className="w-full py-3 text-lg">
            Create Kavithai
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default KavithaiCreator;