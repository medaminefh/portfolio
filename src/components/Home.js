import React from "react";
import styled from "styled-components";
import About from "./About";
import Projects from "./Projects";
import Nav from "./Nav";
import Footer from "./Footer";

const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  width: 35%;
`;

const Home = () => {
  return (
    <div>
      <Nav />
      <div>
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
