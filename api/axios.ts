import assert from "assert";
import Axios, { AxiosRequestConfig } from "axios";

assert(
  process.env.NEXT_PUBLIC_API_BASE_URL,
  "env variable not set: NEXT_PUBLIC_API_BASE_URL"
);

assert(
  process.env.NEXT_PUBLIC_API_TOKEN,
  "env variable not set: NEXT_PUBLIC_API_TOKEN"
);

function authRequestInterceptor(config: AxiosRequestConfig) {
  if (!config.headers) {
    config.headers = {};
  }

  // assertion that env variable exists was already done outside the function
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  config.headers.authorization = process.env.NEXT_PUBLIC_API_TOKEN!;
  return config;
}

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
