import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrap = styled.div`
display: flex;
align-items: center;
`;

export const Text = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-weight: 700;
  color: white;

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    display: block;
  }
`;

export const Amount = styled(motion.span)`
  font-size: 72px;
  font-weight: 700;
  // color: rgb(186, 85, 211);
  color: rgb(252, 107, 3);

  @media screen and (max-width: 1279px) {
    font-size: 48px;
  }
`;
