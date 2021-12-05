import React from "react";
import styled from "styled-components";

const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  width: 35%;
`;

const Home = () => {
  return (
    <div className="home">
      <h3>Med Amine Fh</h3>

      <Btns>
        <a
          target="_blank"
          rel="noreferer noopener"
          href="https://medaminefh.github.io/blogs"
          className="btn btn-outline-primary"
        >
          Blogs
        </a>
        <a
          target="_blank"
          rel="noreferer noopener"
          href="https://medaminefh.github.io/instag"
          className="btn btn-outline-secondary"
        >
          InstaClone
        </a>
      </Btns>
    </div>
  );
};

export default Home;
