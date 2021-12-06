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

export const Icons = styled.i`
  &:hover {
    color: ${(props) => (props.color ? props.color : "blue")};
  }
`;
