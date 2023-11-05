import styled from "styled-components";
import imgVat from "../../assets/images/vat-bgd.jpg";

export const Wrap = styled.div`
display: flex;
gap: 12px;
align-items: center;

width: calc((1280px / 2) - 30px);

`;

export const DeclarationsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
  width: 300px;
  height: 200px;
  border-radius: 5px;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.6),
      rgba(47, 48, 58, 0.6)
    ),
    url("${imgVat}");
  background-repeat: repeat;
  background-size: cover;

  scale: 1;
  transition: scale 0.3s ease-in;

  background-image: ${(props) =>
    props.$active === "true" && `url("${imgVat}")`};
  scale: ${(props) => props.$active === "true" && "1.02"};
`;

export const DeclarationsContainerText = styled.p`
  position: relative;
  font-size: 36px;
  font-weight: 700;
  color: white;
//   color: ${(props) => (props.$active ? "rgb(186, 85, 211)" : "white")};

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 8px;
    top: 40px;
    left: 0;
    background-color: rgb(186, 85, 211);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;

    transform: ${(props) => props.$active && "scaleX(1)"};
    transform-origin: ${(props) => props.$active && "bottom left"};
  }
`;

export const InfoWrap = styled.div``;

export const Title = styled.h2`
color: white;
margin-bottom: 8px;
`;

export const Sum = styled.span`
font-size: 24px;
font-weight: 700;

`;

export const ShowBtn = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 24px;

  &:hover,
  &:focus {
    background-color: rgb(186, 85, 211);
    // font-weight: 700;
    color: white;
  }
`;