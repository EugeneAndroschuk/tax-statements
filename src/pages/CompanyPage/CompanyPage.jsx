import { Outlet } from "react-router";
import { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import ModalPort from "../../shared/components/ModalPort/ModalPort";
import ModalAddVat from "../../shared/components/ModalAddVat/ModalAddVat";
import Container from "../../styles/Container";

const CompanyPage = () => {

     const [isModalAddVatOpen, setIsModalAddVatOpen] = useState(false);

    const toggleModalAddVat = () => {
      setIsModalAddVatOpen(!isModalAddVatOpen);
    };
    return (
      <div>
        <Outlet />
        <button type="button" onClick={() => setIsModalAddVatOpen(true)}>
          ADD VAT DECLARATION
        </button>
        {isModalAddVatOpen && (
          <ModalPort toggleModal={toggleModalAddVat}>
            <ModalAddVat toggleModal={toggleModalAddVat} />
          </ModalPort>
        )}
      </div>
    );
}

export default CompanyPage;