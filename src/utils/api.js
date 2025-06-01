import axios from "axios";

const accessToken = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    accept: "application/json",
    // bütün isteklere erişim tokenını ekler
    Authorization: `Bearer ${accessToken}`,
  },
});

export default api;