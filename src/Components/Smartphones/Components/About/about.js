import React from "react";
import { resumer } from "../../../../resume";
import "./about.css";

const About = () => {
  const { name, languages, age, nationality } = resumer;
  return (
    <section id="About">
      <div className="smme min-h-screen min-w-screen flex flex-col items-center justify-evenly ">
        <span id="smbg"></span>
        <h2 className="md:p-0 text-center text-teal-400 uppercase">
          Who Am I ?{" "}
          <span className="text-4xl" role="img" aria-label="question">
            🤔
          </span>
        </h2>
        <h3 className="text-center">{name}</h3>
      </div>
      <div
        style={{ lineHeight: "3.4rem" }}
        className="smab pt-8 pr-4 pl-4 pb-8"
      >
        <span className="smabs"></span>
        <p className=" md:text-3xl text-black-200 text-2xl">
          I'm {age} Years Old. <br />
          I'm a {nationality} Self-Taught Web Dev .
          <br />
          I've Learned from bunch of Resources Such as <br /> FreeCodeCamp |
          Udemy | Udacity | Scrimba | Youtube , and much more . . .
        </p>
        <h4 className="uppercase pb-2 text-teal-400 text-3xl">
          What I Know{" "}
          <span className="text-3xl" role="img" aria-label="lamp">
            💡
          </span>{" "}
          :
        </h4>
        <div className="smlanguages flex flex-wrap">
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
