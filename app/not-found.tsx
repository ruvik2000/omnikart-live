import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-5 px-10 text-black dark:text-white">
      <h1 className="text-9xl">404</h1>
      <h2 className="text-6xl">Page Not Found</h2>
      <p className="text-center">
        The page you are looking for does not exist. How you got here is a
        mystery. But you can click the button below to go back to the home page.
      </p>
      <Link
        href="/"
        className="bg-green-600 w-40 h-10 rounded-full flex items-center justify-center text-white hover:scale-105 transition-all"
      >
        Home
      </Link>
    </main>
  );
};

export default NotFound;
