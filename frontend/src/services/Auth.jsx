import axios from "axios";
import { api } from "./Api";

const API = "http://localhost:8000/api/auth/";

// Register of new user
export const register = (email, password1, password2) => {
  return api.post(`${API}registration/`, {
    email,
    password1,
    password2,
  });
};

// Connexion to an existing user
// This function sends a POST request to the login endpoint with the user's email and password.
export const login = async (email, password) => {
  const response = await api.post(`${API}login/`, {
    email,
    password,
  });
  // Store token if present in response
  if (response.data && response.data.access) {
    localStorage.setItem('accessToken', response.data.access);
  }
  return response;
};

// Logout the user
export const logout = () => {
  localStorage.removeItem('accessToken');
  return api.post(`${API}logout/`);
};

// Get token from localStorage
export const getToken = () => {
  return localStorage.getItem('accessToken');
};

// Set up api to include token in headers if present
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
