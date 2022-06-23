import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useRecoilState } from "recoil";
import { NextStep } from "../Atoms/SpotAtom";
import SpotStep1 from "./SpotStep1";
import SpotStep2 from "./SpotSetp2";

function SpotChoice() {
  const [Next, setNext] = useRecoilState(NextStep);
  const [nextStep, setNextStep] = useState(0);

  const onClick = () => {
    if (Next === false) setNextStep(nextStep + 1);
    if (nextStep === 2) setNext(true);
  };
  return (
    <Container>
      {nextStep < 1 ? <SpotStep1 /> : <SpotStep2 />}
      <NextBtn onClick={onClick}>
        <p>다음</p>
      </NextBtn>
      {/*{console.log(Next)}*/}
    </Container>
  );
}
export default SpotChoice;

const Container = styled.div`
  position: absolute;
  margin-top: 50px;
  top: 40px;
  left: 40px;
  width: 340px;
  height: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  gap: 10px;
  border-radius: 10px;
`;

const NextBtn = styled(Button)`
  && {
    width: 286px;
    height: 48px;
    border-radius: 30px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 30px;
    z-index: 2;
    :hover {
      background-color: ${(props) => props.theme.bgColor};
    }
    p {
      font-size: 18px;
      color: black;
    }
  }
`;
