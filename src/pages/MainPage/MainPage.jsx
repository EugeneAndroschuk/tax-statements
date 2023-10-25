import { useState } from "react";
import Container from "../../styles/Container";
import ModalPort from "../../shared/components/ModalPort/ModalPort";
import ModalAddCompany from "../../shared/components/ModalAddCompany/ModalAddCompany";

const MainPage = () => {
  const [isModalAddCompanyOpen, setIsModalAddCompanyOpen] = useState(false);

  const toggleModalAddCompany = () => {
    setIsModalAddCompanyOpen(!isModalAddCompanyOpen);
  }

    return (
      <div>
        <Container>
          <h1>Tax Statements</h1>
          <button type="button" onClick={() => setIsModalAddCompanyOpen(true)}>
            ADD COMPANY
          </button>
          {isModalAddCompanyOpen && (
            <ModalPort toggleModal={toggleModalAddCompany}>
              <ModalAddCompany toggleModal={toggleModalAddCompany} />
            </ModalPort>
          )}
        </Container>
      </div>
    );
}

export default MainPage;