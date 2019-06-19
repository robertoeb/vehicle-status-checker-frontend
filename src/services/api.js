import axios from "axios";

const api = axios.create(
  { baseURL: "http://177.137.154.118:8008" },
  { headers: { "Access-Control-Allow-Origin": "*" } }
);

export default api;
