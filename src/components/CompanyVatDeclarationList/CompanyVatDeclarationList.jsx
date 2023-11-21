
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAllVatDeclarationsSelector } from "../../redux/vatDeclarations/vatDeclarationsSelectors";
import { getVatDeclarationsByCompany} from "../../redux/vatDeclarations/vatDeclarationsThunks";
import { getDeleteSuccessfulSelector } from "../../redux/vatDeclarations/vatDeclarationsSelectors";
import { getUpdateSuccessfulSelector } from "../../redux/vatDeclarations/vatDeclarationsSelectors";
import { setDeleteSuccessfull } from "../../redux/vatDeclarations/vatDeclarationsSlice";
import { setUpdateSuccessfull } from "../../redux/vatDeclarations/vatDeclarationsSlice";
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
  const dispatch = useDispatch();
  const { companyId } = useParams();
  const [declarations, setDeclarations] = useState([]);
  const itemRef = useRef(null);
  const { allVatDeclarations, total } = useSelector(
    getAllVatDeclarationsSelector
  );
  const deleteSuccess = useSelector(getDeleteSuccessfulSelector);
  const updateSuccess = useSelector(getUpdateSuccessfulSelector);

  useEffect(() => { 
    if (deleteSuccess) {
      dispatch(getVatDeclarationsByCompany(companyId));
      dispatch(setDeleteSuccessfull(false));
    }
  }, [companyId, deleteSuccess, dispatch]);

  useEffect(() => {
    if (updateSuccess) {
      dispatch(getVatDeclarationsByCompany(companyId));
      dispatch(setUpdateSuccessfull(false));
    }
  }, [companyId, dispatch, updateSuccess]);
  
  useEffect(() => {
    setDeclarations(allVatDeclarations);
  }, [allVatDeclarations]);

   

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
            {declarations.map((item) => (
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