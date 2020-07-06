import React from "react";

const Header = () => {
  return (
    <header
      id="Header"
      className="bg-blue-900 pt-4 md:p-0 center flex flex-col justify-center min-h-screen min-w-screen text-center"
    >
      <h2 className="text-6xl">
        <span className=" text-orange-600 text-6xl uppercase">Welcome</span> To
        My Portfolio
      </h2>
      <p className="text-5xl pt-10 pb-10">
        Web developer{" "}
        <span className="text-5xl" role="img" aria-label="laptop">
          💻
        </span>
      </p>
      <div className="mt-10 flex justify-center">
        <a
          className="w-2/5 p-4 text-4xl hover:bg-blue-400 bg-blue-300 border-2 border-gray-600 rounded-md"
          href="#About"
        >
          About Me{" "}
          <span className="text-4xl" role="img" aria-label="down">
            👇
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
