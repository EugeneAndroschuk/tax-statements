
import { useEffect } from "react";
import PropTypes from "prop-types";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Text, Amount } from "./FMAmountCompanies.styled";

const FMAmountCompanies = ({ totalCompanies }) => {
  const counttotalCompanies = useMotionValue(0);
  const roundedtotalCompanies = useTransform(counttotalCompanies, Math.round);

  useEffect(() => {
    const animation = animate(counttotalCompanies, totalCompanies, {
      duration: 3,
    });

    return animation.stop;
  }, [counttotalCompanies, totalCompanies]);

    return (
      <div>
        <Text>
          <Amount>{roundedtotalCompanies}</Amount>Companies
        </Text>
      </div>
    );
};

FMAmountCompanies.propTypes = {
  totalCompanies: PropTypes.number.isRequired,
};

export default FMAmountCompanies;