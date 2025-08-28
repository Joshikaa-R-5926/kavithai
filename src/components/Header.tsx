import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-gray-50">
        My App
      </Link>
      <nav className="space-x-4">
        <Link to="/">
          <Button variant="ghost">Home</Button>
        </Link>
        <Link to="/my-corner">
          <Button variant="ghost">My Corner</Button>
        </Link>
        <Link to="/features">
          <Button variant="ghost">Features</Button>
        </Link>
        <Link to="/what-is-about">
          <Button variant="ghost">What is About</Button>
        </Link>
        <Link to="/questions">
          <Button variant="ghost">Questions</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;