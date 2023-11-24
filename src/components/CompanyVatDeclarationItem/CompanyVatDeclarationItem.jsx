
import PropTypes from "prop-types";
import { useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { getTaxLoad } from "../../utils/taxLoad";
import { getMonthAndYear } from "../../utils/getMonth";
import { numberToStringWithDivider } from "../../utils/numberToStringWithDivider";
import { deleteVatDeclaration } from "../../redux/vatDeclarations/vatDeclarationsThunks";
import ModalPort from "../../shared/components/ModalPort/ModalPort";
import ModalAddVat from "../../shared/components/ModalAddVat/ModalAddVat";
import {
  Wrap,
  Value,
  TaxLoadWrap,
  TaxLoadValue,
  BtnWrap,
  Button,
} from "./CompanyVatDeclarationItem.styled";

const CompanyVatDeclarationItem = ({ item }) => {
  const dispatch = useDispatch();
  const [isModalAddVatOpen, setIsModalAddVatOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(false);
  const [ActiveDeleteBtn, setActiveDeleteBtn] = useState(false);
  const [ActiveEditBtn, setActiveEditBtn] = useState(false);

  const toggleModalAddVat = () => {
    setIsModalAddVatOpen(!isModalAddVatOpen);
  };

  const onDeleteItem = () => {
    dispatch(deleteVatDeclaration(item._id));
  }
  
    return (
      <Wrap
        onMouseMove={() => setActiveItem(true)}
        onMouseOut={() => setActiveItem(false)}
      >
        <Value>{getMonthAndYear(item.period)}</Value>
        <Value>{numberToStringWithDivider(item.revenue)}</Value>
        <Value>{numberToStringWithDivider(item.vatPayable)}</Value>
        <TaxLoadWrap>
          <TaxLoadValue>
            {getTaxLoad(item.revenue, item.vatPayable)}
          </TaxLoadValue>
          <BtnWrap>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="30"
              height="30"
              fill={ActiveEditBtn ? "orange" : "#e9e9e9"}
            >
              <path d="M395.247 95.811s2.181-2.18 28.647 24.285c26.473 26.477 24.293 28.656 24.293 28.656L215.534 381.407s2.184-2.18-24.293-28.656c-26.477-26.469-28.656-24.289-28.656-24.289L395.247 95.811zM153.871 337.181 128 416l78.818-25.875s2.181-2.18-24.296-28.647c-26.468-26.477-28.651-24.297-28.651-24.297zM403.971 87.089 421.41 69.64s17.449-17.449 43.922 9.027c26.478 26.469 9.023 43.914 9.023 43.914L456.91 140.03s2.181-2.18-24.284-28.656c-26.475-26.465-28.655-24.285-28.655-24.285z" />
              <path d="M400 242.195V424c0 4.411-3.589 8-8 8H88c-4.411 0-8-3.589-8-8V120c0-4.411 3.589-8 8-8h245.799l48.002-48H88c-30.878 0-56 25.122-56 56v304c0 30.879 25.122 56 56 56h304c30.879 0 56-25.121 56-56V194.195l-48 48z" />
            </svg> */}

            {activeItem && (
              <>
                <Button
                  type="button"
                  onClick={() => toggleModalAddVat()}
                  onMouseMove={() => setActiveEditBtn(true)}
                  onMouseOut={() => setActiveEditBtn(false)}
                >
                  <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill={ActiveEditBtn ? "orange" : "#e9e9e9"}
                  >
                    <path d="M328.7 398.6H155.6c-24.7 0-44.7-20.1-44.7-44.7V180.7c0-24.7 20.1-44.7 44.7-44.7h105.6c11 0 20 9 20 20s-9 20-20 20H155.6c-2.6 0-4.7 2.1-4.7 4.7v173.1c0 2.6 2.1 4.7 4.7 4.7h173.1c2.6 0 4.7-2.1 4.7-4.7V251.2c0-11 9-20 20-20s20 9 20 20v102.7c0 24.6-20 44.7-44.7 44.7z" />
                    <path
                      transform="rotate(-133.188 291.081 219.963)"
                      d="M265.7 162h50.9v116h-50.9z"
                    />
                    <path d="m354.8 135.9 24.3 25.9c2.9 3.1 2.8 8-.3 10.9L357 193.2 322 156l21.8-20.5c3.2-2.9 8-2.7 11 .4zM225.3 246.8l34.8 37.1-49.2 11.3z" />
                  </svg>
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="30"
                    height="30"
                    fill={ActiveEditBtn ? "orange" : "#e9e9e9"}
                  >
                    <path d="M395.247 95.811s2.181-2.18 28.647 24.285c26.473 26.477 24.293 28.656 24.293 28.656L215.534 381.407s2.184-2.18-24.293-28.656c-26.477-26.469-28.656-24.289-28.656-24.289L395.247 95.811zM153.871 337.181 128 416l78.818-25.875s2.181-2.18-24.296-28.647c-26.468-26.477-28.651-24.297-28.651-24.297zM403.971 87.089 421.41 69.64s17.449-17.449 43.922 9.027c26.478 26.469 9.023 43.914 9.023 43.914L456.91 140.03s2.181-2.18-24.284-28.656c-26.475-26.465-28.655-24.285-28.655-24.285z" />
                    <path d="M400 242.195V424c0 4.411-3.589 8-8 8H88c-4.411 0-8-3.589-8-8V120c0-4.411 3.589-8 8-8h245.799l48.002-48H88c-30.878 0-56 25.122-56 56v304c0 30.879 25.122 56 56 56h304c30.879 0 56-25.121 56-56V194.195l-48 48z" />
                  </svg> */}
                </Button>
                <Button
                  type="button"
                  onClick={() => onDeleteItem()}
                  onMouseMove={() => setActiveDeleteBtn(true)}
                  onMouseOut={() => setActiveDeleteBtn(false)}
                >
                  <svg
                    viewBox="0 0 25.525 25.525"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill={ActiveDeleteBtn ? "red" : "#e9e9e9"}
                  >
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
                  </svg>
                </Button>
              </>
            )}
          </BtnWrap>
        </TaxLoadWrap>

        {isModalAddVatOpen && (
          <ModalPort toggleModal={toggleModalAddVat}>
            <ModalAddVat
              toggleModal={toggleModalAddVat}
              id={item._id}
              period={item.period}
              revenue={item.revenue}
              vatPayable={item.vatPayable}
            />
          </ModalPort>
        )}
      </Wrap>
    );
}

CompanyVatDeclarationItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CompanyVatDeclarationItem;