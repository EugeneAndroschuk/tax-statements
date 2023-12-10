import styled from "styled-components";
import img from "../../assets/images/auth-bgd4.jpg";

export const AuthPageWrap = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  overflow: hidden;
  // padding-top: 16px;
  // background-image: linear-gradient(
  //     to right,
  //     rgba(47, 48, 58, 0.6),
  //     rgba(47, 48, 58, 0.6)
  //   ),
  //   url("${img}");
  background-image: url("${img}");
  background-repeat: repeat;
  background-size: cover;
`;

export const OutletWrap = styled.div`
  width: 100%;
  height: calc(100vh - 60px);

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const AuthTextWrap = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 36px;
`;

export const AuthPageTitle = styled.h1`
  color: white;
  font-size: 48px;
  @media screen and (min-width: 1280px) {
    font-size: 72px;
  }
`;

export const AuthPageText = styled.h2`
  font-size: 36px;
  color: white;
`;