import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompanies } from "../../redux/companies/companiesThunks";
import { getAllCompaniesSelector } from "../../redux/companies/companiesSelectors";
import { getAllVatDeclarations } from "../../redux/vatDeclarations/vatDeclarationsThunks";
import { getAllVatDeclarationsSelector } from "../../redux/vatDeclarations/vatDeclarationsSelectors";
import { getTotalAmountsVat } from "../../utils/getTotalAmountsVat";
import { getMillionFromSum } from "../../utils/getMillionFromSum";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Container from "../../styles/Container";
import ModalPort from "../../shared/components/ModalPort/ModalPort";
import ModalAddCompany from "../../shared/components/ModalAddCompany/ModalAddCompany";
import CompanyList from "../../components/CompanyList/CompanyList";
import VatDeclarationList from "../../components/VatDeclarationList/VatDeclarationList";
import FMAmountCompanies from "../../components/FMAmountCompanies/FMAmountCompanies";
import FMAmountVatDec from "../../components/FMAmountVatDec/FMAmountVatDec";
import VatDeclarationCard from "../../components/VatTeclarationCard/VatDeclarationCard";
import ProfitDeclarationCard from "../../components/ProfitDeclarationCard/ProfitDeclarationCard";
import { MotionSlider } from "../../components/CompanyListSlider/CompanyListSlider";
import {
  WrapStyled,
  MainPageContainer,
  DeclarationCardSection,
  DeclarationCardTitle,
  // CompanyContainer,
  DeclarationsContainerWrap,
  DeclarationWrap,
  VatDeclarationsContainer,
  ContainerText,
  ProfitDeclarationsContainer,
  AmountSection,
  Amount,
} from "./MainPage.styled";

const MainPage = () => {
  const [isModalAddCompanyOpen, setIsModalAddCompanyOpen] = useState(false);
  const [isShowVatDeclarationsList, setIsShowVatDeclarationsList] = useState(false);
  const itemRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCompanies());
    dispatch(getAllVatDeclarations());
  }, [dispatch]);
  
  const { total: totalCompanies} = useSelector(
    getAllCompaniesSelector
  );
  const { total: totalVatDeclarations, allVatDeclarations } = useSelector(
    getAllVatDeclarationsSelector
  );

  const toggleModalAddCompany = () => {
    setIsModalAddCompanyOpen(!isModalAddCompanyOpen);
  }
  let rev = 0;
  let vat = 0;
  if (allVatDeclarations.length > 0) {
    const { totalRevenue, totalVatPayable } =
      getTotalAmountsVat(allVatDeclarations);

    rev = getMillionFromSum(totalRevenue);
    vat = getMillionFromSum(totalVatPayable);
  }

  

  const showListVat = (bool) => {
    if (bool) setIsShowVatDeclarationsList(true);
  }

  useEffect(() => {
    const scrollTo = () => {
      itemRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    if (isShowVatDeclarationsList) scrollTo();
  }, [isShowVatDeclarationsList]);

  return (
    <WrapStyled>
      <MotionSlider />
      <Container style={{ overflow: "hidden" }}>
        <AmountSection
          initial={{ y: "-100%" }}
          animate={{ y: "0" }}
          transition={{
            y: { type: "spring", stiffness: 50, damping: 7 },
            delay: 0.3,
          }}
        >
          {totalCompanies && (
            <FMAmountCompanies totalCompanies={totalCompanies} />
          )}

          {totalVatDeclarations && (
            <FMAmountVatDec
              totalVatDeclarations={totalVatDeclarations}
              allVatDeclarations={allVatDeclarations}
            />
          )}

          <div>
            <p style={{ color: "white" }}>
              <Amount>10</Amount>Profit Declarations
            </p>
          </div>
        </AmountSection>
        <DeclarationCardSection>
          {/* <motion.div initial={{y: 200, opacity: 0,} } animate={{ y: 0, opacity: 1 }} transition={{delay: 0.3}}>
                <CompanyList />
              </motion.div> */}

          <DeclarationCardTitle>
            Tax Statements
          </DeclarationCardTitle>

          <DeclarationsContainerWrap>
            {totalVatDeclarations && (
              <VatDeclarationCard
                allVatDeclarations={allVatDeclarations}
                showList={showListVat}
              />
            )}

            <ProfitDeclarationCard />
          </DeclarationsContainerWrap>
        </DeclarationCardSection>

        <section ref={itemRef}>
          {isShowVatDeclarationsList && (
            <VatDeclarationList allVatDeclarations={allVatDeclarations} />
          )}
        </section>

        <button
          style={{ position: "absolute", bottom: "100px", right: "10px" }}
          type="button"
          onClick={() => setIsModalAddCompanyOpen(true)}
        >
          ADD COMPANY
        </button>

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