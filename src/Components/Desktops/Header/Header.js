import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-200 pt-4 md:p-0 center flex flex-col justify-center min-h-screen min-w-screen text-center">
      <h2 className="text-3xl md:text-5xl lg:text-6xl">
        <span className="text-4xl md:text-5xl text-orange-600 lg:text-6xl">
          Welcome
        </span>{" "}
        To My Portfolio
      </h2>
      <p className="md:text-4xl lg:text-5xl text-2xl pt-10 pb-10">
        Web developer
      </p>
      <div className="mt-10 flex justify-center">
        <Link
          className="md:w-1/3 lg:w-2/5 p-4 text-3xl hover:bg-blue-200 bg-blue-300 border-2 border-gray-600 rounded-md"
          to="/About"
        >
          About Me
        </Link>
      </div>
    </header>
  );
};

export default Header;
