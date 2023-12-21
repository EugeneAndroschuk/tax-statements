import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div`
width: 100vw;
  // width: 100%;
  height: calc(100vh - 60px);

  background-color: white;
`;

export const LinkStyled = styled(Link)`
  color: rgb(252, 107, 3);
  padding: 10px 0px;
`;