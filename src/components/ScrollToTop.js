import React, { useState } from "react";
import styled from "styled-components";

const Arrow = styled.span`
  position: fixed;
  display: flex;
  z-index: 3;
  font-size: 30px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  bottom: 15px;
  right: 15px;
  width: 50px;
  height: 60px;
  color: #ecb365;
  background-color: #04293a;
`;

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    visible && (
      <Arrow onClick={scrollToTop}>
        {" "}
        <i className="fas fa-arrow-up"></i>
      </Arrow>
    )
  );
};

export default ScrollButton;
