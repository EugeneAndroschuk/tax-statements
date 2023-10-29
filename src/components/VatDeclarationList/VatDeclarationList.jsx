import { useSelector, useDispatch } from "react-redux";
import { getAllVatDeclarationsSelector } from "../../redux/vatDeclarations/vatDeclarationsSelectors";
import { getAllVatDeclarations } from "../../redux/vatDeclarations/vatDeclarationsThunks";
import { useEffect } from "react";
import { groupDeclarationsByPeriod } from "../../utils/sortDeclarations";
import VatDeclarationItem from "../VatDeclarationItem/VatDeclarationItem";

const VatDeclarationList = () => {
    const dispatch = useDispatch();
    let allVatDeclarationsGrouped = [];

  useEffect(() => {
    dispatch(getAllVatDeclarations());
  }, [dispatch]);

    const { allVatDeclarations } = useSelector(getAllVatDeclarationsSelector);

    if (allVatDeclarations.length) allVatDeclarationsGrouped = groupDeclarationsByPeriod(allVatDeclarations);
    // console.log(allVatDeclarations);

  return (
    <div>
      <h1>Vat Declarations</h1>
      <ul>
        {allVatDeclarationsGrouped.map((item) => (
          <li key={item.period}>
            <div>{item.period}</div>
            <VatDeclarationItem declarations={item.declarations} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VatDeclarationList;
