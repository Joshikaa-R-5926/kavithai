"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Feather, FileEdit, Settings } from "lucide-react"; // Import icons for features

const FrontPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Feather,
      title: "Kavithai Creation",
      description: "Craft beautiful poems and express your creativity with our intuitive editor.",
    },
    {
      icon: FileEdit,
      title: "Content Management",
      description: "Easily write, edit, and organize your articles, posts, and other content.",
    },
    {
      icon: Settings,
      title: "Personalized Settings",
      description: "Customize your profile and preferences for a tailored app experience.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      {/* Header for About, Login, and Dashboard buttons */}
      <div className="w-full max-w-4xl flex justify-end p-4">
        <Button
          variant="ghost"
          onClick={() => navigate("/about")}
          className="text-white hover:bg-white/20 text-sm px-3 py-2"
        >
          About
        </Button>
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="text-white hover:bg-white/20 text-sm px-3 py-2 ml-2"
        >
          Dashboard
        </Button>
        <Button
          variant="ghost"
          onClick={() => navigate("/login")}
          className="text-white hover:bg-white/20 text-sm px-3 py-2 ml-2"
        >
          Login
        </Button>
      </div>

      {/* Main Hero Section */}
      <Card className="w-full max-w-4xl text-center shadow-2xl bg-white dark:bg-gray-800 mb-12">
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
          </div>
        </CardContent>
      </Card>

      {/* Features Section */}
      <section className="w-full max-w-4xl text-center py-12">
        <h2 className="text-4xl font-bold text-white mb-10">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 shadow-lg p-6 flex flex-col items-center text-center">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold mb-2">{feature.title}</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FrontPage;