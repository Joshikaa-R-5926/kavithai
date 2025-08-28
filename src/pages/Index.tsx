"use client";

import KavithaiCreator from "./KavithaiCreator";
import { MadeWithDyad } from "@/components/made-with-dyad";
// Link import is no longer needed here as the login link is removed.

const Index = () => {
  return (
    <>
      {/* Removed the login link as the login page is now the default */}
      <KavithaiCreator />
      <MadeWithDyad />
    </>
  );
};

export default Index;