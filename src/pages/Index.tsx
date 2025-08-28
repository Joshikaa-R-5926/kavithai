"use client";

import KavithaiCreator from "./KavithaiCreator";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom"; // Import Link

const Index = () => {
  return (
    <>
      <div className="absolute top-4 right-4">
        <Link to="/login" className="text-blue-500 hover:underline dark:text-blue-400">
          Login
        </Link>
      </div>
      <KavithaiCreator />
      <MadeWithDyad />
    </>
  );
};

export default Index;