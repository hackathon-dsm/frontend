import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Sign = () => {
  return <Container>
    <Title>회원가입</Title>
      <div className='name'>
      <Input 
        type="text"
        placeholder="성"
        />
      <Input 
        type="text"
        placeholder="이름"
      />
      </div>
      <Input
        type="email"
        placeholder="이메일"
      />
      <Button className='recheck'
      onClick={() => console.log('중복확인')}>중복확인</Button>
      <Input
        type="password"
        placeholder="비밀번호"
        
      />
      <Button>회원가입</Button>
    </Container>
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &.name{
    display: inline-flex;
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  width: 50px;
  height: 5px;
  border-radius: 10px;
`;

const Button = styled.button`
  padding: 10px;
  width: 120px;
  background-color: #FFD15C;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  &.recheck{
    font-size: 2px;
    text-align: center;
    width: 50px;
    height: 5px;
  }

`;