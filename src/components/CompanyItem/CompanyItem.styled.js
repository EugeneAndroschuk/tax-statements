import styled from "styled-components";
import { Link } from "react-router-dom";

export const CompanyItemWrap = styled.div`
  position: relative;
  width: 100%;
  padding-top: 16px;

  color: white;
`;

export const LinkStyled = styled(Link)`
display: flex;
flex-direction: column;
align-items: center;
`;

export const CompanyName = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: white;
  margin-bottom: 48px;

  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }
`;

export const CompanyCode = styled.p`
  font-size: 14px;
  //   font-weight: 700;
  color: white;
  margin-bottom: 24px;

  @media screen and (min-width: 1280px) {
    font-size: 26px;
  }
`;

export const CompanyAddress = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: white;

  @media screen and (min-width: 1280px) {
    font-size: 26px;
  }
`;