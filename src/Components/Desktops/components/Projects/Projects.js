import React, { useEffect } from "react";
import { resumer } from "../../../../resume";
import "./Project.css";

const Projects = () => {
  const { works } = resumer;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="Projects" className="pb-10 pt-24 ">
      <span id="bg"></span>
      <h2 className="uppercase text-center text-6xl text-blue-200 pb-10">
        My Work{" "}
        <span className="text-6xl" role="img" aria-label="hamer">
          🔨
        </span>
      </h2>
      <div className="flex flex-wrap justify-around">
        {works.map((a) => (
          <a
            title={a.title}
            className="card hover:shadow-2xl rounded h-64 text-center flex flex-col justify-center items-center w-3/4 max-w-md mb-10"
            href={a.site}
            target="_blank"
            key={a.name}
            rel="noopener noreferrer"
          >
            <h2 className=" z-20 pb-4 text-3xl">{a.name}</h2>
            <img
              className="z-20 transform select-none w-24 h-24"
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
