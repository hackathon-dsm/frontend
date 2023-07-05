import { styled } from "styled-components";
import { UserLocation } from "../assets/svg/UserLocation";

interface PropsTYpe {
  label: string;
}

export const UserMark = ({ label }: PropsTYpe) => {
  return (
    <_Wrapper>
      {label}
      <UserLocation />
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.black};
  gap: 10px;
  justify-content: center;
  font-size: 15px;
  font-weight: 300;
`;
