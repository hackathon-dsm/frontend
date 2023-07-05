import { instance } from "..";

export const taxiSignIn = async () => {
  return instance.post("asf");
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
