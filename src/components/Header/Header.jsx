
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getUserIsLoggedIn } from "../../redux/auth/authSelectors";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../../styles/Container";
import Logo from "../Logo/Logo";
import AuthMenu from "../AuthMenu/AuthMenu";
import UserNav from "../UserNav/UserNav";
import CompaniesMenuContainer from "../CompaniesMenuContainer/CompaniesMenuContainer";
import {
  HeaderStyled,
  HeaderContainerWrap,
  HeaderWrap,
  LinkStyled,
  CompaniesLink,
  CompaniesContainer,
} from "./Header.styled";


const Header = () => {
  const [activeCompanyMenu, setActiveCompanyMenu] = useState(false);
  const [activeCompaniesContainer, setActiveCompaniesContainer] =
    useState(false);
  const isLoggedIn = useSelector(getUserIsLoggedIn);

  const onCloseMenu = (bool) => {
    // console.log(bool)
    if (bool) {
      setActiveCompanyMenu(false);
      setActiveCompaniesContainer(false);
    }
  }

  return (
    <HeaderStyled>
      {/* <HeaderFixedContainer> */}

      <HeaderContainerWrap>
        <Container>
          <HeaderWrap>
            <Logo />
            <LinkStyled to="/">Main</LinkStyled>
            <CompaniesLink
              $hover={
                activeCompanyMenu || activeCompaniesContainer ? "true" : "false"
              }
              onMouseMove={() => setActiveCompanyMenu(true)}
              onMouseOut={() => setActiveCompanyMenu(false)}
            >
              Companies
            </CompaniesLink>

            {isLoggedIn ? <UserNav /> : <AuthMenu />}
          </HeaderWrap>
        </Container>
      </HeaderContainerWrap>
      <AnimatePresence>
        {(activeCompanyMenu || activeCompaniesContainer) && (
          <CompaniesContainer
            // initial={{ y: "-100" }}
            // animate={{ y: "0", transition: { duration: 0.3 } }}
            // exit={{ y: "-100", transition: { duration: 0.3 } }}
            initial={{ y: "-100%" }}
            animate={{ y: "0" }}
            exit={{ y: "-100%" }}
            transition={{
              y: { type: "auto" },
              delay: 0.2,
              duration: 5,
            }}
            onMouseMove={() => setActiveCompaniesContainer(true)}
            onMouseOut={() => setActiveCompaniesContainer(false)}
          >
            <CompaniesMenuContainer closeMenu={onCloseMenu} />
          </CompaniesContainer>
        )}
      </AnimatePresence>
      {/* </HeaderFixedContainer> */}
    </HeaderStyled>
  );
};

// Header.propTypes = {
//   closeMenu: PropTypes.func,
// };

export default Header;
