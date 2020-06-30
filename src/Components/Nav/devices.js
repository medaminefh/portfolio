import React, { useState } from "react";
import classes from "./devices.module.css";
import { Link } from "react-router-dom";

const Devices = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((prev) => !prev);
  };
  const links = ["Home", "About", "Projects", "Contact"];
  return (
    <>
      <button
        style={{ zIndex: "3", position: "fixed", top: "10px", right: "10px" }}
        className="text-2xl"
        onClick={handleClick}
      >
        {!show ? (
          <svg
            fill="#333"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
          >
            <path d="M0 7.5v5h50v-5zm0 15v5h50v-5zm0 15v5h50v-5z" />
          </svg>
        ) : (
          <svg
            fill="#333"
            height="50"
            viewBox="0 0 329.269 329"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M194.8 164.77L323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0" />
          </svg>
        )}
      </button>
      <div className={show ? classes.dev : null}>
        <nav
          style={show ? { display: "flex" } : { display: "none" }}
          className={classes.nav}
        >
          <ul>
            {links.map((a, i) => (
              <li key={i}>
                <Link onClick={() => setShow((prev) => !prev)} to={`${a}`}>
                  {a}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Devices;
