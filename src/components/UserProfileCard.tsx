"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react"; // Icon for avatar fallback

interface UserProfileCardProps {
  user: {
    name: string;
    email: string;
    avatarUrl?: string;
  };
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="flex flex-row items-center space-x-4 p-6">
        <Avatar className="h-16 w-16">
          {user.avatarUrl ? (
            <AvatarImage src={user.avatarUrl} alt={user.name} />
          ) : (
            <AvatarFallback className="bg-primary text-primary-foreground">
              <User className="h-8 w-8" />
            </AvatarFallback>
          )}
        </Avatar>
        <div>
          <CardTitle className="text-2xl font-bold">{user.name}</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">{user.email}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <p className="text-gray-700 dark:text-gray-200">
          This is your personal profile. You can update your details in the settings.
        </p>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;