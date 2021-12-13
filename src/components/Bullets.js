import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 300px;
`;

const Bullet = styled.span`
  background-color: ${(props) => props.color ?? "red"};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin: auto;
`;

const Span = styled.span`
  position: relative;
  display: flex;

  padding: 2px;
  border: 1px solid #444;
  cursor: pointer;
  transition: 0.4s ease;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  :hover,
  :hover${Bullet} {
    transform: scale(1.04);
  }
`;

function Bullets({ toggle }) {
  return (
    <Container>
      <Span onClick={() => toggle("light")}>
        <Bullet color={"#ccc"} />
      </Span>
      <Span onClick={() => toggle("dark")}>
        <Bullet color={"#122"} />
      </Span>
      <Span onClick={() => toggle("green")}>
        <Bullet color={"#7f5"} />
      </Span>
    </Container>
  );
}

export default Bullets;
