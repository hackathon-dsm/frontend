import React from "react";
import { styled } from "styled-components";
import {} from "react-dom";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./style";
import { Main } from "./pages";
import { Sign } from "./pages/login";

function App() {
  return (
    <GlobalStyle>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/auth/signin" element={<Sign />}></Route>
      </Routes>
    </GlobalStyle>
  );
}

export default App;
