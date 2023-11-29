import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllCompaniesSelector } from "../../redux/companies/companiesSelectors";
import {
  motion,
  AnimatePresence,
  stagger,
  animate,
  useAnimate,
} from "framer-motion";
import Container from "../../styles/Container";
import CompaniesMenuList from "../CompaniesMenuList/CompaniesMenuList";
import CompaniesMenuActions from "../CompaniesMenuActions/CompaniesMenuActions";
import { Wrap, CompaniesMenuWrap } from "./CompaniesMenuContainer.styled";

const CompaniesMenuContainer = () => {
  return (
    <Wrap>
      <Container>
        <CompaniesMenuWrap>
          <CompaniesMenuActions />
          <CompaniesMenuList />
        </CompaniesMenuWrap>
      </Container>
    </Wrap>
  );
};

export default CompaniesMenuContainer;
