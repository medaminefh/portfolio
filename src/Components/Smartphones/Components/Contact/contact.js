import React from "react";
import { resumer } from "../../../../resume";
import "./contact.css";

const Contact = () => {
  const { email, linkedIn, github } = resumer;
  return (
    <section
      id="Contact"
      className="flex flex-col justify-evenly min-w-screen text-center min-h-screen"
    >
      <span id="smbg"></span>
      <h2 className="smctm text-5xl tracking-widest uppercase pb-6 border-b-2 border-white text-blue-200">
        Contact Me{" "}
        <span className="text-5xl" role="img" aria-label="Email">
          📨
        </span>{" "}
      </h2>
      <div className="flex flex-col pl-2 pr-2 items-center">
        <h2 className="pt-5 text-2xl">
          The best way to contact me is via Email:
          <p className="email md:text-2xl text-xl select-all">{email}</p>
        </h2>
        <h4 className="text-2xl tracking-wider">
          If you prefer, you can also find me on social networks{" "}
          <span className="text-2xl" role="img" aria-label="World">
            🌐
          </span>{" "}
          such as <br className="block md:hidden"></br>
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
    </section>
  );
};

export default Contact;
