import styled from "styled-components";

export const DeclarationSection = styled.section`
background-color: black;
padding: 32px 0px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 32px;

  @media screen and (min-width: 1280px) : font-size: 36px;
`;

export const TableTitleName = styled.p`
  font-size: 14px;
  color: white;

  @media screen and (min-width: 1280px) : font-size: 16px;
`;

export const TableTitleList = styled.ul`
display: flex;
margin-bottom: 16px;
`;

export const TableTitleItem = styled.li`
  width: calc(100% / 4);
`;

export const DeclarationsList = styled.ul`
 
`;

export const DeclarationsItem = styled.li`
  background-color: white;
  margin-bottom: 5px;
  border-radius: 8px;

  &:hover, &:focus {
    cursor: pointer;
    scale: 1.005;
    font-weight: 700;
  }
`;