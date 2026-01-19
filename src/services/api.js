// src/services/api.js
import axios from "axios";

// 🔹 Base URL según tu .env
// Para local: REACT_APP_API_URL=http://localhost:5000
// Para ngrok: REACT_APP_API_URL=https://tu-subdominio.ngrok-free.dev
const BASE_URL = process.env.REACT_APP_API_URL;

// 🔹 Instancia principal de Axios
const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    "ngrok-skip-browser-warning": "true", // solo si pruebas con ngrok
  },
});

// 🔹 Interceptor para enviar token automáticamente en requests que lo requieran
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 🔹 Función helper para GET de un solo registro (hero, about, etc.)
export const getSingle = async (endpoint) => {
  try {
    const res = await api.get(endpoint);
    // Si devuelve array, retornamos el primer elemento
    return Array.isArray(res.data) ? res.data[0] : res.data;
  } catch (err) {
    console.error(`Error fetching ${endpoint}:`, err);
    return null;
  }
};

// 🔹 Función helper para POST o PUT con datos
export const saveData = async (endpoint, data, method = "POST") => {
  try {
    const res = await api({
      url: endpoint,
      method: method, // "POST" o "PUT"
      data,
    });
    return res.data;
  } catch (err) {
    console.error(`Error saving ${endpoint}:`, err);
    throw err; // Lanzamos para que el frontend lo capture
  }
};

export default api;
