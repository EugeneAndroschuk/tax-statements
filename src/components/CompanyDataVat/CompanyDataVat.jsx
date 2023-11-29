
import PropTypes from "prop-types";
import { getTotalAmountsVat } from "../../utils/getTotalAmountsVat";
import { numberToStringWithDivider } from "../../utils/numberToStringWithDivider";
import { Wrap, Value, Text, Title } from "./CompanyDataVat.styled";

const CompanyDataVat = ({ allVatDeclarations }) => {
    const { totalRevenue, totalVatPayable } =
      getTotalAmountsVat(allVatDeclarations);
    return (
      <Wrap>
        <Value>{numberToStringWithDivider(totalRevenue)} UAH</Value>
        <Text>total sales</Text>
        <Value>{numberToStringWithDivider(totalVatPayable)} UAH </Value>
        <Text>total VAT payable</Text>
        <Title>VAT</Title>
      </Wrap>
    );
}

CompanyDataVat.propTypes = {
  allVatDeclarations: PropTypes.array.isRequired,
};

export default CompanyDataVat;