import { useSelector } from "react-redux";
import { getAllCompaniesSelector } from "../../redux/companies/companiesSelectors";

import CompanyItem from "../CompanyItem/CompanyItem";
import { Wrap, List } from "./CompanyList.styled";

const CompanyList = () => {
  const {allCompanies} = useSelector(getAllCompaniesSelector);

  return (
    <Wrap>
      <List>
        {allCompanies &&
          allCompanies.map((company) => (
            <li key={company._id}>
              <CompanyItem company={company} />
            </li>
          ))}
      </List>
    </Wrap>
  );
};

export default CompanyList;
