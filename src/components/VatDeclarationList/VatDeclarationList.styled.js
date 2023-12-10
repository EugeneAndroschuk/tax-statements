import styled from "styled-components";

export const Title = styled.h2`
font-size: 36px;
font-weight: 700;
color: white;
margin-bottom: 36px;
text-align: center;
`;

export const PeriodItem = styled.div`
margin-bottom: 16px;
`;

export const VatDeclarationPeriodWrap = styled.div`
position: relative;
`;

export const VatDeclarationPeriod = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  padding: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: ${(props) => (props.$clicked ? "0px" : "5px")};
  border-bottom-right-radius: ${(props) => (props.$clicked ? "0px" : "5px")};
  background-color: rgb(245, 245, 245);
  cursor: pointer;
`;

export const ExpandMoreIconWrap = styled.div`
  position: absolute;
  top: 5px;
  right: 16px;

  transition: ${(props) => (props.$rotate ? "transform 0.3s ease-out" : "")};
`;

export const VatDeclarationItemWrap = styled.div`
 background-color: white;
`;