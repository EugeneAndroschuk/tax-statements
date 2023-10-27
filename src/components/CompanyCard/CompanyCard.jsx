import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompaniesSelector } from "../../redux/companies/companiesSelectors";
import { getCompanyById } from "../../redux/companies/companiesThunks";


const CompanyCard = () => {
    const { companyId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => { dispatch(getCompanyById(companyId)); }, [companyId, dispatch]);
    
    const { allCompanies } = useSelector(getAllCompaniesSelector);

    return (
      <div>
        <h1>{allCompanies[0].name}</h1>
      </div>
    );
}

export default CompanyCard;