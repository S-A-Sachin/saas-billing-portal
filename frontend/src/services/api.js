import axios from "axios";

const API = axios.create({
  baseURL: "https://saas-billing-portal.onrender.com/api",
});

export default API;