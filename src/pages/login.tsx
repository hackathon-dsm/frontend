import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Taxi } from "../assets/svg";

export const Sign = () => {
  return (
    <Container>
      <_LogoWrapper>
        <Taxi /> Texcer
      </_LogoWrapper>
      <_Wrapper>
        <Title>회원가입</Title>
        <_Content>
          <_InputRow>
            <Input type="text" placeholder="성" />
            <Input type="text" placeholder="이름" />
          </_InputRow>
          <_InputRow>
            <Input type="email" placeholder="이메일" />
            <Button width="120px" onClick={() => console.log("중복확인")}>
              중복확인
            </Button>
          </_InputRow>

          <Input type="password" placeholder="비밀번호" />
        </_Content>

        <_LinkButtonWrapper>
          <Button isSubmit>회원가입</Button>
          <_Text>
            이미 아이디가 있으신가요?
            <Link to="/auth/signUp">
              <_Text isLink>로그인 하기</_Text>
            </Link>
          </_Text>
        </_LinkButtonWrapper>
      </_Wrapper>
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
  align-items: center;
  justify-content: center;
  gap: 60px;
`;
const _Wrapper = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  gap: 72px;
`;

const _Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const _InputRow = styled.div`
  display: flex;
  gap: 10px;
`;

const Title = styled.h1`
  padding-bottom: 24px;
  border-bottom: 2px solid #ffd15c;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  margin: 0;
`;

const Input = styled.input`
  padding-left: 15px;
  padding: 10px;
  width: 100%;
  height: 70px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #f0f4f9;
  outline: none;
  border: none;
  font-size: 17px;
  font-weight: 500;
`;

const Button = styled.button<{ width?: string; isSubmit?: boolean }>`
  padding: 10px;
  width: ${({ width = "100%" }) => width};
  height: 70px;
  background-color: #ffd15c;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: 500;
  ${({ isSubmit }) =>
    isSubmit &&
    css`
      height: 80px;
      font-size: 25px;
      font-weight: 600;
    `};
`;

const _LinkButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

const _Text = styled.span<{ isLink?: boolean }>`
  font-size: 16px;
  font-weight: 400;
  ${({ isLink }) =>
    isLink &&
    css`
      text-decoration: underline;
      color: #ffd15c;
      margin-left: 7px;
    `}
`;
