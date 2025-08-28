"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { showSuccess, showError } from "@/utils/toast";
import { Separator } from "@/components/ui/separator";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      showError("Please enter both email and password.");
      return;
    }
    // Placeholder for actual authentication logic
    console.log("Attempting to log in with:", { email, password });
    showSuccess("Login successful! (Placeholder)");
    navigate("/dashboard"); // Redirect to the new dashboard route after login
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Login</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full py-3 text-lg">
              Login
            </Button>
          </form>
          <Separator className="my-6" />
          <div className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </div>
          <div className="mt-4 text-center text-sm">
            <Link to="/dashboard" className="text-gray-500 hover:underline dark:text-gray-400">
              ← Back to Dashboard
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;