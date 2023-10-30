import styled from "styled-components";

export const WrapStyled = styled.div`
  overflow: ${(props) => props.$accordionopen && "hidden"};
  transition: ${(props) =>
    props.$accordionopen ? "height 0.3s ease-out" : ""};
`;

export const DeclarationsListHeadStyled = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const DeclarationsItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
`;
