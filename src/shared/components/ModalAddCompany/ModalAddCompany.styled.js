
import styled from "styled-components";

export const ModalWrap = styled.div`
  position: relative;
  padding: 16px;
  border-radius: 8px;

  //   background-image: linear-gradient(
  //     to right,
  //     rgba(255, 255, 255, 0.4),
  //     rgba(255, 255, 255, 0.4)
  //   );

  background-color: white;
`;

export const FormStyled = styled.form`
//   width: 608px;
//   margin-left: auto;
//   margin-right: auto;
  border-radius: 8px;

  
`;

export const FormTitleStyled = styled.h1`
  font-size: 32px;
//   line-height: 1.37;
  font-weight: 700;
  // color: rgb(219, 167, 22);
//   text-align: center;
  margin-top: 0;
  margin-bottom: 12px;
`;

export const ListStyled = styled.ul`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
`;

export const ItemStyled = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const LabelStyled = styled.label`
  font-weight: 700;
  margin-bottom: 5px;
`;

export const InpuStyled = styled.input`
  outline: none;
  width: 458px;
  height: 36px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  background-color: rgb(221, 220, 230);
  border-radius: 8px;
  padding: 5px 16px;
`;

export const SubmitBtnStyled = styled.button`
  width: 458px;
  height: 36px;
  border: 2px solid rgb(3, 65, 252);
  border-radius: 8px;
  background-color: rgb(3, 65, 252);
  padding: 0px 16px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 16px;
//   margin-bottom: 16px;

  font-size: 20px;
  line-height: 1.37;
//   font-weight: 600;
  color: #ffffff;

  cursor: pointer;

  &:hover,
  &:focus {
    background: linear-gradient(90deg, rgb(11, 3, 252), rgb(3, 65, 252));
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  }
`;
