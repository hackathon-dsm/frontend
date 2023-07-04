import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalCss } from "./global";
import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

export const GlobalStyle = ({ children }: PropsType) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      {children}
    </ThemeProvider>
  );
};
