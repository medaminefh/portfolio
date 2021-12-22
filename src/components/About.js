import React from "react";
import styled from "styled-components";
import Bullets from "./Bullets";
import { Btn, Icons } from "./utils";

const Important = styled.span`
  color: ${(props) => props.theme.important};
  text-decoration: underline;
`;

const AboutMe = styled.div`
  height: 100vh;
  padding: 0 0.4rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  & > h4,
  p,
  ${Btn} {
    margin: 2rem auto;
  }
`;

function About({ mode, toggle }) {
  return (
    <AboutMe id="about">
      <h1>
        I'm A <Important>Web</Important> Developer
      </h1>
      <h4>
        Med Amine Fh, A Self-Taught web developer.{" "}
        <p>
          I Enjoy creating Things with [
          <Icons title="Python" className="fab fa-python"></Icons>{" "}
          <Icons title="JS" className="fab fa-js"></Icons>{" "}
          <Icons title="HTML" className="fab fa-html5"></Icons>{" "}
          <Icons title="CSS" className="fab fa-css3-alt"></Icons>]
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
      </h4>
      <Bullets toggle={toggle} />

      <Btn href="#projects">Projects</Btn>
    </AboutMe>
  );
}

export default About;
