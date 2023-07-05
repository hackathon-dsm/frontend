import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Taxi } from "../assets/svg";

export const MainPage = () => {
  return (
    <Container>
      {/* header */}
      <_LogoWrapper> 
        <Taxi /> Texier
      </_LogoWrapper>
     

    </Container>
  );
};


const _LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-size: 50px;
  font-weight: 700;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 50px 20px 0 50px;
  gap: 60px;
  
`;
const _Wrapper = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  gap: 72px;
`;


