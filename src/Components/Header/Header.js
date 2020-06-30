import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header
      id="About"
      className=" pt-4 md:p-0 center bg-blue-100 flex flex-col justify-center min-h-screen min-w-screen text-center md:bg-red-400 lg:bg-transparent"
    >
      <h2 className="text-3xl md:text-5xl lg:text-6xl">
        <span className="text-4xl text-red-600 md:text-6xl md:text-blue-600 lg:text-green-500 lg:text-7xl">
          Welcome
        </span>
        To My Portfolio
      </h2>
      <p className="md:text-3xl lg:text-4xl text-2xl pt-10 pb-10">
        Web developer
      </p>
      <div className="mt-10 flex justify-center">
        <Link
          className="max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-2/5 p-4 text-3xl hover:bg-blue-200 bg-blue-300 border-4 border-purple-600"
          to="/About"
        >
          READ MORE
        </Link>
      </div>
    </header>
  );
};

export default Header;
