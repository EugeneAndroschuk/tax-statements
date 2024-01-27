import styled from "styled-components";
import imgVat from "../../assets/images/vat-bgd.jpg";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 8px;

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
  font-size: 18px;
  font-weight: 700;
  color: black;

  text-transform: uppercase;

  margin-top: 36px;
  margin-left: auto;
  margin-right: auto;

  border: transparent;

  overflow: hidden;

  @media screen and (max-width: 1279px) {
    // color: white;
    // background-color: rgb(252, 107, 3);
    background-color: black;

    color: #fff;
    text-shadow: 0 0 3px #fff, 0 0 4px #fff, 0 0 8px #fff, 0 0 16px #fff,
      0 0 32px #fff, 0 0 36px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff;

    &::before {
      content: " ";
      // display: block;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 26px;
      // margin: auto;
      width: 100%;
      height: 100%;
      background-color: rgb(252, 107, 3);
      z-index: 1;
      mix-blend-mode: color;

      animation: animate 10s linear infinite;

      @keyframes animate {
        0% {
          filter: hue-rotate(0deg);
        }
        100% {
          filter: hue-rotate(360deg);
        }
      }
    }
  }

  @media screen and (min-width: 1280px) {
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
  }
`;