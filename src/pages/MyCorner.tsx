import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MyCorner = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-900 dark:text-gray-50">
            Welcome to My Corner
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400 mt-2">
            A personal space to explore and share thoughts.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6 p-6">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            This is your dedicated space. Feel free to customize it with your ideas, projects, or anything you'd like to showcase.
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400">
            Start by adding your unique content here!
          </p>
          <Link to="/">
            <Button className="w-full sm:w-auto mt-4">
              Go Back Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyCorner;