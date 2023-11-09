import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompaniesSelector } from "../../redux/companies/companiesSelectors";
import { getCompanyById } from "../../redux/companies/companiesThunks";
import { getVatDeclarationsByCompany } from "../../redux/vatDeclarations/vatDeclarationsThunks";
import { getAllVatDeclarationsSelector } from "../../redux/vatDeclarations/vatDeclarationsSelectors";
import { getTaxLoad } from "../../utils/taxLoad";
import { getMonthAndYear } from "../../utils/getMonth";
import Container from "../../styles/Container";
import CompanyDataVat from "../CompanyDataVat/CompanyDataVat";
import {
  TitleSection,
  TitleText,
  LatestDataSection,
  MonthData,
  QuarterData,
  DataText,
  DataAmount,
} from "./CompanyData.styled";


const CompanyData = () => {
  const { companyId } = useParams();
  const dispatch = useDispatch();
  const itemRef = useRef(null);

  const scrollTo = () => {
    itemRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  useEffect(() => {
    dispatch(getCompanyById(companyId));
    dispatch(getVatDeclarationsByCompany(companyId));
  }, [companyId, dispatch]);
    
  const { allCompanies } = useSelector(getAllCompaniesSelector);
  const { allVatDeclarations, total} = useSelector(getAllVatDeclarationsSelector);


    return (
      <div>
        <TitleSection>
          {allCompanies.length > 0 && (
            <TitleText>{allCompanies[0].name}</TitleText>
          )}
        </TitleSection>

        <LatestDataSection>
          <MonthData>
            <DataText>latest Month data</DataText>
            <DataAmount>
              {getMonthAndYear(allVatDeclarations[0].period)}
            </DataAmount>
            <button type="button" onClick={scrollTo}>Show</button>
          </MonthData>

          <QuarterData>
            <DataText>latest Quarter data</DataText>
            <DataAmount>
              {getMonthAndYear(allVatDeclarations[0].period)}
            </DataAmount>
          </QuarterData>
        </LatestDataSection>

        <Container>
          <CompanyDataVat allVatDeclarations={allVatDeclarations} />

          <ul ref={itemRef}>
            {allVatDeclarations.length > 0 &&
              allVatDeclarations.map((item) => (
                <li key={item._id} style={{display: "flex"}}>
                  <p>{item.period}</p>
                  <p>{item.revenue}</p>
                  <p>{item.vatPayable}</p>
                  <p>{getTaxLoad(item.revenue, item.vatPayable)}</p>
                </li>
              ))}
          </ul>
        </Container>
      </div>
    );
}

export default CompanyData;