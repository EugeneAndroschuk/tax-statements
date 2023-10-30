import styled from "styled-components";

export const PeriodItem = styled.li`
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
  border-radius: 5px;
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