import React, { FormEvent, useState } from "react";
import styled, { css } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Taxi } from "../../assets/svg";
import { useForm } from "../../hooks/useForm";
import { useMutation } from "@tanstack/react-query";
import { userSignIn } from "../../apis/auth/user";
import { toast } from "react-toastify";
export const SignIn = () => {
  const { state, onHandleChange } = useForm({
    email: "",
    password: "",
  });
  const navi = useNavigate();
  const { mutate } = useMutation(() => userSignIn(state), {
    onSuccess: ({ data }) => {
      const { access_token, id } = data;
      localStorage.setItem("access_token", access_token);
      navi("/call");
      toast("성공적으로 로그인했습니다.", { type: "success", autoClose: 1000 });
    },
    onError: () =>
      toast("로그인에 실패했습니다.", { type: "error", autoClose: 1000 }),
  });
  return (
    <Container>
      <_LogoWrapper>
        <Taxi /> Texier
      </_LogoWrapper>
      <_Wrapper
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          mutate();
        }}
      >
        <Title>로그인</Title>
        <_Content>
          <_InputRow>
            <Input
              type="email"
              placeholder="이메일"
              value={state.email}
              onChange={onHandleChange}
              name="email"
            />
          </_InputRow>

          <Input
            type="password"
            placeholder="비밀번호"
            value={state.password}
            onChange={onHandleChange}
            name="password"
          />
        </_Content>

        <_LinkButtonWrapper>
          <Button isSubmit>로그인</Button>
          <_Text>
            비밀번호를 잊으셨나요?
            <Link to="/auth/signUp">
              <_Text isLink>회원가입 하기</_Text>
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
const _Wrapper = styled.form`
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
