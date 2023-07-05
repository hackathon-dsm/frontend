import { instance } from "..";

interface UserSignInRequest {
  email: string;
  password: string;
}

interface UserSignInResponse {
  access_token: string;
  id: number;
}

export const taxiSignIn = async (body: UserSignInRequest) => {
  return instance.post<UserSignInResponse>("/user/login", body);
};

export interface UserSignUpRequest {
  name: string;
  email: string;
  password: string;
  caution: string;
}

export const taxiSignUp = async (body: UserSignUpRequest) => {
  return await instance.post("/user", body);
};


