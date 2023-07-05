import { instance } from "..";

export const getUserId = async () => {
  return await instance.get("");
};
