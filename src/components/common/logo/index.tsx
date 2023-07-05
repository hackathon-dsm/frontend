import { styled } from "styled-components";
import { Taxi } from "../../../assets/svg";

export const Logo = () => {
  return (
    <_LogoWrapper>
      <Taxi /> Texier
    </_LogoWrapper>
  );
};
const _LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-size: 50px;
  font-weight: 700;
`;
