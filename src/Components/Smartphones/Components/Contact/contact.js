import React from "react";
import { resumer } from "../../../../resume";
const Contact = () => {
  const { email, linkedIn, github } = resumer;
  return (
    <div
      id="Contact"
      className="bg-gray-700 flex flex-col justify-evenly min-w-screen text-center min-h-screen"
    >
      <h2 className="text-5xl tracking-widest uppercase pb-6 border-b-2 border-white text-white">
        Contact Me{" "}
        <span className="text-4xl" role="img" aria-label="Email">
          📨
        </span>{" "}
      </h2>
      <div className="flex flex-col pl-2 pr-2 items-center">
        <h2 className="pt-5 text-2xl">
          The best way to contact me is via Email:
          <p className="md:text-2xl text-xl select-all">{email}</p>
        </h2>
        <h4 className="text-2xl tracking-wider">
          If you prefer, you can also find me on social networks{" "}
          <span className="text-2xl" role="img" aria-label="World">
            🌐
          </span>{" "}
          such as{" "}
          <a
            className="text-2xl text-blue-500"
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          ,{" "}
          <a
            className="text-2xl text-blue-500"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </h4>
      </div>
    </div>
  );
};

export default Contact;
