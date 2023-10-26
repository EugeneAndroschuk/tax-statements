import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCompanies } from "../../redux/companies/companiesThunks";
import Container from "../../styles/Container";
import ModalPort from "../../shared/components/ModalPort/ModalPort";
import ModalAddCompany from "../../shared/components/ModalAddCompany/ModalAddCompany";
import ModalAddVat from "../../shared/components/ModalAddVat/ModalAddVat";
import CompanyList from "../../components/CompanyList/CompanyList";

const MainPage = () => {
  const [isModalAddCompanyOpen, setIsModalAddCompanyOpen] = useState(false);
  const [isModalAddVatOpen, setIsModalAddVatOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCompanies());
   }, [dispatch]);

  const toggleModalAddCompany = () => {
    setIsModalAddCompanyOpen(!isModalAddCompanyOpen);
  }

  const toggleModalAddVat = () => {
    setIsModalAddVatOpen(!isModalAddVatOpen);
  };

    return (
      <div>
        <Container>
          <h1>Tax Statements</h1>
          <button type="button" onClick={() => setIsModalAddCompanyOpen(true)}>
            ADD COMPANY
          </button>
          <button type="button" onClick={() => setIsModalAddVatOpen(true)}>
            ADD VAT DECLARATION
          </button>
          <CompanyList />

          {isModalAddCompanyOpen && (
            <ModalPort toggleModal={toggleModalAddCompany}>
              <ModalAddCompany toggleModal={toggleModalAddCompany} />
            </ModalPort>
          )}

          {isModalAddVatOpen && (
            <ModalPort toggleModal={toggleModalAddVat}>
              <ModalAddVat toggleModal={toggleModalAddVat} />
            </ModalPort>
          )}
        </Container>
      </div>
    );
}

export default MainPage;