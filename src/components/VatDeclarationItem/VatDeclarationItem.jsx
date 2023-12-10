
import PropTypes from "prop-types";
import { useRef } from "react";
import { getTaxLoad } from "../../utils/taxLoad";
import {
  WrapStyled,
  DeclarationsListHeadStyled,
  DeclarationsItemHeadStyled,
  DeclarationsListStyled,
  DeclarationsItemStyled,
  DeclarationsItemValueStyled,
} from "./VatDeclarationItem.styled";


const VatDeclarationItem = ({ declarations, isClicked, isOpen }) => {
  const itemRef = useRef(null);

  return (
    <WrapStyled
      $accordionopen={isOpen ? "true" : "false"}
      style={
        isOpen
          ? {
              height: itemRef.current.scrollHeight,
            }
          : { height: "0px" }
      }
    >
      <div ref={itemRef}>
        <DeclarationsListHeadStyled>
          <DeclarationsItemHeadStyled>
            <p>Company</p>
          </DeclarationsItemHeadStyled>
          <DeclarationsItemHeadStyled>
            <p>Sales w/o VAT, UAH</p>
          </DeclarationsItemHeadStyled>
          <DeclarationsItemHeadStyled>
            <p>Vat payable, UAH</p>
          </DeclarationsItemHeadStyled>
          <DeclarationsItemHeadStyled>
            <p>Tax load (%)</p>
          </DeclarationsItemHeadStyled>
        </DeclarationsListHeadStyled>
        <DeclarationsListStyled>
          {declarations.map((declaration) => (
            <DeclarationsItemStyled key={declaration.id}>
              <DeclarationsItemValueStyled>
                {declaration.company}
              </DeclarationsItemValueStyled>
              <DeclarationsItemValueStyled>
                {declaration.revenue}
              </DeclarationsItemValueStyled>
              <DeclarationsItemValueStyled>
                {declaration.vatPayable}
              </DeclarationsItemValueStyled>
              <DeclarationsItemValueStyled>
                {getTaxLoad(declaration.revenue, declaration.vatPayable)}
              </DeclarationsItemValueStyled>
            </DeclarationsItemStyled>
          ))}
        </DeclarationsListStyled>
      </div>
    </WrapStyled>
  );
};

VatDeclarationItem.propTypes = {
  declarations: PropTypes.array.isRequired,
  isClicked: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default VatDeclarationItem;