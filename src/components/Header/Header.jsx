
import { useSelector } from "react-redux";
import { getUserIsLoggedIn } from "../../redux/auth/authSelectors";
import Container from "../../styles/Container";
import Logo from "../Logo/Logo";
import AuthMenu from "../AuthMenu/AuthMenu";
import UserNav from "../UserNav/UserNav";
import {
  HeaderStyled,
  HeaderWrap,
  LinkStyled,
  DeclarationLink,
} from "./Header.styled";

const Header = () => {
  const isLoggedIn = useSelector(getUserIsLoggedIn);
  
  return (
    <HeaderStyled>
      <Container>
        <HeaderWrap>
          <Logo />
          <LinkStyled to="/">Main</LinkStyled>
          <DeclarationLink>Declarations</DeclarationLink>
          {isLoggedIn ? <UserNav /> : <AuthMenu />}
        </HeaderWrap>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
