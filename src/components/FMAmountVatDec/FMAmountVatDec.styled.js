import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrap = styled.div`
display: flex;
align-items: center;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

export const Amount = styled(motion.span)`
  font-size: 72px;
  font-weight: 700;
  color: rgb(186, 85, 211);
`;
