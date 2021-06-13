import { setupInterceptorsTo } from "./interceptors";
import axios from "axios";
export default setupInterceptorsTo(
  axios.create({
    baseURL: "http://localhost:3333/api/v1",
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
    },
  })
);
