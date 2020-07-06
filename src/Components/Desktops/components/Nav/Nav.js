import React from "react";
import classes from "./Nav.module.css";

export const Nav = () => {
  const links = ["Home", "About", "Projects", "Contact"];
  return (
    <nav className={classes.nav}>
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
