import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  headers: {
    "Content-Type": "application/json",
    token: import.meta.env.VITE_SECRET_TOKEN,
  },
});
