
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrap = styled.div`
// height: 190px;
`;

export const MenuTitle = styled.h3`
font-weight: 700;
margin-bottom: 16px;
`;

export const CompaniesList = styled.ul`
display: flex;
flex-direction: column;
column-gap: 16px;
row-gap: 16px;
flex-wrap: wrap;

height: 175px;
`;

export const CompaniesListItem = styled(motion.li)`

`;

export const LinkStyled = styled(Link)`
position: relative;
  color: #545454;
  font-weight: 700;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    top: 20px;
    left: 0;

    background-color: rgb(252, 107, 3);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover,
  &:focus {
    color: black;
    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;