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
} from "./CompaniesMenuMobileList.styled";

const CompaniesMenuMobileList = ({ toggle }) => {
  const { allCompanies } = useSelector(getAllCompaniesSelector);

  return (
    <Wrap>
      <MenuTitle>Group Companies</MenuTitle>
      <CompaniesList>
        {allCompanies.length > 0 &&
          allCompanies.map((company, id) => (
            <CompaniesListItem key={id}>
              <LinkStyled
                to={`/company/${company._id}`}
                onClick={toggle}
              >
                {company.name}
              </LinkStyled>
            </CompaniesListItem>
          ))}
      </CompaniesList>
    </Wrap>
  );
};

// CompaniesMenuMobileList.propTypes = {
//   closeMenu: PropTypes.func,
// };

export default CompaniesMenuMobileList;
