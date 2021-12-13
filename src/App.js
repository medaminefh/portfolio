import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, greenTheme } from "./themes";
import { GlobalStyle } from "./GlobalStyles";
import "./App.css";

import Home from "./components/Home";

function App() {
  const [mode, setMode] = useState("light");
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setMode(localStorage.getItem("theme"));
      toggle(localStorage.getItem("theme"));
    }
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Home mode={mode} toggle={toggle} />
    </ThemeProvider>
  );
}

export default App;
