
import { Wrap, LinkStyled } from "./MobileMenu.styled";

const MobileMenu = ({ toggle}) => {
  return (
    <Wrap>
      <div>MOBILE MENU</div>
      <LinkStyled to="/" onClick={toggle}>
        Main
      </LinkStyled>
      <LinkStyled to="/auth/register" onClick={toggle}>
        Register
      </LinkStyled>
      <LinkStyled to="/auth/login" onClick={toggle}>
        Login
      </LinkStyled>
    </Wrap>
  );
};

export default MobileMenu;