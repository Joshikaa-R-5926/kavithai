"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const KavithaiCreator = () => {
  const [inputPoem, setInputPoem] = useState<string>("");
  const [outputPoem, setOutputPoem] = useState<string>("");

  const handleCreateKavithai = () => {
    if (inputPoem.trim() === "") {
      setOutputPoem("Please enter some text to create your Kavithai!");
      return;
    }
    // This is a placeholder for actual poem generation logic.
    // In a real application, you might send this to an AI model.
    const generated = `
**Your Beautiful Kavithai**

${inputPoem}

---
*A simple reflection, crafted by you.*
    `;
    setOutputPoem(generated);
  };

  return (
    <div className="p-6"> {/* Removed min-h-screen and flex centering as it's now part of a layout */}
      <Card className="w-full max-w-2xl shadow-lg mx-auto"> {/* Added mx-auto for centering within its container */}
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Kavithai Creator</CardTitle>
          <CardDescription className="text-center text-gray-600 dark:text-gray-400">
            Unleash your inner poet. Write your thoughts and see them transform!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid w-full gap-2">
            <Label htmlFor="input-poem" className="text-lg font-medium">Your Words</Label>
            <Textarea
              id="input-poem"
              placeholder="Start writing your poem here..."
              value={inputPoem}
              onChange={(e) => setInputPoem(e.target.value)}
              className="min-h-[150px] text-base"
            />
          </div>
          <Button onClick={handleCreateKavithai} className="w-full py-3 text-lg">
            Create Kavithai
          </Button>
          {outputPoem && (
            <div className="grid w-full gap-2 mt-6">
              <Label className="text-lg font-medium">Generated Kavithai</Label>
              <div
                className="p-4 border rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 whitespace-pre-wrap text-left"
                dangerouslySetInnerHTML={{ __html: outputPoem }}
              />
            </div>
          )}
        </CardContent>
        <CardFooter className="text-sm text-gray-500 dark:text-gray-400 text-center">
          Note: This is a basic creator. Advanced AI generation features can be added later!
        </CardFooter>
      </Card>
    </div>
  );
};

export default KavithaiCreator;