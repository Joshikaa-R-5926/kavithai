"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { showSuccess, showError } from "@/utils/toast";

const ContentEditor = () => {
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");

  const handleSaveContent = () => {
    if (title.trim() && content.trim()) {
      showSuccess("Content saved successfully!");
      console.log("Saving content:", { title, content });
      setTitle("");
      setContent("");
    } else {
      showError("Title and content cannot be empty.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Content Editor</h1>
      <Card className="w-full max-w-3xl shadow-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Create or Edit Content</CardTitle>
          <CardDescription className="text-center text-gray-600 dark:text-gray-400">
            Write and manage your articles, posts, or any other content.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid w-full gap-2">
            <Label htmlFor="content-title" className="text-lg font-medium">Title</Label>
            <Input
              id="content-title"
              placeholder="Enter content title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-base"
            />
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="content-textarea" className="text-lg font-medium">Content</Label>
            <Textarea
              id="content-textarea"
              placeholder="Start writing your content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[300px] text-base"
            />
          </div>
          <Button onClick={handleSaveContent} className="w-full py-3 text-lg">
            Save Content
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentEditor;