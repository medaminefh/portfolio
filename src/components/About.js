import React from "react";
import styled from "styled-components";
import Bullets from "./Bullets";
import Img from "../assets/drinking-cafee.svg";

const Important = styled.span`
  color: ${(props) => props.theme.important};
  text-decoration: underline;
`;

const AboutMe = styled.div`
  height: 100vh;
  padding: 0.5em 0.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & div h4 {
    font-size: 22px;
    font-weight: 300;
    margin: 30px 0;
    line-height: 32px;
    max-width: 450px;
    color: #5a6065;
  }

  & div h4 a {
    color: inherit;
    text-decoration: underline;
  }

  & img {
    align-self: flex-start;
  }

  @media (max-width: 600px) {
    & {
      flex-direction: column-reverse;
      justify-content: space-between;
    }
    & > div {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    & img {
      align-self: center;
      max-width: 50%;
    }
  }
`;

function About({ mode, toggle }) {
  return (
    <AboutMe id="about">
      <div>
        <h1>
          I'm a <Important>Web</Important> Developer.
        </h1>
        <h4>
          Check out my latest{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://dev.to/medaminefh"
          >
            Blogs
          </a>
          , find me on{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://twitter.com/medaminefh"
          >
            Twitter
          </a>{" "}
          /{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/medaminefh"
          >
            Github
          </a>{" "}
          /{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/mohamed-amine-fhal"
          >
            Linkedin
          </a>{" "}
          ,Or just{" "}
          <a href="mailto:fhal.mohamed.amine@gmail.com">send me an email</a>
        </h4>

        <Bullets toggle={toggle} />
      </div>
      <img src={Img} alt="drinking cafee" />
    </AboutMe>
  );
}

export default About;
