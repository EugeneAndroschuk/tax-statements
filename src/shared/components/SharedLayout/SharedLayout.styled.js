import styled from "styled-components";
import img from "../../../assets/images/auth-bgd1.jpg";

export const SharedLayoutWrap = styled.div`
// padding-top: 60px;
  
`;

export const GoToTopBtn = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;

  width: 65px;
  height: 65px;
  border-radius: 50px;
  border: transparent;
  background-color: rgb(139, 158, 252);

  &:hover,
  &:focus {
    background-color: rgb(139, 201, 252);
  }
`;
