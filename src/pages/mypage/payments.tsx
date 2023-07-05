import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Taxi } from "../../assets/svg";
import { Layer, SubTitle } from "../../components/MyPage";
import { TestCard } from "../../assets/img";
import { Input } from "../../components/common/input";
import { useForm } from "../../hooks/useForm";

//결제 수단

interface PasswordType {
  middle: string;
  last: string;
}
export const MyPagePayments = () => {
  const { state, onHandleChange } = useForm<PasswordType>({
    middle: "0000",
    last: "0000",
  });
  const [pass, setPass] = useState<boolean>(false);

  return (
    <Layer title="회원정보">
      <_Content>
        <SubTitle label="신용/체크카드">
          <_Card>
            <_ContentTextWrapper>
              <img src={TestCard} />
              010-1234-5678
            </_ContentTextWrapper>

            <_ButtonWrapper>
              <_Button>카드 삭제</_Button>
              <_Button>카드 추가</_Button>
            </_ButtonWrapper>
          </_Card>
        </SubTitle>

        <SubTitle label="휴대폰">
          <_Card>
            <_ContentRow>
              010-
              {pass ? (
                <_Input
                  value={state.middle}
                  onChange={onHandleChange}
                  placeholder=""
                  name="middle"
                />
              ) : (
                state.middle
              )}
              -
              {pass ? (
                <_Input
                  value={state.last}
                  onChange={onHandleChange}
                  placeholder=""
                  name="last"
                />
              ) : (
                state.last
              )}
            </_ContentRow>

            <_ButtonWrapper>
              <_Button onClick={() => setPass(!pass)}>
                {pass ? "번호 수정" : "수정 완료"}
              </_Button>
              <_Button>번호 삭제</_Button>
            </_ButtonWrapper>
          </_Card>
        </SubTitle>
      </_Content>
    </Layer>
  );
};

const _Content = styled.div`
  display: flex;
  gap: 60px;
`;

const _ContentTextWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const _ContentRow = styled.div`
  display: flex;
  gap: 10px;
`;

const _Input = styled.input`
  width: 50px;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  text-align: center;
`;

const _Card = styled.div`
  padding: 30px 25px;
  border-radius: 20px;
  display: flex;
  height: 150px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  background-color: rgba(252, 251, 247, 1);
`;

const _ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
const _Button = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 600;
  padding: 0 50px;
  border-radius: 20px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.main};
  cursor: pointer;
`;
