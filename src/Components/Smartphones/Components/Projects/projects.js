import React from "react";
import { resumer } from "../../../../resume";
import "./projects.css";

const Projects = () => {
  const { works } = resumer;

  return (
    <section id="Projects" className="pb-10 pt-16 min-w-screen">
      <span id="smbg"></span>
      <h2 className="uppercase text-center text-5xl text-blue-200 pb-10">
        My Work{" "}
        <span className="text-5xl" role="img" aria-label="hamer">
          🔨
        </span>
      </h2>
      <div className=" flex flex-wrap justify-around">
        {works.map((a) => (
          <a
            title={a.title}
            className="smcard bg-indigo-100 border-teal-700 w-3/4 h-56  flex flex-col justify-center items-center max-w-sm border-2 mb-6 rounded-b-full md:rounded-none text-purple-900"
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
      </div>
    </section>
  );
};

export default Projects;
