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
import {
  Wrap,
  MenuTitle,
  CompaniesList,
  CompaniesListItem,
  LinkStyled,
} from "./CompaniesMenuList.styled";

const staggerMenuItems = stagger(0.05, { startDelay: 0.3 });

function useMenuAnimation() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "li",
      { opacity: 1 },
      {
        duration: 0.05,
        delay: staggerMenuItems,
      }
    );
  }, [animate]);

  return scope;
}

const CompaniesMenuList = () => {
  const { allCompanies } = useSelector(getAllCompaniesSelector);
  const scope = useMenuAnimation();

  return (
    <Wrap>
      <MenuTitle>Group Companies</MenuTitle>
      <CompaniesList ref={scope}>
        {allCompanies.length > 0 &&
          allCompanies.map((company, id) => (
            <CompaniesListItem key={id} initial={{ opacity: 0 }}>
              <LinkStyled to={`/company/${company._id}`}>
                {company.name}
              </LinkStyled>
            </CompaniesListItem>
          ))}
      </CompaniesList>
    </Wrap>
  );
};

export default CompaniesMenuList;
