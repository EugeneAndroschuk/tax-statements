import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
height: 60px;
`;

export const HeaderContainerWrap = styled.div`
  position: absolute;

  width: 100vw;
  height: 60px;

  background-color: black;

  z-index: 3;
`;

export const HeaderWrap = styled.div`
height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderWrapDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  position: relative;
  color: white;
  padding: 10px 0px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 4px;
    top: 35px;
    left: 0;

    background-color: rgb(252, 107, 3);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover,
  &:focus {
    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

export const CompaniesLink = styled.a`
  position: relative;
  cursor: pointer;
  color: white;

  padding: 21px 0px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    // transform: scaleX(0);
    height: 4px;
    top: 46px;
    left: 0;

    background-color: rgb(252, 107, 3);
    // transform-origin: bottom right;
    transition: transform 0.25s ease-out;

    transform: ${(props) =>
      props.$hover === "true" ? "scaleX(1)" : "scaleX(0)"};
    transform-origin: ${(props) =>
      props.$hover === "true" ? "bottom left" : "bottom right"};
  }

  // &:hover,
  // &:focus {
  //   &::after {
  //     transform: scaleX(1);
  //     transform-origin: bottom left;
  //   }
  // }
`;
export const CompaniesContainer = styled(motion.div)`
position: absolute;
top: 60px;
z-index: 2;
`;