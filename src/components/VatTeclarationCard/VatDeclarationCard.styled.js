import styled from "styled-components";
import imgVat from "../../assets/images/vat-bgd.jpg";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 0px;

  width: 100%;
  border-radius: 26px;

  background-color: white;

  @media screen and (min-width: 1280px) {
    width: calc((1280px / 2) - 50px);
  }
`;

export const DeclarationsContainerText = styled.p`
  position: relative;
  font-size: 36px;
  font-weight: 700;

  margin-bottom: 26px;
`;

export const InfoWrap = styled.div``;

export const Title = styled.h2`
// color: white;
margin-bottom: 26px;
`;

export const Sum = styled.span`
font-size: 24px;
font-weight: 700;

`;

export const ShowBtn = styled.button`
  position: relative;
  z-index: 1;
  padding: 20px 30px;
  border-radius: 26px;
  font-size: 26px;
  font-weight: 700;
  color: black;

  // text-transform: uppercase;

  margin-top: 36px;
  margin-left: auto;
  margin-right: auto;

  border: transparent;

  transition: color 0.5s;

  &::before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 26px;
    margin: auto;
    width: 100%;
    height: 1px;
    content: " ";
    color: transparent;
    background-color: rgb(252, 107, 3);
    visibility: none;
    opacity: 0;
    z-index: -1;

    transition: all 0.5s;
  }

  &:hover {
    color: white;
    &::before {
      opacity: 1;
      visibility: visible;
      height: 100%;
    }
  }
`;