import styled from "styled-components";
import { motion } from "framer-motion";
import imgVat from "../../assets/images/vat-bgd.jpg";
import imgProfit from "../../assets/images/profit-bgd.jpg";

export const WrapStyled = styled.div`
min-height: calc(100vh - 60px);
background-color: black;
`;

export const MainPageContainer = styled.div`
  // background-color: white;
`;

export const MainSection = styled.section`
// height: calc(100vh - 60px);
// border: 1px solid red;
`;

// export const CompanyContainer = styled(motion.div)``;

export const DeclarationsContainerWrap = styled.div`
  display: flex;
  gap: 30px;
  
  // padding-top: 30px;
  // padding-bottom: 30px;
`;

export const DeclarationWrap = styled.div``;

export const VatDeclarationsContainer = styled.div`
  width: 150px;
  height: 100px;
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
  // transition: background-image 0.3s ease-in;

  &:hover,
  &:focus {
    cursor: pointer;
    scale: 1.02;
    background-image: url("${imgVat}");
  }
`;

export const ProfitDeclarationsContainer = styled.div`
  width: 150px;
  height: 100px;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.6),
      rgba(47, 48, 58, 0.6)
    ),
    url("${imgProfit}");
  background-repeat: repeat;
  background-size: cover;

  scale: 1;
  transition: scale 0.3s ease-in;

  &:hover,
  &:focus {
    cursor: pointer;
    scale: 1.02;
    background-image: url("${imgProfit}");
  }
`;

export const ContainerText = styled.p`
font-size: 18px;
font-weight: 700;
color: white;
`;

export const AmountSection = styled(motion.section)`
display: flex;
justify-content: space-between;
padding-top: 16px;
padding-bottom: 16px;
`;

export const Amount = styled.span`
  font-size: 72px;
  font-weight: 700;
  color: rgb(186, 85, 211);
`;