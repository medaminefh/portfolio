import React from "react";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const links = ["Home", "About", "Projects", "Contact"];
  return (
    <nav className={classes.nav}>
      <Link to="/">
        <h2 className={classes.logo}>Portfolio</h2>
      </Link>
      <ul>
        {links.map((a, i) => (
          <li key={i}>
            <Link to={`${a}`}>{a}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
