import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 110px;
  overflow: hidden;
`;

export const WrapAnimation = styled.div`
  display: flex;
//   justify-content: center;
//   align-items: center;
`;

export const List = styled.ul`
display: flex;
justify-content: center;
gap: 50px;
`;

export const Slider = styled.div`
border: 2px solid red;
`;

export const Arrow = styled.div`
width: 24px;
height: 24px;
background-color: yellow;
  cursor: pointer;
`;

export const Bullet = styled.div`
display: "inline-block";
width: 40px;
height: 24px;

background-color: ${props => props.$bg};
  cursor: pointer;
`;

export const Flex = styled.div`
display: flex;
gap: 5px;
`;

export const MotionBox = styled(motion.div)`
width: 100%;
  border: 5px solid green;
  
`;