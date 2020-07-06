import React from "react";
import { resumer } from "../../../../resume";
import med from "../../../../asset/me2.jpg";
const About = () => {
  const { name, languages, age, nationality } = resumer;
  return (
    <section id="About" className="pt-10 bg-blue-800 min-w-screen">
      <div className="items-center flex justify-around h-screen border-b-4 border-blue-700">
        <div>
          <h2 className="uppercase text-6xl text-orange-500 text-left">
            Who Am I ?
          </h2>
          <p className="text-6xl">{name}</p>
        </div>
        <div className="flex flex-col items-center w-1/4">
          <img
            draggable="false"
            className=" self-end w-full h-full m-0 rounded mb-8 mt-4 object-cover object-center w-64 h-auto border-4 border-blue-700 "
            src={med}
            alt="About me"
          />
        </div>
      </div>
      <div
        style={{ lineHeight: "3.4rem" }}
        className="w-4/5 pr-20 pb-20 pt-8 pl-6 mt-3"
      >
        <p className="text-black-200 text-3xl">
          I'm {age} Years Old. <br />
          I'm a {nationality} Self-Taught Web Dev .
          <br />
          I've Learned from bunch of Resources Such as <br /> FreeCodeCamp |
          Udemy | Udacity | Scrimba | Youtube , and much more . . .
        </p>
        <h4 className="uppercase text-blue-200 text-4xl">
          I Know{" "}
          <span className="text-3xl" role="img" aria-label="lamp">
            💡
          </span>{" "}
          :
        </h4>
        <div className="flex flex-wrap">
          {languages.map((l) => (
            <p className="uppercase pr-10 text-3xl text-black-200 pt-3" key={l}>
              {l}{" "}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
