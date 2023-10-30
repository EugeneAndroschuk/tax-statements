import { useSelector, useDispatch } from "react-redux";
import { getAllVatDeclarationsSelector } from "../../redux/vatDeclarations/vatDeclarationsSelectors";
import { getAllVatDeclarations } from "../../redux/vatDeclarations/vatDeclarationsThunks";
import { useEffect, useState, useRef } from "react";
import { groupDeclarationsByPeriod } from "../../utils/sortDeclarations";
import { getMonthAndYear } from "../../utils/getMonth";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VatDeclarationItem from "../VatDeclarationItem/VatDeclarationItem";
import {
  PeriodItem,
  VatDeclarationPeriodWrap,
  VatDeclarationPeriod,
  ExpandMoreIconWrap,
  VatDeclarationItemWrap,
} from "./VatDeclarationList.styled";


const VatDeclarationList = () => {
  const [clickedId, setClickedId] = useState(null);
  const [isOpenItem, setIsOpenItem] = useState(false);

    const dispatch = useDispatch();
    let allVatDeclarationsGrouped = [];

  useEffect(() => {
    dispatch(getAllVatDeclarations());
  }, [dispatch]);

    const { allVatDeclarations } = useSelector(getAllVatDeclarationsSelector);

  if (allVatDeclarations.length) allVatDeclarationsGrouped = groupDeclarationsByPeriod(allVatDeclarations);
  
  const onOpenAccordion = (id) => {
    if (id === clickedId) {
      setClickedId(null);
      setIsOpenItem(false);
    }
    else {
      setClickedId(id);
      setIsOpenItem(true);
    }
  }

  return (
    <div>
      <h1>Vat Declarations</h1>

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

export default VatDeclarationList;
