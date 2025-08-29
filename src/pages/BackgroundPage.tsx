"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { showSuccess } from "@/utils/toast";
import BackButton from "@/components/BackButton";

const BackgroundPage = () => {
  const [backgroundColor, setBackgroundColor] = React.useState("#ffffff");
  const [backgroundImage, setBackgroundImage] = React.useState("");

  const handleSaveBackground = () => {
    showSuccess("Background settings saved!");
    console.log("Saving background settings:", { backgroundColor, backgroundImage });
    // In a real app, you'd apply these settings or send them to a backend.
  };

  return (
    <div className="p-6">
      <div className="mb-4">
        <BackButton />
      </div>
      <h1 className="text-3xl font-bold mb-6">Background Settings</h1>
      <Card className="w-full max-w-3xl shadow-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Customize Your Background</CardTitle>
          <CardDescription className="text-center text-gray-600 dark:text-gray-400">
            Choose a color or upload an image for your app's background.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid w-full gap-2">
            <Label htmlFor="background-color" className="text-lg font-medium">Background Color</Label>
            <Input
              id="background-color"
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="h-10 w-full"
            />
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="background-image" className="text-lg font-medium">Background Image URL</Label>
            <Input
              id="background-image"
              type="text"
              placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
              value={backgroundImage}
              onChange={(e) => setBackgroundImage(e.target.value)}
              className="text-base"
            />
          </div>
          <Button onClick={handleSaveBackground} className="w-full py-3 text-lg">
            Save Background
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BackgroundPage;