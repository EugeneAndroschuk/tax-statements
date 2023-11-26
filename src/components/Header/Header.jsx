
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
  
  return (
    <HeaderStyled>
      <Container>
        <HeaderWrap>
          <Logo />
          <LinkStyled to="/">Main</LinkStyled>
          <CompaniesLink
            $hover={(activeCompanyMenu || activeCompaniesContainer) ? "true" : "false"}
            onMouseMove={() => setActiveCompanyMenu(true)}
            onMouseOut={() => setActiveCompanyMenu(false)}
          >
            Companies
          </CompaniesLink>

          {isLoggedIn ? <UserNav /> : <AuthMenu />}
        </HeaderWrap>
      </Container>
      <AnimatePresence>
        {(activeCompanyMenu || activeCompaniesContainer) && (
          <CompaniesContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            onMouseMove={() => setActiveCompaniesContainer(true)}
            onMouseOut={() => setActiveCompaniesContainer(false)}
          >
            <CompaniesMenuContainer />
          </CompaniesContainer>
        )}
      </AnimatePresence>
    </HeaderStyled>
  );
};

export default Header;
