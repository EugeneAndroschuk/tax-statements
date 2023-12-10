
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getAllVatDeclarationsSelector } from "../../redux/vatDeclarations/vatDeclarationsSelectors";
import { getAllVatDeclarations } from "../../redux/vatDeclarations/vatDeclarationsThunks";
import { useEffect, useState, useRef } from "react";
import { groupDeclarationsByPeriod } from "../../utils/sortDeclarations";
import { getMonthAndYear } from "../../utils/getMonth";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VatDeclarationList from "../VatDeclarationList/VatDeclarationList";
import VatDeclarationItem from "../VatDeclarationItem/VatDeclarationItem";
import {
  Title,
} from "./VatDeclarationAccordion.styled";


const VatDeclarationAccordion = ({ allVatDeclarations }) => {
  let allVatDeclarationsGrouped = [];

  if (allVatDeclarations.length) {
    allVatDeclarationsGrouped = groupDeclarationsByPeriod(allVatDeclarations);
    console.log(allVatDeclarationsGrouped);
  }
    
  return (
    <div>
      <Title>Vat Declarations</Title>

      <ul>
        {allVatDeclarationsGrouped.map((declarationsOfPeriod, id) => (
          <li key={id}>
            <VatDeclarationList declarations={declarationsOfPeriod} />
          </li>
        ))}
      </ul>
    </div>
  );
};

VatDeclarationAccordion.propTypes = {
  allVatDeclarations: PropTypes.array.isRequired,
};

export default VatDeclarationAccordion;
