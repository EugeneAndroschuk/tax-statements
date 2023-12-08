import styled from "styled-components";

export const MenuTitle = styled.h3`
  font-weight: 700;
  margin-bottom: 16px;
`;

export const ActionsList = styled.ul`
display: flex;
flex-direction: column;
gap: 16px;
`;

export const ActionBtn = styled.button`
  border: transparent;
  background-color: transparent;

  font-weight: 700;

  padding: 5px 8px;
  border-radius: 16px;

  transition: background-color 0.25s ease-out;

  &:hover,
  &:focus {
    background-color: rgb(252, 107, 3);
  }
`;