
import PropTypes from "prop-types";
import { getTaxLoad } from "../../utils/taxLoad";
import { getMonthAndYear } from "../../utils/getMonth";
import { numberToStringWithDivider } from "../../utils/numberToStringWithDivider";
import { Wrap, Value } from "./CompanyVatDeclarationItem.styled";

const CompanyVatDeclarationItem = ({ item }) => {
    return (
      <Wrap>
        <Value>{getMonthAndYear(item.period)}</Value>
        <Value>{numberToStringWithDivider(item.revenue)}</Value>
        <Value>{numberToStringWithDivider(item.vatPayable)}</Value>
        <Value>{getTaxLoad(item.revenue, item.vatPayable)}</Value>
      </Wrap>
    );
}

CompanyVatDeclarationItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CompanyVatDeclarationItem;