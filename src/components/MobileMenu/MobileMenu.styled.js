import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div`
  width: calc(320px + (100vw - 320px) / 2);
  height: calc(100vh - 60px);
  padding: 8px;

  display: flex;
  flex-direction: column;
  jastify-content: center;
  align-items: center;

  background-color: white;

  @media screen and (min-width: 768px) {
    width: calc(768px + (100vw - 768px) / 2);
  }
`;

export const LinkStyled = styled(Link)`
font-size: 24px;
font-weight: 700;
  color: rgb(252, 107, 3);
  padding: 10px 0px;
`;