import React, { useState, useEffect, Fragment, createContext } from "react";
import "./App.css";
import { A, B } from "./Components";
import { Nav } from "./Components/Desktops/components/Nav/Nav";
import { Devices } from "./Components/Smartphones/Components/Nav/devices";

export const stick = createContext();

const App = () => {
  const [show, setShow] = useState("");
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.outerWidth <= 1100 ? setShow(true) : setShow(false);
    window.addEventListener("resize", (e) => {
      e.target.outerWidth <= 1100 ? setShow(true) : setShow(false);
    });
  }, [show]);
  return (
    <Fragment>
      {!show ? (
        <stick.Provider value={{ sticky, setSticky }}>
          <Nav />
          <A />
        </stick.Provider>
      ) : (
        <>
          <Devices />
          <B />
        </>
      )}
    </Fragment>
  );
};

export default App;
