import { instance } from ".";

interface CallRecord {
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
}

export const getAllCallRecords = async (): Promise<CallRecord[]> => {
  const response = await instance.get<CallRecord[]>("/call-records");
  return response.data;
};