

import Container from "../../styles/Container";
import Logo from "../Logo/Logo";
import AuthMenu from "../AuthMenu/AuthMenu";
import { HeaderStyled, HeaderWrap, LinkStyled } from "./Header.styled";

const Header = () => {
    
  return (
    <HeaderStyled>
      <Container>
        <HeaderWrap>
          <Logo />
          <LinkStyled to="/">Main</LinkStyled>
          <AuthMenu />
        </HeaderWrap>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
