import React from "react";
import styled from "styled-components";
import { Btn, Icons } from "./utils";

const Important = styled.span`
  color: #f3950d;
  text-decoration: underline;
`;

const AboutMe = styled.div`
  height: 100vh;
  display: flex;
  text-align: center;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  max-height: 100vh;
  & > h5,
  p,
  ${Btn} {
    margin: 2rem auto;
  }
`;

function About() {
  return (
    <AboutMe id="about">
      <h1>
        I'm A <Important>Web</Important> Developer
      </h1>
      <h5>
        Med Amine Fh, A Self-Taught web developer.{" "}
        <p>
          I Enjoy creating Things with [
          <Icons
            title="Python"
            color="#0F2C67"
            className="fab fa-python"
          ></Icons>{" "}
          <Icons title="JS" color="#FFCC1D" className="fab fa-js"></Icons>{" "}
          <Icons title="HTML" color="#CD1818" className="fab fa-html5"></Icons>{" "}
          <Icons
            title="CSS"
            color="#396EB0"
            className="fab fa-css3-alt"
          ></Icons>
          ]
        </p>
        <p>
          I Write on{" "}
          <Important
            rel="noreferrer noopener"
            target="_blank"
            as="a"
            href="https://dev.to/medaminefh"
          >
            Dev.to
          </Important>{" "}
        </p>
      </h5>

      <Btn href="#projects">Projects</Btn>
    </AboutMe>
  );
}

export default About;
