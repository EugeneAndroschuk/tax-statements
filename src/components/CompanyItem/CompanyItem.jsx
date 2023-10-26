
import PropTypes from "prop-types";
import { CompanyItemWrap } from "./CompanyItem.styled";

const CompanyItem = ({company}) => {
    return (
      <CompanyItemWrap>
        <div>{company.name}</div>
        <div>{company.regCode}</div>
        <div>{company.taxCode}</div>
        <div>{company.address}</div>
      </CompanyItemWrap>
    );
}

CompanyItem.propTypes = {
  company: PropTypes.object.isRequired,
};

export default CompanyItem;