import React from "react";
import About from "./About";
import Projects from "./Projects";
import Nav from "./Nav";
import Footer from "./Footer";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Articles from "./Articles";
import ScrollToTop from "./ScrollToTop";

const Home = ({ mode, toggle }) => {
  return (
    <div>
      <Nav />
      <div>
        <About mode={mode} toggle={toggle} />
        <Projects />
        <Skills />
        <Certificates />
        <Articles />
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Home;
