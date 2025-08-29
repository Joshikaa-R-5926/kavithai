"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { showSuccess } from "@/utils/toast";
import BackButton from "@/components/BackButton";
import UserProfileCard from "@/components/UserProfileCard"; // Import the new component

const DashboardOverview = () => {
  const navigate = useNavigate();

  // Fake user data for the profile card
  const currentUser = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    avatarUrl: "https://api.dicebear.com/7.x/lorelei/svg?seed=Jane", // Example avatar URL
  };

  const handleLogout = () => {
    showSuccess("Logged out successfully!");
    navigate("/"); // Navigate back to the login page
  };

  return (
    <div className="p-6">
      <div className="mb-4">
        <BackButton />
      </div>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* User Profile Card */}
        <div className="md:col-span-2 lg:col-span-3"> {/* Make it span full width on larger screens */}
          <UserProfileCard user={currentUser} />
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Welcome!</CardTitle>
            <CardDescription>This is your main dashboard area.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">You are currently logged in.</p>
            <Button onClick={handleLogout} variant="destructive" className="w-full">
              Logout
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>Summary of your activities.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Total Projects: 12</p>
            <p>Active Tasks: 5</p>
            <p>Notifications: 3</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Edited "Project Alpha"</li>
              <li>Created new "Kavithai"</li>
              <li>Updated profile settings</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;