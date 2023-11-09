
import PropTypes from "prop-types";
import { getTotalAmountsVat } from "../../utils/getTotalAmountsVat";

const CompanyDataVat = ({ allVatDeclarations }) => {
    const { totalRevenue, totalVatPayable } =
      getTotalAmountsVat(allVatDeclarations);
    return (
      <div>
        <p>
          <span>{totalRevenue}</span>UAH total revenue
        </p>
        <p>
          <span>{totalVatPayable}</span>UAH total VAT payable
        </p>
      </div>
    );
}

CompanyDataVat.propTypes = {
  allVatDeclarations: PropTypes.array.isRequired,
};

export default CompanyDataVat;