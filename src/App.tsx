import React from "react";
import { styled } from "styled-components";
import {} from "react-dom";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./style";
import { Main } from "./pages";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";
import { TestPage } from "./pages/test";


function App() {
  return (
    <GlobalStyle>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/auth/signup" element={<SignUp />}></Route>
        <Route path="/auth/signin" element={<SignIn />}></Route>
        <Route path="/test" element={<TestPage />}></Route>

      </Routes>
    </GlobalStyle>
  );
}

export default App;
