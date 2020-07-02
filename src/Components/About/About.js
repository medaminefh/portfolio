import React from "react";
import { Link } from "react-router-dom";
import { resumer } from "../../resume";
import med from "../../asset/me2.jpg";
const About = () => {
  const { name, languages, age, nationality } = resumer;
  return (
    <section className=" lg:pt-10 lg:bg-transparent min-h-screen min-w-screen pt-20 bg-blue-100">
      <div>
        <div className=" lg:items-center lg:flex lg:justify-around lg:h-screen">
          <div>
            <h2 className="lg:text-center lg:text-6xl md:text-5xl md:text-blue-600 text-4xl text-red-600 pl-8">
              Who Am I ?
            </h2>
            <p className=" lg:text-left lg:text-6xl md:text-4xl md:pb-8 text-3xl text-center">
              {name}
            </p>
          </div>
          <div className="flex flex-col items-center lg:w-1/4 xl:p-8">
            <img
              draggable="false"
              className="lg:w-full lg:h-full lg:m-0 lg:rounded md:mb-12 mb-8 mt-4 object-cover object-center w-56 h-64 rounded-full border-2 border-gray-100 "
              src={med}
              alt="About me"
            />
          </div>
        </div>
        <div
          style={{ lineHeight: "3.4rem" }}
          className="lg:m-auto lg:pr-20 lg:pb-20 lg:w-4/5 bg-gray-200 pt-8 pr-6 pl-6 mt-3 pb-8"
        >
          <p className=" text-2xl md:text-3xl">
            I'm {age} Years Old. <br />
            I'm a {nationality} Self-Taught Web Dev .
            <br />
            I've Learned from bunch of Resources Such as <br /> FreeCodeCamp |
            Udemy | Udacity | Scrimba | Youtube , and much more . . .
          </p>
          <h4 className="md:text-4xl text-3xl text-green-600">I Know :</h4>
          <div>
            {languages.map((l) => (
              <p className="md:text-3xl text-2xl pt-3" key={l}>
                {l}{" "}
              </p>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              className="max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-2/5 text-center md:text-4xl p-4 text-3xl hover:bg-blue-200 bg-blue-300 border-4 border-purple-600"
              to="/Projects"
            >
              My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
