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
} from "./ProfitDeclarationCard.styled";

const ProfitDeclarationCard = ({ allProfitDeclarations }) => {
    const [btnHover, setBtnHover] = useState(false);
  // const { totalRevenue, totalVatPayable } =
  //   getTotalAmountsVat(allProfitDeclarations);

  // const rev = getMillionFromSum(totalRevenue);
  // const vat = getMillionFromSum(totalVatPayable);

  return (
    <Wrap>
      <DeclarationsContainerText $active={btnHover && "true"}>
        Profit Declarations
      </DeclarationsContainerText>

      <InfoWrap>
        <Title>Total sum :</Title>
        <p>
          <Sum>2</Sum> million UAH total revenue
        </p>
        <p>
          <Sum>5</Sum> million UAH total Profit payable
        </p>
        <ShowBtn
          onMouseOver={() => setBtnHover(true)}
          onMouseOut={() => setBtnHover(false)}
        >
          Show declarations
        </ShowBtn>
      </InfoWrap>
    </Wrap>
  );
};

ProfitDeclarationCard.propTypes = {
  allProfitDeclarations: PropTypes.array,
};

export default ProfitDeclarationCard;
