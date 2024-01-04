import styled from "styled-components";

export const UserWrap = styled.div`
display: flex;
gap: 8px;
`;

export const UserName = styled.p`
  color: black;
  font-size: 18px;

  @media screen and (min-width: 1280px) {
    color: white;
  }
`;

export const UserEmail = styled.p`
  color: black;
  font-size: 12px;

  @media screen and (min-width: 1280px) {
    color: white;
  }
`;