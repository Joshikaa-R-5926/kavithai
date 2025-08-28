import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-gray-50 mb-4">
          MY CORNER
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-prose mx-auto">
          Start building your amazing project here! Click the button below to visit your new "My Corner" page.
        </p>
        <Link to="/my-corner">
          <Button size="lg" className="mt-6">
            Go to My Corner
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-4">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;