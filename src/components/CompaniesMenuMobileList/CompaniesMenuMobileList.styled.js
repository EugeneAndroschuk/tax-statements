
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
gap: 16px;

// height: 175px;
`;

export const CompaniesListItem = styled.li`

`;

export const LinkStyled = styled(Link)`
  position: relative;
  color: #545454;
  background-color: transparent;
  font-weight: 700;

  padding: 5px 8px;
  border-radius: 16px;

  transition: background-color 0.25s ease-out;

  &:hover,
  &:focus {
    color: black;
    background-color: rgb(252, 107, 3);
  }
`;