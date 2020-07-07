import React from "react";
import { resumer } from "../../../../resume";

const Contact = () => {
  const { email, linkedIn, github } = resumer;
  return (
    <section
      id="Contact"
      className="text-center bg-gray-700 flex flex-col justify-evenly min-w-screen min-h-screen shadow-2xl shadow-inner"
    >
      <h2 className="uppercase xl:text-6xl text-5xl pb-6 text-white">
        Contact Me{" "}
        <span className="text-5xl xl:text-6xl" role="img" aria-label="Email">
          📨
        </span>{" "}
      </h2>
      <div className="xl:w-2/3 border-4 p-8 border-blue-300 self-center w-4/5 flex flex-col items-center">
        <h2 className="pt-5 text-3xl">
          The best way to contact me is via Email:
          <p className="text-3xl select-all">{email}</p>
        </h2>
        <h4 className="text-3xl tracking-wider">
          If you prefer, you can also find me on social networks{" "}
          <span className="text-3xl" role="img" aria-label="World">
            🌐
          </span>{" "}
          such as <br className="xl:hidden" />
          <a
            className="text-3xl hover:text-blue-300 text-blue-500"
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          ,{" "}
          <a
            className="text-3xl hover:text-blue-300 text-blue-500"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </h4>
      </div>
    </section>
  );
};

export default Contact;
