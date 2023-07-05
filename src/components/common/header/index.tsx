import { styled } from "styled-components";
import { Taxi } from "../../../assets/svg";

export const Header = () => {
  return (
    <Container>
      <_LogoWrapper>
        <Taxi /> Texier
      </_LogoWrapper>
      <_LinkButtonWrapper>
        <Button>택시콜</Button>
        <Button>마이페이지</Button>
      </_LinkButtonWrapper>
    </Container>
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
const Container = styled.header`
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 50px 20px 0 50px;
  gap: 60px;
  border-bottom: 2px solid #ffd15c;
`;

const Button = styled.button<{ width?: string; isSubmit?: boolean }>`
  padding: 10px;
  width: 200px;
  height: 64px;
  background-color: #ffd15c;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: 500;
  margin-left: 20px;
`;

const _LinkButtonWrapper = styled.nav`
  display: inline-;
  flex-direction: row;
  align-items: center;
  gap: 25px;
`;
