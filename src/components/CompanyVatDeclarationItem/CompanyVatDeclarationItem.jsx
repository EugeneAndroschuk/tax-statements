
import PropTypes from "prop-types";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { getTaxLoad } from "../../utils/taxLoad";
import { getMonthAndYear } from "../../utils/getMonth";
import { numberToStringWithDivider } from "../../utils/numberToStringWithDivider";
import { deleteVatDeclaration } from "../../redux/vatDeclarations/vatDeclarationsThunks";
import {
  Wrap,
  Value,
  TaxLoadWrap,
  TaxLoadValue,
  BtnWrap,
} from "./CompanyVatDeclarationItem.styled";

const CompanyVatDeclarationItem = ({ item }) => {
  const dispatch = useDispatch();

  const onDeleteItem = () => {
    dispatch(deleteVatDeclaration(item._id));
  }
  
    return (
      <Wrap>
        <Value>{getMonthAndYear(item.period)}</Value>
        <Value>{numberToStringWithDivider(item.revenue)}</Value>
        <Value>{numberToStringWithDivider(item.vatPayable)}</Value>
        <TaxLoadWrap>
          <TaxLoadValue>
            {getTaxLoad(item.revenue, item.vatPayable)}
          </TaxLoadValue>
          <BtnWrap>
            <button type="button">Edit</button>
            <button type="button" onClick={()=>onDeleteItem()}>Del</button>
          </BtnWrap>
        </TaxLoadWrap>
      </Wrap>
    );
}

CompanyVatDeclarationItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CompanyVatDeclarationItem;