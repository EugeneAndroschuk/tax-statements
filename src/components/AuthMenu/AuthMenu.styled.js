import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthMenuWrap = styled.div`
  display: flex;
  gap: 16px;
`;

export const LoginWrap = styled.div`
  position: relative;
  width: 50px;
`;

export const RegisterWrap = styled.div`
  position: relative;
  width: 50px;
`;

export const LinkStyledLogin = styled(Link)`
  color: white;
  
  position: absolute;
  top: 16px;

  &.fadelogin-enter {
    transform: translateY(24px);
  }

  &.fadelogin-enter-active {
    transform: translateY(0);
    transition: transform 600ms;
  }

  &.fadelogin-exit {
    transform: translateY(0);
  }

  &.fadelogin-exit-active {
    transform: translateY(-24px);
    transition: transform 600ms;
  }

  &.fadelogin-exit-done {
    position: static;
  }
`;

export const LinkStyledRegister = styled(Link)`
  color: white;
  
  position: absolute;
  top: 16px;

  &.faderegister-enter {
    transform: translateY(24px);
  }

  &.faderegister-enter-active {
    transform: translateY(0);
    transition: transform 600ms;
  }

  &.faderegister-exit {
    transform: translateY(0);
  }

  &.faderegister-exit-active {
    transform: translateY(-24px);
    transition: transform 600ms;
  }

  &.faderegister-exit-done {
    position: static;
  }
`;
