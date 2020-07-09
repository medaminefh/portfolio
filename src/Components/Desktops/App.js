import React from "react";
import { Header, About, Project, Contact } from "./components";

const App = ({ sticky, setSticky }) => {
  return (
    <>
      <Header setSticky={setSticky} />
      <About />
      <Project />
      <Contact />
    </>
  );
};

export default App;
