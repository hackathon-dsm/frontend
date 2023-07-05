import { css, styled } from "styled-components";
import { CallTaxiForm } from "../../components/CallTaxiForm";
import { AddressInput } from "../../components/common/input/Address";
import { Logo } from "../../components/common/logo";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Auth = () => {
  const [role, setRole] = useState<boolean>(false);
  return (
    <_Wrapper>
      <_LineWrapper>
        <Logo />
      </_LineWrapper>

      <CallTaxiForm onSubmit={() => {}} isLink>
        <_ButtonWrapper current={role} onClick={() => setRole(false)}>
          <AddressInput
            value=""
            onChange={() => {}}
            label=""
            name=""
            placeholder=""
            isLink="택시기사"
          />
        </_ButtonWrapper>

        <_ButtonWrapper current={!role} onClick={() => setRole(true)}>
          <AddressInput
            value=""
            onChange={() => {}}
            label=""
            name=""
            placeholder=""
            isLink="고객"
          />
        </_ButtonWrapper>
      </CallTaxiForm>
      <Link to={role ? "/auth/signin" : "/auth/taxi/signin"}>
        <_Button>Taxier 시작하기</_Button>
      </Link>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 75px;
  > * {
    width: 480px;
  }
`;
const _Button = styled.button`
  width: 100%;
  height: 80px;
  border-radius: 15px;
  font-weight: 600;
  font-size: 25px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.main};
  cursor: pointer;
`;

const _LineWrapper = styled.div`
  padding-bottom: 70px;
  border-bottom: 2px solid ${({ theme }) => theme.color.main};
`;

const _ButtonWrapper = styled.div<{ current: boolean }>`
  button {
    ${({ theme, current }) =>
      !current &&
      css`
        background-color: ${theme.color.main + "BB"};
        transition: 0.15s;
      `}
  }
  > div {
    cursor: pointer;
  }
`;
