"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Feather, FileEdit, Settings, FileText, Music, Palette } from "lucide-react";
import Logo from "@/components/Logo";

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

  const categories = [
    {
      icon: Feather,
      title: "Kavithai",
      description: "Dive into the world of poetry. Create, share, and read beautiful Kavithai.",
      link: "/dashboard/kavithai",
    },
    {
      icon: FileText,
      title: "Articles & Posts",
      description: "Write and manage your articles, blog posts, or any other long-form content.",
      link: "/dashboard/editor",
    },
    {
      icon: Music,
      title: "Song Lyrics",
      description: "Add and organize the lyrics for your favorite songs or your own compositions.",
      link: "/dashboard/song-adding",
    },
    {
      icon: Palette,
      title: "Custom Backgrounds",
      description: "Personalize your workspace by changing the background color or image.",
      link: "/dashboard/background",
    },
  ];

  const scrollToAbout = () => {
    document.getElementById("about-us-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      {/* Header for About, Login, and Dashboard buttons */}
      <div className="w-full max-w-5xl flex justify-between items-center p-4">
        <Logo className="text-white" />
        <div>
          <Button
            variant="ghost"
            onClick={scrollToAbout}
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

      {/* Categories Section */}
      <section className="w-full max-w-5xl text-center py-12">
        <h2 className="text-4xl font-bold text-white mb-10">Explore Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <category.icon className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl font-semibold mb-2">{category.title}</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                {category.description}
              </CardDescription>
              <Button onClick={() => navigate(category.link)} variant="outline" className="mt-auto">
                Explore
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us-section" className="w-full max-w-4xl text-center py-12">
        <h2 className="text-4xl font-bold text-white mb-10">About Us</h2>
        <Card className="w-full shadow-lg bg-white dark:bg-gray-800">
          <CardHeader className="text-center pt-6">
            <CardTitle className="text-3xl font-bold text-gray-900 dark:text-gray-50">About My App</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Learn more about what we do.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-lg text-gray-700 dark:text-gray-200">
            <p>
              Welcome to My App, your dedicated platform for creative expression and content management. We believe in empowering users to craft beautiful Kavithai (poems) and manage their digital content with ease.
            </p>
            <p>
              Our mission is to provide a seamless and intuitive experience for writers, creators, and anyone looking to organize their thoughts and projects. With a focus on simplicity and functionality, My App helps you bring your ideas to life.
            </p>
            <p>
              Thank you for being a part of our community!
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default FrontPage;