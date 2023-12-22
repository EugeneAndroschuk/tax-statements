import styled from "styled-components";

export const Wrap = styled.div`
  width: 200px;
  height: 200px;

  display: flex;
  flex-direction: column;
  //   justify-content: center;
  padding: 55px 16px 0px 16px;
  border-radius: 26px;
  //   background-color: rgb(66, 245, 167);
  background-color: rgb(252, 107, 3);

  @media screen and (min-width: 1280px) {
    width: 400px;
    height: 400px;
    padding: 128px 16px 0px 16px;
  }
`;

export const Value = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: white;

  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }
`;

export const Text = styled.p`
  margin-left: auto;
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 400;
  color: white;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const Title = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: white;

  text-align: center;
  margin-top: 8px;

  @media screen and (min-width: 1280px) {
    font-size: 56px;
    margin-top: 32px;
  }
`;