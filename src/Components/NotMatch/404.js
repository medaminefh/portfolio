import React from "react";
import { Link } from "react-router-dom";

const NotMatch = () => {
  return (
    <div className="flex flex-col justify-evenly items-center min-h-screen min-w-screen">
      <h1 className="text-4xl">404 Not Found</h1>
      <Link
        to="/"
        className="max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-2/5 text-center md:text-4xl p-4 text-3xl hover:bg-blue-200 bg-blue-300 border-4 border-purple-600"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NotMatch;
