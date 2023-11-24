import styled from "styled-components";

export const Wrap = styled.div`
display: flex;

`;

export const Value = styled.p`
// border: 1px solid green;
font-size: 24px;
// font-weight: 700;
padding: 10px 5px;
width: calc(100% / 4);
`;

export const TaxLoadWrap = styled.div`
  width: calc(100% / 4);
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-right: 8px;
`;

export const TaxLoadValue = styled.p`
  font-size: 24px;
  // font-weight: 700;
  padding: 10px 5px;
`;

export const BtnWrap = styled.div`
display: flex;
align-items: center;
`;

export const Button = styled.button`
  border: transparent;
  border-radius: 8px;
  background-color: transparent;

  &:hover,
  &:focus {
    background-color: #e9e9e9;
  }
`;