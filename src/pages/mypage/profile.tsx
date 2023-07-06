import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Taxi } from "../../assets/svg";
import { Layer, SubTitle } from "../../components/MyPage";

// 회원 정보
export const MyPageMenberI = () => {
  return (
    <Layer title="회원정보">
      <SubTitle label="기본 정보">
        <_Card>
          <_Text>이름: 김태완</_Text>
          <_Text>전번: 01073559975</_Text>
          <_Text>이메일: tao7108031@gmail.com</_Text>
        </_Card>
      </SubTitle>
    </Layer>
  );
};

const _Card = styled.div`
  margin-top: 15px;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const _Text = styled.div`
  font-size: 20px;
  font-weight: 300;
`;
