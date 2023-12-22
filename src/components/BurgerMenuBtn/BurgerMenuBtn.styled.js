import { motion } from "framer-motion";
import styled from "styled-components";

// export const Wrap = styled(motion.div)`
// width: 35px;
// height: 35px;
// padding-top: 6px;
// `;

export const Wrap = styled.div`
//   width: 28px;
//   height: 30px;
  padding: 15px 5px;
`;

export const Burger = styled.span`
  position: relative;
  display: block;

  width: 28px;
  height: 5px;
  background-color: ${(props) =>
    props.$burgerState === "open" ? "transparent" : "rgb(252, 107, 3)"};
  transition: all 0.3s;
  backface-visibility: hidden;
  border-radius: 2px;

  &::after,
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: -9px;

    width: 100%;
    height: 5px;
    background-color: rgb(252, 107, 3);
    transition: all 0.3s;
    backface-visibility: hidden;
    border-radius: 2px;
  }

  &::before {
    transform: ${(props) =>
      props.$burgerState === "open" && "rotate(45deg) translate(5px, 5px)"};
  }

  &::after {
    top: 9px;
    transform: ${(props) =>
      props.$burgerState === "open" && "rotate(-45deg) translate(7px, -8px)"};
  }
`;