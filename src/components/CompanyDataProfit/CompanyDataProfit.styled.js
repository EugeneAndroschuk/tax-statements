import styled from "styled-components";

export const Wrap = styled.div`
  width: 200px;
  height: 200px;

  display: flex;
  flex-direction: column;
  //   justify-content: center;
  padding: 0px 16px;
  // margin-left: 50px;
  border-radius: 26px;
  background-color: white;

  @media screen and (min-width: 1280px) {
    width: 400px;
    height: 400px;
    padding: 0px 16px 0px 16px;
  }
`;

export const Title = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: black;

  text-align: center;
  margin-bottom: 16px;

  @media screen and (min-width: 1280px) {
    font-size: 56px;
    margin-bottom: 48px;
  }
`;

export const Value = styled.p`
  //   margin-left: auto;
  font-size: 18px;
  font-weight: 700;
  color: black;

  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }
`;

export const Text = styled.p`
  margin-left: auto;
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 400;
  color: black;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;
