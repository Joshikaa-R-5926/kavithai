"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BackButton from "@/components/BackButton";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-2xl shadow-lg">
        <div className="p-2 border-b border-gray-200 dark:border-gray-700">
          <BackButton />
        </div>
        <CardHeader className="text-center pt-6">
          <CardTitle className="text-3xl font-bold">About My App</CardTitle>
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
    </div>
  );
};

export default AboutPage;