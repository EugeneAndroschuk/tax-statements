import styled from "styled-components";
import imgVat from "../../assets/images/vat-bgd.jpg";
import imgProfit from "../../assets/images/profit-bgd.jpg";

export const WrapStyled = styled.div`
min-height: calc(100vh - 60px);
background-color: rgb(245, 245, 245);
`;

export const MainPageContainer = styled.div`
  background-color: white;
`;

export const MainSection = styled.section`
height: calc(100vh - 60px);
`;

// export const CompanyContainer = styled(motion.div)``;

export const DeclarationsContainerWrap = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
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
font-size: 72px;
font-weight: 700;
color: white;
`;

export const AmountSection = styled.section`
display: flex;
justify-content: space-between;
`;

export const Amount = styled.span`
  font-size: 72px;
  font-weight: 700;
  color: red;
`;