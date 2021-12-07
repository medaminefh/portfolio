import React from "react";
import styled from "styled-components";
import { Icons, Title } from "./utils";

const Card = styled.div`
  color: #99a799;
  text-align: center;
  font-size: 150px;
  width: 100%;
  max-width: 250px;
`;

const Cards = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

function Skills() {
  return (
    <section>
      <Title>Skills</Title>
      <Cards>
        <Card>
          <Icons title="HTML" className="fab fa-html5"></Icons>
        </Card>

        <Card>
          <Icons title="CSS" className="fab fa-css3-alt"></Icons>
        </Card>

        <Card>
          <Icons title="Js" className="fab fa-js"></Icons>
        </Card>

        <Card>
          <Icons title="React" className="fab fa-react"></Icons>
        </Card>

        <Card>
          <Icons title="Nodejs" className="fab fa-node"></Icons>
        </Card>

        <Card>
          <Icons title="MongoDb | SQL" className="fas fa-database"></Icons>
        </Card>

        <Card>
          <Icons title="Python" className="fab fa-python"></Icons>
        </Card>

        <Card>
          <Icons title="Github" className="fa fa-github"></Icons>
        </Card>

        <Card>
          <Icons title="Git" className="fab fa-git-alt"></Icons>
        </Card>
      </Cards>
    </section>
  );
}

export default Skills;
