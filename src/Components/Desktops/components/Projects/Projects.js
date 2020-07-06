import React, { useEffect } from "react";
import { resumer } from "../../../../resume";

const Projects = () => {
  const { works } = resumer;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="Projects" className="bg-blue-900 pb-10 pt-24 ">
      <h2 className="uppercase text-center text-5xl text-blue-200 pb-10">
        My Work{" "}
        <span className="text-5xl" role="img" aria-label="hamer">
          🔨
        </span>
      </h2>
      <div className="flex flex-wrap justify-around">
        {works.map((a) => (
          <a
            title={a.title}
            className="bg-gray-300 hover:bg-gray-200 hover:shadow-2xl transition ease-in transform hover:scale-105 duration-100 rounded h-64 text-center flex flex-col justify-center items-center w-3/4 max-w-md mb-10 text-purple-800"
            href={a.site}
            target="_blank"
            key={a.name}
            rel="noopener noreferrer"
          >
            <h2 className="pb-4 text-3xl">{a.name}</h2>
            <img
              className="transform select-none w-24 h-24"
              draggable="false"
              src={a.img}
              alt={a.alt}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
