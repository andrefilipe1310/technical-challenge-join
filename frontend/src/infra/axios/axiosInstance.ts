import axios from "axios";

// Essa instancia é para conectar com o backend
export const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
});

// Essa instancia é para conectar com o cloudinary
export const apiImage = axios.create({
  baseURL: 'https://api.cloudinary.com/v1_1/dlxrqrbby/image', // por ser um teste o usuario pode ficar exposto porém é melhor no env
  timeout: 5000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },

})