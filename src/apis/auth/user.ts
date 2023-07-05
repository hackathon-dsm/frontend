// 유저 api 아직 미완입니다, 택시 api로직 그대로 가져온 상태에요!


import { instance } from "..";

interface TaxiSignInRequest {
  email: string;
  password: string;
}

interface TaxiSignInResponse {
  access_token: string;
  id: number;
}

export const taxiSignIn = async (body: TaxiSignInRequest) => {
  return instance.post<TaxiSignInResponse>("/user/login", body);
};

export interface TaxiSignUpRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
  car_number: string;
}

export const taxiSignUp = async (body: TaxiSignUpRequest) => {
  return await instance.post("/taxi", body);
};


