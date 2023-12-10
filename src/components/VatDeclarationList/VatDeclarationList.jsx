
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getAllVatDeclarationsSelector } from "../../redux/vatDeclarations/vatDeclarationsSelectors";
import { getAllVatDeclarations } from "../../redux/vatDeclarations/vatDeclarationsThunks";
import { useEffect, useState, useRef } from "react";
import { groupDeclarationsByPeriod } from "../../utils/sortDeclarations";
import { getMonthAndYear } from "../../utils/getMonth";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VatDeclarationItem from "../VatDeclarationItem/VatDeclarationItem";
import {
  Title,
  PeriodItem,
  VatDeclarationPeriodWrap,
  VatDeclarationPeriod,
  ExpandMoreIconWrap,
  VatDeclarationItemWrap,
} from "./VatDeclarationList.styled";


const VatDeclarationList = ({ declarations }) => {
  const [clickedId, setClickedId] = useState(null);
  const [isOpenItem, setIsOpenItem] = useState(false);

  const onOpenAccordion = () => {
    // if (id === clickedId) {
    //   setClickedId(null);
    // } else {
    //   setClickedId(id);
    // }
    setIsOpenItem((prev) => !prev);
  };

  return (
    <PeriodItem>
      <VatDeclarationPeriodWrap onClick={() => onOpenAccordion()}>
        <VatDeclarationPeriod $clicked={isOpenItem && "true"}>
          {getMonthAndYear(declarations.period)}
        </VatDeclarationPeriod>
        <ExpandMoreIconWrap
          style={
            isOpenItem
              ? { transform: "rotate(-180deg)" }
              : { transform: "rotate(0)" }
          }
          $rotate={isOpenItem ? "true" : "false"}
        >
          <ExpandMoreIcon fontSize="large" />
        </ExpandMoreIconWrap>
      </VatDeclarationPeriodWrap>

      <VatDeclarationItemWrap>
        <VatDeclarationItem
          declarations={declarations.declarations}
          // isClicked={id === clickedId ? "true" : "false"}
          isOpen={isOpenItem}
        />
      </VatDeclarationItemWrap>
    </PeriodItem>
  );
};

VatDeclarationList.propTypes = {
  declarations: PropTypes.object.isRequired,
};

export default VatDeclarationList;
