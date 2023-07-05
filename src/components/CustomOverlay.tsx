import { styled } from "styled-components";
import { ReactNode } from "react";

interface DirectionType {
  color?: "red" | "blue";
}

export const DirectionOverlay = ({ color }: DirectionType) => {
  return <_Wrapper color={color} />;
};

const _Wrapper = styled.div<DirectionType>`
  border-radius: 100px;
  width: 10px;
  height: 10px;
  background-color: ${({ theme, color = "red" }) => theme.color[color]};
  box-shadow: 0 0 30px 20px rgba(0, 0, 0, 0.25);
`;

interface ClickType {
  children: ReactNode;
}

export const ClickOverlay = ({ children }: ClickType) => (
  <_ClickOverlay>{children}</_ClickOverlay>
);

const _ClickOverlay = styled.div`
  border-radius: 10px;
  padding: 6px 12px;
  background-color: white;
`;
