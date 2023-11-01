import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCompanies } from "../../redux/companies/companiesThunks";
import Container from "../../styles/Container";
import ModalPort from "../../shared/components/ModalPort/ModalPort";
import ModalAddCompany from "../../shared/components/ModalAddCompany/ModalAddCompany";
import CompanyList from "../../components/CompanyList/CompanyList";
import VatDeclarationList from "../../components/VatDeclarationList/VatDeclarationList";
import {
  WrapStyled,
  DeclarationsContainerWrap,
  VatDeclarationsContainer,
  ContainerText,
  ProfitDeclarationsContainer,
} from "./MainPage.styled";

const MainPage = () => {
  const [isModalAddCompanyOpen, setIsModalAddCompanyOpen] = useState(false);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCompanies());
   }, [dispatch]);

  const toggleModalAddCompany = () => {
    setIsModalAddCompanyOpen(!isModalAddCompanyOpen);
  }

  

    return (
      <WrapStyled>
        <Container>
          <h1>Tax Statements</h1>
          <button type="button" onClick={() => setIsModalAddCompanyOpen(true)}>
            ADD COMPANY
          </button>

          <CompanyList />

          <DeclarationsContainerWrap>
            <VatDeclarationsContainer>
              <ContainerText>VAT Declarations</ContainerText>
            </VatDeclarationsContainer>

            <ProfitDeclarationsContainer>
              <ContainerText>Profit Declarations</ContainerText>
            </ProfitDeclarationsContainer>
          </DeclarationsContainerWrap>

          <VatDeclarationList />

          {isModalAddCompanyOpen && (
            <ModalPort toggleModal={toggleModalAddCompany}>
              <ModalAddCompany toggleModal={toggleModalAddCompany} />
            </ModalPort>
          )}
        </Container>
      </WrapStyled>
    );
}

export default MainPage;