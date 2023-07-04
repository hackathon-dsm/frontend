import { styled } from "styled-components";

export const Main = () => {
  return <_Wrapper>안녕</_Wrapper>;
};

const _Wrapper = styled.div`
  font-size: 100px;
  color: ${({ theme }) => theme.color.white};
`;
