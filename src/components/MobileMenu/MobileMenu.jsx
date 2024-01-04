
import { useSelector } from "react-redux";
import { getUserIsLoggedIn } from "../../redux/auth/authSelectors";
import User from "../User/User";
import CompaniesMenuMobileList from "../CompaniesMenuMobileList/CompaniesMenuMobileList";
import { Wrap, LinkStyled } from "./MobileMenu.styled";

const MobileMenu = ({ toggle }) => {
  const isLoggedIn = useSelector(getUserIsLoggedIn);

  return (
    <Wrap>
      {isLoggedIn && <User />}

      <LinkStyled to="/" onClick={toggle}>
        Main
      </LinkStyled>
      {!isLoggedIn && (
        <>
          <LinkStyled to="/auth/register" onClick={toggle}>
            Register
          </LinkStyled>
          <LinkStyled to="/auth/login" onClick={toggle}>
            Login
          </LinkStyled>
        </>
      )}

      {isLoggedIn && <CompaniesMenuMobileList toggle={toggle} />}
    </Wrap>
  );
};

export default MobileMenu;