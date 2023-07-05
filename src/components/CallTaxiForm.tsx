import { styled } from "styled-components";
import { AddressInput } from "./common/input/Address";
import { ReactNode } from "react";
interface PropsType {
  onSubmit: () => void;
  children: ReactNode;
}

export const CallTaxiForm = ({ onSubmit, children }: PropsType) => {
  return (
    <_Wrapper onSubmit={onSubmit}>
      <_InputWrapper>{children}</_InputWrapper>
      <_Button>콜택시</_Button>
    </_Wrapper>
  );
};

const _Wrapper = styled.form`
  width: 600px;
  border-radius: 20px;
  background-color: rgba(249, 247, 240, 0.5);
  display: flex;
  flex-direction: column;
`;

const _Button = styled.button`
  width: 100%;
  height: 120px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  border: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.main};
`;

const _InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 65px 50px;
`;
