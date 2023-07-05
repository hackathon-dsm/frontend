import axios, { AxiosError } from "axios";

export const instance = axios.create({ baseURL: "http://3.36.100.202:3000" });

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
