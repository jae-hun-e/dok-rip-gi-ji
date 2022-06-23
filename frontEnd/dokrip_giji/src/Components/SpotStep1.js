import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { ReactComponent as Image } from "../Static/Select house-bro 1.svg";
import SearchBar from "./SearchBar";
import { useSetRecoilState } from "recoil";
import { cursor } from "../Atoms/CursorAtom";

function SpotStep1() {
  const setCursor = useSetRecoilState(cursor);
  const onClick = () => {
    setCursor(true);
  };
  return (
    <>
      <Title>어느곳 근처를 찾아볼까요?</Title>
      <Line />
      <Image width={340} height={200} />
      <Btn variant="contained" onClick={onClick}>
        직접 지도에서 위치 선택
      </Btn>
      <SearchBar />
    </>
  );
}

export default SpotStep1;

const Title = styled.p`
  margin-top: 20px;
  color: black;
  font-size: 20px;
`;

const Line = styled.div`
  color: black;
  width: 100%;
  height: 1px;
`;

const Btn = styled(Button)`
  && {
    width: 292px;
    cursor: pointer;
  }
`;
