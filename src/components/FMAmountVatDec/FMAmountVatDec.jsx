import { useEffect } from "react";
import PropTypes from "prop-types";
import { useMotionValue, useTransform, animate } from "framer-motion";
import {
  Wrap,
  Text,
  Amount,
} from "./FMAmountVatDec.styled";

const FMAmountVatDec = ({ totalVatDeclarations }) => {

  const counttotalVatDeclarations = useMotionValue(0);
  const roundedtotalVatDeclarations = useTransform(
    counttotalVatDeclarations,
    Math.round
  );

  useEffect(() => {
    const animation = animate(counttotalVatDeclarations, totalVatDeclarations, {
      duration: 3,
    });

    return animation.stop;
  }, [counttotalVatDeclarations, totalVatDeclarations]);

  return (
    <div>
      <Text>
        <Amount>{roundedtotalVatDeclarations}</Amount>Vat Declarations
      </Text>
    </div>
  );
};

FMAmountVatDec.propTypes = {
  totalVatDeclarations: PropTypes.number.isRequired,
  allVatDeclarations: PropTypes.array.isRequired,
};

export default FMAmountVatDec;
