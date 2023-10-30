import { useSelector, useDispatch } from "react-redux";
import { getAllVatDeclarationsSelector } from "../../redux/vatDeclarations/vatDeclarationsSelectors";
import { getAllVatDeclarations } from "../../redux/vatDeclarations/vatDeclarationsThunks";
import { useEffect, useState, useRef } from "react";
import { groupDeclarationsByPeriod } from "../../utils/sortDeclarations";
import VatDeclarationItem from "../VatDeclarationItem/VatDeclarationItem";
import { VatDeclarationPeriod, VatDeclarationItemWrap } from "./VatDeclarationList.styled";
import { CSSTransition } from "react-transition-group";


import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const VatDeclarationList = () => {
  const [clicked, setClicked] = useState(null);
  const nodeRefLogin = useRef(null);
  const [shouldOpen, setShouldOpen] = useState(false);

    const dispatch = useDispatch();
    let allVatDeclarationsGrouped = [];

  useEffect(() => {
    dispatch(getAllVatDeclarations());
  }, [dispatch]);

    const { allVatDeclarations } = useSelector(getAllVatDeclarationsSelector);

    if (allVatDeclarations.length) allVatDeclarationsGrouped = groupDeclarationsByPeriod(allVatDeclarations);
  // console.log(allVatDeclarations);
  
  const onOpenAccordion = (id) => {
    if (id === clicked) setClicked(null);
    else setClicked(id);
  }

  return (
    <div>
      <h1>Vat Declarations</h1>
      <ul>
        {allVatDeclarationsGrouped.map((item) => (
          <li key={item.period}>
            <VatDeclarationPeriod onClick={() => onOpenAccordion(item.period)}>
              {item.period}
            </VatDeclarationPeriod>

            <CSSTransition
              nodeRef={nodeRefLogin}
              in={clicked === item.period}
              classNames="fadelogin"
              timeout={600}
                // unmountOnExit
            >
              <VatDeclarationItemWrap ref={nodeRefLogin}>
                <VatDeclarationItem declarations={item.declarations} />
              </VatDeclarationItemWrap>
            </CSSTransition>
          </li>
        ))}
      </ul>

      <h2>MUI Accordion</h2>

      {allVatDeclarationsGrouped.map((item) => (
        <Accordion key={item.period}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id={item.period}
          >
            <VatDeclarationPeriod>{item.period}</VatDeclarationPeriod>
          </AccordionSummary>
          <AccordionDetails>
            <VatDeclarationItemWrap>
              <VatDeclarationItem declarations={item.declarations} />
            </VatDeclarationItemWrap>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default VatDeclarationList;
