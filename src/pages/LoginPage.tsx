"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { showSuccess, showError } from "@/utils/toast";
import { cn } from "@/lib/utils"; // Import cn for conditional class names
import BackButton from "@/components/BackButton"; // Import BackButton

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoginMode, setIsLoginMode] = React.useState(true); // State to manage active tab

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send these credentials to an authentication API.
    // For this example, we'll just simulate a successful login.
    if (email === "user@example.com" && password === "password") {
      showSuccess("Login successful! Redirecting to dashboard...");
      navigate("/dashboard");
    } else {
      showError("Invalid credentials. Please try again.");
    }
  };

  // For now, sign up will just show a toast and switch to login mode
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Sign Up successful! Please log in.");
    console.log("Signing up with:", { email, password });
    setEmail("");
    setPassword("");
    setIsLoginMode(true); // Switch back to login after sign up
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md shadow-lg">
        {/* Back button added here */}
        <div className="flex justify-start p-2 border-b border-gray-200 dark:border-gray-700">
          <BackButton />
        </div>

        {/* Existing section for Login and Sign Up tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <Button
            variant="ghost"
            onClick={() => setIsLoginMode(true)}
            className={cn(
              "flex-1 text-lg font-semibold py-4 rounded-none",
              isLoginMode
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
            )}
          >
            Login
          </Button>
          <Button
            variant="ghost"
            onClick={() => setIsLoginMode(false)}
            className={cn(
              "flex-1 text-lg font-semibold py-4 rounded-none",
              !isLoginMode
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
            )}
          >
            Sign Up
          </Button>
        </div>
        <CardHeader className="text-center pt-6">
          <CardTitle className="text-3xl font-bold">
            {isLoginMode ? "Welcome Back" : "Join Us"}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            {isLoginMode
              ? "Enter your credentials to access your account."
              : "Create an account to get started."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={isLoginMode ? handleLogin : handleSignUp} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full py-3 text-lg">
              {isLoginMode ? "Login" : "Sign Up"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;