import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL; // ahora apunta al backend en Railway

const api = axios.create({
  baseURL: `${BASE_URL}/api`, // tus endpoints siguen /api
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getSingle = async (endpoint) => {
  try {
    const res = await api.get(endpoint);
    return Array.isArray(res.data) ? res.data[0] : res.data;
  } catch (err) {
    console.error(`Error fetching ${endpoint}:`, err);
    return null;
  }
};

export const saveData = async (endpoint, data, method = "POST") => {
  try {
    const res = await api({
      url: endpoint,
      method: method,
      data,
    });
    return res.data;
  } catch (err) {
    console.error(`Error saving ${endpoint}:`, err);
    throw err;
  }
};

export default api;
