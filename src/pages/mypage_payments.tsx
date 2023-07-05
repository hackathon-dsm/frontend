import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Taxi } from "../assets/svg";

//결제 수단
export const MyPagePayments = () => {
  return(
    <div>
      <Container>
      <_LogoWrapper>
        <Taxi /> Texier
      </_LogoWrapper>
      <_LinkButtonWrapper>
        <Button>택시콜</Button>
        <Button>마이페이지</Button>
      </_LinkButtonWrapper>
      </Container>
      <NavWrapper>
        <NavButton>회원정보</NavButton>
        <NavButton>결제 수단</NavButton>
        <NavButton>탑승 내역</NavButton>
      </NavWrapper>

      
    </div>
  )
}


const _Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
  padding: 10px 200px;
`;

const _LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-size: 50px;
  font-weight: 700;
 

`;
const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 50px 20px 0 50px;
  gap: 60px;
  border-bottom: 2px solid #ffd15c;
`;

const Button = styled.button<{ width?: string; isSubmit?: boolean }>`
  padding: 10px;
  width: 200px;
  height: 64px;
  background-color: #ffd15c;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: 500;
  margin-left: 20px;
`;

const _LinkButtonWrapper = styled.div`
  display: inline-;
  flex-direction: row;
  align-items: center;
  gap: 25px;

`;

const NavWrapper = styled.div`
  width: 160px; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  margin-left: 70px;
  border-right: 2px solid #ffd15c;
`;

const NavButton = styled.button`
  width: 100px;
  height: 50px;
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 17px;
  font-weight: 700;
  margin: 10px 0;
`;
