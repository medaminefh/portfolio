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
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
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
      {show && (
        <ModalBg
          onClick={(e) => {
            e.stopPropagation();
            setShow(false);
          }}
        >
          <ModalBody onClick={(e) => e.stopPropagation()}>{children}</ModalBody>
        </ModalBg>
      )}
    </>
  );
}

export default Modal;
