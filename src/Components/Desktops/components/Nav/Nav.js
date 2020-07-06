import React, { useContext, useRef, useEffect } from "react";
import classes from "./Nav.module.css";
import { stick } from "../../../../App";

export const Nav = () => {
  const nav = useRef("");
  const { sticky } = useContext(stick);

  useEffect(() => {
    if (sticky) {
      nav.current.style.position = "sticky";
    } else {
      nav.current.style.position = "relative";
    }
  }, [sticky]);

  const links = ["Home", "About", "Projects", "Contact"];
  return (
    <nav ref={nav} className={classes.nav}>
      <a href="#Home">
        <h2 className={classes.logo}>Portfolio</h2>
      </a>
      <ul>
        {links.map((a, i) => (
          <li key={i}>
            <a href={`#${a}`}>{a}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
