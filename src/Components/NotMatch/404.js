import React from "react";
import { Link } from "react-router-dom";
import error from "../../asset/error.jpg";

const NotMatch = () => {
  return (
    <div className=" flex flex-col justify-evenly items-center min-h-screen min-w-screen">
      <div className="text-center flex flex-col items-center">
        <img
          src={error}
          alt="Not Found"
          draggable="false"
          className=" hover:skew-x-6 transition ease-in duration-200 transform lg:w-1/2 md:w-4/5 max-w-full max-h-full sm:w-screen sm:h-auto object-center object-cover"
        />
        <h1 className=" mt-10 md:m-0 md:text-6xl text-4xl ">404 Not Found</h1>
      </div>
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
