import PropTypes from "prop-types";
import { useState } from "react";
import { getMillionFromSum } from "../../utils/getMillionFromSum";
import { getTotalAmountsVat } from "../../utils/getTotalAmountsVat";
import {
  Wrap,
  DeclarationsContainerText,
  InfoWrap,
  Title,
  Sum,
  ShowBtn,
} from "./VatDeclarationCard.styled";

const VatDeclarationCard = ({ allVatDeclarations, showList }) => {
  const [btnHover, setBtnHover] = useState(false);
  const { totalRevenue, totalVatPayable } =
    getTotalAmountsVat(allVatDeclarations);

  const rev = getMillionFromSum(totalRevenue);
  const vat = getMillionFromSum(totalVatPayable);

  return (
    <Wrap>
      <DeclarationsContainerText $active={btnHover && "true"}>
        VAT Declarations
      </DeclarationsContainerText>

      <InfoWrap>
        <Title>Total sum :</Title>
        <p>
          <Sum>{rev}</Sum> million UAH total sales
        </p>
        <p>
          <Sum>{vat}</Sum> million UAH total VAT payable
        </p>
        <ShowBtn
          onClick={() => showList(true)}
          onMouseOver={() => setBtnHover(true)}
          onMouseOut={() => setBtnHover(false)}
        >
          Show declarations
        </ShowBtn>
      </InfoWrap>
    </Wrap>
  );
};

VatDeclarationCard.propTypes = {
  allVatDeclarations: PropTypes.array.isRequired,
  showList: PropTypes.func,
};

export default VatDeclarationCard;
