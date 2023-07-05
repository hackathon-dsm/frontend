import React from "react";
import { styled } from "styled-components";
import {} from "react-dom";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./style";
import { Main } from "./pages";
import { SignIn } from "./pages/auth/signin";
import { SignUp } from "./pages/auth/signup";
import { TestPage } from "./pages/test";
import { MainPage } from "./pages/mainpage";
import { Boaring } from "./pages/boaring";
import { MyPageMenberI } from "./pages/mypage/profile";
import { MyPagePayments } from "./pages/mypage/payments";
import { MyPageBoardI } from "./pages/mypage/boarding";
import { DriverSignUp } from "./pages/auth/taxi/signup";
import { Auth } from "./pages/auth";
import { Community } from "./pages/mypage/community";

function App() {
  return (
    <GlobalStyle>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/auth/signup" element={<SignUp />}></Route>
        <Route path="/auth/signin" element={<SignIn />}></Route>
        <Route path="/auth/taxi/signup" element={<DriverSignUp />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/test" element={<TestPage />}></Route>
        <Route path="/test2" element={<MainPage />}></Route>
        <Route path="/boaring" element={<Boaring />}></Route>
        <Route path="/mypage/member" element={<MyPageMenberI />}></Route>
        <Route path="/mypage/payments" element={<MyPagePayments />}></Route>
        <Route path="/mypage/board" element={<MyPageBoardI />}></Route>
        <Route path="/mypage/community" element={<Community />}></Route>
      </Routes>
    </GlobalStyle>
  );
}

export default App;
