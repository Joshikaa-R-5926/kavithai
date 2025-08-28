"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { showSuccess } from "@/utils/toast";

const ContentEditor = () => {
  const [content, setContent] = useState<string>("Start writing or editing your content here...");

  const handleSaveContent = () => {
    console.log("Saving content:", content);
    showSuccess("Content saved successfully!");
    // In a real application, you would send this content to a backend.
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Content Editor</h1>
      <Card className="w-full max-w-3xl shadow-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Edit Your Content</CardTitle>
          <CardDescription className="text-center text-gray-600 dark:text-gray-400">
            Write, modify, and refine your text.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid w-full gap-2">
            <Label htmlFor="content-editor" className="text-lg font-medium">Your Content</Label>
            <Textarea
              id="content-editor"
              placeholder="Type your content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[300px] text-base"
            />
          </div>
          <Button onClick={handleSaveContent} className="w-full py-3 text-lg">
            Save Content
          </Button>
        </CardContent>
        <CardFooter className="text-sm text-gray-500 dark:text-gray-400 text-center">
          This is a basic editor. More advanced features can be integrated.
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContentEditor;