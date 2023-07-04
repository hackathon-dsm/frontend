import styled, { css } from "styled-components";
import { ChangeEvent } from "react";

interface PropsType {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password" | "email";
  value: string;
  name: string;
  placeholder: string;
  errorMsg?: string;
}

export const Input = ({
  onChange,
  type = "text",
  value,
  name,
  placeholder,
  errorMsg,
}: PropsType) => {
  return (
    <_Wrapper>
      <_Input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        isError={errorMsg}
      />
      <_Hint>{errorMsg}</_Hint>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const _Input = styled.input<{ isError?: string }>`
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
  ${({ isError }) =>
    isError &&
    css`
      border: 1px solid rgba(255, 0, 0, 1);
    `}
`;

const _Hint = styled.div`
  position: absolute;
  bottom: -10px;
  font-size: 10px;
  left: 12px;
  color: rgba(255, 0, 0, 1);
`;
