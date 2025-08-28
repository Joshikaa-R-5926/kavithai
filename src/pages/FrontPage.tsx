"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FrontPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <Card className="w-full max-w-2xl text-center shadow-2xl bg-white dark:bg-gray-800">
        <CardHeader className="pb-6">
          <CardTitle className="text-5xl font-extrabold text-gray-900 dark:text-gray-50 mb-4">
            Welcome to My App
          </CardTitle>
          <CardDescription className="text-xl text-gray-600 dark:text-gray-300">
            Your creative hub for Kavithai and content management.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            Explore a world where you can craft beautiful poems, manage your content with ease, and keep track of your projects. Get started now and unleash your creativity!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => navigate("/login")}
              className="px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            >
              Get Started
            </Button>
            <Button
              onClick={() => navigate("/dashboard")}
              variant="outline"
              className="px-8 py-4 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors duration-200"
            >
              View Dashboard
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FrontPage;