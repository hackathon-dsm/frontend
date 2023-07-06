import { css, styled } from "styled-components";
import { AddressInput } from "./common/input/Address";
import { ReactNode } from "react";
interface PropsType {
  onSubmit: () => void;
  handcap?: string;
  children: ReactNode;
  buttonName?: string;
  isLink?: boolean;
}

export const CallTaxiForm = ({
  onSubmit,
  handcap,
  buttonName,
  children,
  isLink,
}: PropsType) => {
  return (
    <_ButtonWrapper>
      <_Wrapper onSubmit={onSubmit}>
        <_InputWrapper isLink={isLink}>
          {!!handcap && <_HandCap>{handcap}</_HandCap>}
          {children}
        </_InputWrapper>
      </_Wrapper>
      {buttonName && <_Button onClick={onSubmit}>{buttonName}</_Button>}
    </_ButtonWrapper>
  );
};

const _ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const _Wrapper = styled.form<{ isLink?: boolean }>`
  width: ${({ isLink }) => (isLink ? 600 : 480)}px;
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

const _InputWrapper = styled.div<{ isLink?: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ isLink }) =>
    isLink
      ? css`
          gap: 20px;
          margin: 40px;
        `
      : css`
          gap: 50px;
          margin: 65px 30px;
          > div {
            margin-left: 30px;
            margin-right: 30px;
          }
        `}
`;

const _HandCap = styled.button`
  padding: 16px 18px;
  border-radius: 20px;
  background-color: rgba(245, 243, 238, 1);
  width: fit-content;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 300;
  color: rgba(107, 128, 155, 0.5);
`;
