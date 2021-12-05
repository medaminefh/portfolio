import React from "react";
import styled from "styled-components";
import Me from "../assets/me.jpg";

const Container = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
`;

const Navbar = styled.nav`
  z-index: 2;
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
`;

const Logo = styled.p`
  display: flex;
  width: 200px;
  justify-content: space-between;
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
          <a href="#"> About</a>
        </li>
        <li>
          <a href="#"> Projects</a>
        </li>
        <li>
          <a href="#"> Contact</a>
        </li>
      </Ul>
    </Navbar>
  );
}

export default Nav;
