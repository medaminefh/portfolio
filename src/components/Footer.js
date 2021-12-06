import React from "react";
import styled from "styled-components";
import { Icons } from "./utils";

function Footer() {
  return (
    <footer id="contact" className="text-secondary text-center">
      <ul className="social__media">
        <li>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/medaminefh"
            className="text-secondary"
          >
            <Icons color="#2C272E" className="fa fa-github"></Icons>
          </a>
        </li>
        <li>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://twitter.com/medaminefh"
            className="text-secondary"
          >
            <Icons color="#94DAFF" className="fa fa-twitter"></Icons>
          </a>
        </li>
        <li>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/mohamed-amine-fhal"
            className="text-secondary"
          >
            <Icons color="#000D6B" className="fa fa-linkedin"></Icons>
          </a>
        </li>
      </ul>
      <span>&copy;medaminefh</span>
    </footer>
  );
}

export default Footer;
