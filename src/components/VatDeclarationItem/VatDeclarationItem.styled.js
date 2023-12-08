import styled from "styled-components";

export const WrapStyled = styled.div`
  overflow: ${(props) => props.$accordionopen && "hidden"};
  transition: ${(props) =>
  props.$accordionopen ? "height 0.3s ease-out" : ""};
    
  // padding-bottom: 16px;
`;

export const DeclarationsListHeadStyled = styled.ul`
  display: flex;
  margin-bottom: 16px;
`;

export const DeclarationsItemHeadStyled = styled.li`
width: calc(100% / 4);
`;

export const DeclarationsListStyled = styled.ul`
padding-bottom: 16px;
`;

export const DeclarationsItemStyled = styled.li`
  display: flex;
`;

export const DeclarationsItemValueStyled = styled.p`
  width: calc(100% / 4);
`;
