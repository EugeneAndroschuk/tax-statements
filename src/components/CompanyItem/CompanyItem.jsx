
import PropTypes from "prop-types";
import { CompanyItemWrap } from "./CompanyItem.styled";
import { Link } from "react-router-dom";

const CompanyItem = ({company}) => {
    return (
      <CompanyItemWrap>
        <Link to={`/company/${company._id}`}>
          <div>{company.name}</div>
          <div>{company.regCode}</div>
          <div>{company.taxCode}</div>
          <div>{company.address}</div>
        </Link>
      </CompanyItemWrap>
    );
}

CompanyItem.propTypes = {
  company: PropTypes.object.isRequired,
};

export default CompanyItem;