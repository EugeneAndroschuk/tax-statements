import styled from "styled-components";
import { motion } from "framer-motion";
import img from "../../assets/images/comp-bgd/comp-bgd12.jpg";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;

//   display: flex;
//   flex-direction: column;
//   align-items: center;

  background-image: url("${img}");
  background-repeat: repeat;
  background-size: cover;
`;

export const WrapAnimation = styled.div`
  display: flex;
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
width: 20px;
height: 10px;
border-radius: 10px;
border: 2px solid white;

background-color: ${props => props.$bg};
  cursor: pointer;
`;

export const Flex = styled.div`
position: absolute;
bottom: 16px;
left: calc((100vw / 2) - 64px);
z-index: 999;
display: flex;

align-items: center;
gap: 5px;
`;

export const MotionBox = styled(motion.div)`
  width: 100%;
  height: 260px;
    // border: 5px solid green;
`;