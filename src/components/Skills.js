import React from "react";
import { Icons, Title, Card, Cards } from "./utils";

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
          <Icons title="Vuejs" className="fab fa-vuejs"></Icons>
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
