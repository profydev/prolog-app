import assert from "assert";
import Axios from "axios";

assert(
  process.env.NEXT_PUBLIC_API_BASE_URL,
  "env variable not set: NEXT_PUBLIC_API_BASE_URL (did you forget to create a .env file from .env.template?)",
);

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});
