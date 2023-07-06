import axios, { AxiosError } from "axios";

export const instance = axios.create({ baseURL: "http://13.125.196.148:3000" });

instance.interceptors.request.use(
  async function (config) {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      // @ts-ignore
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return config;
  },
  function () {}
);
