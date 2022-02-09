import React from "react";
import { useState } from "react";
import styled from "styled-components";

const ModalBg = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: ${(props) => (props.show ? "0" : "50%")};
  left: ${(props) => (props.show ? "0" : "50%")};
  width: ${(props) => (props.show ? "100vw" : "0")};
  height: ${(props) => (props.show ? "100vh" : "0")};
  overflow: hidden;
  transition: 0.5s ease;
`;

const ModalBody = styled.div`
  max-width: 850px;
  height: auto;
`;

function Modal({ children }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div onClick={() => setShow(true)}>{children}</div>

      <ModalBg
        show={show}
        onClick={(e) => {
          e.stopPropagation();
          setShow(false);
        }}
      >
        <ModalBody onClick={(e) => e.stopPropagation()}>{children}</ModalBody>
      </ModalBg>
    </>
  );
}

export default Modal;
