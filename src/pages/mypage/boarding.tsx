import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Taxi } from "../../assets/svg";
import { Layer, SubTitle } from "../../components/MyPage";

//탑승 내역
export const MyPageBoardI = () => {
  return (
    <Layer title="회원정보">
      <SubTitle label="기모띠">
        <_Card>
          <_Text>
            날짜 <_ContentText>23.7.8</_ContentText>
          </_Text>
          <_Text>
            운행 시간 <_ContentText>9:30-9:10</_ContentText>
          </_Text>
          <_Text>
            출발 <_ContentText>대마고</_ContentText>
          </_Text>
          <_Text>
            도착
            <_ContentText>Kt</_ContentText>
          </_Text>
          <_Text>
            금액
            <_ContentText>8900</_ContentText>
          </_Text>
        </_Card>
      </SubTitle>
    </Layer>
  );
};

const _Card = styled.div`
  padding: 20px 25px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-color: rgba(252, 251, 247, 1);
`;

const _Text = styled.div`
  font-size: 20px;
  font-weight: 300;
`;

const _ContentText = styled.span`
  color: rgba(107, 128, 155, 1);
`;
