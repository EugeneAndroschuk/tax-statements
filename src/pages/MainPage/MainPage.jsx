import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompanies } from "../../redux/companies/companiesThunks";
import { getAllCompaniesSelector } from "../../redux/companies/companiesSelectors";
import { getAllVatDeclarations } from "../../redux/vatDeclarations/vatDeclarationsThunks";
import { getAllVatDeclarationsSelector } from "../../redux/vatDeclarations/vatDeclarationsSelectors";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Container from "../../styles/Container";
import ModalPort from "../../shared/components/ModalPort/ModalPort";
import ModalAddCompany from "../../shared/components/ModalAddCompany/ModalAddCompany";
import CompanyList from "../../components/CompanyList/CompanyList";
import VatDeclarationList from "../../components/VatDeclarationList/VatDeclarationList";
import FMAmountCompanies from "../../components/FMAmountCompanies/FMAmountCompanies";
import FMAmountVatDec from "../../components/FMAmountVatDec/FMAmountVatDec";
import { MotionSlider } from "../../components/CompanyListSlider/CompanyListSlider";
import {
  WrapStyled,
  MainPageContainer,
  MainSection,
  // CompanyContainer,
  DeclarationsContainerWrap,
  VatDeclarationsContainer,
  ContainerText,
  ProfitDeclarationsContainer,
  AmountSection,
  Amount,
} from "./MainPage.styled";

const MainPage = () => {
  const [isModalAddCompanyOpen, setIsModalAddCompanyOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCompanies());
    dispatch(getAllVatDeclarations());
  }, [dispatch]);
  
  const { total: totalCompanies} = useSelector(
    getAllCompaniesSelector
  );
  const { total: totalVatDeclarations } = useSelector(
    getAllVatDeclarationsSelector
  );

  const toggleModalAddCompany = () => {
    setIsModalAddCompanyOpen(!isModalAddCompanyOpen);
  }

    return (
      <WrapStyled>
        <Container>
          <MainPageContainer>
            <MainSection>
              <h1>Tax Statements</h1>
              <button
                type="button"
                onClick={() => setIsModalAddCompanyOpen(true)}
              >
                ADD COMPANY
              </button>

              <MotionSlider />

              {/* <motion.div initial={{y: 200, opacity: 0,} } animate={{ y: 0, opacity: 1 }} transition={{delay: 0.3}}>
                <CompanyList />
              </motion.div> */}

              <DeclarationsContainerWrap>
                <VatDeclarationsContainer>
                  <ContainerText>VAT Declarations</ContainerText>
                </VatDeclarationsContainer>

                <ProfitDeclarationsContainer>
                  <ContainerText>Profit Declarations</ContainerText>
                </ProfitDeclarationsContainer>
              </DeclarationsContainerWrap>

              <AmountSection>
                {totalCompanies && (
                  <FMAmountCompanies totalCompanies={totalCompanies} />
                )}

                {totalVatDeclarations && (
                  <FMAmountVatDec totalVatDeclarations={totalVatDeclarations} />
                )}

                <div>
                  <p>
                    <Amount>10</Amount>Profit Declarations
                  </p>
                </div>
              </AmountSection>
            </MainSection>

            {/* <VatDeclarationList /> */}

            {isModalAddCompanyOpen && (
              <ModalPort toggleModal={toggleModalAddCompany}>
                <ModalAddCompany toggleModal={toggleModalAddCompany} />
              </ModalPort>
            )}
          </MainPageContainer>
        </Container>
      </WrapStyled>
    );
}

export default MainPage;