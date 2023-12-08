import { useEffect, useRef, useState } from "react";
import { Outlet, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import img from "../../assets/images/company-img2.jpg";
import { getAllCompaniesSelector } from "../../redux/companies/companiesSelectors";
import { getCompanyById } from "../../redux/companies/companiesThunks";
import { getVatDeclarationsByCompany } from "../../redux/vatDeclarations/vatDeclarationsThunks";
import { getAllVatDeclarationsSelector } from "../../redux/vatDeclarations/vatDeclarationsSelectors";
import { getTaxLoad } from "../../utils/taxLoad";
import { getMonthAndYear } from "../../utils/getMonth";
import Container from "../../styles/Container";
import CompanyDataVat from "../CompanyDataVat/CompanyDataVat";
import CompanyDataProfit from "../CompanyDataProfit/CompanyDataProfit";
import CompanyVatDeclarationList from "../CompanyVatDeclarationList/CompanyVatDeclarationList";
import {
  TitleAnimationOverlay,
  ParallelogramOne,
  ParallelogramTwo,
  ParallelogramThree,
  TitleSection,
  TitleTextWrap,
  TitleText,
  TitleImageWrap,
  TitleImage,
  LatestDataSection,
  VatDataWrap,
  ProfitDataWrap,
  MonthData,
  QuarterData,
  DataText,
  DataAmount,
  VatOverlayWrap,
  ProfitOverlayWrap,
  VatOverlay,
  ShowDeclarationsBtn,
} from "./CompanyData.styled";


const CompanyData = () => {
  const { companyId } = useParams();
  const dispatch = useDispatch();
  const [vatOverlayOpen, setVatOverlayOpen] = useState(false);
  const [profitOverlayOpen, setProfitOverlayOpen] = useState(false);
  const itemRef = useRef(null);

  const scrollTo = () => {
    if (itemRef) setTimeout(
        () =>
          itemRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          }),
        2000
      );
    // itemRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
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
        <TitleAnimationOverlay>
          <ParallelogramOne></ParallelogramOne>
          <ParallelogramTwo></ParallelogramTwo>
          <ParallelogramThree></ParallelogramThree>
          <TitleTextWrap>
            {allCompanies.length === 1 && (
              <TitleText>{allCompanies[0].name}</TitleText>
            )}
          </TitleTextWrap>
        </TitleAnimationOverlay>
        {/* <TitleTextWrap>
            {allCompanies.length === 1 && (
              <TitleText>{allCompanies[0].name}</TitleText>
            )}
          </TitleTextWrap> */}
        <TitleImageWrap>
          <TitleImage src={img} alt="company image" />
        </TitleImageWrap>
      </TitleSection>

      <LatestDataSection>
        <VatDataWrap
          onMouseOver={() => setVatOverlayOpen(true)}
          onMouseOut={() => setVatOverlayOpen(false)}
        >
          <CompanyDataVat allVatDeclarations={allVatDeclarations} />
          <VatOverlayWrap>
            <AnimatePresence>
              {vatOverlayOpen && (
                <VatOverlay
                  initial={{ y: "100%" }}
                  animate={{ y: "0" }}
                  exit={{ y: "100%" }}
                  transition={{
                    y: { type: "auto" },
                    delay: 0.2,
                  }}
                >
                  <ShowDeclarationsBtn
                    to={`/company/${companyId}/vat`}
                    onClick={scrollTo}
                  >
                    Show VAT declarations
                  </ShowDeclarationsBtn>
                </VatOverlay>
              )}
            </AnimatePresence>
          </VatOverlayWrap>

          <MonthData>
            <DataText>latest Month data</DataText>
            <DataAmount>
              {allVatDeclarations.length > 1 && getMonthAndYear(allVatDeclarations[0].period)}
            </DataAmount>
          </MonthData>
        </VatDataWrap>

        <ProfitDataWrap
          onMouseOver={() => setProfitOverlayOpen(true)}
          onMouseOut={() => setProfitOverlayOpen(false)}
        >
          <CompanyDataProfit allVatDeclarations={allVatDeclarations} />
          <ProfitOverlayWrap>
            <AnimatePresence>
              {profitOverlayOpen && (
                <VatOverlay
                  initial={{ y: "-100%" }}
                  animate={{ y: "0" }}
                  exit={{ y: "-100%" }}
                  transition={{
                    y: { type: "auto" },
                    delay: 0.2,
                  }}
                >
                  <ShowDeclarationsBtn
                    to={`/company/${companyId}/profit`}
                    onClick={scrollTo}
                  >
                    Show Profit declarations
                  </ShowDeclarationsBtn>
                </VatOverlay>
              )}
            </AnimatePresence>
          </ProfitOverlayWrap>
          <QuarterData>
            <DataText>latest Quarter data</DataText>
            <DataAmount>
              {getMonthAndYear(allVatDeclarations[0].period)}
            </DataAmount>
          </QuarterData>
        </ProfitDataWrap>
      </LatestDataSection>

      {/* <section ref={itemRef}>
          <Container> */}

      {/* <CompanyVatDeclarationList
              allVatDeclarations={allVatDeclarations}
            /> */}
      {/* </Container>
        </section> */}

      <Outlet />
    </div>
  );
}

export default CompanyData;