import styled from "styled-components";
import imgVat from "../../assets/images/vat-bgd.jpg";
import imgProfit from "../../assets/images/profit-bgd.jpg";

export const WrapStyled = styled.div`
min-height: calc(100vh - 60px);
  background-color: rgb(222, 223, 224);
`;

export const DeclarationsContainerWrap = styled.div`
display: flex;
`;

export const VatDeclarationsContainer = styled.div`
  width: 500px;
  height: 350px;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.6),
      rgba(47, 48, 58, 0.6)
    ),
    url("${imgVat}");
  background-repeat: repeat;
  background-size: cover;

  &hover
`;

export const ProfitDeclarationsContainer = styled.div`
width: 500px;
height: 350px;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.6),
      rgba(47, 48, 58, 0.6)
    ),
    url("${imgProfit}");
  background-repeat: repeat;
  background-size: cover;
`;

export const ContainerText = styled.p`
font-size: 72px;
font-weight: 700;
color: white;
`;