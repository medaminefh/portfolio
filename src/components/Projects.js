import React from "react";
import styled from "styled-components";
import { Btn, Icons, Title } from "./utils";

const Project = styled.div`
  border: 0;
  max-width: 400px;
  max-height: 350px;
  width: 100%;
  min-width: 300px;

  margin: 1rem 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  -webkit-font-smoothing: antialiased;
  transition: 0.3s ease;

  & .card {
    height: 100%;
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.text};
  }
  &:hover {
    transform: translate3d(0, 0, 0) scale(1.07);
  }
  & a {
    width: 100%;
  }
`;

const ProjectsSection = styled.section`
  position: relative;
  min-height: 50vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 2rem 1rem;
`;

function Projects() {
  return (
    <section id="projects">
      <Title>Projects</Title>
      <ProjectsSection>
        <Project>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Klondike Game</h5>
              <p className="card-text">
                A Klondike Game with Vue3 & TailwindCss
              </p>
              <Icons className="fab fa-vuejs" />
              <Icons className="fab fa-js" />
            </div>
            <Btn
              rel="noreferrer noopener"
              target="_blank"
              href="https://klondikevue.netlify.app/"
            >
              Demo
            </Btn>
          </div>
        </Project>
        <Project>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Network App</h5>
              <p className="card-text">This is A Tweet like App.</p>
              <Icons className="fab fa-python"></Icons>
              <Icons className="fab fa-js"></Icons>
              <Icons className="fas fa-database"></Icons>
            </div>
            <Btn
              rel="noreferrer noopener"
              target="_blank"
              href="https://network-cs50w.herokuapp.com"
            >
              Demo
            </Btn>
          </div>
        </Project>
        <Project>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Todo App</h5>
              <p className="card-text">A Todo App with TS.</p>
              <Icons className="fa fa-code"></Icons>
              <Icons className="fab fa-js"></Icons>
              <Icons className="fab fa-react"></Icons>
            </div>
            <Btn
              rel="noreferrer noopener"
              target="_blank"
              href="https://medaminefh.github.io/TodoApp/"
            >
              Demo
            </Btn>
          </div>
        </Project>
        <Project>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">My Blog's App</h5>
              <p className="card-text">My Personal Blog App</p>

              <Icons className="fab fa-react"></Icons>
              <Icons className="fab fa-node"></Icons>
              <Icons className="fas fa-database"></Icons>
            </div>
            <Btn
              rel="noreferrer noopener"
              target="_blank"
              href="https://medaminefh.github.io/blogs/"
            >
              Demo
            </Btn>
          </div>
        </Project>
        <Project>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Gallery App</h5>
              <p className="card-text">Load Random Imgs from unsplash.</p>
              <Icons className="fab fa-react"></Icons>
              <Icons className="fab fa-bootstrap"></Icons>
            </div>
            <Btn
              rel="noreferrer noopener"
              target="_blank"
              href="https://medaminefh.github.io/photosearch/"
            >
              Demo
            </Btn>
          </div>
        </Project>

        <Project>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">instaClone App</h5>
              <p className="card-text">Instagram Clone App</p>
              <Icons className="fab fa-react"></Icons>
              <Icons className="fab fa-bootstrap"></Icons>
              <Icons className="fab fa-node"></Icons>
              <Icons className="fas fa-database"></Icons>
            </div>
            <Btn
              rel="noreferrer noopener"
              target="_blank"
              href="https://medaminefh.github.io/instag/"
            >
              Demo
            </Btn>
          </div>
        </Project>
      </ProjectsSection>
      <Btn
        style={{ margin: "0 auto" }}
        href="https://github.com/medaminefh"
        rel="noreferrer noopener"
        target="_blank"
      >
        More in github
      </Btn>
    </section>
  );
}

export default Projects;
