import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import { A, B } from "./Components";
import { Nav } from "./Components/Desktops/components/Nav/Nav";
import { Devices } from "./Components/Smartphones/Components/Nav/devices";

function App() {
  const [show, setShow] = useState("");

  useEffect(() => {
    window.outerWidth <= 1100 ? setShow(true) : setShow(false);
    window.addEventListener("resize", (e) => {
      e.target.outerWidth <= 1100 ? setShow(true) : setShow(false);
    });
  }, [show]);
  return (
    <Fragment>
      {!show ? (
        <>
          <Nav />
          <A />
        </>
      ) : (
        <>
          <Devices />
          <B />
        </>
      )}
    </Fragment>
  );
}

export default App;
