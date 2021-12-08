import React from "react";
import styled from "styled-components";
import { Title, Card, Cards } from "./utils";

const Img = styled.img`
  max-width: 600px;

  width: 100%;
  height: auto;
  transition: 0.5s ease;
  @media (min-width: 650px) {
    filter: grayscale(100%) brightness(90%);
    &:hover {
      transform: scale(2);
      filter: grayscale(0) brightness(100%);
    }
  }
`;

function Certificates() {
  return (
    <section>
      <Title>Certificates</Title>

      <Cards>
        <Card>
          <a
            href="https://drive.google.com/uc?id=1nqW4rdGdXmF39LJ-jsIp4EKuaKjl6eOI"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Img
              src={
                "https://drive.google.com/uc?id=1nqW4rdGdXmF39LJ-jsIp4EKuaKjl6eOI"
              }
            />
          </a>
        </Card>
        <Card>
          <a
            href="https://drive.google.com/uc?id=1EmjP-jAGqu7Vp5-0WQXf6VNJas_Y8EgB"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Img
              src={
                "https://drive.google.com/uc?id=1EmjP-jAGqu7Vp5-0WQXf6VNJas_Y8EgB"
              }
            />
          </a>
        </Card>
        <Card>
          <a
            href="https://drive.google.com/uc?id=1531yU30vFeD-mV8wLArjxziua6u9GC7-"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Img
              src={
                "https://drive.google.com/uc?id=1531yU30vFeD-mV8wLArjxziua6u9GC7-"
              }
            />
          </a>
        </Card>
        <Card>
          <a
            href="https://drive.google.com/uc?id=1nQ4NN5Vx3r1AlO97Ge_AuAobMxmKjp8S"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Img
              src={
                "https://drive.google.com/uc?id=1nQ4NN5Vx3r1AlO97Ge_AuAobMxmKjp8S"
              }
            />
          </a>
        </Card>

        <Card>
          <a
            href="https://drive.google.com/uc?id=1B6riqxVBBQJX5P66aAEevgj7qZ9Vmy8C"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Img
              src={
                "https://drive.google.com/uc?id=1B6riqxVBBQJX5P66aAEevgj7qZ9Vmy8C"
              }
            />
          </a>
        </Card>
        <Card>
          <a
            href="https://drive.google.com/uc?id=1hsifotM8RYpxuzB6DShu1h8nooCGDRll"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Img
              src={
                "https://drive.google.com/uc?id=1hsifotM8RYpxuzB6DShu1h8nooCGDRll"
              }
            />
          </a>
        </Card>
      </Cards>
    </section>
  );
}

export default Certificates;
