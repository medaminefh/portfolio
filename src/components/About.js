import React from "react";
import styled from "styled-components";
import Bullets from "./Bullets";
import Img from "../assets/me.jpg";
import mapImg from "../assets/map.svg";

const Important = styled.span`
  color: ${(props) => props.theme.important};
  text-decoration: underline;
`;

const ImgDiv = (props) => {
  const Container = styled.div`
    & {
      position: relative;
      align-self: flex-start;
      margin-top: 50px;
    }

    & img {
      border-radius: 7px;
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme.important};
      top: -10px;
      right: -10px;
      border-radius: 10px;
      z-index: -1;
    }

    @media (max-width: 600px) {
      & {
        align-self: center;
        max-width: 60vw;
        max-height: content;
      }

      & img {
        width: 100%;
      }
    }
  `;
  return (
    <Container>
      <img src={props.src} alt={props.alt} />
    </Container>
  );
};

const AboutMe = styled.div`
  height: 100vh;
  padding: 0.5em 0.4rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  & > div {
    background-image: url(${mapImg});
    background-size: cover;
    background-position: center;
  }

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

  @media (max-width: 600px) {
    & {
      flex-direction: column-reverse;
      justify-content: space-between;
    }
    & > div {
      background-image: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`;

function About({ toggle }) {
  return (
    <AboutMe id="about">
      <div>
        <h1>
          <Important>Hey ,</Important>
          <span role="img" aria-label="hand">
            👋{" "}
          </span>
          I'm Med Amine.
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
        <a
          role="button"
          className="btn btn-outline-secondary mt-4"
          href="https://drive.google.com/uc?id=1e8PjkQxoZHUEdPEdBYcauv_wzbKdaf0s"
          rel="noreferrer noopener"
          target="_blank"
        >
          Download CV{" "}
          <span role="img" aria-label="hand">
            →
          </span>
        </a>
      </div>
      <ImgDiv src={Img} alt="drinking cafee" />
    </AboutMe>
  );
}

export default About;
