import React from "react";
import styled from "styled-components";
import Me from "../assets/me.png";

const Container = styled.span`
  position: relative;
  width: 40px;
  height: auto;
  margin-right: 5px;
  border-radius: 50%;
  overflow: hidden;
`;

const Img = styled.img`
  filter: contrast(150%);
  width: 100%;
  height: auto;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  width: 100%;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 50%;
  & li a {
    position: relative;
    color: #5a6065;
  }
  & li a::before {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    right: 0;
    height: 2px;
    width: 100%;
    background-color: transparent;
    transition: 0.3s ease;
  }

  & a:hover::before {
    background-color: #5a6065;
    bottom: 0;
  }
`;

const Logo = styled.p`
  display: flex;
  justify-content: space-between;
  color: #5a6065;
  align-items: center;
`;

function Nav() {
  return (
    <Navbar>
      <Logo className="logo">
        <Container>
          <Img src={Me} alt="Med amine fh" />
        </Container>
        Med Amine Fh
      </Logo>
      <Ul>
        <li>
          <a href="#about"> About</a>
        </li>
        <li>
          <a href="#projects"> Projects</a>
        </li>
        <li>
          <a href="#contact"> Contact</a>
        </li>
      </Ul>
    </Navbar>
  );
}

export default Nav;
