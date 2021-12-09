import React from "react";
import About from "./About";
import Projects from "./Projects";
import Nav from "./Nav";
import Footer from "./Footer";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Articles from "./Articles";

const Home = () => {
  return (
    <div>
      <Nav />
      <div>
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Articles />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
