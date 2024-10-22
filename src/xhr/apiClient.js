import axios from "axios";

const baseURL = "https://randomuser.me/api/?results=30";

export const apiClient = axios.create({
  baseURL,
});
