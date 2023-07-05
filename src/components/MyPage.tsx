import { css, styled } from "styled-components";
import { ReactNode, useState } from "react";
import { Header } from "./common/header";
import { Link } from "react-router-dom";

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
  color: ${({ theme }) => theme.color.white};
  :hover {
    background-color: ${({ theme }) => theme.color.main};
  }
`;

interface LayerType {
  title: string;
  children: ReactNode;
}
const layerObject = {
  회원정보: "member",
  결제수단: "payments",
  탑승내역: "board",
  커뮤니티: "community",
};
const layerList = ["회원정보", "결제수단", "탑승내역", "커뮤니티"] as const;
export const Layer = ({ children, title }: LayerType) => {
  const url = window.location.pathname;
  return (
    <>
      <Header />
      <_LayerWrapper>
        <NavWrapper>
          {layerList.map((text) => (
            <Link to={"/myPage/" + layerObject[text]}>
              <NavButton current={url.includes(layerObject[text])}>
                {text}
              </NavButton>
            </Link>
          ))}
        </NavWrapper>
        <_LayerContentWrapper>
          <_LayerTitle>{title}</_LayerTitle>
          {children}
        </_LayerContentWrapper>
      </_LayerWrapper>
    </>
  );
};

const _LayerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavWrapper = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid #ffd15c;
`;

const NavButton = styled.button<{ current: boolean }>`
  padding: 35px 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 30px;
  font-weight: 300;
  margin: 10px 0;
  color: ${({ theme, current }) => current && theme.color.main};
`;

const _LayerContentWrapper = styled.div`
  padding: 90px 130px;
`;

const _LayerTitle = styled.div`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 90px;
`;

interface ComCardType {
  title: string;
  content: string;
}

export const CommunityCard = ({ title, content }: ComCardType) => {
  const [hide, setHide] = useState<boolean>(true);
  return (
    <_ComWrapper>
      <_ComTitle>{title}</_ComTitle>
      <_ComContent hide={hide}>{content}</_ComContent>
      <_ComReadMore onClick={() => setHide(!hide)}>
        {hide ? "Read more" : "Close"}
      </_ComReadMore>
    </_ComWrapper>
  );
};

const _ComWrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 23px;
`;
const _ComTitle = styled.h3`
  font-size: 30px;
  font-weight: 800;
  margin: 0;
`;
const _ComContent = styled.div<{ hide: boolean }>`
  font-size: 20px;
  font-weight: 300;
  white-space: pre-wrap;
  display: -webkit-box;
  overflow: hidden;
  word-break: keep-all;
  ${({ hide }) =>
    hide &&
    css`
      text-overflow: ellipsis;

      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    `}
`;
const _ComReadMore = styled.div`
  color: ${({ theme }) => theme.color.main};
  font-size: 20px;
  font-weight: 300;
  text-align: end;
`;
