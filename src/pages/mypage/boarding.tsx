import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Taxi } from "../../assets/svg";
import { Layer, SubTitle } from "../../components/MyPage";
import { useQuery } from "@tanstack/react-query";
import { checkCall } from "../../apis/call/user";

//탑승 내역
export const MyPageBoardI = () => {
  const { data } = useQuery(["callcheckinCall"], () => checkCall());
  console.log(data);
  return (
    <Layer title="회원정보">
      <SubTitle label="기모띠">
        {data &&
          data.data.map(({departure,destination,created_at}) => {
            const [first] = created_at.split("T")
            return (
              <_Card>
                <_Text>
                  날짜 <_ContentText>{first}</_ContentText>
                </_Text>
                <_Text>
                  운행 시간 <_ContentText>9:30-9:10</_ContentText>
                </_Text>
                <_Text>
                  출발 <_ContentText>{departure}</_ContentText>
                </_Text>
                <_Text>
                  도착 {" "}
                  <_ContentText>{destination}</_ContentText>
                </_Text>
              </_Card>
            );
          })}
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
