
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getAllVatDeclarationsSelector } from "../../redux/vatDeclarations/vatDeclarationsSelectors";
import CompanyVatDeclarationItem from "../CompanyVatDeclarationItem/CompanyVatDeclarationItem";
import Container from "../../styles/Container";
import {
  DeclarationSection,
    SectionTitle,
    TableTitleList,
    TableTitleItem,
  TableTitleName,
  DeclarationsList,
  DeclarationsItem,
} from "./CompanyVatDeclarationList.styled";

const CompanyVatDeclarationList = () => {
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
          <SectionTitle>VAT declarations</SectionTitle>
          <TableTitleList>
            <TableTitleItem>
              <TableTitleName>Month</TableTitleName>
            </TableTitleItem>
            <TableTitleItem>
              <TableTitleName>Sales w/o VAT, UAH</TableTitleName>
            </TableTitleItem>
            <TableTitleItem>
              <TableTitleName>VAT payable, UAH</TableTitleName>
            </TableTitleItem>
            <TableTitleItem>
              <TableTitleName>Tax load, %</TableTitleName>
            </TableTitleItem>
          </TableTitleList>
          <DeclarationsList>
            {allVatDeclarations.map((item) => (
              <DeclarationsItem key={item._id}>
                <CompanyVatDeclarationItem item={item} />
              </DeclarationsItem>
            ))}
          </DeclarationsList>
        </Container>
      </DeclarationSection>
    );
};

export default CompanyVatDeclarationList;