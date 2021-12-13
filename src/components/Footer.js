import React from "react";
import styled from "styled-components";
import { Icons } from "./utils";

const FooterStyle = styled.footer`
  position: relative;
  padding: 2em;
  display: flex;
  color: #fff;
  flex-direction: column;
  z-index: 2;

  & ul.social__media {
    margin: 0;
    padding: 0;
    display: inline-block;
    margin-top: 15px;
  }

  & ul.social__media li {
    list-style-type: none;
    display: inline-block;
    margin-right: 15px;
  }
  & ul.social__media li a {
    background-color: transparent;
    font-size: 30px;
    text-align: center;
  }

  @media (max-width: 650px) {
    ul li a ${Icons} {
      color: #ccc;
    }
  }
`;

function Footer() {
  return (
    <FooterStyle id="contact" className="text-secondary text-center">
      <ul className="social__media">
        <li>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/medaminefh"
            className="text-secondary"
          >
            <Icons className="fa fa-github"></Icons>
          </a>
        </li>
        <li>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://twitter.com/medaminefh"
            className="text-secondary"
          >
            <Icons className="fa fa-twitter"></Icons>
          </a>
        </li>
        <li>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/mohamed-amine-fhal"
            className="text-secondary"
          >
            <Icons className="fa fa-linkedin"></Icons>
          </a>
        </li>
      </ul>
      <span>&copy;medaminefh</span>
    </FooterStyle>
  );
}

export default Footer;
