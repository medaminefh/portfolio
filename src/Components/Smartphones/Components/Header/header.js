import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header
      id="Home"
      className="pt-4 center flex flex-col justify-center min-h-screen min-w-screen text-center"
    >
      <span id="bg"></span>
      <h2 className="text-4xl lg:text-6xl">
        <span className="md:text-5xl lg:text-6xl uppercase text-4xl text-teal-400">
          Welcome
        </span>{" "}
        To My Portfolio
      </h2>
      <p className="uppercase text-3xl pt-10 pb-10">
        Web developer{" "}
        <span className="text-3xl" role="img" aria-label="laptop">
          💻
        </span>
      </p>
      <div className="mt-10 flex justify-center">
        <a
          className="uppercase md:w-1/3 lg:w-2/5 p-4 text-3xl bg-blue-300 border-2 border-gray-600 rounded-md"
          href="#About"
        >
          About Me{" "}
          <span className="text-3xl" role="img" aria-label="down">
            👇
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
