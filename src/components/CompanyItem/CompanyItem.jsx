
import PropTypes from "prop-types";

import {
  CompanyItemWrap,
  LinkStyled, CompanyName,
  CompanyCode,
  CompanyAddress,
} from "./CompanyItem.styled";

const CompanyItem = ({ company }) => {
  
  return (
    <CompanyItemWrap>
      <LinkStyled to={`/company/${company._id}`}>
                <CompanyName>{company.name}</CompanyName>
            <CompanyCode>Registration code {company.regCode}</CompanyCode>
            <CompanyCode>VAT number {company.taxCode}</CompanyCode>
            <CompanyAddress>Legal address {company.address}</CompanyAddress>
      </LinkStyled>
    </CompanyItemWrap>
  );
}

CompanyItem.propTypes = {
  company: PropTypes.object.isRequired,
};

export default CompanyItem;