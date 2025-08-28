"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BackButton from "@/components/BackButton";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-2xl mb-4">
        <BackButton />
      </div>
      <Card className="w-full max-w-2xl text-center shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">About My App</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Learn more about our mission and features.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-lg text-gray-700 dark:text-gray-200">
          <p>
            Welcome to My App, your dedicated platform for creative expression and content management. We believe in empowering users to craft beautiful Kavithai (poems) and manage their digital content with ease.
          </p>
          <p>
            Our mission is to provide a seamless and intuitive experience for writers, poets, and content creators. Whether you're drafting your next masterpiece or organizing your articles, My App is designed to support your creative journey.
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