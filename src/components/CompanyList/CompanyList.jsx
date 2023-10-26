import { useSelector } from "react-redux";
import { getAllCompaniesSelector } from "../../redux/companies/companiesSelectors";
import CompanyItem from "../CompanyItem/CompanyItem";

const CompanyList = () => {
  const {allCompanies} = useSelector(getAllCompaniesSelector);

  return (
    <div>
      <ul>
        {allCompanies && allCompanies.map((company) => (
          <li key={company._id}>
            <CompanyItem company={company} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
