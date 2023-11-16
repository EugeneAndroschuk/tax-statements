
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getAllVatDeclarationsSelector } from "../../redux/vatDeclarations/vatDeclarationsSelectors";
import Container from "../../styles/Container";
import {
  DeclarationSection,
  SectionTitle,
  DeclarationsList,
  DeclarationsItem,
} from "./CompanyProfitDeclarationList.styled";

const CompanyProfitDeclarationList = () => {
    const itemRef = useRef(null);

    const { allVatDeclarations, total } = useSelector(
      getAllVatDeclarationsSelector
    );

    useEffect(() => {
        const scrollTo = () => {
          itemRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        };

        scrollTo();
     }, []);

    return (
      <DeclarationSection ref={itemRef}>
        <Container>
          <SectionTitle>Profit declarations</SectionTitle>
          <DeclarationsList>
            {/* {allVatDeclarations.map((item) => (
              <DeclarationsItem key={item._id}>
                <CompanyVatDeclarationItem item={item} />
              </DeclarationsItem>
            ))} */}
          </DeclarationsList>
        </Container>
      </DeclarationSection>
    );
};

export default CompanyProfitDeclarationList;