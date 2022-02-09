import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, greenTheme } from "./themes";
import { GlobalStyle } from "./GlobalStyles";
import "./App.css";
import LazyLoad from "react-lazyload";

import Home from "./components/Home";

function App() {
  const [mode, setMode] = useState("light");
  const [theme, setTheme] = useState(lightTheme);

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
    if (mode === "light") {
      setMode("light");
      setTheme(lightTheme);
    } else if (mode === "dark") {
      setMode("dark");
      setTheme(darkTheme);
    } else if (mode === "green") {
      setMode("green");
      setTheme(greenTheme);
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
