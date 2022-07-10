import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { yellowTheme, greenTheme, BlueTheme } from "./themes";
import { GlobalStyle } from "./GlobalStyles";
import "./App.css";
import LazyLoad from "react-lazyload";

import Home from "./components/Home";

function App() {
  const [mode, setMode] = useState("blue");
  const [theme, setTheme] = useState(BlueTheme);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setMode(localStorage.getItem("theme"));
      toggle(localStorage.getItem("theme"));
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const toggle = (mode) => {
    localStorage.setItem("theme", mode);
    if (mode === "yellow") {
      setMode("yellow");
      setTheme(yellowTheme);
    } else if (mode === "green") {
      setMode("green");
      setTheme(greenTheme);
    } else if (mode === "blue") {
      setMode("blue");
      setTheme(BlueTheme);
    }
  };

  return (
    <LazyLoad height={200} once>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home mode={mode} toggle={toggle} />
      </ThemeProvider>
    </LazyLoad>
  );
}

export default App;
