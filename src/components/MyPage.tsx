import { styled } from "styled-components";
import { ReactNode } from "react";

interface PropsType {
  label: string;
  children: ReactNode;
}

export const SubTitle = ({ label, children }: PropsType) => {
  return (
    <_SubTitleWrapper>
      <_SubTitleButton>{label}</_SubTitleButton>
      {children}
    </_SubTitleWrapper>
  );
};
const _SubTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const _SubTitleButton = styled.button`
  width: 400px;
  height: 70px;
  font-size: 25px;
  font-weight: 600;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.main};
  padding-left: 32px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  :hover {
    background-color: ${({ theme }) => theme.color.main};
  }
`;
