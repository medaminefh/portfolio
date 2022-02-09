import React from "react";
import styled from "styled-components";
import { Title, Card, Cards } from "./utils";
import Modal from "./Modal";

const Img = styled.img`
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  @media (min-width: 650px) {
    filter: grayscale(100%) brightness(90%);
    &:hover {
      transform: scale(1.01);
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
          <Modal>
            <Img
              loading={"Lazy"}
              alt={
                "CS50's web programming with python and javascript certificate"
              }
              src={
                "https://drive.google.com/uc?id=1VFbABuXMRewLV8FC0EhQ3lt9rrzTfgf6"
              }
            />
          </Modal>
        </Card>
        <Card>
          <Modal>
            <Img
              loading={"Lazy"}
              alt={"CS50's Introduction to computer science certificate"}
              src={
                "https://drive.google.com/uc?id=1nqW4rdGdXmF39LJ-jsIp4EKuaKjl6eOI"
              }
            />
          </Modal>
        </Card>
        <Card>
          <Modal>
            <Img
              loading={"Lazy"}
              alt={"Udacity Full Stack track certificate"}
              src={
                "https://drive.google.com/uc?id=1EmjP-jAGqu7Vp5-0WQXf6VNJas_Y8EgB"
              }
            />
          </Modal>
        </Card>
        <Card>
          <Modal>
            <Img
              loading={"Lazy"}
              alt={"FCC js algo and ds certificate"}
              src={
                "https://drive.google.com/uc?id=1531yU30vFeD-mV8wLArjxziua6u9GC7-"
              }
            />
          </Modal>
        </Card>
        <Card>
          <Modal>
            <Img
              loading={"Lazy"}
              alt={"FCC responsive web design certificate"}
              src={
                "https://drive.google.com/uc?id=1nQ4NN5Vx3r1AlO97Ge_AuAobMxmKjp8S"
              }
            />
          </Modal>
        </Card>

        <Card>
          <Modal>
            <Img
              loading={"Lazy"}
              alt={"FCC Back end and Api certificate"}
              src={
                "https://drive.google.com/uc?id=1B6riqxVBBQJX5P66aAEevgj7qZ9Vmy8C"
              }
            />
          </Modal>
        </Card>
        <Card>
          <Modal>
            <Img
              loading={"Lazy"}
              alt={"get started with nodejs certificate from study.tn"}
              src={
                "https://drive.google.com/uc?id=1hsifotM8RYpxuzB6DShu1h8nooCGDRll"
              }
            />
          </Modal>
        </Card>
      </Cards>
    </section>
  );
}

export default Certificates;
