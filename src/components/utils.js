import styled from "styled-components";

export const Btn = styled.a`
  padding: 2px 5px;
  display: block;
  text-align: center;
  color: #333;
  background-color: transparent;
  border: 1.6px solid #222;
  transition: 0.3s ease;
  min-width: 200px;
  width: 200px;
  max-width: 400px;
  &:hover {
    background-color: #efe;
  }
`;

const langs = {
  html: "#e34f26",
  css: "#396EB0",
  bootstrap: "#7952b3",
  js: "#FBD148",
  react: "#32C1CD",
  nodejs: "#44883e",
  py: "#4584b6",
  github: "#333",
  twitter: "#1da1f2",
  linkedin: "#0077b5",
  git: "#e24329",
  database: "#66806A",
};

export const Title = styled.h2`
  text-align: center;
`;

export const Icons = styled.i`
  transition: 0.5s;
  margin: 0 2px;
  font-size: 25px;

  color: ${(props) => {
    if (props.className.includes("py")) return langs["py"];
    else if (props.className.includes("js")) return langs["js"];
    else if (props.className.includes("react")) return langs["react"];
    else if (props.className.includes("node")) return langs["nodejs"];
    else if (props.className.includes("database")) return langs["database"];
    else if (props.className.includes("html")) return langs["html"];
    else if (props.className.includes("css")) return langs["css"];
    else if (props.className.includes("github")) return langs["github"];
    else if (props.className.includes("git")) return langs["git"];
    else if (props.className.includes("twitter")) return langs["twitter"];
    else if (props.className.includes("linkedin")) return langs["linkedin"];
    else if (props.className.includes("bootstrap")) return langs["bootstrap"];
    else {
      return "#314";
    }
  }}};

  @media (min-width: 650px) {
    color:inherit;
    &:hover {
      color: ${(props) => {
        if (props.className.includes("py")) return langs["py"];
        else if (props.className.includes("js")) return langs["js"];
        else if (props.className.includes("react")) return langs["react"];
        else if (props.className.includes("node")) return langs["nodejs"];
        else if (props.className.includes("database")) return langs["database"];
        else if (props.className.includes("html")) return langs["html"];
        else if (props.className.includes("css")) return langs["css"];
        else if (props.className.includes("github")) return langs["github"];
        else if (props.className.includes("git")) return langs["git"];
        else if (props.className.includes("twitter")) return langs["twitter"];
        else if (props.className.includes("linkedin")) return langs["linkedin"];
        else if (props.className.includes("bootstrap"))
          return langs["bootstrap"];
        else {
          return "#314";
        }
      }};
    }
  }
  
`;

export const Card = styled.div`
  color: #99a799;
  text-align: center;
  font-size: 150px;
  & ${Icons} {
    margin: 0;
    font-size: 150px;
  }
  width: 100%;
  max-width: 250px;
`;

export const Cards = styled.div`
  position: realtive;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
