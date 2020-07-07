import React from "react";
import { resumer } from "../../../../resume";
import med from "../../../../asset/me2.jpg";

const About = () => {
  const { name, languages, age, nationality } = resumer;
  return (
    <section id="About" className=" pt-10 bg-blue-800">
      <div className=" md:flex-row md:items-center flex flex-col justify-around h-screen">
        <div>
          <h2 className="md:p-0 md:text-6xl text-left text-orange-500 text-4xl pl-8 uppercase">
            Who Am I ?
          </h2>
          <p className="md:text-5xl text-3xl text-center">{name}</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            draggable="false"
            className=" object-cover object-center w-56 h-64 rounded-md border-8 border-blue-700 md:rounded-none md:w-64 md:h-auto "
            src={med}
            alt="About me"
          />
        </div>
      </div>
      <div
        style={{ lineHeight: "3.4rem" }}
        className="pt-8 pr-4 pl-4 mt-3 pb-8"
      >
        <p className=" md:text-3xl text-black-200 text-2xl">
          I'm {age} Years Old. <br />
          I'm a {nationality} Self-Taught Web Dev .
          <br />
          I've Learned from bunch of Resources Such as <br /> FreeCodeCamp |
          Udemy | Udacity | Scrimba | Youtube , and much more . . .
        </p>
        <h4 className="uppercase pb-2 text-blue-200 text-3xl">
          What I Know{" "}
          <span className="text-3xl" role="img" aria-label="lamp">
            💡
          </span>{" "}
          :
        </h4>
        <div className="flex flex-wrap">
          {languages.map((l) => (
            <p
              className="md:text-3xl uppercase p-1 text-black-200 max-w-1/4 text-2xl mr-4 border mb-2"
              key={l}
            >
              {l}{" "}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
