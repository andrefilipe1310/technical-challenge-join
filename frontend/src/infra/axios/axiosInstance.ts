import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
});


export const apiImage = axios.create({
  baseURL: 'https://api.cloudinary.com/v1_1/dlxrqrbby/image',
  timeout: 5000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },

})