import React from "react";
import styled from "styled-components";

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
  color: #5a6065;
  position: relative;

  &:before {
    content: "<";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    color: transparent;
    transition: 0.4s ease;
  }

  &:after {
    content: "/>";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    color: transparent;
    transition: 0.4s ease;
  }

  &:hover:before {
    left: -15px;
    color: #5a6065;
  }

  &:hover:after {
    right: -20px;
    color: #5a6065;
  }
`;

function Nav() {
  return (
    <Navbar>
      <Logo className="logo">Med Amine Fh</Logo>
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
