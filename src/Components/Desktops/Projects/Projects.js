import React, { useEffect } from "react";
import { resumer } from "../../../resume";

const Projects = () => {
  const { works } = resumer;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="md:bg-white bg-blue-100 md:flex-row  md:flex-wrap pb-10 pt-24 justify-around flex flex-wrap items-center min-h-screen min-w-screen">
      {works.map((a) => (
        <a
          title={a.title}
          className="md:hover:bg-gray-100 md:hover:shadow-2xl transition ease-in transform hover:scale-105 duration-100 md:bg-gray-200 bg-white border-purple-400 sm:max-w-sm lg:max-w-sm  lg:rounded lg:h-64 md:border-2 md:w-2/5 h-56 text-center flex flex-col justify-center items-center w-3/4 max-w-lg border-solid border-4 border-blue-300 mb-10 text-purple-800"
          href={a.site}
          target="_blank"
          key={a.name}
          rel="noopener noreferrer"
        >
          <h2 className="pb-4 text-2xl">{a.name}</h2>
          <img
            className="transform select-none w-24 h-24"
            draggable="false"
            src={a.img}
            alt={a.alt}
          />
        </a>
      ))}
    </section>
  );
};

export default Projects;
