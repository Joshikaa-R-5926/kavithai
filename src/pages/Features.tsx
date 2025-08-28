import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-900 dark:text-gray-50">
            Features
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400 mt-2">
            Discover the amazing features of our application.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6 p-6">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            This page will highlight all the key functionalities and benefits.
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

export default Features;