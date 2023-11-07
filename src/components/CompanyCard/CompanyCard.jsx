import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompaniesSelector } from "../../redux/companies/companiesSelectors";
import { getCompanyById } from "../../redux/companies/companiesThunks";
import { getVatDeclarationsByCompany } from "../../redux/vatDeclarations/vatDeclarationsThunks";
import { getAllVatDeclarationsSelector } from "../../redux/vatDeclarations/vatDeclarationsSelectors";


const CompanyCard = () => {
    const { companyId } = useParams();
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyById(companyId));
    dispatch(getVatDeclarationsByCompany(companyId));
  }, [companyId, dispatch]);
    
  const { allCompanies } = useSelector(getAllCompaniesSelector);
  const vatDec = useSelector(getAllVatDeclarationsSelector);
  console.log(vatDec);

    return (
      <div>
        <div>{allCompanies.length > 0 && <h1>{allCompanies[0].name}</h1>}</div>
      </div>
    );
}

export default CompanyCard;