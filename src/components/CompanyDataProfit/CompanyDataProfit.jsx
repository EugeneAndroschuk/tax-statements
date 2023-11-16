import PropTypes from "prop-types";
import { getTotalAmountsVat } from "../../utils/getTotalAmountsVat";
import { numberToStringWithDivider } from "../../utils/numberToStringWithDivider";
import { Wrap, Title, Value, Text } from "./CompanyDataProfit.styled";

const CompanyDataProfit = ({ allVatDeclarations }) => {
  const { totalRevenue, totalVatPayable } =
    getTotalAmountsVat(allVatDeclarations);
  return (
      <Wrap>
          <Title>Profit</Title>
      <Value>{numberToStringWithDivider(totalRevenue)} UAH</Value>
      <Text>total revenue</Text>
      <Value>{numberToStringWithDivider(totalVatPayable)} UAH </Value>
      <Text>total profit payable</Text>
    </Wrap>
  );
};

CompanyDataProfit.propTypes = {
  allVatDeclarations: PropTypes.array.isRequired,
};

export default CompanyDataProfit;
