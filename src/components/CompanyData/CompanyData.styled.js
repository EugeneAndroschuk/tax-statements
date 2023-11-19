import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const TitleAnimationOverlay = styled.div`
  position: relative;
  overflow: hidden;
  width: calc(100% / 2);
`;

export const ParallelogramOne = styled.div`
  @keyframes moveBar {
    100% {
      transform: skew(-40deg) translateY(-1000px);
    }
  }

  transform: skew(-40deg);
  position: absolute;
  left: 100px;
  // z-index: -1;

  width: 20px;
  height: 300px;
  box-shadow: 100px 509px #612271, 20px 300px #612271, -120px 150px #612271;
  animation: moveBar 15s linear infinite;
`;

export const ParallelogramTwo = styled.div`
  @keyframes moveBar {
    100% {
      transform: skew(-40deg) translateY(-1000px);
    }
  }

  transform: skew(-40deg);
  position: absolute;
  left: 100px;
  // z-index: -1;

  width: 20px;
  height: 300px;
  box-shadow: 250px 450px #43174f, -50px 200px #43174f;
  animation: moveBar 30s linear infinite;
`;

export const ParallelogramThree = styled.div`
  @keyframes moveBar {
    100% {
      transform: skew(-40deg) translateY(-1000px);
    }
  }

  transform: skew(-40deg);
  position: absolute;
  left: 100px;
  // z-index: -1;

  width: 20px;
  height: 300px;
  box-shadow: 70px 500px #7b5c83, -100px 200px #7b5c83;
  animation: moveBar 20s linear infinite;
`;

export const TitleSection = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  // align-items: center;

  background-color: black;
  padding: 32px 0px;
`;

export const TitleTextWrap = styled.div`
  position: relative;
  top: 0;
  left: 0;

  // width: calc(100% / 2);
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const TitleText = styled.h1`
max-width: 600px;
font-size: 56px;
font-weight: 700;
color: white;
`;

export const TitleImageWrap = styled.div`
  width: calc(100% / 2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleImage = styled.img`
  width: 500px;
  border-radius: 26px;
`;

export const LatestDataSection = styled.section`
  width: 100%;
  height: 650px;
  display: flex;
  gap: 200px;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const VatDataWrap = styled.div`
  position: relative;
`;

export const ProfitDataWrap = styled.div`
  position: relative;
`;

export const MonthData = styled.div`
  position: absolute;
  top: -100px;
  left: 200px;

  width: 300px;
  height: 200px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: rgba(255, 255, 255, 0.1);
  background-color: rgba(32, 32, 32);
`;

export const DataText = styled.p`
  font-size: 24px;
font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
`;

export const DataAmount = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: white;
`;

export const QuarterData = styled.div`
  position: absolute;
  bottom: -100px;
  right: 200px;

  width: 300px;
  height: 200px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(32, 32, 32);
`;

export const VatOverlay = styled(motion.div)`
  // position: absolute;
  width: 400px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.8);
`;

export const VatOverlayWrap = styled.div`
  position: absolute;
  bottom: 0;
  width: 400px;
  height: 100px;

  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  overflow: hidden;
  // border: 5px solid green;
`;

export const ProfitOverlayWrap = styled.div`
  position: absolute;
  top: 0;
  width: 400px;
  height: 100px;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  overflow: hidden;
  // border: 5px solid green;
`;

export const ShowDeclarationsBtn = styled(Link)`
  position: relative;
  font-size: 26px;
  font-weight: 700;
  color: white;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 8px;
    top: 35px;
    left: 0;
    
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover,
  &:focus {
    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;