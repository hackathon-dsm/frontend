import { styled } from "styled-components";
import { ReactNode } from "react";

export const DirectionOverlay = () => {
  return <_Wrapper />;
};

const _Wrapper = styled.div`
  border-radius: 100px;
  width: 10px;
  height: 10px;
  background-color: red;
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
