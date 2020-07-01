import React from "react";
import me from "../../asset/me2.jpg";
import { resumer } from "../../resume";
const Contact = () => {
  const { email } = resumer;
  return (
    <div className=" lg:flex-row-reverse md:items-center md:flex-row bg-gray-700 flex flex-col justify-evenly w-screen md:h-screen min-h-screen">
      <div className="mt-10 md:m-0 ">
        <img
          alt="me"
          draggable="false"
          className="border-r-8 lg:h-full lg:m-0 lg:rounded md:mb-12 mb-8 mt-4 m-auto object-cover object-center w-56 h-64 rounded-full border-2 border-gray-100 "
          src={me}
        />
      </div>
      <div className="mb-4 md:m-0 select-none pr-4 pl-4 md:w-1/2 flex flex-col md:items-center text-center">
        <h2 className="lg:text-4xl md:border-none text-3xl pb-6 border-b-2 border-white text-white">
          Contact Me{" "}
        </h2>
        <h2 className="pt-5 text-xl lg:text-2xl">
          The best way to contact me is via Email:
          <p className="text-xl lg:text-2xl select-all">{email}</p>
        </h2>
        <h4 className="lg:text-2xl text-xl tracking-wider">
          If you prefer, you can also find me on social networks such as{" "}
          <a
            className="lg:text-2xl hover:text-blue-300 text-xl text-blue-500"
            href="https://www.facebook.com/Mohamed.Amine.NPNG/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          ,{" "}
          <a
            className="lg:text-2xl hover:text-blue-300 text-xl text-blue-500"
            href="https://twitter.com/AmineFhal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          , or{" "}
          <a
            className="lg:text-2xl hover:text-blue-300 text-xl text-blue-500"
            href="https://www.linkedin.com/in/mohamed-amine-fhal-27a435174/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </h4>
      </div>
    </div>
  );
};

export default Contact;
