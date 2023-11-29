
import PropTypes from "prop-types";
import { useRef } from "react";
import { getTaxLoad } from "../../utils/taxLoad";
import {
  WrapStyled,
  DeclarationsListHeadStyled,
  DeclarationsItemStyled,
} from "./VatDeclarationItem.styled";


const VatDeclarationItem = ({ declarations, isClicked, isOpen }) => {
  const itemRef = useRef(null);

  return (
    <WrapStyled
      $accordionopen={isClicked === "true" ? "true" : "false"}
      style={
        isClicked === "true"
          ? {
              height: itemRef.current.scrollHeight,
            }
          : { height: "0px" }
      }
    >
      <div ref={itemRef}>
        <DeclarationsListHeadStyled>
          <li>
            <p>Company</p>
          </li>
          <li>
            <p>Sales w/o VAT</p>
          </li>
          <li>
            <p>Vat payable</p>
          </li>
          <li>
            <p>Tax load (%)</p>
          </li>
        </DeclarationsListHeadStyled>
        <ul>
          {declarations.map((declaration) => (
            <DeclarationsItemStyled key={declaration.id}>
              <p>{declaration.company}</p>
              <p>{declaration.revenue}</p>
              <p>{declaration.vatPayable}</p>
              <p>{getTaxLoad(declaration.revenue, declaration.vatPayable)}</p>
            </DeclarationsItemStyled>
          ))}
        </ul>
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