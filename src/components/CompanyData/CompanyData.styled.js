import styled from "styled-components";
import img from "../../assets/images/comp-bgd/1-6.jpg";

export const TitleSection = styled.div`
  width: 100%;
  height: 360px;
  background-color: blue;
  background-image: url("${img}");
  background-repeat: repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.h1`
font-size: 86px;
font-weight: 700px;
color: rgba(0, 0, 0, 0.7);
`;

export const LatestDataSection = styled.section`
  width: 100%;
  height: 260px;
  display: flex;
  gap: 36px;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const MonthData = styled.div`
  width: 300px;
  height: 200px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
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
  width: 300px;
  height: 200px;
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
`;