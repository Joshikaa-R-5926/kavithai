"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { showSuccess, showError } from "@/utils/toast";
import BackButton from "@/components/BackButton";

const SongAddingPage = () => {
  const [songTitle, setSongTitle] = React.useState("");
  const [artistName, setArtistName] = React.useState("");
  const [lyrics, setLyrics] = React.useState("");

  const handleAddSong = () => {
    if (songTitle.trim() && artistName.trim() && lyrics.trim()) {
      showSuccess("Song added successfully!");
      console.log("New Song:", { songTitle, artistName, lyrics });
      setSongTitle("");
      setArtistName("");
      setLyrics("");
    } else {
      showError("All fields must be filled to add a song.");
    }
  };

  return (
    <div className="p-6">
      <div className="mb-4">
        <BackButton />
      </div>
      <h1 className="text-3xl font-bold mb-6">Add New Song</h1>
      <Card className="w-full max-w-3xl shadow-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Upload Your Music</CardTitle>
          <CardDescription className="text-center text-gray-600 dark:text-gray-400">
            Enter details for a new song to add to your collection.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid w-full gap-2">
            <Label htmlFor="song-title" className="text-lg font-medium">Song Title</Label>
            <Input
              id="song-title"
              placeholder="Enter song title..."
              value={songTitle}
              onChange={(e) => setSongTitle(e.target.value)}
              className="text-base"
            />
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="artist-name" className="text-lg font-medium">Artist Name</Label>
            <Input
              id="artist-name"
              placeholder="Enter artist name..."
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
              className="text-base"
            />
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="lyrics" className="text-lg font-medium">Lyrics</Label>
            <Textarea
              id="lyrics"
              placeholder="Enter song lyrics here..."
              value={lyrics}
              onChange={(e) => setLyrics(e.target.value)}
              className="min-h-[200px] text-base"
            />
          </div>
          <Button onClick={handleAddSong} className="w-full py-3 text-lg">
            Add Song
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SongAddingPage;