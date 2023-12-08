
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


const VatDeclarationList = ({ allVatDeclarations }) => {
  const [clickedId, setClickedId] = useState(null);
  const [isOpenItem, setIsOpenItem] = useState(false);

  let allVatDeclarationsGrouped = [];

  if (allVatDeclarations.length)
    allVatDeclarationsGrouped = groupDeclarationsByPeriod(allVatDeclarations);

  const onOpenAccordion = (id) => {
    if (id === clickedId) {
      setClickedId(null);
      setIsOpenItem(false);
    } else {
      setClickedId(id);
      setIsOpenItem(true);
    }
  };

  return (
    <div>
      <Title>Vat Declarations</Title>

      <ul>
        {allVatDeclarationsGrouped.map((item, id) => (
          <PeriodItem key={id}>
            <VatDeclarationPeriodWrap>
              <VatDeclarationPeriod onClick={() => onOpenAccordion(id)}>
                {getMonthAndYear(item.period)}
              </VatDeclarationPeriod>
              <ExpandMoreIconWrap
                style={
                  id === clickedId
                    ? { transform: "rotate(-180deg)" }
                    : { transform: "rotate(0)" }
                }
                $rotate={id === clickedId ? "true" : "false"}
              >
                <ExpandMoreIcon fontSize="large" />
              </ExpandMoreIconWrap>
            </VatDeclarationPeriodWrap>

            <VatDeclarationItemWrap>
              <VatDeclarationItem
                declarations={item.declarations}
                isClicked={id === clickedId ? "true" : "false"}
                isOpen={isOpenItem}
              />
            </VatDeclarationItemWrap>
          </PeriodItem>
        ))}
      </ul>
    </div>
  );
};

VatDeclarationList.propTypes = {
  allVatDeclarations: PropTypes.array.isRequired,
};

export default VatDeclarationList;
