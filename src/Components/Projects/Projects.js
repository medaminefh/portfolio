import React from "react";
import { resumer } from "../../resume";

const Projects = () => {
  const { works } = resumer;
  return (
    <section className="md:bg-white bg-blue-100 md:flex-row  md:flex-wrap pb-10 pt-24 justify-around flex flex-wrap items-center min-h-screen min-w-screen">
      {works.map((a) => (
        <div
          className="transition ease-in transform hover:scale-105 duration-100 md:bg-gray-200 bg-white border-purple-400 sm:max-w-sm lg:max-w-sm  lg:rounded lg:h-64 md:border-2 md:w-2/5 h-56 text-center flex flex-col justify-center items-center w-3/4 max-w-lg border-solid border-4 border-blue-300 mb-10 "
          key={a.name}
          title={a.title}
        >
          <h2 className=" pb-4">
            <a
              className=" text-purple-700 text-2xl"
              href={a.site}
              target="_blank"
              rel="noopener noreferrer"
            >
              {a.name}
            </a>
          </h2>
          <img
            className="select-none w-24 h-24"
            draggable="false"
            src={a.img}
            alt={a.alt}
          />
        </div>
      ))}
    </section>
  );
};

export default Projects;
