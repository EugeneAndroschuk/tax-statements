import styled from "styled-components";

export const VatDeclarationPeriod = styled.p`
  background-color: rgb(223, 229, 240);
  cursor: pointer;
`;

export const VatDeclarationItemWrap = styled.div`
  //   height: ${(props) => (props.accordionopen ? "auto" : "0")};
  //   overflow: ${(props) => (props.accordionopen ? "auto" : "hidden")};
  //   transition: ${(props) =>
    props.accordionopen ? "height 0.6s ease-out" : ""};


    height: 0;
    overflow: hidden;

  &.fadelogin-enter {
    height: 0;
  }

  &.fadelogin-enter-active {
    height: auto;
    transition: height 600ms;
    overflow: auto;
  }

  &.fadelogin-exit {
    height: 0;
  }

  &.fadelogin-exit-active {
    height: auto;
    transition: height 600ms;
  }
`;