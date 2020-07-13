import React from "react";
import { resumer } from "../../../../resume";
import "./About.css";

const About = () => {
  const { name, languages, age, nationality } = resumer;
  return (
    <section id="About" className="pt-10 min-w-screen">
      <span id="bg"></span>
      <div className="who min-h-screen flex flex-col justify-center items-center min-w-screen">
        <h2 className="uppercase text-yellow-500">
          Who Am I ?{" "}
          <span role="img" aria-label="question">
            🤔
          </span>
        </h2>
        <h3>{name}</h3>
      </div>
      <div
        style={{ lineHeight: "3.4rem" }}
        className=" desc w-4/5 pb-20 m-auto"
      >
        <p className="text-black-200">
          I'm {age} Years Old. <br />
          I'm a {nationality} Self-Taught Web Dev .
          <br />
          I've Learned from bunch of Resources Such as <br /> FreeCodeCamp |
          Udemy | Udacity | Scrimba | Youtube , and much more . . .
        </p>
        <h4 className="uppercase pt-4 pb-4 text-blue-200 text-5xl">
          I Know{" "}
          <span className="text-4xl" role="img" aria-label="lamp">
            💡
          </span>{" "}
          :
        </h4>
        <div className="languages flex flex-wrap">
          {languages.map((l) => (
            <p
              className="uppercase max-w-1/3 p-2 text-3xl text-blue-300"
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
