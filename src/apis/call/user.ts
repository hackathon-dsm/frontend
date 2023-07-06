import { instance } from "..";

export const getUserId = async () => {
  return await instance.get("");
};

interface CatchCallRequest {
  departure: string;
  destination: string;
}

interface CatchCallResponse {
  departure: string;
  destination: string;
  call_id: number;
}
export const catchCall = async (body: CatchCallRequest) => {
  return await instance.post<CatchCallResponse>("/call", body);
};

interface GetCallResponse {
  call_id: 1;
  departure: "출발지";
  destination: "도착지";
  visitor_id: 1;
  taxi_id: 1;
  created_at: "2023-07-05T18:15:16.011Z";
  updated_at: "2023-07-06T00:02:37.000Z";
  visitor_name: "이름";
  visitor_caution: "장애사항";
  taxi_name: "이름";
  taxi_phone: "전화번호";
}

export const getCall = async (id: number) => {
  return await instance.patch<GetCallResponse>("/call/" + id);
};

interface CheckCallType {
  call_id: 1;
  departure: "출발지";
  destination: "도착지";
  visitor_id: 1;
  taxi_id: null;
  created_at: "2023-07-05T09:15:16.011Z";
  updated_at: "2023-07-05T16:12:52.000Z";
  visitor_name: "이름";
  visitor_caution: "장애사항";
  taxi_name: null;
  taxi_phone: null;
}

export const checkCall = async () => {
  return await instance.get<CheckCallType[]>("/call/my");
};

export type NobodyTaxiesType = {
  call_id: number;
  departure: string;
  destination: string;
  visitor_id: number;
  taxi_id: number | null;
  created_at: string;
  updated_at: string;
  visitor_name: string;
  visitor_caution: string;
  taxi_name: string | null;
  taxi_phone: string | null;
};

export const getNobodyTakeTaxies = async () => {
  return instance.get<NobodyTaxiesType[]>("/call");
};

export const cancleCall = async (id: number) => {
  return await instance.patch("/call/cancel/" + id);
}