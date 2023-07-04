import styled from "styled-components";
import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

export const Text = ({ children }: PropsType) => {
  return <_Text>{children}</_Text>;
};

const _Text = styled.div``;
