import axios from "axios";

const api = axios.create({
  baseURL: "https://oladev-api.herokuapp.com",
});

export default api;
