import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useSetRecoilState } from "recoil";
import { ReactComponent as Image } from "../Static/Walking around-amico 1.svg";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function SpotDistance() {
  return (
    <>
      <Image width={340} height={200} />
      <Box width={300}>
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Box>
    </>
  );
}

export default SpotDistance;

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
